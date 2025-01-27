import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/views/IndexView.vue"),
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
