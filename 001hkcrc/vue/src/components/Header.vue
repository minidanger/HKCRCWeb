<!--suppress ALL -->
<template>
  <div style = "height:100%; line-height:80%; border-bottom: 1px solid red; display:flex">
    <div style="height:100%; width:40%">
      <img src="../assets/img/xhj1.png" alt="" style="height:100%; width:50%">
    </div>

    <div style="flex:1"></div>

    <div style="width: 200px; margin-top:25px">
      <el-dropdown>
      <span class="el-dropdown-link">用户<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click = "$router.push('/login')">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      //pic: require('../../static/img/12.png')
    }
  }
}

</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>