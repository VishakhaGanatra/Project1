app=Vue.createApp({
    /*data(){
        return {
            detailsarevisible: false,
            friends: [
                {
                    id: 'vishakha',
                    name: 'vishakha ganatra',
                    phone: '7984376319',
                    email: 'vishu886644@gmail.com',
                },
                {
                    id: 'ishan',
                    name: 'ishan trivedi',
                    phone: '7984376319',
                    email: 'vishu886644@gmail.com',

                },
            ],
            
        };
    },
    methods:{
        toggledetails(){
            this.detailsarevisible = !this.detailsarevisible;
        }

    }*/
});
app.component('friend-contact',{
    template: 
    `<li>
         <h2>{{ friend.name}}</h2><hr>
         <button @click="toggledetails">{{ detailsarevisible ? 'hide' : 'show'}} details</button>
       <ul v-if="detailsarevisible">
          <li class="v1"><strong>Phone:</strong>{{ friend.phone }}</li>
           <li class="v1"><strong>Emai:</strong>{{ friend.email }}</li>
        </ul>
    </li>`,
    data(){
        return {
            detailsarevisible: false,
            friend:{
                id: 'vishakha',
                    name: 'vishakha ganatra',
                    phone: '7984376319',
                    email: 'vishu886644@gmail.com',

            },

            
        };
    },
    methods:{
        toggledetails(){
            this.detailsarevisible = !this.detailsarevisible;
        }
    }
});


app.mount('#app');