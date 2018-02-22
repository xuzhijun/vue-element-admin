import { getProjectList } from '@/api/project'

const projectList = {
  state: {
    projects: {}
  },

  // getters
  getters: {
    projects: state => state.projects
  },

  // actions
  actions: {
    getAllProducts({ commit }, queryCondition) {
      commit('GETDATA', queryCondition)
    }
  },

  mutations: {
    GETDATA: (state, queryCondition) => {
      // parameter的格式 { time: 'time', stress: 'stress', finishState: 'finishState', type: 'type', search: 'search'}
      const parameter = queryCondition
      getProjectList(parameter).then(response => {
        state.projects = response.data
        // throw Error('message')
      }).catch(err => {
        console.log(err)
        // console.log(err.message)
      })
    }
  }
}

export default projectList
