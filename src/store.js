import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: { name: "songdewu", age: 18, tel: 30 },
    isLogin: false
  },
  mutations: {
    changeLogin(state) {
      console.log("正在改变登录状态为true", state.isLogin);
      state.isLogin = true;
    }
  },
  actions: {
    doLogin(context) {
      context.commit("changeLogin");
    }
  }
});
