import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Catologue from '../views/Catologue.vue';
import Workers from '../views/Workers.vue';
import DetailAboutWine from '../views/DetailAboutWine.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/catologue',
      name: 'Catologue',
      component: Catologue
    },
    {
      path: '/workers',
      name: 'Workers',
      component: Workers
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/detail/:id',
      name: 'DetailAboutWine',
      component: DetailAboutWine
    }
  ]
});

export default router;
