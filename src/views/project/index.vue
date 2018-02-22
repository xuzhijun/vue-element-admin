<template>
  <div class="app-container">
    <h1 class="app-title">项目列表<span>projects list</span></h1>
    <div class="projects-list-min-width">
      <project-list-header></project-list-header>
      <project-list-content></project-list-content>
    </div>
  </div>
</template>
<script>
import ProjectListHeader from '@/components/ProjectList/ProjectListHeader'
import ProjectListContent from '@/components/ProjectList/ProjectListContent'

export default {
  name: 'project',
  components: {
    ProjectListHeader,
    ProjectListContent
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .projects-list-min-width{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.19) 0 2px 4px 0;
  }
</style>
