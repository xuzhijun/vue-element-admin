<template>
  <div class="projects-list-content" v-loading="getProjectListLoading">
    <explain class='flex-end'></explain>
    <div class="list-box" v-if="getProjectList.technology || getProjectList.service">
      <div class="list-box-min-width">
        <div class="list-mid-title">项目历史列表</div>
        <el-row class="list-bg">
          <el-col :span="12" class="flex-column">
            <project-list projectListName="技术" :projectList="getProjectList.technology" class="left-list"></project-list>
          </el-col>
          <el-col :span="12" class="flex-column">
            <project-list projectListName="业务" :projectList="getProjectList.service" class="right-list"></project-list>
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-else class="text-center">
      没有找到项目！
    </div>
  </div>
</template>
<script>
import ProjectList from '@/components/ProjectList/ProjectList'
import Explain from '@/components/ProjectList/Explain'
import { mapGetters } from 'vuex'

export default {
  name: 'project',
  components: {
    ProjectList,
    Explain
  },
  computed: {
    ...mapGetters(['getProjectList', 'getProjectListLoading'])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/variables.scss';
  .projects-list-content{
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    min-height: 200px;
    .list-box{
      max-width: 100%;
      padding-bottom: 60px;
      overflow: scroll;
      .list-box-min-width{
        position: relative;
        min-width: 650px;
        .list-mid-title{
          position: absolute;
          left: 50%;
          margin-left: -60px;
          margin-top: 21px;
          width: 120px;
          font-size: 20px;
          color: #848484;
          line-height: 62px;
          background-color: #F3F3F3;
          z-index: 1;
        }
        .list-bg{
          background: #fff url(../../assets/images/project-list-bg.jpg) repeat-y center top;
          &:before{
            content:"";
            position: absolute;
            top: 0;
            left: 50%;
            display: block;
            margin-left: -10px;
            height: 80px;
            width: 20px;
            z-index: 0;
            background: #fff;
          }
        }
        .flex-column{
          flex-direction: column;
        }
        .flex-end{
          justify-content: flex-end;
          padding-right: 20px;
        }
      }
    }
  }
</style>
