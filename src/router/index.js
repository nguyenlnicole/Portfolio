import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutMe from "../views/AboutMe.vue";
import ProjectsPage from "../views/ProjectsPage.vue"
// Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
  },
  {
    path: "/AboutNicole",
    name: "aboutMe",
    component: AboutMe,
  },
  {
    path: "/Projects",
    name: "projectsPage",
    component: ProjectsPage, 
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;