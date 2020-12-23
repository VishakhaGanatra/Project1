<!-- if you have style of section in every file then create new file nd write style in this and called slot inside template then called slot in every file where you ant this style -->

<template>
<div>
<header>
<slot name="header"></slot>            <!-- ir we want to create more then one solt -->

</header>
<slot></slot>

</div>


</template>



<style scoped>     
  div{
    margin:30px;
    padding:15px;
    text-align:center;
    border:2px solid black; 

  }
  header{
      color:blue;
  }



</style>