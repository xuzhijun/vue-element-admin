<template>
  <div class="app-container project-container">
    <el-row>
      <el-col :span="14">
        <div class="grid-title">项目经理</div>
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="10">
        <div class="grid-title">项目成员</div>
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-title">项目进度</div>
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14">
        <div class="grid-title">本周工作</div>
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="10">
        <div class="grid-title">下周计划</div>
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-title">里程碑</div>
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-title">问题与风险</div>
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "project",
  data() {
    return {};
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.project-container {
  margin: 50px;
  .document-btn {
    float: left;
    margin-left: 50px;
    vertical-align: middle;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
