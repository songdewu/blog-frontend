import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "首页",
        icon: "el-icon-menu",
        roles: ["admin"]
      },
      component: () => import("../views/Home.vue")
    },
    {
      path: "/financial",
      name: "financial",
      meta: {
        title: "信用融",
        icon: "el-icon-menu",
        roles: ["admin"]
      },
      component: () => import("../views/financial/Financial.vue")
    },
    {
      path: "/query",
      name: "query",
      meta: {
        title: "信用查",
        icon: "el-icon-menu",
        roles: ["admin"]
      },
      component: () => import("../views/query/Query.vue")
    },
    {
      path: "/business",
      name: "business",
      meta: {
        title: "信用商",
        icon: "el-icon-menu",
        roles: ["admin"]
      },
      component: () => import("../views/business/Business.vue")
    },
    {
      path: "/admin",
      name: "admin",
      meta: {
        title: "管理后台",
        icon: "el-icon-menu",
        roles: ["admin"]
      },
      component: () => import("../views/admin/Admin.vue")
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "管理界面",
        icon: "el-icon-menu",
        roles: ["admin"]
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录注册",
        icon: "el-icon-menu",
        roles: ["admin"]
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/common/Login.vue")
    }
  ]
});
