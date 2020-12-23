<template>
  <li>
    <h2>{{ name }} {{ /*friendisFavourite*/ isFavourite === true ? '(favourite)' : ''}}</h2>
    <button @click="toggleFavourite">Toggle favourite</button>

    <button @click="toggledetails">
      {{ detailsarevisible ? "Hide" : "Show" }} details
    </button>
    <ul v-if="detailsarevisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
    <button @click="deletefriend">delete</button>
  </li>
</template>

<script>
export default { 
  //props: ["name", "phoneNumber", "emailAddress", "isFavourite"],
  props: {
    //another way to define props..
    id:{
        type:String,
        required:true
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      true: String,
      required: true,
    },
    isFavourite: {
      true: String,
      required: false, //if we dlt isfavorite from 2nd friend-contact cpmponent then still it work in 1st coz its optional field..
      default: "0",
    //   validator: function(value) {
    //     return value === "1" || value === "0"; // we cant set isfavourite vaule 100 or somthing it should be always 0 or 1..
     // },
    },
  },
  //you can customize emit event like this..
  emits:['toggle-favorite','delete'],
//   emits:{
//       toggle-favourite:function(id){
//           if(id){
//               return true;
//           }else{
//               return false; 
//           }
//       }
//   },
  data() {
    return {
      detailsarevisible: false,
    //   friend: {
    //     id: "vishakha",
    //     name: "vishakha ganatra",
    //     phone: "7984376319",
    //     email: "abc@gmail.com",
    //   },
      //friendIsFavourite: this.isFavourite,
    };
  },
  methods: {
    toggledetails() {
      this.detailsarevisible = !this.detailsarevisible;
    },
    toggleFavourite() {
        // if(tthis.friendIsFavourite === "1"){
        //     this.friendIsFavourite = "0";
        // }else{
        //     this.friendIsFavourite = "1";
        // }
      this.$emit('toggle-favourite',this.id);
    },
    deletefriend(){
        this.$emit('delete',this.id);
    }
    
  },
};
</script>
