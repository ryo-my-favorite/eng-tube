import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Link from './views/Link.vue';
import BeginnerPage from './views/BeginnerPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/link',
      name: 'link',
      component: Link,
    },
    {
      path: '/beginner',
      name: 'beginner',
      component: BeginnerPage,
    },
  ],
});
