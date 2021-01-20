import {createRouter , createWebHistory} from "vue-router";
import coachList from '../Pages/coaches/coachList.vue';
import coachDetails from '../Pages/coaches/coachDetails.vue';
import coachRegister from '../Pages/coaches/coachRegister.vue';
import contactCoach from '../Pages/request/contactCoach.vue';
import requestRecive from '../Pages/request/requestRecive.vue';
import notFound from '../Pages/notFound.vue';
import UserAuth from '../Pages/auth/UserAuth.vue';
const routes =[
    {
        path : "/",
        redirect:"/coaches"
    },
    {
        path : "/coaches",
        component : coachList
    },
    {
        path : "/coaches/:id",
        component : coachDetails,
        props:true,
        children :[
            {path : 'contact',component:contactCoach}
        ]
    },
    {
        path : "/register",
        component: coachRegister
    },
    {
        path: "/request",
        component:requestRecive
    },
    {
        path:"/userauth",
        component:UserAuth
    },
    {
        path: "/:notFound(.*)",
        component:notFound
    }

];



const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;