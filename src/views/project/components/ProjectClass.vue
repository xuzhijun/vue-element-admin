<template>
  <el-col :span="24">
    <div class="el-tag-left">
      <el-tag class="project-tag-name" size="mini">
        <slot name="tagname"></slot>
      </el-tag>
    </div>
    <div class="el-tag-right" style="margin-left: 90px;">
      <template v-for="(item,index) in items">
        {{ type }}
        <el-button size="mini" :key="item.id" :type="primary">
          <slot name="item"  :text="item.text"></slot>
        </el-button>
      </template>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'headtest',
  data() {
    return {
    }
  },
  props: {
    items: [
    ],
    type: {
      type: String
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/variables.scss';
  .project-header {
    .el-tag{
      font-size: 14px;
      float: left;
      margin-right: 20px;
      margin-bottom: 20px;
      padding-left: 25px;
      padding-right: 25px;
    }
    .el-tag-left{
      .el-tag{
        &.project-tag-name{
          color: #666;
          padding-left: 0;
          padding-right: 0;
          margin-bottom: 10px;
          border-color: transparent;
          background-color: transparent;
        }
      }
    }
    .el-tag-right{
      .el-tag{
        &:nth-child(1){
          border-color: #4a90e2 !important;
          color: #4a90e2 !important;
        }
      }
    }
  }
</style>


