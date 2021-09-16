//路由配置（菜单）
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login"; //登录页
import AvueRouter from "@/utils/menu.js";
import Store from "../store/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/wel",
    component: () =>
      import(/* webpackChunkName: "views" */ "@/views/wel/index"),
    redirect: "/wel/index",
    children: [
      {
        path: "index",
        name: "首页",
        // component: () =>
        //   import(/* webpackChunkName: "views" */ "@/views/wel/index"),
      },
    ],
  },
];

const Router = new VueRouter({
  routes,
});

AvueRouter.install(Vue, Router, Store);
Router.$avueRouter.formatRoutes(Store.state.user.menu, true);
// Router.addRoutes([...PageRouter, ...ViewsRouter]);

export default Router;
