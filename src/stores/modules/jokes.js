import { getJokes } from "@/stores/services/jokes";

const state = {
  joke: {}
};

const getters = {
  joke: () => state.joke
};

const mutations = {
  handleSetJoke(state, data) {
    state.joke = data;
  }
};

const actions = {};

export default { state, getters, mutations, actions };
