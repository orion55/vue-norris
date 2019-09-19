import Vue from 'vue'
import Vuex from 'vuex'
import { clientApi } from '../utils/clientApi'

Vue.use(Vuex)

const state = {
  joke: 'There is no adultery mother, there\'s just Chuck Norris in town.',
  jokeId: 0,
  flagLoading: false,
  flagTimer: true,
  flagError: false,
  errorMsg: ''
}

const getters = {}

const mutations = {
  setLoading (state, flag) {
    state.flagLoading = flag
  },
  setJoke (state, data) {
    if ('value' in data && data.value !== '') {
      state.joke = data.value
    }
    if ('id' in data) {
      state.jokeId = data.id
    }
  },
  setFlagError (state, flag) {
    state.flagError = flag
  },
  setErrorMsg (state, msg) {
    state.errorMsg = msg.toString()
  }
}

const actions = {
  getJoke ({commit}) {
    commit('setLoading', true)
    commit('setFlagError', false)
    clientApi('jokes/random')
      .then((data) => commit('setJoke', data))
      .catch(error => {
        commit('setFlagError', true)
        commit('setErrorMsg', error)
      })
      .finally(() => commit('setLoading', false))
  },
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations,
})
