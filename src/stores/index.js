import Vue from 'vue'
import Vuex from 'vuex'
import { clientApi } from '../utils/clientApi'

Vue.use(Vuex)

const state = {
  joke: {
    title: 'There is no adultery mother, there\'s just Chuck Norris in town.',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  },
  flagLoading: false,
  flagTimer: true,
}

const getters = {}

const mutations = {
  setLoading (state, flag) {
    state.flagLoading = flag
  },
  setJoke (state, data) {
    if ('value' in data && data.value !== '') {
      state.joke.title = data.value
    }
    if ('url' in data && data.url !== '') {
      state.joke.icon_url = data.url
    }
  },
}

const actions = {
  getJoke ({commit}) {
    commit('setLoading', true)
    clientApi('jokes/random')
      .then((data) => {
        commit('setJoke', data)
        console.log(data)
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
