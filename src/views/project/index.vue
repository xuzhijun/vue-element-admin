<template>
  <div class="app-container">
    <h1>项目列表<span>projects list</span></h1>
    <div class="projects-list-min-width">
      <div class="projects-list-header">
        <div class="inline" v-for="(typeName,index) in typeList.typeNames" :key="index">
          <span class="classification-name">{{ typeName | forName(typeName) }}:</span>
          <radio-group-box :texts="getTypeName(typeName)" :isNow="typeName + ':' + typeName" v-on:getClick="getStyle">
          </radio-group-box>
        </div>
        <el-row class="inline search-box">
          <span class="classification-name">项目名称:</span>
          <el-col :span="12">
            <el-input placeholder="请输入内容" v-model="inputSearch">
              <i slot="suffix" class="el-input__icon el-icon-search" @click="getSearch()"></i>
            </el-input>
          </el-col>
        </el-row>
      </div>
      <div class="projects-list-content">
        <explain class='flex-end'></explain>
        <div class="list-box">
          <div class="list-box-min-width">
            <div class="list-mid-title">项目历史列表</div>
            <el-row class="list-bg">
              <el-col :span="12" class="flex-column">
                <project-list projectListName="技术" :projects="projects.technology" class="left-list"></project-list>
              </el-col>
              <el-col :span="12" class="flex-column">
                <project-list projectListName="业务" :projects="projects.service" class="right-list"></project-list>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContentBox from '@/components/ContentBox'
import ProjectList from '@/components/ProjectList/ProjectList'
import Explain from '@/components/ProjectList/Explain'
import RadioGroupBox from '@/components/ProjectList/RadioGroupBox'
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
      query: {},
      typeList: {
        typeNames: ['time', 'stress', 'finishState', 'type'],
        time: ['全部', '当前项目', '2018', '2017', '2016'],
        stress: ['全部', '是', '否'],
        finishState: ['全部', '已完成', '未完成'],
        type: ['全部', '技术', '业务']
      }
    }
  },
  watch: {
    queryCondition() {
      this.getData()
    }
  },
  filters: {
    forName: function(value) {
      if (value === 'time') {
        return '时 间:'
      }
      if (value === 'stress') {
        return '时 间2:'
      }
      if (value === 'finishState') {
        return '时 间3:'
      }
      if (value === 'type') {
        return '时 间4:'
      }
    }
  },
  components: {
    ContentBox,
    ProjectList,
    Explain,
    RadioGroupBox
  },
  mounted: function() {
    this.getData()
  },
  methods: {
    getData() {
      // parameter的格式 { time: 'time', stress: 'stress', finishState: 'finishState', type: 'type', search: 'search'}
      const parameter = this.queryCondition
      getProjectList(parameter).then(response => {
        this.projects = response.data
        // throw Error('message')
      }).catch(err => {
        console.log(err)
        // console.log(err.message)
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
    },
    getTypeName: function(typeName) {
      if (typeName === 'time') {
        return this.typeList.time
      }
      if (typeName === 'stress') {
        return this.typeList.stress
      }
      if (typeName === 'finishState') {
        return this.typeList.finishState
      }
      if (typeName === 'type') {
        return this.typeList.type
      }
    }
  },
  computed: {
    queryCondition: function() {
      return {
        time: this.time,
        stress: this.stress,
        finishState: this.finishState,
        type: this.type,
        search: this.search
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/variables.scss';
  .projects-list-min-width{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.19) 0 2px 4px 0;
    .projects-list-header {
      display: flex;
      padding: 20px 20px 0 20px;
      flex-direction: column;
      .el-tag{
        font-size: $font-base;
      }
      .inline{
        padding-left: 90px;
        position: relative;
        .classification-name{
          position: absolute;
          left: 0;
          top: 0;
          padding-right: 20px;
          width: 90px;
          color: #666;
          font-size: 14px;
          line-height: 22px;
          text-align: right;
          // text-align-last: justify;
        }
        &.search-box{
          padding-top: 15px;
          padding-bottom: 15px;
          padding-left: 110px!important;
          margin-left: -20px;
          margin-right: -20px;
          border-top: 1px dotted #ECECEC;
          border-bottom: 1px solid #ECECEC;
          .classification-name{
            top: 15px;
            margin-left: 20px;
            color: #666;
          }
        }
      }
    }
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
  }
</style>
