<template>
  <el-container style="height: 100vh;">
    <el-aside style="background: #e8f0f3;width: 200px;">
      <el-menu router :default-openeds="activeOpeneds">
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>分类管理</template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/category/create">新增分类</el-menu-item>
            <el-menu-item index="/category/list">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
<script>
export default {
  data () {
    return {
      activeOpeneds: ['2']
    }
  }
}
</script>
