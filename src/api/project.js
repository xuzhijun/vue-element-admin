import request from '@/utils/request'

export function getProjectList(parameters) {
  return request({
    url: '/project/project',
    method: 'get',
    params: parameters
  })
}

