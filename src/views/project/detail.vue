<template>
  <div class="app-container project-container">
    <h1>{{$route.params.id}}</h1>
    <el-row type="flex" :gutter="15">
      <content-box :span="14" title="项目经理" subTitle="我是子标题">
        <section class="project-info">
            <div class="info-item"><span>项目经理：</span>张XX</div>
            <div class="info-item"><span>创建于：</span>xxxx年xx月</div>
            <div class="info-item"><span>项目类型：</span>研发项目</div>
            <div class="info-item"><span>可见范围：</span>所有人可见</div>
            <div class="info-item"><span>上级项目：</span>研发项目</div>
            <div class="info-item"><span>所属项目集：</span>研发项目</div>
        </section>
        <section class="project-brief">
              <div class="title">项目背景：</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div>
        </section>
      </content-box>
      <content-box :span="10" title="项目成员">
        <div id="chart-pie"></div>
      </content-box>
    </el-row>
    <el-row type="flex">
      <content-box title="项目进度">我是内容</content-box>
    </el-row>
    <el-row type="flex" :gutter="15">
      <content-box :span="12" title="本周工作">我是内容</content-box>
      <content-box :span="12" title="下周计划">我是内容</content-box>
    </el-row>
    <el-row type="flex">
      <content-box title="里程碑">我是内容</content-box>
    </el-row>
    <el-row type="flex">
      <content-box title="问题与风险">我是内容</content-box>
    </el-row>
    <el-row type="flex">
      <content-box>没有标题</content-box>
    </el-row>
  </div>
</template>
<script>
import ContentBox from '@/components/ContentBox'
import Highcharts from 'highcharts'
require('highcharts/highcharts-3d')(Highcharts)

export default {
  data() {
    return {}
  },
  components: {
    ContentBox
  },
  mounted() {
    Highcharts.chart('chart-pie', {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: 'Browser market shares at a specific website, 2014'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },
      series: [
        {
          type: 'pie',
          name: 'Browser share',
          data: [
            ['所内人员', 45.0],
            {
              name: '合作人员',
              y: 12.8,
              sliced: true,
              selected: true
            }
          ]
        }
      ]
    })
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  align-items: stretch;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
  line-height: 2;
  font-size: 16px;
  .info-item:nth-child(odd) {
    width: 40%;
  }
  .info-item:nth-child(even) {
    width: 60%;
  }
}
.project-brief {
  margin-top: 20px;
  border-top: 1px dashed #979797;
  line-height: 1.5;
  .title {
    font-size: 16px;
    line-height: 3;
    color: #333;
  }
}
</style>
