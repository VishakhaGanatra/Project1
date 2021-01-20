import {createRouter , createWebHistory} from "vue-router";
import productList from '../components/Page/productList.vue'
import userCart from '../components/Page/userCart.vue';
const routes=[
    {

        path: "/",
        redirect:"/products"
    },
    {
        path:"/products",
        component: productList
    },
    {
        path:"/cart",
        name:"user-cart",
        component:userCart
    }
]



const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;