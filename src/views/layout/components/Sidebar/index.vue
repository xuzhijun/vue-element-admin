<template>
  <scroll-bar>
    <el-row>
      <el-col :span="24"><div class="scroll-bar-title">项目管理工具</div></el-col>
    </el-row>
    <user-item></user-item>
    <sidebar-item :routes="permission_routers"></sidebar-item>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'
import UserItem from './UserItem'

export default {
  components: { SidebarItem, ScrollBar, UserItem },
  computed: {
    ...mapGetters([
      'sidebar_routers',
      'sidebar'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/variables.scss";
  .scroll-bar-title{
    font-size: 22px;
    color: #CBCDD2;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .Sidebar-border{
    border: 1px solid $borderBase;
  }
  .userItem{
    color: #9B9B9B;
    font-size: 14px;
    line-height: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid $borderBase;
    border-bottom: 1px solid $borderBase;
  }
</style>
