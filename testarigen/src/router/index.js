import { createRouter, createWebHistory } from 'vue-router'
// IMporterar från views
import HomeView from '../views/HomeView.vue'
import InventoryView from '../views/InventoryView.vue';
import AccountsView from '../views/AccountsView.vue';
import SuperView from '../views/SuperView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryView
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: AccountsView
    },
    {
      path: '/super',
      name: 'super',
      component: SuperView
    },
  ]
})

export default router

