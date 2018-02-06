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
            <i class="icon-point"></i>
            <div class="stone-date">2018/1/1</div>
          </div>
          <div class="stone-item">
            <div class="stone-name"><span>项目开发项目开发项目开发项目开发项目开发项目开发</span></div>
              <svg class="icon-triangle" width="29px" height="26px" viewBox="0 0 29 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path d="M12.7111456,19.4222912 L4,2 L25,2 L16.2888544,19.4222912 C15.7948759,20.4102482 14.5935298,20.8106969 13.6055728,20.3167184 C13.218518,20.123191 12.904673,19.809346 12.7111456,19.4222912 Z" id="path-1"></path>
                  <filter x="-33.3%" y="-27.0%" width="166.7%" height="175.6%" filterUnits="objectBoundingBox" id="filter-2">
                      <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                      <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                      <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                      <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.263700181 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                  </filter>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Combined-Shape">
                        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                        <use fill="#F0F0F0" fill-rule="evenodd" xlink:href="#path-1"></use>
                        <path stroke="#E8E8E8" stroke-width="1" d="M24.190983,2.5 L4.80901699,2.5 L13.1583592,19.1986844 C13.3035048,19.4889755 13.5388885,19.7243593 13.8291796,19.8695048 C14.5701474,20.2399887 15.4711569,19.9396522 15.8416408,19.1986844 L24.190983,2.5 Z"></path>
                    </g>
                </g>
              </svg>
            <i class="icon-point"></i>
            <div class="stone-date">2018/1/2</div>
          </div>
          <div class="stone-item">
            <div class="stone-name"><span>项目上线</span></div>
            <i class="icon-point"></i>
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
    padding: 0 20px 20px;
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
    box-shadow: rgba(0, 0, 0, 0.26) 0 2px 4px 0;
  }
  .icon-triangle {
    margin-top: -2px;
  }
  .icon-point {
    display: block;
    background-color: rgba(136, 136, 136, 0.92);
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
