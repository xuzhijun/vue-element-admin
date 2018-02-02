<template>
  <scroll-bar>
      <sidebar-item :routes="sidebar_routers"></sidebar-item>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'sidebar_routers',
      'sidebar'
    ])
  }
}
</script>
