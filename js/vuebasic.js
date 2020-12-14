Vue.createApp({
    data(){
        return {
            courseA:'it is vue js course' ,//here we use anything like string,number,object etc..
            //if you have any html code inside this data then use v-html method in html to avoid this...
            courseB:'<h2>hello !! vuejs..</h2>',
            //vue-blind 
            vuelink:'https://vuejs.org/',
            counter : 10,
            name:'', 
            confirmname:''

        };
    },
    //computed method ...
    computed:{
        fullname(){
            console.log("running......")//it run only when inside computed method is execute ..
            if(this.name === ''){
                return '';
            }
            return this.name + '' + 'ganatra';
        },

    },
    //method use a function nd call this fuction inside html page..
    methods:{
        output(){
            const randomno=Math.random();
            if(randomno < 0.5){
                // if we want to access data property inside method then use this keyword .
                return this.courseA;
            }else{
                return this.courseB;
            }
        },
        // use a method to increment or decrement counter value..
        add(num){
            this.counter= this.counter+num;
        },
        reduce(num){
            this.counter=this.courseB-num;
        },
        // event modifier function..
        submitform(){
            alert('submitted');
        },
        setName(event){
            this.name=event.target.value;
            
        },
        //event modifire keyup .......
        confirmoutput(){
            this.confirmname=this.name;
        },
        //v-model
        resetInput(){
            this.name='';
        }

    }
}).mount('#app');