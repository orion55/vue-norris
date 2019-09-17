import Vue from "vue";
import App from "@/pages/App";
import store from "@/stores/index";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
