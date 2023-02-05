import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataView from "../views/DataView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/co2-data",
      name: "co2-data",
      component: DataView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
