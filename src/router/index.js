import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutMe from "../views/AboutMe.vue";
import ProjectsPage from "../views/ProjectsPage.vue"
import ContactInfo from "../views/ContactInfo.vue"

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
  },
  {
    path: "/ContactNicole",
    name: "contactInfo",
    component: ContactInfo, 
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;