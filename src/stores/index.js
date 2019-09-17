import Vue from "vue";
import Vuex from "vuex";
import jokes from "./modules/jokes";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    jokes
  }
});
