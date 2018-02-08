import request from '@/utils/request'

export function getProjectList(parameters) {
  return request({
    url: '/api/projects',
    method: 'get',
    params: parameters
  })
}

