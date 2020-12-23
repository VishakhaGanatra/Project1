<template>
  <div>
    <h2>Hello</h2>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favourite="togglefavstatus"
        @delete="deleteContact"
      ></friend-contact>
      <!--<friend-contact
        name="mansi tanna"       // no need to write this using v-for we dynamically call component ..
        phone-number="1234567890"
        email-address="mansi@gmail.com"
        is-favourite="0"
        ></friend-contact>-->
    </ul>
  </div>
</template>

//
<script>
export default{
    data() {
        return {
            friends: [
                {
                    id: 'vishakha',
                    name: 'vishakha ganatra',
                    phone: '7984376319',
                    email: 'abc@gmail.com',
                    isFavourite:true

                },
                {
                    id: 'mansi',
                    name:'mansi tanna',
                    phone: '1234567890',
                    email: 'abc@gmail.com',
                    isFavourite: false
                }
            ]
        };
    },
    methods:{
        togglefavstatus(friendid){
           const vishakha= this.friends.find(friend=>friend.id === friendid);
           vishakha.isFavourite = !vishakha.isFavourite;
            
        },
        addContact(name,phone,email){
            const newfriendcontact={
             id:new Date().toISOString(),   
            name:name,
            phone:phone,
            email:email,
            
            };
        
        this.friends.push(newfriendcontact);
        },
        deleteContact(friendId){
            this.friends=this.friends.filter((friend) => friend.id !== friendId);
        },
    },

};

</script>

<style scoped></style>
