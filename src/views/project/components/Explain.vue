<template>
  <el-col :span="24" class="clearfix">
    <ul class="project-list-status">
      <li>
        <i class="icon-star-full"></i>
        <solt>重点项目</solt>
      </li>
      <li>
        <i class="icon-star-full  icon-danger"></i>
        <solt>有风险</solt>
      </li>
      <li>
        <i class="icon-star-full icon-unfinish"></i>
        <solt>待完成</solt>
      </li>
      <li>
        <i class="icon-star-full icon-finish"></i>
        <solt>已完成</solt>
      </li>
    </ul>
  </el-col>
</template>

<script>
  export default {
    name: 'Explain'
  }
</script>
<style rel="stylesheet/scss" lang="scss" >
  @import 'src/styles/variables.scss';
  .project-list-status{
    list-style-type: none;
    margin: 0;
    float: right;
    padding-bottom: 20px;
    >li{
      float: left;
      color: #666;
      font-size: $font-base;
      margin-left: 10px;
      .icon-star-full{
        color: #FFD004;
      }
      .icon-unfinish{
        color: #2692ff;
      }
      .icon-finish{
        color: #acacac;
      }
      .icon-danger{
        color: #fc557d;
      }
    }
  }
</style>
