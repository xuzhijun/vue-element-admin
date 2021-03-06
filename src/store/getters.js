import { sidebarRouterMap, topbarRouterMap } from '@/router'
const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  department: state => state.user.department,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  sidebar_routers: state => sidebarRouterMap,
  topbar_routers: state => topbarRouterMap,
  // sidebar_routers: state => state.permission.sidebarRouters,
  // topbar_routers: state => state.permission.topbarRouters,
  addRouters: state => state.permission.addRouters,
  errorLogs: state => state.errorLog.logs
}
export default getters
