import Vue from 'vue'
import VueRouter from 'vue-router'
import EmployeeNew from '../components/EmployeeNew.vue';
import Index from '../components/Index.vue';


Vue.use(VueRouter)

const routes = [
  { path:'/',component: Index , children: [{ path:'/' , component:EmployeeNew}]},
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})

export default router
