<template>
  <el-aside width="auto">
    <div class="title">
      <picture>
        <img class="logo" :src="img_Logo" alt="项目管理工具">
        项目管理工具
      </picture>
    </div>
    <user-card></user-card>
    <sidebar-item :routes="sidebar_routers"></sidebar-item>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'
import UserItem from './UserItem'
import img_Logo from '@/assets/images/logo.png'

export default {
  data() {
    return {
      img_Logo
    }
  },
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
  .title{
    .logo{
      width: 30px;
      height: 30px;
      position: relative;
      top: 6px;
    }
  }
  &.mini {
    .title{
      .logo{
        margin: 8px 10px 10px;
        width: 40px;
        height: 40px;
      }
    }
  }
}
.Sidebar-border {
  border: 1px solid $borderBase;
}
</style>
