import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/components/main/Main.vue';
import Layout from '@/components/nav/layout/Layout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    components: {
      default: Main,
      NavBar: Layout
    },
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "SignIn" */ '@/components/signInForm/SignIn.vue'),
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "SignUp" */ '@/components/signUpForm/desktop/SignUp.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
