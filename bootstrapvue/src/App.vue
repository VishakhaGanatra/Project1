<template>
<b-container>
<b-alert variant="warning" show>Hello everyone</b-alert>
<hr>
<b-alert variant="info" show>Hello everyone</b-alert>
<hr>
<b-alert variant="success" :show="success_show" fade>Hello everyone</b-alert>
<span @click="toggle">toggle </span>
<hr>

<b-alert variant="danger" dismissible show>Hello everyone</b-alert>
<hr>
<b-alert variant="danger" show @dismissed="dismissed_show" dismissible>Hello everyone</b-alert>

<hr>
<h2>Avatar</h2>
<b-avatar src="https://placekitten.com/300/300" class="mr-2"></b-avatar>
<b-avatar src="https://placekitten.com/300/300" class="mr-2" size="24px"></b-avatar>
<b-avatar icon="star-fill" size="3rem" ></b-avatar><br>
<b-avatar variant="info" class="mr-2"></b-avatar>
<b-avatar variant="warning" rounded class="mr-2"></b-avatar>
<b-avatar variant="danger" square class="mr-2"></b-avatar>
<b-avatar variant="info"  text="pnk" class="align-baseline"></b-avatar>
vishakha ganatra<br><hr>
<b-avatar badge></b-avatar>
<b-avatar badge badge-left class="mr-2"></b-avatar>
<b-avatar badge badge-top class="mr-2"></b-avatar>
<b-avatar badge  class="mr-2">
<template v-slot:badge>
4
</template>
</b-avatar>
<hr>
<b-avatar variant="info" button  @click="button" class="align-baseline"></b-avatar>
<hr><hr>
<h2>Badge</h2>
<b-badge>hello</b-badge>
<b-badge variant="success" class="mr-2">hello</b-badge>
<b-badge variant="info" class="mr-2">hello</b-badge>
<b-badge variant="danger" class="mr-2">hello</b-badge>
<b-badge variant="success" pill class="mr-2">hello</b-badge>
<b-badge variant="info" pill class="mr-2">hello</b-badge>
<hr>
<b-badge v-for="(skill,index) in skills" variant="info" class="mr-2" :key="index" @click="remove">{{skill}}</b-badge>
<hr>
<h2>Breadcrumb</h2>
<b-breadcrumb>
<b-breadcrumb-item href="#">Home</b-breadcrumb-item>
<b-breadcrumb-item href="#">About</b-breadcrumb-item>
<b-breadcrumb-item href="#">Carrier</b-breadcrumb-item>
</b-breadcrumb>
<hr>
<b-breadcrumb :items="items"></b-breadcrumb>
<hr>
<h2>Button</h2>
<b-button class="mr-2">Button</b-button>
<b-button variant="success" class="mr-2">Button</b-button>
<b-button variant="info" class="mr-2">Button</b-button>
<hr>
<b-button class="mr-2" size="sm" disabled>Button</b-button>
<b-button class="mr-2" size="lg" variant="danger" @click="hello">Button-danger</b-button>
<b-button class="mr-2" variant="info" href="https://google.com" target="_blank">Button-link</b-button>
<hr>
<b-button  class="mr-2" variant="outline-danger" pill>Button</b-button>
<b-button class="mr-2" variant="outline-info">Button</b-button>
<hr>
<b-button variant="danger" block>Button</b-button><br>
<b-row>
<b-col>
<b-button variant="info" block square>Button</b-button>
</b-col>
<b-col>
<b-button variant="primary" block pill>Button</b-button>
</b-col>
</b-row>
<h2>Button group</h2>
<b-button-group>
<b-button>button 1</b-button>
<b-button>button 2</b-button>
<b-button>button 3</b-button>
</b-button-group>
<hr>
<b-button-group size="lg">
<b-button variant="primary">button 1</b-button>
<b-button variant="danger">button 2</b-button>
<b-button variant="warning">button 3</b-button>
</b-button-group>
<hr>
<b-button-group vertical>
<b-button variant="primary">button 1</b-button>
<b-button variant="danger">button 2</b-button>
<b-button>button 3</b-button>
</b-button-group>
<hr>
<b-button-group>
<b-button>home</b-button>
<b-dropdown right text="menu">
<b-dropdown-item>home</b-dropdown-item>
<b-dropdown-item>home</b-dropdown-item>
<b-dropdown-divider></b-dropdown-divider>                                                               
<b-dropdown-item>home</b-dropdown-item>
</b-dropdown>
<b-dropdown right split text="Split Menu">
<b-dropdown-item>home</b-dropdown-item>
<b-dropdown-item>home</b-dropdown-item>
<b-dropdown-divider></b-dropdown-divider>
<b-dropdown-item>home</b-dropdown-item>
</b-dropdown>
</b-button-group>
<hr>
<h2>Button toolbar</h2>
<b-button-toolbar> 
<b-button-group>
<b-button>&laquo;</b-button>
<b-button>&lsaquo;</b-button>
</b-button-group>

<b-button-group class="ml-2 mr-2">
<b-button>1</b-button>
<b-button>2</b-button>
<b-button>3</b-button>
</b-button-group>

<b-button-group>
<b-button>&laquo;</b-button>
<b-button>&lsaquo;</b-button>
</b-button-group>
</b-button-toolbar>
<hr>
<b-button-toolbar>
<b-button-group class="mx-1">
<b-button>1</b-button>
<b-button>2</b-button>
<b-button>3</b-button>
</b-button-group>

<b-button-group>
<b-dropdown right split text="menu" class="mx-1">
<b-dropdown-item>home</b-dropdown-item>
<b-dropdown-item>home</b-dropdown-item>
<b-dropdown-divider></b-dropdown-divider>
<b-dropdown-item>home</b-dropdown-item>
</b-dropdown>
</b-button-group>

<b-button-group class="mx-1">
<b-button>1</b-button>
<b-button>2</b-button>
</b-button-group>
</b-button-toolbar>
<hr>
<h2>calendar</h2>
<b-row>
<b-col>
<b-calendar locale="en-US"></b-calendar>
</b-col>
<b-col>
<b-calendar locale="en-US" disabled></b-calendar>
</b-col>
<b-col>
<b-calendar locale="en-US" readonly></b-calendar>
</b-col>

</b-row>

























</b-container>
</template>

<script>
export default{
  data(){
    return{
      success_show:false,
      skills:['php','js','python','java','android'],
      items:[{
        text:'home',
        href:'#'
      },
      {
        text:'about',
        href:'#'
      },
      {
        text:'carrier',
        href:'#'
      }
      ]
    };
  },
  methods:{
    toggle(){
      this.success_show=!this.success_show;
    },
    dismissed_show(){
      console.log('hi');
    },
    button(){
      alert('hello');
    },
    remove(value){
      this.skills.splice(value,1);
    },
    hello(){
      alert('hello');
    }
  }
}
</script>