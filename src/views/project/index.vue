<template>
  <div>
    <h1>项目列表<span>projects list</span></h1>
    <content-box class='right-min-width'>
      <el-row class="project-header">
        <template>
          <div style="margin-top: 20px" class="project-list-header">
            <div>
              <span class="classification-name">时 间:</span>
              <radio-group-box :texts="['全部', '当前项目', '2018', '2017', '2016']" :isNow="'time:'+time" v-on:getClick="getStyle"></radio-group-box>
            </div>
            <div>
              <span class="classification-name">重点项目:</span>
              <radio-group-box :texts="['全部', '是', '否']" :isNow="'stress:'+stress" v-on:getClick="getStyle"></radio-group-box>
            </div>
            <div>
              <span class="classification-name">完成情况:</span>
              <radio-group-box :texts="['全部', '已完成', '未完成']" :isNow="'finishState:'+finishState" v-on:getClick="getStyle"></radio-group-box>
            </div>
            <div>
              <span class="classification-name">业务类型:</span>
              <radio-group-box :texts="['全部', '技术', '业务']" :isNow="'type:'+type" v-on:getClick="getStyle"></radio-group-box>
            </div>
            <el-row class='search-box'>
              <span class="classification-name" style="color:#1E252B">项目名称:</span>
              <el-col :span="12">
                <el-input placeholder="请输入内容" v-model="inputSearch">
                  <i slot="suffix" class="el-input__icon el-icon-search" @click="getSearch()"></i>
                </el-input>
              </el-col>
            </el-row>
          </div>
        </template>
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
  </div>
</template>
<script>
import ContentBox from '@/components/ContentBox'
import ProjectList from './components/projectList'
import Explain from './components/Explain'
import RadioGroupBox from './components/RadioGroupBox'
import { getProjectList } from '@/api/project'

export default {
  name: 'project',
  data() {
    return {
      time: '当前项目',
      stress: '全部',
      finishState: '全部',
      type: '全部',
      search: '',
      inputSearch: '',
      projects: {},
      query: {}
    }
  },
  watch: {
    queryCondition() {
      // computed
    },
    query: function() {
      this.getData()
    }
  },
  components: {
    ContentBox,
    ProjectList,
    Explain,
    RadioGroupBox
  },
  mounted: function() {
    this.$nextTick(function() {
      this.getData()
    })
  },
  methods: {
    getData() {
      // parameter的格式 { time: 'time', stress: 'stress', finishState: 'finishState', type: 'type', search: 'search'}
      const parameter = this.queryCondition
      getProjectList(parameter).then(response => {
        this.projects = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    getSearch() {
      this.search = this.inputSearch
      this.inputSearch = ''
    },
    // child data
    getStyle(data) {
      const style = data.split(':')[0]
      const value = data.split(':')[1]
      if (style === 'time') {
        this.time = value
      }
      if (style === 'stress') {
        this.stress = value
      }
      if (style === 'finishState') {
        this.finishState = value
      }
      if (style === 'type') {
        this.type = value
      }
    }
  },
  computed: {
    queryCondition: function() {
      this.query = {
        time: this.time,
        stress: this.stress,
        finishState: this.finishState,
        type: this.type,
        search: this.search
      }
      return this.query
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/object-list.scss';
  .project-list-header{
    .classification-name{
      float: left;
      padding-right: 20px;
      color: #666;
      font-size: 14px;
      line-height: 22px;
      width: 90px;
      text-align: right;
      // text-align-last: justify;
    }
    .search-box{
      border-top: 1px dotted #ECECEC;
      border-bottom: 1px solid #ECECEC;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
</style>
