<template>
  <div class="dashboard-container">
    <h1 class="app-title">快捷入口
      <span>Shortcut entrance</span>
    </h1>
    <div class="shortcut-main">

    </div>
    <h1 class="app-title">我的文件
      <span>Shortcut entrance</span>
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import adminDashboard from './admin'
// import editorDashboard from './editor'

export default {
  name: 'dashboard',
  // components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters(['roles'])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.shortcut-main {
  width: 100%;
  height: 198px;
  margin-left: 20px;
  background-color: white;
}
</style>
