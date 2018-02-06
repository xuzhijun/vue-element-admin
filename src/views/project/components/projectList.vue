<template>
  <div style="padding-top: 2px;">
    <el-row :gutter="20" v-for="(item,index) in projects" class="project-list" :class="[item.isstate + '-bg', {'icon-star-full' : item.isfull}]">
      <el-col :span="10">
        <div class="text-overflow">{{ item.title }}</div>
      </el-col>
      <el-col :span="4" class="text-center text-overflow">
        {{ item.name }}
      </el-col>
      <el-col :span="10" class="text-right">
        {{ item.date }}
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'projectList',
  data() {
    return {
      state: [
      ]
    }
  },
  props: {
    projects: {
      type: Array
    },
    isfull: {
      type: String,
      default: 'false'
    },
    isstate: {
      type: String,
      default: 'unfinish'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/variables.scss';
  .project-list{
    color: #8e8f8f;
    font-size: $font-base;
    padding: 13px;
    margin-top: 35px;
    margin-left: 25px!important;
    margin-right: 25px!important;
    border-radius: 6px;
    background-color: #f6f6f6;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, .2);
    &.icon-star-full{
      &:before{
        position: absolute;
        color: #FFD004
      }
    }
  }
  // left list style
  .left-list{
    .project-list{
      border-left-width: 23px;
      border-left-style: solid;
      .el-col{
        &:last-child{
          position: relative;
          &:after{
              content:url(../../../assets/images/bg-icon.jpg);
              position: absolute;
              right: -29px;
              top: -10px;
          }
        }
      }
      &.icon-star-full{
        &:before{
          left: -18px;
        }
      }
      &.unfinish-bg{
        border-left-color: #ACACAC ;
      }
      &.danger-bg{
        border-left-color: #FC557D ;
      }
      &.finish-bg{
        border-left-color: #2692FF;
      }
    }
  }
  // right list style
  .right-list{
    .project-list{
      border-right-width: 23px;
      border-right-style: solid;
      .el-col{
        &:first-child{
          position: relative;
          &:before{
              content:url(../../../assets/images/bg-icon.jpg);
              position: absolute;
              left: -30px;
              top: -10px;
              transform: rotateX(145deg) rotateZ(-180deg);
          }
        }
      }
      &.icon-star-full{
        &:before{
          right: -18px;
        }
      }
      &.unfinish-bg{
        border-right-color: #ACACAC ;
      }
      &.danger-bg{
        border-right-color: #FC557D ;
      }
      &.finish-bg{
        border-right-color: #2692FF;
      }
    }
  }
</style>
