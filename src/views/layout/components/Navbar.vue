<template>
  <el-header class="navbar">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <el-menu :router="true" mode="horizontal" background-color="#333745" text-color="#fff" active-text-color="#fff">
      <!--<breadcrumb class="breadcrumb-container"></breadcrumb>-->
      <el-menu-item index="/project/index">
        {{$t('navbar.management')}}
      </el-menu-item>
      <!-- <el-menu-item index="2">
        {{$t('navbar.version')}}
      </el-menu-item>
      <el-menu-item index="3">
        {{$t('navbar.audit')}}
      </el-menu-item>
      <el-menu-item index="4">
        {{$t('navbar.work')}}
      </el-menu-item> -->
    </el-menu>
    <div class="right-menu">
      <!-- <error-log class="errLog-container right-menu-item"></error-log> -->

      <!-- <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip> -->

      <!-- <lang-select class="international right-menu-item"></lang-select> -->

      <!-- <el-tooltip effect="dark" :content="$t('navbar.theme')" placement="bottom">
        <theme-picker class="theme-switch right-menu-item"></theme-picker>
      </el-tooltip> -->
      <el-input placeholder="请输入内容" suffix-icon="el-icon-search">
      </el-input>
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img v-if="avatar" class="user-avatar" :src="avatar" />
          <i v-else class="icon icon-gerenzhongxin"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{$t('navbar.dashboard')}}
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">{{$t('navbar.logOut')}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
// import LangSelect from '@/components/LangSelect'
import ThemePicker from '@/components/ThemePicker'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    // LangSelect,
    ThemePicker
  },
  computed: {
    ...mapGetters(['sidebar', 'name', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  .hamburger-container {
    padding: 0 10px;
  }
  .el-menu.el-menu--horizontal {
    flex: 1 1 auto;
    border-bottom: 0;
    .el-menu-item {
      font-size: 16px;
      background-color: hsla(100, 100, 100, 0.5);
    }
  } // .breadcrumb-container {
  //   float: left;
  // }
  // .errLog-container {
  //   display: inline-block;
  //   vertical-align: top;
  // }
  .right-menu {
    display: flex;
    align-items: center;
    .el-input {
      overflow: hidden;
      border-radius: 20px;
    }
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    // .screenfull {
    //   height: 20px;
    // }
    // .international {
    //   vertical-align: top;
    // }
    // .theme-switch {
    //   vertical-align: 15px;
    // }
    .avatar-container {
      height: 50px;
      display: flex;
      align-items: stretch;
      .avatar-wrapper {
        cursor: pointer;
        display: flex;
        align-items: center;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .icon {
          font-size: 20px;
          padding: 10px;
          background-color: #000;
          border-radius: 20px;
        }
      }
    }
  }
}
</style>
