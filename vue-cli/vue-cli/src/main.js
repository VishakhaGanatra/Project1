import { createApp } from 'vue';
import App from './App.vue'; 
import friendcontact from './component/friendcontact.vue';
import newFriend from './component/newFriend.vue';

const app=createApp(App);
app.component('friend-contact',friendcontact);
app.component('new-friend',newFriend);
app.mount('#app');
