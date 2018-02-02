<template>
  <div class="dashboard-container">
    <div class="mydesk-title">
      <span class="title-ch">快捷入口</span>
      <span class="title-en">Shortcut entrance</span>
    </div>
    <div class="shortcut-main">

    </div>
    <div class="mydesk-title">
      <span class="title-ch">我的文件</span>
      <span class="title-en">Shortcut entrance</span>
    </div>
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
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.mydesk-title {
  padding-left: 20px;
  padding-top:24px;
  padding-bottom: 20px;
  .title-ch{
    font-family:MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight:bolder;
    line-height:26px;
  }
  .title-en{
    font-family: MicrosoftYaHei;
    font-size:14px;
    line-height:26px;
    color: #2A2A2A 100%;
  }
}
.shortcut-main{
  width:100%;
  height:198px;
  margin-left:20px;
  background-color: white;

}
</style>
