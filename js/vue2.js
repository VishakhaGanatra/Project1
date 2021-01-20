new Vue({
    el : '#app',
    data:{
        title : 'hello veryone!!',
        link: 'http://google.com',
        finish: '<a href="http://google.com">Google</a>'
    },
    methods:{
        changetitle : function(event){
            this.title = event.target.value;
            //return this.title;   //use data object using this..
        }
    }
})