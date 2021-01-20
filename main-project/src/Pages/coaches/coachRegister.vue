<template>
<base-card>
<coach-form @save-data="saveData"></coach-form>
</base-card>
</template>






<script>
import coachForm from '../../components/coaches/coachForm.vue';
export default{
    components:{
        coachForm
    },
    methods:{
        saveData(data){
            this.$store.dispatch('coaches/registerCoach',data);
            this.$router.push('/coaches');
        }
    }
}
</script>