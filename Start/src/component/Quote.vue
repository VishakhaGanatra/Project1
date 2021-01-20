<template>
<div class="col-lg-3 col-md-4 col-sm-6">
<div class="panel panel-default">
<div class="panel-body quote">
<slot></slot>
</div>
</div>
</div>
</template>


<style>
.panel-body{
    font-size:24px;
    color:red;
},
.quote{
    cursor:pointer;
},
.quote:hover{
    background-color:black;
}
</style>