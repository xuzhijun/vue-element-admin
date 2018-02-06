<template>
  <div class="app-container project-container">
    <h1>{{$route.params.id}}</h1>
    <el-row type="flex" :gutter="15">
      <content-box :span="14" title="项目经理" subTitle="我是子标题" :tools="{'edit': true}">
        <section class="project-info">
            <div class="info-item"><span>项目经理：</span>张XX</div>
            <div class="info-item"><span>创建于：</span>xxxx年xx月</div>
            <div class="info-item"><span>项目类型：</span>研发项目</div>
            <div class="info-item"><span>可见范围：</span>所有人可见</div>
            <div class="info-item"><span>上级项目：</span>研发项目</div>
            <div class="info-item"><span>所属项目集：</span>研发项目</div>
        </section>
        <section class="project-brief article">
              <div class="title">项目背景：</div>
              <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div>
        </section>
      </content-box>
      <content-box :span="10" title="项目成员">
        <div class="chart-con">
        <div id="chart-pie"></div>
        <div id="chart-column"></div>
        </div>
      </content-box>
    </el-row>
    <el-row type="flex">
      <content-box title="项目进度">我是内容</content-box>
    </el-row>
    <el-row type="flex" :gutter="15">
      <content-box title="工作计划">
        <el-row type="flex" :gutter="20">
          <content-box title="本周工作" :headerStyle="{'background-color':'#f3f3f3'}">
            <div class="article">
              <div class="title">标题</div>
              <div class="content">内容</div>
            </div>
          </content-box>
          <content-box title="下周计划" :headerStyle="{'background-color':'#f3f3f3'}">
            <div class="article">
              <div class="title">标题</div>
              <div class="content">内容</div>
            </div>
          </content-box>
        </el-row>
      </content-box>
    </el-row>
    <el-row type="flex">
      <content-box title="里程碑">
        <div class="milestone">
          <div class="stone-item">
            <div class="stone-name"><span>项目启动</span></div>
            <i class="stone-point"></i>
            <div class="stone-date">2018/1/1</div>
          </div>
          <div class="stone-item">
            <div class="stone-name"><span>项目开发项目开发项目开发项目开发项目开发项目开发</span></div>
            <i class="stone-point"></i>
            <div class="stone-date">2018/1/2</div>
          </div>
          <div class="stone-item">
            <div class="stone-name"><span>项目上线</span></div>
            <i class="stone-point"></i>
            <div class="stone-date">2018/1/2</div>
          </div>
        </div>
      </content-box>
    </el-row>
    <el-row type="flex">
      <content-box title="问题与风险">
        <section class="article">
              <div class="title">项目背景：</div>
              <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div>
        </section>
      </content-box>
    </el-row>
    <el-row type="flex">
      <content-box>
          <div class="operation-item" :key="n" v-for="n in 6">
            <el-tag>里程碑</el-tag>
            <span class="item-user">管理员</span>
            <span class="item-content">新建了里程碑：管理工具</span>
            <span class="item-date">23小时前</span>
            </div>
      </content-box>
    </el-row>
  </div>
</template>
<script>
import ContentBox from '@/components/ContentBox'
import Highcharts from 'highcharts'
require('highcharts/highcharts-3d')(Highcharts)

export default {
  data() {
    return {
      optionsPie: {
        chart: {
          type: 'pie',
          width: null,
          height: 200,
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          }
        },
        title: {
          text: null
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 10,
            colors: ['#0f94e4', '#f2f0f0'],
            dataLabels: {
              connectorWidth: 0,
              format: '{point.percentage:.1f} %',
              distance: -10,
              filter: {
                property: 'percentage',
                operator: '>',
                value: 4
              }
            }
          }
        },
        series: [
          {
            type: 'pie',
            name: 'Browser share',
            data: [{ name: '所内人员', y: 2 }, { name: '合作人员', y: 4 }]
          }
        ]
      },
      optionsColumn: {
        chart: {
          type: 'column',
          width: null,
          height: 200,
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          }
        },
        title: {
          text: null
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
          column: {
            depth: 25
          }
        },
        series: [
          {
            name: '图例1',
            data: [29.9, 71.5]
          }
        ]
      }
    }
  },
  components: {
    ContentBox
  },
  mounted() {
    Highcharts.chart('chart-pie', this.optionsPie)
    Highcharts.chart('chart-column', this.optionsColumn)
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
  padding-top: 10px;
  border-top: 1px dashed #979797;
}
.article {
  line-height: 1.5;
  .title {
    font-size: 16px;
    padding-bottom: 10px;
    color: #333;
  }
}
.chart-con {
  display: flex;
  > div {
    width: 50%;
    flex: 1 1 auto;
  }
}
.operation-item {
  padding: 10px 0;
  span {
    padding-left: 10px;
    &.item-date {
      color: #999;
    }
  }
}
.milestone {
  display: flex;
  flex: 0 0 auto;
  .stone-item {
    margin-bottom: 40px;
    padding: 0 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #cecece;
  }
  .stone-name {
    padding: 10px;
    width: 140px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    overflow: hidden;
  }
  .stone-point {
    display: block;
    background-color: rgba(136,136,136,.92);
    width: 22px;
    height: 22px;
    font-size: 0;
    line-height: 0;
    border: 4px solid #d8d8d8;
    border-radius: 14px;
    position: absolute;
    bottom: -11px;
  }
  .stone-date {
    position: absolute;
    bottom: -40px;
  }
}
</style>
