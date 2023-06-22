import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/l',
    name: 'LandingPage',
    component: () => import('@/components/LandingPage.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('@/views/Customer.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;