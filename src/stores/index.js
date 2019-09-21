/**
 * Хранилище данных
 * Автор - Гребенёв Олег <admin@infoblog72.ru>
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { clientApi } from '../utils/clientApi'

Vue.use(Vuex)

const state = {
  //joke- Текст шутки
  joke: 'There is no adultery mother, there\'s just Chuck Norris in town.',
  //jokeId - идентификатор шутки (нужно для создания анимации)
  jokeId: 0,
  //flagLoading - флаг загрузки
  flagLoading: false,
  //flagTimer - флаг таймера
  flagTimer: true,
  //flagError - флаг ошибки
  flagError: false,
  //errorMsg - сообщение об ошибке
  errorMsg: '',
  //intervalID - идентификатор интервала тайминга
  intervalID: 0,
}

const mutations = {
  //setLoading - Установка флага состояния загрузки
  setLoading (state, flag) {
    state.flagLoading = flag
  },
  //setJoke - установка новой шутки
  setJoke (state, data) {
    if ('value' in data && data.value !== '') {
      state.joke = data.value
    }
    if ('id' in data) {
      state.jokeId = data.id
    }
  },
  //setFlagError - установка флага ошибки
  setFlagError (state, flag) {
    state.flagError = flag
  },
  //setErrorMsg - установка сообщения об ошибке
  setErrorMsg (state, msg) {
    state.errorMsg = msg.toString()
  },
  //setTimer - установка флага таймера
  setTimer (state) {
    state.flagTimer = !state.flagTimer
  },
  //setIntervalID - установка идентификатора таймера
  setIntervalID (state, id) {
    state.intervalID = id
  },
}

const actions = {
  //getJoke - получение новой шутки
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
  //getTimerJoke - получение новой шутки по таймеру
  getTimerJoke ({commit, state}) {
    commit('setTimer')

    if (!state.flagTimer) {
      const TIMER_DELAY = 10000

      const repeat = (ms, func) =>
        commit('setIntervalID', setInterval(func, ms))

      const getLiteJoke = () => {
        commit('setFlagError', false)
        clientApi('jokes/random')
          .then((data) => commit('setJoke', data))
          .catch(error => {
            commit('setFlagError', true)
            commit('setErrorMsg', error)
          })
      }

      getLiteJoke()
      repeat(TIMER_DELAY, () => getLiteJoke())
    } else {
      clearInterval(state.intervalID)
    }
  },
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
