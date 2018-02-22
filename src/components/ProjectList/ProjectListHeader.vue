<template>
  <div class="projects-list-header">
    <div class="inline" v-for="(typeName,index) in typeList.typeNames" :key="index">
      <span class="classification-name">{{ typeName | forName(typeName) }}</span>
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
</template>
<script>
import RadioGroupBox from './RadioGroupBox'

export default {
  name: 'projectHeader',
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
      // console.log(this.queryCondition)
      this.$store.dispatch('getAllProducts', this.queryCondition)
    }
  },
  filters: {
    forName: function(value) {
      if (value === 'time') {
        return '时 间:'
      }
      if (value === 'stress') {
        return '重点项目:'
      }
      if (value === 'finishState') {
        return '完成情况:'
      }
      if (value === 'type') {
        return '业务类型:'
      }
    }
  },
  components: {
    RadioGroupBox
  },
  created() {
    this.$store.dispatch('getAllProducts', this.queryCondition)
  },
  methods: {
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
</style>
