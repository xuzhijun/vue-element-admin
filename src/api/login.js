import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username, password
  }
  return request({
    url: '/api/login',
    method: 'get',
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
    url: '/api/userInfo',
    method: 'get',
    params: { token }
  })
}

