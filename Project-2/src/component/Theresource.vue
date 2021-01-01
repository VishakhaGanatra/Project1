<template>

  <base-card>
    
    <base-button @click="selecttabresource('add-resource')" :mode="selectTab === 'add-resource' ? null : 'flat'">Add resource</base-button> 
    
    <base-button @click="selecttabresource('the-resource')" :mode="selectTab === 'the-resource' ? null : 'flat'">Store resource</base-button>
  </base-card>
  <add-resource v-if="selectTab === 'add-resource'" @add-contact="addContact"></add-resource>

  <ul v-if="selectTab == 'the-resource'">
    <store-resource>
      <resource-manage
        v-for="res in storedresource"
        :key="res.id"
        :title="res.title"
        :id="res.id"
        :description="res.description"
        :link="res.link"
        @delete="deleteContact"

      ></resource-manage>
    </store-resource>
  </ul>
</template>

<script>
export default {
  //inject :['storedresource'],
  data() {
    return {
      selectTab: 'add-resource',
      storedresource: [
        {
          id: 1,
          title: 'vue js',
          description: 'this is vue js course',
          link: 'https://vuejs.org'
        },
        {
          id: 2, 
          title: 'google',
          description: 'this is google',
          link: 'https://google.com'
        }
      ]
    };
  },
  methods: {
    selecttabresource(tab) {
      this.selectTab = tab;
    },
    addContact(title,description,link){
      console.log('data',title)
      const newAddContact={
        id: Math.random().toString(36).substr(2, 9).toString(),
        title : title,
        description : description ,
        link : link
      };
      this.storedresource.push(newAddContact);
      

    },
    deleteContact(resId){
            this.storedresource=this.storedresource.filter((res) => res.id !== resId);
        },
  }
};
</script>
