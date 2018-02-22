import { getAllProjectList } from '@/api/project'

const projectList = {
  state: {
    projects: {},
    loading: false
  },

  // actions
  actions: {
    getAllProducts({ commit, state }, queryCondition) {
      state.loading = true
      commit('GETDATA', queryCondition)
    }
  },

  mutations: {
    GETDATA: (state, queryCondition) => {
      // parameter的格式 { time: 'time', stress: 'stress', finishState: 'finishState', type: 'type', search: 'search'}
      const parameter = queryCondition
      getAllProjectList(parameter).then(response => {
        state.projects = response.data
        state.loading = false
        // throw Error('message')
      }).catch(err => {
        console.log(err)
        // console.log(err.message)
      })
    }
  }
}

export default projectList
