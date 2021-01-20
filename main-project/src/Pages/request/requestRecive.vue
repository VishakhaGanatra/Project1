<template>
<base-dialog :show="!!error" title="an error occured!" @close="handaleError">
<p>{{error}}</p>
</base-dialog>
<section>
<base-card>
<header>
<h3> Request receive </h3>
</header>
<base-spinner v-if="isLodding"></base-spinner>
<ul v-else-if="hasRequests && !isLodding">
<request-item v-for="req in requestReceived" :key="req.id" :email="req.userEmail" :message="req.message"></request-item>
</ul>
<h3 v-else> YOu haven't receive any request yet..</h3>
</base-card>
</section>
</template>

<script>
import requestItem from '../../components/request/requestItem.vue';
export default{
    components:{
        requestItem
    },
    data(){
      return{
        isLodding : false,
        error:null
      };
    },
    computed:{
    requestReceived(){
        return this.$store.getters['requests/requests'];

    },
    hasRequests(){
        return this.$store.getters['requests/hasRequests'];
    }

    },
    created(){
      this.loadRequests();
    },
    methods:{
      async loadRequests(){
        this.isLodding=true;
        try{
        await this.$store.dispatch('requests/fetchRequests');
        }catch(error){
           this.error= error.message || 'somthing failed';
        }
        this.isLodding=false;
      },
      handaleError(){
        this.error=null;
      }
    }


};
</script>


<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>