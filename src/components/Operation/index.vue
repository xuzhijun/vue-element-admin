<template>
  <div class="operation-list">
    <operation-item :item="item" :key="item.id" v-for="item in list"></operation-item>
  </div>
</template>
<script>
import OperationItem from './OperationItem'
export default {
  props: ['list'],
  components: {
    OperationItem
  }
}
</script>
<style lang="scss" scoped>

</style>

