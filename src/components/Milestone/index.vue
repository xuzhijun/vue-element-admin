<template>
  <div class="milestone">
    <stone-item :stone="stone" :key="stone.id" v-for="stone in stones"></stone-item>
  </div>
</template>
<script>
import StoneItem from './stoneItem'
export default {
  props: ['stones'],
  components: { StoneItem }
}
</script>
<style lang="scss" scoped>
.milestone {
  display: flex;
  flex: 0 0 auto;
  overflow-x: scroll;
}
</style>
