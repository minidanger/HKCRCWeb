<template>
  <div style="padding: 10px">
    <div id="buttons" >
      <el-button size="mini" type="primary" @click="add">新增</el-button>
      <el-button size="mini" type="primary" @click="loadList">重新导入</el-button>
      <el-button size="mini" type="primary" @click="deleteList">清除列表</el-button>
<!--      <el-button @click = "updateCurrentTruck">test</el-button>-->
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
    :row-style="tableRowClassName">
      <el-table-column
          prop="num"
          label="ID"
          width="180"
          sortable="true">
      </el-table-column>
      <el-table-column
        prop="docketno"
        label="序列号"
        width="180"
        sortable="true">
      </el-table-column>
      <el-table-column
          prop="sitename"
          label="地点"
          width="180"
          sortable="true">
      </el-table-column>
      <el-table-column
        prop="trucknumber"
        label="车牌号码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="arrivaltime"
        label="到达时间">
      </el-table-column>
      <el-table-column
        prop="thisload"
        label="载重">
      </el-table-column>
      <el-table-column
        prop="cummulatedqty"
        label="总重">
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
        :page-sizes="[8, 9, 10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
    </div>

    <el-dialog title="新增信息" v-model="dialogVisible" width="30%">
      <el-form :model="form"  label-width="120px">
        <el-form-item label="序列号">
          <el-input v-model="form.docketno" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="地点">
          <el-input v-model="form.sitename" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="地点2">
          <el-input v-model="form.location" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="车牌号码">
          <el-input v-model="form.trucknumber" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="离槽时间">
          <el-input v-model="form.despatchtime" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="到达时间">
          <el-input v-model="form.arrivaltime" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="槽点2">
          <el-input v-model="form.batchname" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="载重">
          <el-input v-model="form.thisload" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="总重">
          <el-input v-model="form.cummulatedqty" style="width: 80%"></el-input>
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
  top: 30px;  /* 距离上面30像素 */
  left: 0;
  margin-left:0.5%;
  height: 78%;/*78%*/
  width: 99.5%;
  overflow-y: hidden; /* 当内容过多时y轴出现滚动条 */
  background-color: #fff9ea;
}

#pagination {
  position: absolute;
  left: 0;
  bottom:4%;
  height: 8%;
  width: 100%;
  overflow-y: hidden; /* 当内容过多时y轴出现滚动条 */
}
/*#table.warning-row{*/
/*  background-color:red;*/
/*}*/

/*#table.sucess-row{*/
/*  background-color:blue;*/
/*}*/


</style>

<script>

import request from "../utils/request";

export default {
  name: 'BuildTable',
  created(){
    this.load()
    this.loadList()
    this.timer = setInterval(() =>{
      this.updateCurrentTruck()
    },1000* 1)
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
    tableRowClassName ({row, rowIndex}) {
      //console.log(row, rowIndex);
      let styleJoson = {};

      if(row.id === this.currentTrcukID ){
        console.log("The Current Truck ID is: "+this.currentTrcukID)
        styleJoson.color = 'blue';
        // styleJoson.background = "#66ccff";
        styleJoson.backgroundColor = "##F1D0FB";
        return styleJoson;
      }else{
        styleJoson.color = 'black';
        // styleJoson.background = "#66ccff";
        styleJoson.backgroundColor = "#ECFEFD";
        return styleJoson;
      }
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
      //this.heightNum = 2;
      this.load()
    },
    handleCurrentChange(pageNum){
      this.currentPage = pageNum
      this.load()
    },

    add(){
      this.dialogVisible = true
      this.form = {}
    },
    updateCurrentTruck(){
      if(this.currentTrcukID==null)this.currentTrcukID=0;
      request.get("/api/user/updateCurrentTruck/"+this.total+"/"+this.currentTrcukID).then(res => { //es6语法
        console.log(res)
        if(res.code ==='0' && res.data.id != null && res.data.id != 0)
        {
          // this.$message({
          //   type: "success",
          //   message: "更新成功！"
          // })
          this.currentPage = Math.ceil(res.data.num/this.pageSize);
          this.currentTrcukID = res.data.num;
        }else if(res.code ==='0') {
          this.currentTrcukID = 0,
          this.$message({
            type: "success",
            message: "第一辆车还未到达！" +this.currentTrcukID
          })
        } else{
          this.$message({
            type: "error",
            message: res.msg +this.currentTrcukID
          })
        }

        this.load();
        this.dialogVisible = false
      })
    },
    loadList(){
      request.post("/api/user/loadlist/"+this.total).then(res => { //es6语法
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
    },

    deleteList(){
      request.delete("/api/user/deletelist/"+this.total).then(res => { //es6语法
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
        this.total = 0;
        this.load();
        this.dialogVisible = false
      })
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
      filename:'',
      dialogVisible: false,
      currentTrcukID: 0,
      search: '',
      total: 1,
      currentPage: 1,
      pageSize: 8,
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
