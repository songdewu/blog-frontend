import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import "./plugins/axios";
import "./plugins/bus";
import "./plugins/config";
import "./plugins/funs";
import "./plugins/element.js";
import "./assets/css/reset.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
