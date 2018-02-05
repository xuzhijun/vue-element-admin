import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件
//import '@/styles/icon.css'
// import generateIconsView from '@/views/svg-icons/generateIconsView.js'

// register globally
Vue.component('svg-icon', SvgIcon)

// const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('./svg', false, /\.svg$/)
// const iconMap = requireAll(req)

// generateIconsView.generate(iconMap) // just for @/views/icons , you can delete it

