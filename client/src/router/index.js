import Vue from 'vue';
import VueRouter from 'vue-router';
import SolarSystem from '@/views/SolarSystem.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SolarSystem',
    component: SolarSystem,
  },
  {
    path: '/planet/:bodyName',
    name: 'PlanetDetails',
    component: () => import(/* webpackChunkName: "planetDetails" */ '../views/PlanetDetails.vue'),
  },
  {
    path: '/moon/:bodyName',
    name: 'MoonDetails',
    component: () => import(/* webpackChunkName: "moonDetails" */ '../views/MoonDetails.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
