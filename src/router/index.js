import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventInformationView from '../views/EventInformationView.vue'
import ErrorView from '../views/ErrorView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/events/:id",
      name: "eventPage",
      component: EventInformationView
    },
    {
      path: '/:catchAll(.*)',
      name: "errorPage",
      component: ErrorView
    },
  ],
});

export default router;
