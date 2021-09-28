<template>
  <div style="padding: 10px">
    <div id="buttons" >
      <el-button size="mini" type="primary" @click="add">新增</el-button>
      <el-button size="mini" type="primary">导入</el-button>
      <el-button size="mini" type="primary">导出</el-button>
    </div>

    <div id="search" >
      <el-input  size="mini" v-model="search" placeholder = "请输入关键字" style="width:60%" clearable></el-input>
      <el-button size="mini" type="primary" style="margin-left: 2px" @click="load">查询</el-button>
    </div>

    <div id="table">
      <el-table
    :data="tableData"
    style="width: 100%"
    stripe
    :row-class-name="tableRowClassName">
      <el-table-column
        prop="docket_no"
        label="石矢单编号"
        width="180"
        sortable="true">
      </el-table-column>
      <el-table-column
          prop="site_name"
          label="地点"
          width="180"
          sortable="true">
      </el-table-column>
      <el-table-column
        prop="truck_number"
        label="车牌号码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="dispatch_time"
        label="离槽时间">
      </el-table-column>
      <el-table-column
        prop="arrival_time"
        label="到场地时间">
      </el-table-column>
      <el-table-column
        prop="this_load"
        label="载量">
      </el-table-column>
      <el-table-column
        prop="cumulated_qty"
        label="总埋槽量">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
      <el-button size="mini" @click="handleEdit(scope.row)" type="text">编辑</el-button>
      <el-popconfirm title="确认删除吗？" @confirm="handleDelete(scope.row.id)">
        <template #reference>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-popconfirm>
    </template>
    </el-table-column>
  </el-table>
    </div>

    <div id="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
    </div>

    <el-dialog title="新增信息" v-model="dialogVisible" width="30%">
      <el-form :model="form"  label-width="120px">
        <el-form-item label="石矢单编号">
          <el-input v-model="form.docket_no" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickName" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="form.sex" label="男">男</el-radio>
          <el-radio v-model="form.sex" label="女">女</el-radio>
          <el-radio v-model="form.sex" label="未知">未知</el-radio>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload action="http://localhost:9090/files/upload" :on-sucess="filesUploadSucces">
            <el-button type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="save">确定</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<style scoped>
#search{
  position: absolute;
  width:50%;
  height: 30px;
  margin-left:0.5%;
  top: 0;
  left: 0;
  overflow: hidden;
  /*background-color: #fff9ea;*/
}
#buttons {
  position: absolute;
  top: 0;  /* 距离上面50像素 */
  left: 48%;
  height: 8%;
  width: 50%;
  overflow-y: hidden; /* 当内容过多时y轴出现滚动条 */
  background-color: #fff9ea;
}
#table {
  position: absolute;
  top: 30px;  /* 距离上面50像素 */
  left: 0;
  margin-left:0.5%;
  height: 78%;
  width: 99.5%;
  overflow-y: hidden; /* 当内容过多时y轴出现滚动条 */
  background-color: #fff9ea;
}

#pagination {
  position: absolute;
  left: 0;
  bottom:0;
  height: 4%;
  width: 100%;
  overflow-y: hidden; /* 当内容过多时y轴出现滚动条 */
}

</style>

<script>

import request from "../utils/request";

export default {
  name: 'BuildTable',
  created(){
    this.load()
  },
  methods: {
    load(){
      request.get("/api/user", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search
        }
      }).then(res => {
        console.log()
        this.tableData = res.data.records
        this.total = res.data.total
      })

    },
    filesUploadSucces(res){
      console.log(res)
    },
    tableRowClassName (id) {
      console.log(id)
    },
    handleEdit(row){
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
    },
    handleDelete(id){
      request.delete("/api/user/"+id).then(res => { //es6语法
        console.log(res)
        if(res.code ==='0' )
        {
          this.$message({
            type: "success",
            message: "更新成功！"
          })
        }else{
          this.$message({
            type: "error",
            message: res.msg
          })
        }
        this.load();
      })
    },
    handleSizeChange(pageSize){
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum){
      this.pageNum = pageNum
      this.load()
    },

    add(){
      this.dialogVisible = true
      this.form = {}
    },
    save(){
      if(this.form.id)
      {
        request.put("/api/user",this.form).then(res => { //es6语法
          console.log(res)
          if(res.code ==='0' )
          {
            this.$message({
              type: "success",
              message: "更新成功！"
            })
          }else{
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load();
          this.dialogVisible = false
        })
      } else {
        request.post("/api/user",this.form).then(res => { //es6语法
          console.log(res)
          if(res.code ==='0' )
          {
            this.$message({
              type: "success",
              message: "添加成功！"
            })
          }else{
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load();
          this.dialogVisible = false
        })
      }
      // 数据交互的API， axios, fetch
    }
  },
  data () {
    return {
      form: {},
      dialogVisible: false,
      search: '',
      total: 10,
      currentPage: 1,
      pageSize: 10,
      tableData: [],
      tableData1: [{
        id: '1',
        username: '王小虎',
        nickName: '小王',
        age: 12,
        sex: '男',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        username: '王小虎',
        nickName: '小王',
        age: 5,
        sex: '男',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '3',
        username: '王小虎',
        nickName: '小王',
        age: 8,
        sex: '男',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '4',
        username: '王小虎',
        nickName: '小王',
        age: 13,
        sex: '男',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>
