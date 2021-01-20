Vue.createApp({
    data(){
        return {
            goals:[],
            enteredValue:''

        };
    },
    methods: {
        addGoal() {
        this.goals.push(this.enteredValue);
        this.enteredValue='';
        },
    },
}).mount('#app');

//event 
/*Vue.createApp({
    data(){
        return{
            name:''

        };
    },
    methods:{
        Resetinput(){
            this.name='';
        },
        fullname(){
            console.log('hi');
            if(this.name === ''){
                return '';
            }
            return 'vishakha';
        },
        setName(event) {
            this.name=event.target.value;

        },

    },

}).mount('#app');*/

/*Vue.createApp({
    data(){
        return{
            name=''
        
        };
    },
    methods:{
        Resetinput(){
            this.name='';
        },
        fullname(){
            console.log('hi');
            if(this.name === ''){
                return '';
            }
            return 'vishakha';
        },
    },
}).mount('#app');*/




















/*Vue.createApp({
    data(){

        return{
            
        };
    },
    methods:{
        submitform(){
            alert('submitted');
        },
    },
}).mount('#app');*/
















/*const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal(){
    const enterValue = inputEl.value;
    const listemEl = document.createElement('li');
    listemEl.textContent = enterValue;
    listEl.appendChild(listemEl);
    inputEl.value= '';
}







buttonEl.addEventListener('click',addGoal);*/
