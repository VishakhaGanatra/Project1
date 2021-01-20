new Vue({
    el :'#app',
    data:{
        name:'vishakha',
        age:21,
    
    },
    methods:{
        Age:function() {
            return this.age*3;
        },
        Random:function(){
            return Math.random();
        }

        
    }
})