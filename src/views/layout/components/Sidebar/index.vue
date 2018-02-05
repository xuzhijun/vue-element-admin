<template>
  <el-aside width="auto">
    <div class="title">项目管理工具</div>
    <user-card></user-card>
    <sidebar-item :routes="sidebar_routers"></sidebar-item>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'
import UserItem from './UserItem'

export default {
  components: { SidebarItem, ScrollBar, 'user-card': UserItem },
  computed: {
    ...mapGetters(['sidebar_routers', 'sidebar'])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import 'src/styles/variables.scss';
.title {
  font-size: 22px;
  color: #cbcdd2;
  height: 60px;
  line-height: 60px;
  text-align: center;
  overflow: hidden;
}
.el-aside {
  .title, .user-card, .nav {
    width: $fullSidebarWidth;
  }
  &.mini {
    .title, .user-card, .nav {
      width: $miniSidebarWidth;
    }
  }
}
.Sidebar-border {
  border: 1px solid $borderBase;
}
</style>
