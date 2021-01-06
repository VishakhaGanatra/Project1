<template>
<transition-group tag="ul" name="list-item"> <!--for more then one child -->
<li v-for="user in users" :key="user" @click="removeUser(user)">{{user}}</li>
</transition-group>
<div>
<input type="text" v-model="enteredname"/>
<button @click="addUser" > Add user </button>
</div>

</template>
 

<script> 
export default {
    data(){ 
        return{
            users : ['vishakha','mansi','mahi','anji','binju'],
            enteredname :''
        };
    },
    methods:{
        addUser(){
            this.users.unshift(this.enteredname);
            this.enteredname='';

        },
        removeUser(user){
            this.users=this.users.filter(usr => usr !== user);
        }
    }
} 

</script> 

<style scoped>
ul{
    list-style : none;
    margin:0;
    padding : 0;
}
li{
    padding : 10px;

    text-align:center;
    border : 1px solid black;
}
@keyframes hello{
  0% {
    transform : translateX(0) scale(1);
  }

  70%{
    transform : translateX(-120px) scale(1.1);
  }

  100%{
    transform :translateX(-150px) scale(1);
  }
}
.list-item-enter-from,
{
    opacity:0;
  transform:translateX(-30px);
}
.list-item-enter-active{
        transition : all 1s ease-out;

}
.list-item-enter-to,
{
        opacity:1;
  transform:translateX(0px);


}
.list-item-leave-from{
    opacity:1;
  transform:translateX(0px);
    
}
.list-item-leave-active{
        transition : all 1s ease-in;
        position: absolute;

}


.list-item-leave-to{
    opacity:1;
  transform:translateX(30px);


}
.list-item-move{
    transition : transform 0.3s ease;
}
</style>