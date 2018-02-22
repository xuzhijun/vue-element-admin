import request from '@/utils/request'

export function getAllProjectList(parameters) {
  return request({
    url: '/api/projects',
    method: 'get',
    params: parameters
  })
}

