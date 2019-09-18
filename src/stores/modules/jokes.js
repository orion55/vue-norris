const state = {
  joke: {
    title: 'There is no adultery mother, there\'s just Chuck Norris in town.',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png'
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
