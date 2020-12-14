Vue.createApp({
    data(){
        return{
            num:0

        };
    },
    computed:{
        result(){
        if(this.num < 37){
            return "Not there yet!!";
        }else if(this.num == 37){
            return this.num;
        }else{
            return "too much...";

        }
    }  

    },
    watch:{
        result(){
            const that=this;
            setTimeout(function(){
                that.num=0;

            },5000)

        }
    },
    methods:{
        addfive(number){
            this.num=this.num+number;

        }
    

    }
}).mount('#app');