import Vue from 'vue'
import VueRouter from 'vue-router'
import EditTable from '../components/EditTable.vue'
import Thanks from '../views/Thanks.vue'
import Classified from '../views/Classified.vue'
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
    component: Classified,
  },
  {
    path: '/Thanks',
    name: 'thanks',
    component: Thanks,
  },
  {
    path: '/EditTable',
    name: 'editTable',
    component: EditTable.vue,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
