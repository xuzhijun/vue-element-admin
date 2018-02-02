<template>
	<el-container>
		<sidebar :class="{mini:!sidebar.opened}"></sidebar>
    <el-container direction="vertical">
      <navbar></navbar>
      <app-main></app-main>
    </el-container>
	</el-container>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/variables.scss";
  .el-container {
    height: 100%;
  }
  .el-aside, .el-header {
    background-color: $dark;
  }
</style>
