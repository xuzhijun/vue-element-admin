<template>
  <div class="app-container project-container">
    <h1>{{$route.params.id}}</h1>
    <el-row :gutter="15">
      <content-box :span="14" title="项目经理" subTitle="我是子标题">我是内容</content-box>
      <content-box :span="10" title="项目成员">我是内容</content-box>
    </el-row>
    <el-row>
      <content-box title="项目进度">我是内容</content-box>
    </el-row>
    <el-row :gutter="15">
      <content-box :span="12" title="本周工作">我是内容</content-box>
      <content-box :span="12" title="下周计划">我是内容</content-box>
    </el-row>
    <el-row>
      <content-box title="里程碑">我是内容</content-box>
    </el-row>
    <el-row>
      <content-box title="问题与风险">我是内容</content-box>
    </el-row>
    <el-row>
      <content-box>没有标题</content-box>
    </el-row>
  </div>
</template>
<script>
import ContentBox from '@/components/ContentBox'
export default {
  data() {
    return {}
  },
  components: {
    ContentBox
  }
}
</script>
