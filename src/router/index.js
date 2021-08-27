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
    path: '/Calificados',
    name: 'calificados',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Calificados.vue'),
  },
  {
    path: '/Agradecimientos',
    name: 'agradecimientos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Agradecimientos.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
