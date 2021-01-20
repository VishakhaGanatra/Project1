<template>
<data-user :first-name="firstname" :last-name="lastname" :age="age"></data-user>
<!--<h2>{{userName}}</h2>
<h2>{{age}}</h2>-->
<input type="text" placeholder="firstname" v-model="firstname"/>          <!-- @input="setFirstname"-->
<input type="text" placeholder="lastname" ref="setInputname"/>           <!--@input="setLastname"-->
<button @click="setName">set last name</button>
</template>

<script>
import {computed,ref} from 'vue';
export default{
    setup(){
        const firstname = ref('');
        const lastname = ref('');
        const age=ref('');
        const setInputname = ref(null);
        
        const user=computed(function() {
            return firstname.value + ' ' + lastname.value;
        });
  
        function setName(){
              lastname.value = setInputname.value.value;
        }

        // function setFirstname(event){
        //     firstname.value = event.target.value;
        // }

        // function setLastname(event){
        //     lastname.value=event.target.value;
        // }

        //return {setFirstname, setLastname,userName:user};
        return{firstname,lastname,userName:user,setName,setInputname,age};
    }
}
</script>