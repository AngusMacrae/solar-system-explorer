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
    path: '/:bodyName',
    name: 'PlanetSystem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "planetSystem" */ '../views/PlanetSystem.vue'),
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
