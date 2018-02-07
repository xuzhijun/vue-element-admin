import request from '@/utils/request'

export function loginByUsername(username) {
  const data = {
    username: 'liuxiaohai'
  }
  return request({
    url: '/login-web/other/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/api/logout',
    method: 'get'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

