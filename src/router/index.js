import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutMe from '../views/AboutMe.vue';
import ExperiencesPage from '../views/ExperiencesPage.vue';
import ContactInfo from '../views/ContactInfo.vue';

const routes = [
  { path: '/', name: 'homePage', component: HomePage, meta: { title: 'Software Engineer' } },
  { path: '/AboutNicole', name: 'aboutMe', component: AboutMe, meta: { title: 'About' } },
  { path: '/Experiences', alias: '/Projects', name: 'experiencesPage', component: ExperiencesPage, meta: { title: 'Experiences' } },
  { path: '/ContactNicole', name: 'contactInfo', component: ContactInfo, meta: { title: 'Contact' } }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }
});

router.afterEach((to) => {
  document.title = `Nicole Nguyen | ${to.meta.title}`;
});

export default router;
