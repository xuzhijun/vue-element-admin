<template>
  <div>
    <el-table :data="data" :span-method="spanMethod" border style="width: 100%;">
      <el-table-column prop="project" label="项目">
      </el-table-column>
      <el-table-column prop="task" label="任务">
      </el-table-column>
      <el-table-column prop="m_1" label="一月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_2" label="二月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_3" label="三月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_4" label="四月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_5" label="五月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_6" label="六月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_7" label="七月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_8" label="八月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_9" label="九月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_10" label="十月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_11" label="十一月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="m_12" label="十二月">
        <template slot-scope="scope">
          <div v-if="scope.column.property == 'm_' + scope.row.start" class="bar">
            <div class="progress" :class="scope.row.color" :style="'width:'+scope.row.percent">{{scope.row.percent}}</div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ['data', 'spanMethod']
}
</script>
<style lang="scss" scoped>
@import 'src/styles/variables.scss';
.bar {
  width: 100%;
  height: 20px;
  background-color: #d8d8d8;
  border-radius: 2px;
  .progress {
    height: 20px;
    color: #fff;
    background-color: $light-blue;
    border-radius: 2px;
    text-align: center;
    font-size: $font-small;
    line-height: 20px;
    &.red {
      background-color: $red
    }
    &.pink {
      background-color: $pink
    }
    &.green {
      background-color: $green
    }
    &.tiffany {
      background-color: $tiffany
    }
    &.yellow {
      background-color: $yellow
    }
  }
}
</style>

