import { createApp } from 'vue';

import App from './App.vue';
import computedNew from './component/computedNew.vue';
import dataUser from './component/dataUser.vue';
import provideInject from './component/provideInject.vue';
const app=createApp(App)
app.component('computed-new',computedNew);
app.component('data-user',dataUser);
app.component('provide-inject',provideInject);
app.mount('#app');
