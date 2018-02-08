<template>
  <div class="app-container project-container">
    <h1>{{$route.params.id}}</h1>
    <el-row type="flex" :gutter="15">
      <content-box :span="14" title="项目经理" subTitle="我是子标题" :tools="{'edit': true}">
        <section class="project-info">
          <div class="info-item">
            <span>项目经理：</span>张XX</div>
          <div class="info-item">
            <span>创建于：</span>xxxx年xx月</div>
          <div class="info-item">
            <span>项目类型：</span>研发项目</div>
          <div class="info-item">
            <span>可见范围：</span>所有人可见</div>
          <div class="info-item">
            <span>上级项目：</span>研发项目</div>
          <div class="info-item">
            <span>所属项目集：</span>研发项目</div>
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
        <el-table :show-header="false" :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="姓名">
          </el-table-column>
          <el-table-column prop="job" label="职位">
          </el-table-column>
          <el-table-column prop="dep" label="部门">
          </el-table-column>
        </el-table>
      </content-box>
    </el-row>
    <el-row type="flex">
      <content-box title="项目进度">
        <progress-table :data="progressData" :spanMethod="spanMethod()"></progress-table>
      </content-box>
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
        <milestone :stones="stones"></milestone>
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
        <operation :list="operations"></operation>
      </content-box>
    </el-row>
  </div>
</template>
<script>
import ContentBox from '@/components/ContentBox'
import Milestone from '@/components/Milestone'
import Operation from '@/components/Operation'
import ProgressTable from '@/components/ProgressTable'
import Highcharts from 'highcharts'
const R = require('ramda')
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
            data: [
              {
                name: '所内人员',
                y: 2
              },
              {
                name: '合作人员',
                y: 4
              }
            ]
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
      },
      stones: [
        {
          id: 1,
          name: '项目原型',
          date: '2017/11/01'
        },
        {
          id: 2,
          name: '项目设计',
          date: '2017/12/01'
        },
        {
          id: 3,
          name: '项目启动',
          date: '2018/01/01',
          type: 'primary'
        },
        {
          id: 4,
          name: '项目开发',
          date: '2018/02/01'
        },
        {
          id: 5,
          name: '项目测试',
          date: '2018/03/01'
        },
        {
          id: 6,
          name: '项目上线',
          date: '2018/04/01'
        }
      ],
      operations: [
        {
          id: 1,
          type: 'success',
          tag: '标签一',
          user: '管理员',
          content: '发布任务',
          date: '25小时前'
        },
        {
          id: 2,
          type: 'success',
          tag: '标签一',
          user: '管理员',
          content: '发布任务',
          date: '25小时前'
        },
        {
          id: 3,
          type: 'success',
          tag: '标签一',
          user: '管理员',
          content: '发布任务',
          date: '25小时前'
        },
        {
          id: 4,
          type: 'success',
          tag: '标签一',
          user: '管理员',
          content: '发布任务',
          date: '25小时前'
        },
        {
          id: 5,
          type: 'success',
          tag: '标签一',
          user: '管理员',
          content: '发布任务',
          date: '25小时前'
        }
      ],
      tableData: [
        {
          name: '王小虎',
          job: '项目经理',
          dep: '前端开发部'
        },
        {
          name: '王小虎',
          job: '项目经理',
          dep: '前端开发部'
        },
        {
          name: '王小虎',
          job: '项目经理',
          dep: '前端开发部'
        },
        {
          name: '王小虎',
          job: '项目经理',
          dep: '前端开发部'
        }
      ],
      progressData: [
        {
          id: '1',
          project: '项目一',
          task: '任务一',
          start: 1,
          end: 5,
          percent: '50%',
          color: 'red'
        },
        {
          id: '2',
          project: '项目一',
          task: '任务二',
          start: 2,
          end: 3,
          percent: '50%',
          color: 'green'
        },
        {
          id: '3',
          project: '项目二',
          task: '任务一',
          start: 3,
          end: 6,
          percent: '50%',
          color: 'pink'
        },
        {
          id: '4',
          project: '项目二',
          task: '任务二',
          start: 2,
          end: 7,
          percent: '50%',
          color: 'tiffany'
        },
        {
          id: '5',
          project: '项目二',
          task: '任务三',
          start: 1,
          end: 5,
          percent: '50%',
          color: 'yellow'
        }
      ]
    }
  },
  components: {
    ContentBox,
    Milestone,
    Operation,
    ProgressTable
  },
  methods: {
    spanMethod() {
      // 需要拿到项目起始行，和任务长度
      const projectSpan = [
        {
          start: 0,
          len: 2
        },
        {
          start: 2,
          len: 3
        }
      ]
      return function({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          // 合并项目行
          const rowObject = R.find(R.propEq('start', rowIndex))(projectSpan)
          if (rowObject) {
            return {
              rowspan: rowObject.len,
              colspan: 1
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        } else if (columnIndex > 1) {
          // 合并任务列
          const _start = row.start + 1
          const _end = row.end + 1
          const _len = row.end - row.start + 1
          if (columnIndex >= _start && columnIndex <= _end) {
            if (columnIndex === _start) {
              return {
                rowspan: 1,
                colspan: _len
              }
            } else {
              return {
                rowspan: 0,
                colspan: 0
              }
            }
          } else {
            return {
              rowspan: 1,
              colspan: 1
            }
          }
        }
      }
    }
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
</style>
