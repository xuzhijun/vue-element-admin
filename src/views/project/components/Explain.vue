<template>
  <el-col :span="24" class="clearfix">
    <ul class="project-list-status">
      <li>
        <i class="icon-wujiaoxingkong"></i>
        重点项目
      </li>
      <li>
        <i class="icon-fangkuai icon-danger"></i>
        有风险
      </li>
      <li>
        <i class="icon-fangkuai icon-unfinish"></i>
        待完成
      </li>
      <li>
        <i class="icon-fangkuai icon-finish"></i>
        已完成
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
      .icon-wujiaoxingkong{
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
