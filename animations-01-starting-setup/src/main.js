import { createApp } from 'vue';
//import {createRouter , createWebHistory} from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
//import ALLuser from './Page/ALLuser.vue';
//import Goal from './Page/Goal.vue';

// const router = createRouter({
//     history : createWebHistory(),
//     routes :[
//         {path: '/' , component : ALLuser},
//         {path : '/goals' , component : Goal}
//     ]
// })

const app = createApp(App);

app.component('base-modal', BaseModal);

//app.use(router);

app.mount('#app');
