<template>
<div>
<employee-new :posts="posts"></employee-new>

</div>
</template>


<script>
import EmployeeNew from './components/EmployeeNew.vue';
import axios from 'axios';

export default{
  components:{
    EmployeeNew
  },
 data:()=>({
  posts:[]
  }),
  mounted(){
    axios.get('https://employeedetails-73030-default-rtdb.firebaseio.com/data.json').then(res=>{
      this.posts = res.data;
    })
    
  },
  // methods:{
  //   submitData(){
  //     axios.post('',data).then().catch()
  //   }
  // }
}
</script>