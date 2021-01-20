<template>
<base-dialog :show="!!error" title="an error occured!" @close="handaleError">
<p>{{error}}</p>
</base-dialog>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoach">Refresh</base-button>
        <base-button v-if="!isCoach && !isLoading" to="/register" link>register as coach</base-button>
      </div>
      <div v-if="isLoading">
      <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredcoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>no coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import coachFilter from '../../components/coaches/coachFilter.vue';
export default {
  components: {
    CoachItem,
    coachFilter
  },
  data(){
      return{
          isLoading:false,
          error : null,
          activeFilters :{
              frontend:true,
              backend:true,
              career:true
          }
      };
  },
  created(){
      this.loadCoach();
  },
  computed: {
      isCoach(){
          return this.$store.getters['coaches/isCoach'];
      },
    filteredcoaches() {
      const coaches= this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
      if(this.activeFilters.frontend && coach.areas.includes('frontend')){
          return true;
      }
            if(this.activeFilters.backend && coach.areas.includes('backend')){
                return true;
            }
            if(this.activeFilters.career && coach.areas.includes('career')){
                       return true;
            }
            return false;
            });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    }
  },
  methods:{
      setFilters(updatedFilter){
          this.activeFilters=updatedFilter;
      },
      async loadCoach(){
          this.isLoading=true;
          try{
          await this.$store.dispatch('coaches/loadCoaches');
          }catch(error){
              this.error=error.message || 'somthing went wrong';

          }

          this.isLoading=false;
      },
      handaleError(){
          this.error=null;
      }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
