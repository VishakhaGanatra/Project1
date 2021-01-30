<template>
<div>
<employee-new :posts="posts"></employee-new>
</div>
</template> 


<script>
import EmployeeNew from './EmployeeNew.vue';
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
     Object.keys(res.data).forEach(key=>{
       res.data[key].uid = key;
       this.posts.push(res.data[key])
     })
    })
    
  },
  // methods:{
  //   submitData(){
  //     axios.post('',data).then().catch()
  //   }
  // }
}
</script>