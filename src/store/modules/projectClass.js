// import { loginByUsername, logout, getUserInfo } from '@/api/login'
const project = {
  state: {
    time: '',
    stress: '',
    finishState: '',
    type: ''
  },

  // getters
  getters: {
    time: state => state.time
  },

  // actions
  actions: {
    getAllProducts ({ commit }) {
      shop.getProducts(products => {
        commit(types.RECEIVE_PRODUCTS, { products })
      })
    }
  },

  mutations: {
    SET_TIME: (state, time) => {
      this.state.time = time
    },
    SET_STRESS: (state, stress) => {
      this.state.stress = stress
    },
    SET_FINISHSTATE: (state, finishState) => {
      this.state.finishState = finishState
    },
    SET_TYPE: (state, type) => {
      state.type = type
    }
  },

    // LoginByUsername({ commit }, userInfo) {
    //   const username = userInfo.username.trim()
    //   return new Promise((resolve, reject) => {
    //     loginByUsername(username, userInfo.password).then(response => {
    //       const data = response.data
    //       commit('SET_TOKEN', data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }

export default project
