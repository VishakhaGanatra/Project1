Vue.createApp({
    data(){
        return{
            goals:[],
            entervalue:''

        };
    },
    methods:{
        addgoal(){
            this.goals.push(this.entervalue);
            this.entervalue=''
        },
        removeitem(idx){
            this.goals.splice(idx,1);
        }

    }
}).mount('#app');