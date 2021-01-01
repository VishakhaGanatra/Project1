import { createApp } from 'vue';
import Resources from './component/Resources.vue';
import basecard from './component/UI/basecard.vue';
import storedresource from './component/UI/storedresource.vue';
import header from './component/UI/header.vue';
import basebutton from './component/UI/basebutton.vue';
import addresource from './component/addresource.vue';
import Theresource from './component/Theresource.vue';
import basedialog from './component/UI/basedialog.vue';

import App from './App.vue';

const app=createApp(App)
app.component('resource-manage',Resources);
app.component('base-card',basecard);
app.component('store-resource',storedresource);
app.component('header-manage',header);
app.component('base-button',basebutton);
app.component('add-resource',addresource);
app.component('the-resource',Theresource);
app.component('base-dialog',basedialog);
app.mount('#app');
