import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/views/IndexView.vue"),
  },
  {
    path: "/brauerei",
    name: "Brauerei",
    component: () => import("@/components/views/BrauereiView.vue"),
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: () => import("@/components/views/RestaurantsView.vue"),
  },
  {
    path: "/ferienwohnungen",
    name: "Ferienwohnungen",
    component: () => import("@/components/views/FerienwohnungenView.vue"),
  },
  {
    path: "/genusshotel",
    name: "Genusshotel",
    component: () => import("@/components/views/GenusshotelView.vue"),
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
