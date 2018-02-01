<template>
  <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#333745" text-color="#bfcbd9" active-text-color="#409EFF">
  <div class="menu-wrapper">
    <template v-for="(item, index) in routes" v-if="!item.hidden">
      <router-link :to="item.redirect || item.path" :key="item.name">
        <el-menu-item :index="item.redirect || item.path" :class="{'submenu-title-noDropdown':!isNest}">
          <i v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></i>
          <span v-if="item.meta&&item.meta.title">{{index + generateTitle(item.meta.title)}}</span>
        </el-menu-item>
      </router-link>
      <sidebar-item :key="item.path"  class="nest-menu" :routes="item.children"></sidebar-item>
    </template>
  </div>
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
.el-menu.nest-menu {
  padding-left: 20px;
}
</style>
