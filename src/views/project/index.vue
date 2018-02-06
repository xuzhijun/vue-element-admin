<template>
    <content-box class='right-min-width'>
      <el-row class="project-header">
        <head-test :items="items">
          <span slot='tagname'>创建时间：</span>
          <span slot="item" slot-scope="props" >
            {{ props.text }}
          </span>
        </head-test>
      </el-row>
      <el-row class="project-list-content">
        <explain></explain>
        <div class="list-mid-title">项目历史列表</div>
        <el-col :span="12">
          <h1 class="title">
            <span class="title-bg bg-blue">
              <span class="text-span">技术</span>
            </span>
          </h1>
          <project-list :projects="projects.technology" class="left-list"></project-list>
        </el-col>
        <el-col :span="12">
          <h1 class="title">
            <span class="title-bg bg-orange">
              <span class="text-span">业务</span>
            </span>
          </h1>
          <project-list :projects="projects.service" class="right-list"></project-list>
        </el-col>
      </el-row>
    </content-box>
</template>
<script>
import ContentBox from '@/components/ContentBox'
import HeadTest from './components/ProjectClass'
import ProjectList from './components/projectList'
import Explain from './components/Explain'
export default {
  name: 'project',
  data() {
    return {
      items: [
        { id: '001', text: '全部', type: true },
        { id: '002', text: '当前项目' },
        { id: '003', text: '2018' },
        { id: '004', text: '2017' },
        { id: '005', text: '2016' }
      ],
      items2: [
        { id: '001', text: '全部' },
        { id: '002', text: '已完成' },
        { id: '003', text: '未完成' }
      ],
      items3: [
        { id: '001', text: '全部' },
        { id: '002', text: '已完成' },
        { id: '003', text: '未完成' }
      ],
      items4: [
        { id: '001', text: '全部' },
        { id: '002', text: '已完成' },
        { id: '003', text: '未完成' }
      ],
      projects: {
        technology: [
          { title: '4234234', name: 'cherry', date: '1213213', isfull: false, isstate: 'finish' },
          { title: '4234234', name: 'cherry2', date: '1213213', isfull: true, isstate: 'unfinish' },
          { title: '4234234', name: 'cherry2', date: '1213213', isfull: true, isstate: 'danger' }
        ],
        service: [
          { title: '项目名称项目名称', name: 'cherry', date: '1213213', isfull: false, isstate: 'finish' },
          { title: '项目名称项目名称', name: 'cherry2', date: '1213213', isfull: true, isstate: 'unfinish' },
          { title: '项目名称项目名称', name: 'cherry2', date: '1213213', isfull: true, isstate: 'danger' }
        ]
      }
    }
  },
  components: {
    ContentBox,
    HeadTest,
    ProjectList,
    Explain
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/object-list.scss';
</style>
