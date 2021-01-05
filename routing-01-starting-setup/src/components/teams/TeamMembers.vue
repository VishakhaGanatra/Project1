<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
    };
  },
  methods: {
    loadTeamMember(route) {
      if (route.params.teamID) {
        
        const teamID = route.params.teamID;
        const selectTeam = this.teams.find(team => team.id === teamID);
        const members = selectTeam.members;
        const selectedMember = [];
        for (const member of members) {
          const selectedUser = this.users.find(user => user.id === member);
          selectedMember.push(selectedUser);
        }
        this.members = selectedMember;
        this.teamName = selectTeam.name;
      }
    }
  },
  created() {
    this.loadTeamMember(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.loadTeamMember(newRoute);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
