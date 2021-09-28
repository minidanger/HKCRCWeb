<template>
  <div>
    <el-col :span="12" id="aside">
      <el-menu style="width: 150%; border-box:0 0 0 0" default-active="2" :default-openeds="1"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose">
        <el-sub-menu index="1" style="width: 120%" class="asideSlot">
          <template #title>
            <i class="el-icon-location"></i>
            <span>监测地点</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><h6>地表入口</h6></el-menu-item>
            <el-menu-item index="1-2"><h6>大楼施工</h6></el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2" class="asideSlot">
          <template #title>
            <i class="el-icon-menu"></i>
            <span>MIX</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1"><h6>45D/20/125PFA+WP+TC30</h6></el-menu-item>
            <el-menu-item index="2-2"><h6>45D/20/125PFA+WP+TC20</h6></el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3" class="asideSlot">
          <template #title>
            <i class="el-icon-document"></i>
            <span>语言</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1"><h6>繁体字</h6></el-menu-item>
            <el-menu-item index="3-2"><h6>简体字</h6></el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4" disabled class="asideSlot">
          <template #title>
            <i class="el-icon-setting"></i>
            <span>张三</span>
          </template>

        </el-sub-menu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.asideSlot{
}

#aside{
}
</style>
