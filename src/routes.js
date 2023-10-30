import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"; 
import Destinations from "./views/Destinations.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/destinations", name: "destinations", component: Destinations },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;