Vue.createApp({
    data(){
        return{
            name:''

        };
    },
    methods:{
        show(){
            alert('hello vishakha..');
        },
        output(event){
            this.name=event.target.value;

        },
        element(event){
            this.name=event.target.value;
        }
    }
}).mount('#app');