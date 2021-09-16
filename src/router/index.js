import Vue from 'vue'
import VueRouter from 'vue-router'
import Comic from '../views/Comic.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'comic',
    component: Comic
  },
  {
    path: '/Classified',
    name: 'classified',
    component: () => import('../views/Classified.vue'),
  },
  {
    path: '/Thacks',
    name: 'thacks',
    component: () => import('../views/Thacks.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
