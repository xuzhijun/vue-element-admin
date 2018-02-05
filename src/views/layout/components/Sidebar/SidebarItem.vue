<template>
  <ul class="nav">
    <template>
        <li v-if="!item.hidden || item.children" class="nav-item" v-for="item in routes" :key="item.path">
          <router-link v-if="!item.hidden" class="nav-link" :to="item.path" exact>
            <i v-if="item.meta && item.meta.icon" class="el-icon el-icon-edit" />
            <!-- <i v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></i> -->
            <span v-if="item.meta && item.meta.title" class="nav-text">{{generateTitle(item.meta.title)}}</span>
          </router-link>
          <sidebar-item  class="nest-menu" :routes="item.children"></sidebar-item>
        </li>
    </template>
  </ul>
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
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #8080a2;
  .nav-item {
    &:hover {
      background-color: none;
    }
    height: auto;
    > .nav-link {
      display: flex;
      align-items: center;
      padding: 0 20px;
      line-height: 40px;
      height: 40px;
      overflow: hidden;
      &.router-link-active {
        color: #fff;
      }
      &.router-link-exact-active {
        color: #fff;
      }
      .el-icon {
        width: 20px;
      }
    }
  }
}
.mini {
  .nav-link {
    .nav-text {
      display: none;
    }
  }
  .el-icon {
    font-size: 20px;
  }
}
</style>
