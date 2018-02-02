<template>
  <el-menu mode="vertical" :default-active="$route.path" background-color="#333745" text-color="#fff" active-text-color="#fff">
    <template v-for="item in routes" v-if="!item.hidden">
        <el-menu-item :index="item.path" :key="item.path" style="padding:0;">
          <router-link :to="item.path">
            <i v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></i>
            <span v-if="item.meta&&item.meta.title">{{generateTitle(item.meta.title)}}</span>
          </router-link>
        </el-menu-item>
        <li class="sub-menu" :key="item.name">
          <sidebar-item  class="nest-menu" :routes="item.children"></sidebar-item>
        </li>
    </template>
  </el-menu>
</template>

<script>
import { generateTitle } from '@/utils/i18n'

export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    generateTitle
  }
}
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: 0;
}
.el-menu-item {
  font-size: 14px;
  > a {
    padding: 0 20px;
  }
}
// 重构二级菜单的样式
.sub-menu {
  a {
    margin-left: 20px;
  }
}
</style>
