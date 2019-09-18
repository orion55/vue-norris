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
    state.joke = data
  },
}

const actions = {
  getJoke ({commit}) {
    clientApi('jokes/random')
      .then((data) => {
        console.log(data)
      })
  },
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations,
})
