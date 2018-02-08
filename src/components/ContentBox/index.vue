<template>
  <el-col :span="span">
    <div class="content-box">
      <header v-if="hasTitle" class="box-header" :style="headerStyle">
        <i v-if="hasIcon" class="el-icon" :class="'el-icon-'+icon"></i>
        <div class="title">{{title}}<span v-if="hasSubTitle" class="sub-title">{{subTitle}}</span></div>
        <div v-if="hasTools" class="tools-box">
          <i v-if="tools.edit" class="el-icon-edit"></i>
        </div>
      </header>
      <div class="box-content" :style="contentStyle">
        <slot></slot>
      </div>
    </div>
  </el-col>
</template>
<script>
export default {
  props: {
    headerStyle: {
      type: Object,
      default: null
    },
    contentStyle: {
      type: Object,
      default: null
    },
    span: {
      type: Number,
      default: 24
    },
    title: {
      type: String
    },
    tools: {
      type: Object,
      default: null
    },
    subTitle: {
      type: String
    },
    icon: {
      type: String,
      default: 'tickets'
    },
    isEdit: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    hasTitle() {
      return this.title && this.title !== ''
    },
    hasSubTitle() {
      return this.subTitle && this.subTitle !== ''
    },
    hasIcon() {
      return this.icon && this.icon !== ''
    },
    hasTools() {
      return this.tools
    }
  }
}
</script>
<style lang="scss">
.content-box {
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.19) 0 2px 4px 0;
  background-color: #fff;
  max-width: 100%;
  .box-header {
    display: flex;
    align-items: center;
    padding: 11px 20px 9px;
    border-bottom: 1px solid #f2f5f8;
    background-color: #fff;
    font-size: 18px;
    line-height: 1.5;
    color: #2f363b;
    .el-icon {
      margin-right: 6px;
    }
    .title {
      flex: 1 1 auto;
    }
    .sub-title {
      padding-left: 6px;
      color: #666;
      font-size: 14px;
    }
  }
  .box-content {
    padding: 20px;
    background-color: #fff;
  }
}
</style>
