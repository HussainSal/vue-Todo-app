import { createRouter, createWebHistory } from "vue-router";

import type { RouteRecordRaw } from "vue-router";

import HomeView from "../views/HomeView.vue";
import { isAuth } from "@/util/isAuth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { auth: false },
  },
  {
    path: "/userAuth",
    name: "Auth",
    component: () => import("../views/AuthView.vue"),
    meta: { auth: false },
    beforeEnter: (to, from, next) => {
      if (!to.query.mode) {
        return next({ name: "NotFound" });
      } else {
        return next();
      }
    },
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/TodoView.vue"),
    meta: { auth: true },
  },
  // Not Found
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !isAuth()) {
    return next("/userAuth?mode=login");
  } else {
    next();
  }
});

export default router;
