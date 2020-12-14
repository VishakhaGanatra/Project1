Vue.createApp({
    data(){
        return {
            name:'vishakha',
            age:21,
            imgURL:'https://www.dreamstime.com/stock-photo-autumn-fall-nature-scene-autumnal-park-beautiful-image77869343'
        };
    },
    methods:{
        calculateAge(){
            return this.age+5;
        },
        randomNumber(){
            return Math.random();
        }
    }
}).mount('#assignment');