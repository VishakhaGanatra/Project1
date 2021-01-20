<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>$ {{ rate }} hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <div>
        <h2>Interested? Reach out Now!!</h2>
        <base-button link :to="contactlink">Contact</base-button>
      </div>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedcoach: null
    };
  },
  created() {
    this.selectedcoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id === this.id
    );
  },
  computed: {
    fullName() {
      return this.selectedcoach.firstName + '' + this.selectedcoach.lastName;
    },
    rate() {
      return this.selectedcoach.hourlyRate;
    },
    contactlink() {
        return this.$route.path+'/contact'
    },
    areas() {
      return this.selectedcoach.areas;
    },
    description() {
      return this.selectedcoach.description;
    }
  }
};
</script>
