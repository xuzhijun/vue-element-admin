<template>
  <el-row>
    <content-box>
      <el-row class="project-header">
        <head-test :items="items">
          <span slot='tagname'>创建时间：</span>
          <span slot="item" slot-scope="props" >
            {{ props.text }}
          </span>
        </head-test>
        <head-test :items="items2">
          <span slot='tagname'>重点项目：</span>
          <span slot="item" slot-scope="props" >
            {{ props.text }}
          </span>
        </head-test>
        <head-test :items="items3">
          <span slot='tagname'>项目进度：</span>
          <span slot="item" slot-scope="props" >
            {{ props.text }}
          </span>
        </head-test>
        <head-test :items="items4">
          <span slot='tagname'>项目类型：</span>
          <span slot="item" slot-scope="props" >
            {{ props.text }}
          </span>
        </head-test>
      </el-row>
      <el-row class="project-list-content">
        <el-co1 :span="24" class="clearfix">
          <ul class="project-list-status">
            <li>重点项目</li>
            <li>有风险</li>
            <li>待完成</li>
            <li>已完成</li>
          </ul>
        </el-co1>
        <div class="list-mid-title">项目历史列表</div>
        <el-col :span="12">
          <h1 class="title"><span class="title-bg bg-blue"><span class="text-span">技术</span></span></h1>
          <div style="padding-top: 2px;">
            <el-row :gutter="20" class="project-list icon-star-full unfinish-bg">
              <el-col :span="12" class="text-overflow active-unfinished">
                项目名称项目名称项目名称项目名称项目名称项目名称
              </el-col>
              <el-col :span="4" class="text-center">
                Cherry
              </el-col>
              <el-col :span="8" class="text-right">
                2018-12-12
              </el-col>
            </el-row>
            <el-row :gutter="20" class="project-list icon-star-full finish-bg">
              <el-col :span="12" class="text-overflow active-unfinished">
                项目名称项目名称项目名称项目名称项目名称项目名称
              </el-col>
              <el-col :span="4" class="text-center">
                Cherry
              </el-col>
              <el-col :span="8" class="text-right">
                2018-12-12
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <h1 class="title"><span class="title-bg bg-orange"><span class="text-span">业务</span></span></h1>
          </div>
        </el-col>
      </el-row>
    </content-box>
  </el-row>
</template>
<script>
import ContentBox from '@/components/ContentBox'
import HeadTest from './components/ProjectClass'
export default {
  name: 'project',
  data() {
    return {
      items: [
        { id: '001', text: '全部' },
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
      ]
    }
  },
  components: {
    ContentBox,
    HeadTest
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/object-list.scss';
</style>
