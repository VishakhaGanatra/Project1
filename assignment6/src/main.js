import { createApp } from 'vue'
import App from './App.vue';
import slot from './components/slot.vue';
import userData from './components/userData.vue';
import activegoal from './components/activegoal.vue';
import managegoal from './components/managegoal.vue';

 const app=createApp(App)
 
 app.component('user-data',userData);
 app.component('slot-data',slot);
 app.component('active-goal',activegoal);
 app.component('manage-goal',managegoal);

 app.mount('#app')
// this is globally registered component ..