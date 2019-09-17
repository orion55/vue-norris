import Vue from "vue";
import App from "@/pages/App";
import store from "@/stores/index";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  components: { App },
  template: "<App/>"
});
