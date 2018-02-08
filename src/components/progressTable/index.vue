<template>
  <div>
    <el-table :data="data" :span-method="spanMethod" border style="width: 100%;">
      <el-table-column prop="project" label="项目">
      </el-table-column>
      <el-table-column prop="task" label="任务">
      </el-table-column>
      <el-table-column prop="m01" label="一月">
      </el-table-column>
      <el-table-column prop="m02" label="二月">
      </el-table-column>
      <el-table-column prop="m03" label="三月">
      </el-table-column>
      <el-table-column prop="m04" label="四月">
      </el-table-column>
      <el-table-column prop="m05" label="五月">
      </el-table-column>
      <el-table-column prop="m06" label="六月">
      </el-table-column>
      <el-table-column prop="m07" label="七月">
      </el-table-column>
      <el-table-column prop="m08" label="八月">
      </el-table-column>
      <el-table-column prop="m09" label="九月">
      </el-table-column>
      <el-table-column prop="m10" label="十月">
      </el-table-column>
      <el-table-column prop="m11" label="十一月">
      </el-table-column>
      <el-table-column prop="m12" label="十二月">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ['data', 'spanMethod'],
  methods: {

  }
}
</script>
