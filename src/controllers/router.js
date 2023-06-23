import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("../views/_SignIn")
  },
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/Dashboard")
  },
  {
    path: "/djs",
    name: "djs",
    component: () => import("../views/DJs")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;