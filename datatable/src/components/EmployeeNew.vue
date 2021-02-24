<template>
  <div>
    <div class="container pt-3 pb-5">
      <h2>BootstrapVue Datatable</h2>
      <b-row>
        <b-col md="3">
          <b-form-input type="search" placeholder="Search" v-model="filter">
          </b-form-input>
          <br />
        </b-col>
        <b-col md="3">
          <b-button to="FormNew">Add</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table
            striped
            hover
            :items="posts"
            :filter="filter"
            :per-page="perPage"
            :current-page="currentPage"
            :total-rows="rows"
          >
            <template #cell(uid)="data">
              <a :href="`FormNew/${data.value}`">{{ data.value }}</a>
            </template>
          </b-table>
        </b-col>
        <b-col md="12" class="justify-center text-center">
          <b-pagination
            v-model="currentPage"
            :per-page="perPage"
            :current-page="currentPage"
            :total-rows="rows"
            align="center"
            pills
            size="lg"
          ></b-pagination>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
  data() {
    return {
      filter: "",
      currentPage: 1,
      perPage: 4,
    };
  },
  mounted() {
    console.log(this.posts);
  },
  computed: {
    rows() {
      if (this.posts) return this.posts.length;
      else return 0;
    },
  },
};
</script>
