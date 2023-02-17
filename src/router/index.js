import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataView from "../views/DataView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";
import Blogpage from "../views/paramPages/Blogpage.vue";

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
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/blog/:id",
      name: "Blogpage",
      component: Blogpage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
