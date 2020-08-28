import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLoggedUser: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isLoggedUser = true
      } else {
        state.isLoggedUser = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    }
  }
})

export default store
