import Vue from 'vue'
import VueRouter from 'vue-router'
import EmployeeDetails from '../components/employeeDetails.vue';
import Index from '../components/Index.vue';
//import FormNew from '../components/FormNew.vue';

Vue.use(VueRouter)

const routes = [
  { path:'/',component: Index , children: [{ path:'/' , component:EmployeeDetails}]},
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})

export default router
