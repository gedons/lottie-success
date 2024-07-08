import { createRouter, createWebHistory } from 'vue-router';
import Success from '../views/Success.vue';


const routes = [
    { path: '/payment-success', name: 'Success', component: Success },
  ];
 
const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;