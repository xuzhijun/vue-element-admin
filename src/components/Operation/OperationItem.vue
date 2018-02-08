<template>
  <div class="operation-item">
    <el-tag :type="item.type">{{item.tag}}</el-tag>
    <span class="item-user">{{item.user}}</span>
    <span class="item-content">{{item.content}}</span>
    <span class="item-date">{{item.date}}</span>
  </div>
</template>
<script>
export default {
  props: ['item']
}
</script>
<style lang="scss" scoped>
.operation-item {
  padding: 10px 0;
  span {
    padding-left: 10px;
    &.item-date {
      color: #999;
    }
  }
}
</style>
