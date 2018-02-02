<template>
  <article class="user-card">
    <picture class="user-avatar">
      <img :src="avatar+'?imageView2/1/w/80/h/80'"/>
    </picture>
    <div class="user-info">
      姓名：{{ name }}<br>
      部门：{{ department }}<br>
      {{ name }}，欢迎您的登录
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserItem',
  computed: {
    ...mapGetters(['name', 'department', 'avatar'])
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.user-card {
  display: flex;
  align-items: center;
  padding: 10px;
  .user-avatar {
    width: 60px;
    height: 60px;
    overflow: hidden;
    flex: 0 1 auto;
  }
  .user-info {
    margin-left: 10px;
    color: #9b9b9b;
    font-size: 14px;
    line-height: 1.5;
  }
}
.mini .user-info {
  display: none;
}
.el-menu.nest-menu {
  padding-left: 20px;
}
</style>
