import { createWebHistory, createRouter } from "vue-router";
import Teams from '../components/teams/TeamsList.vue';
import Users from '../components/users/UsersList.vue';
import TeamMembers from '../components/teams/TeamMembers.vue';
import notFound from '../components/notFound.vue';
import TeamFooter from '../components/teams/TeamFooter.vue';
import UserFooter from '../components/users/UserFooter.vue';


const routes = [
    {
      path: "/teams",
      name: "teams-list",
      components: {default : Teams , footer : TeamFooter},
      children : [
        {
          path : ":teamID",
          name : "team-member",
          component : TeamMembers,
      },

      ]
    },
    {
        path: "/users",
        name: "users-list",
        components: {default : Users , footer:UserFooter},
      },
      
      {
        path : "/",
        redirect : '/teams',
      },
      {
        path : "/:notfound(.*)",
        component: notFound,
      }
  ];
  
  
  
  const router = createRouter({
    history: createWebHistory(),
    routes, 

    scrollBehavior(to, from, savedPosition){
      return {left : 0 , top :0},
      console.log(to,from,savedPosition);
  
    }

    
  
  });
  
  export default router;