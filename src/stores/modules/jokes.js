const state = {
  joke: {
    title: 'Привет мир!',
    icon_url: ''
  },
}

const getters = {
  getJoke: state => state.joke

}

const mutations = {
  handleSetJoke (state, data) {
    state.joke = data
  },
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
