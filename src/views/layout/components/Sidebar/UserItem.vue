<template>
  <el-row class="userItem">
    <el-col :span="6">
      <!--<img v-bind:src='item.productImage'/>-->
      00
    </el-col>
    <el-col :span="18">
      姓名：{{ name }}<br>
      部门：{{ department }}<br>
      {{ name }}，欢迎您的登录
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   name: 'UserItem',
   computed: mapGetters({
    name: 'name',
    department: 'department'
   }),
   methods: {
  }
}
</script>
<style lang="scss" scoped>
.el-menu.nest-menu {
  padding-left: 20px;
}
</style>
