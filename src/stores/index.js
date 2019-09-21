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
  errorMsg: '',
  intervalID: 0,
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
  },
  setTimer (state) {
    state.flagTimer = !state.flagTimer
  },
  setIntervalID (state, id) {
    state.intervalID = id
  },
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
  getTimerJoke ({commit, state}) {
    commit('setTimer')

    if (!state.flagTimer) {
      const timerDelay = 1000

      const wait = ms => new Promise(r => setTimeout(r, ms))

      const repeat = (ms, func) =>
        new Promise(
          r => {
            commit('setIntervalID', setInterval(func, ms))
            wait(ms)
              .then(r)
          })

      const myfunction = () => new Promise(r => r(console.log('repeating...')))

      const getLiteJoke = () => {
        commit('setFlagError', false)
        clientApi('jokes/random')
          .then((data) => commit('setJoke', data))
          .catch(error => {
            commit('setFlagError', true)
            commit('setErrorMsg', error)
          })
      }

      repeat(timerDelay, () => Promise.all([myfunction()]))
        .then(console.log('repeat start'))
    } else {
      clearInterval(state.intervalID)
      console.log('Stop timer')
    }
  },
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations,
})
