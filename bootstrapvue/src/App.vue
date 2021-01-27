<template>
  <b-container>
    <b-alert variant="warning" show>Hello everyone</b-alert>
    <hr />
    <b-alert variant="info" show>Hello everyone</b-alert>
    <hr />
    <b-alert variant="success" :show="success_show" fade
      >Hello everyone</b-alert
    >
    <span @click="toggle">toggle </span>
    <hr />

    <b-alert variant="danger" dismissible show>Hello everyone</b-alert>
    <hr />
    <b-alert variant="danger" show @dismissed="dismissed_show" dismissible
      >Hello everyone</b-alert
    >

    <hr />
    <h2>Avatar</h2>
    <b-avatar src="https://placekitten.com/300/300" class="mr-2"></b-avatar>
    <b-avatar
      src="https://placekitten.com/300/300"
      class="mr-2"
      size="24px"
    ></b-avatar>
    <b-avatar icon="star-fill" size="3rem"></b-avatar><br />
    <b-avatar variant="info" class="mr-2"></b-avatar>
    <b-avatar variant="warning" rounded class="mr-2"></b-avatar>
    <b-avatar variant="danger" square class="mr-2"></b-avatar>
    <b-avatar variant="info" text="pnk" class="align-baseline"></b-avatar>
    vishakha ganatra<br />
    <hr />
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-left class="mr-2"></b-avatar>
    <b-avatar badge badge-top class="mr-2"></b-avatar>
    <b-avatar badge class="mr-2">
      <template v-slot:badge>
        4
      </template>
    </b-avatar>
    <hr />
    <b-avatar
      variant="info"
      button
      @click="button"
      class="align-baseline"
    ></b-avatar>
    <hr />
    <hr />
    <h2>Badge</h2>
    <b-badge>hello</b-badge>
    <b-badge variant="success" class="mr-2">hello</b-badge>
    <b-badge variant="info" class="mr-2">hello</b-badge>
    <b-badge variant="danger" class="mr-2">hello</b-badge>
    <b-badge variant="success" pill class="mr-2">hello</b-badge>
    <b-badge variant="info" pill class="mr-2">hello</b-badge>
    <hr />
    <b-badge
      v-for="(skill, index) in skills"
      variant="info"
      class="mr-2"
      :key="index"
      @click="remove"
      >{{ skill }}</b-badge
    >
    <hr />
    <h2>Breadcrumb</h2>
    <b-breadcrumb>
      <b-breadcrumb-item href="#">Home</b-breadcrumb-item>
      <b-breadcrumb-item href="#">About</b-breadcrumb-item>
      <b-breadcrumb-item href="#">Carrier</b-breadcrumb-item>
    </b-breadcrumb>
    <hr />
    <b-breadcrumb :items="items"></b-breadcrumb>
    <hr />
    <h2>Button</h2>
    <b-button class="mr-2">Button</b-button>
    <b-button variant="success" class="mr-2">Button</b-button>
    <b-button variant="info" class="mr-2">Button</b-button>
    <hr />
    <b-button class="mr-2" size="sm" disabled>Button</b-button>
    <b-button class="mr-2" size="lg" variant="danger" @click="hello"
      >Button-danger</b-button
    >
    <b-button
      class="mr-2"
      variant="info"
      href="https://google.com"
      target="_blank"
      >Button-link</b-button
    >
    <hr />
    <b-button class="mr-2" variant="outline-danger" pill>Button</b-button>
    <b-button class="mr-2" variant="outline-info">Button</b-button>
    <hr />
    <b-button variant="danger" block>Button</b-button><br />
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
    <hr />
    <b-button-group size="lg">
      <b-button variant="primary">button 1</b-button>
      <b-button variant="danger">button 2</b-button>
      <b-button variant="warning">button 3</b-button>
    </b-button-group>
    <hr />
    <b-button-group vertical>
      <b-button variant="primary">button 1</b-button>
      <b-button variant="danger">button 2</b-button>
      <b-button>button 3</b-button>
    </b-button-group>
    <hr />
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
    <hr />
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
    <hr />
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
    <hr />
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
    <hr />
    <h2>card</h2>
    <b-card title="Card Title">
      <b-card-text>
        hello world
      </b-card-text>
      <b-button href="#" variant="outline-danger">button</b-button>
    </b-card>
    <hr />
    <div>
      <b-row>
        <b-col>
          <b-card
            img-src="https://placekitten.com/1000/300"
            img-alt="Card image"
            img-top
          >
            <b-card-text>
              hello i m vishakha ganatra. i'm from rajkot .. i m in last year of
              BE computer
            </b-card-text>
            <b-button href="#" variant="outline-danger">button</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            img-src="https://placekitten.com/1000/300"
            img-alt="Card image"
            img-bottom
          >
            <b-card-text>
              hello i m vishakha ganatra. i'm from rajkot .. i m in last year of
              BE computer
            </b-card-text>
            <b-button href="#" variant="outline-danger">button</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            img-src="https://placekitten.com/300/300"
            img-alt="Card image"
            img-left
            class="mb-4"
          >
            <b-card-text>
              hello i m vishakha ganatra. i'm from rajkot .. i in last year of
              BE computer
            </b-card-text>
            <b-button href="#" variant="outline-danger">button</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <hr />
    <b-row>
      <b-col>
        <b-card
          img-src="https://placekitten.com/900/200"
          img-alt="Card image"
          overlay
          text-variant="white"
        >
          <b-card-text>
            hello i m vishakha ganatra. i'm from rajkot .. i in last year of BE
            computer
          </b-card-text>
          <b-button href="#" variant="outline-danger">button</b-button>
        </b-card>
      </b-col>
    </b-row>
    <hr />
    <b-card-group deck>
      <b-card
        header="header"
        footer="footer"
        title="Title"
        bg-variant="primary"
      >
        <b-card-text>
          hello i m vishakha ganatra. i'm from rajkot .. i in last year of BE
          computer
        </b-card-text>
        <b-button href="#" variant="outline-danger">button</b-button>
      </b-card>

      <b-card
        header="card-header"
        footer="card-footer"
        title="Title"
        border-variant="success"
        header-bg-variant="info"
        header-text-variant="white"
      >
        <b-card-text>
          hello i m vishakha ganatra. i'm from rajkot .. i in last year of BE
          computer
        </b-card-text>
        <b-button href="#" variant="outline-danger">button</b-button>
      </b-card>
    </b-card-group>
    <hr />
    <b-carousel controls indicators fade img-width="1024" img-height="480">
      <b-carousel-slide
        caption="hello"
        text="this is first slide"
        img-src="https://picsum.photos/1024/480/?image=52"
      >
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=53">
        <h1>hello</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
      </b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=55">
      </b-carousel-slide>
    </b-carousel>
    <hr />
    <h2>collapse</h2>
    <b-button v-b-toggle.collapse-1 variant="primary">Toggle collapse</b-button>
    <b-collapse id="collapse-1">
      <b-card>
        <p class="card-text">hello</p>
        <b-button v-b-toggle.collapse-2 variant="primary"
          >Toggle collapse</b-button
        >
        <b-collapse id="collapse-2">
          <b-card>
            <p class="card-text">hello1</p>
          </b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
    <hr />
    <template>
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info"
              >Accordion 1</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>hello world</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </template>
    <h2>Dropdown</h2>
    <b-dropdown
      text="dropdown"
      left
      split
      variant="info"
      split-variant="danger"
      block
      ><!--left ,right, dropup, dropright-->
      <b-dropdown-item>item</b-dropdown-item>
      <b-dropdown-item>item</b-dropdown-item>
      <b-dropdown-item active>item</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item disabled>item</b-dropdown-item>
    </b-dropdown>
    <hr />
    <h2>embed</h2>
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
      allowfullscreen
    ></b-embed>
    <h2>Form</h2>
    <b-form>
      <b-form-input
        label="Your name:"
        placeholder="Enter name"
        type="text"
      ></b-form-input
      ><br />
      <b-form-input
        label="Your name:"
        placeholder="Enter name"
        type="text"
      ></b-form-input
      ><br />
      <b-button variant="primary">Submit</b-button>
    </b-form>
    <h2>Check-box</h2>
    <b-form-checkbox value="accepted"
      >i accept term & condition
    </b-form-checkbox>
    <hr />
    <b-form-checkbox-group>
      <b-form-checkbox value="1">1</b-form-checkbox>
      <b-form-checkbox value="2">2</b-form-checkbox>
      <b-form-checkbox value="3">3</b-form-checkbox>
      <b-form-checkbox value="4" disabled>4</b-form-checkbox>
    </b-form-checkbox-group>
    <hr />
    <b-form-checkbox-group
      v-model="selected"
      :options="options"
      value-field="item"
      text-field="name"
      disabled-field="notEnable"
    >
    </b-form-checkbox-group>
    {{ selected }}
    <hr />
    <b-form-checkbox-group
      stacked
      buttons
      button-variant="info"
      v-model="selected"
      :options="options"
      value-field="item"
      text-field="name"
      disabled-field="notEnable"
    >
      <b-form-invalid-feedback :state="state"
        >Please select two</b-form-invalid-feedback
      >
      <b-form-valid-feedback :state="state">thank you</b-form-valid-feedback>
    </b-form-checkbox-group>
    <hr />
    <b-form-checkbox-group
      switches
      v-model="selected"
      :options="options"
      value-field="item"
      text-field="name"
      disabled-field="notEnable"
    >
    </b-form-checkbox-group>
    {{ selected }}
    <hr />
    <h2>File</h2>
    <b-form-file placeholder="choose file"></b-form-file>
    <b-form-file plain accept="image/*"></b-form-file>
    <hr />
    <h2>Form group</h2>
    <b-form-group
      description="let us know ur name"
      label="Enter name"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      ><!--:state="state"-->

      <b-form-input v-model="name" trim></b-form-input>
    </b-form-group>
    <hr />
    <h2>Input</h2>
    name:<b-form-input
      v-model="username"
      :state="input_1_userstate"
      aria-describedby="input-1-valid input-1-invalid"
      id="input-1"
    ></b-form-input>
    <b-form-invalid-feedback id="input-1-invalid"
      >enter 3 charcter</b-form-invalid-feedback
    >
    <b-form-valid-feedback id="input-1-valid">your name</b-form-valid-feedback>
    <br />
    number:<b-form-input type="number"></b-form-input><br />
    email:<b-form-input type="email"></b-form-input><br />
    password:<b-form-input type="password"></b-form-input><br />
    time:<b-form-input type="time"></b-form-input><br />
    data:<b-form-input type="date"></b-form-input><br />
    tel:<b-form-input type="tel"></b-form-input><br />
    serach:<b-form-input type="serach"></b-form-input><br />
    url:<b-form-input type="url"></b-form-input><br />
    range:<b-form-input type="range"></b-form-input><br />
    color:<b-form-input type="color"></b-form-input>
    <hr />
    <h2>Radio</h2>
    <b-form-group label="radio button">
      <b-form-radio name="gender" value="male">Male</b-form-radio>
      <b-form-radio name="gender" value="female">female</b-form-radio>
    </b-form-group>
    <hr />
    <b-form-group label="radio-group">
      <b-form-radio-group
        name="radio-option"
        stacked
        buttons
        button-variant="primary"
      >
        <b-form-radio value="first">first</b-form-radio>
        <b-form-radio value="second">second</b-form-radio>
        <b-form-radio value="third">third</b-form-radio>
        <b-form-radio value="fourth">forth</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <hr />
    <h2>Rating</h2>
    <b-form-rating variant="success" stars="10" show-value></b-form-rating
    ><br />
    <b-form-rating
      icon-empty="heart"
      icon-half="heart-half"
      icon-full="heart-fill"
      color="red"
    ></b-form-rating>
    <hr />
    <h2>Select & option</h2>
    <b-form-select>
      <b-form-select-option>1</b-form-select-option>
      <b-form-select-option>2</b-form-select-option>
      <b-form-select-option>3 </b-form-select-option>
      <b-form-select-option>4</b-form-select-option>
    </b-form-select>
    <hr />
    <h2>spinbutton</h2>
    <b-form-spinbutton
      min="1"
      max="100"
      step="0.5"
      wrap
      placeholder="--"
    ></b-form-spinbutton
    ><!--inline| vertical -->
    <hr />
    <h2>Tags</h2>
    <label for="tags"></label>
    <b-form-tags
      input-id="tags"
      separator=",;"
      tag-pills
      tag-variant="primary"
      :limit="limit"
      remove-on-delete
    ></b-form-tags>
    <hr />
    <h2>Textarea</h2>
    <b-form-textarea
      placeholder="enter somthing"
      rows="3"
      max-rows="8"
      v-model="text"
      :state="text.length >= 10"
    ></b-form-textarea>
    <hr />
    <h2>TimePicker</h2>
    <b-form-timepicker
      locale="en"
      show-seconds
      placeholder="choose time"
      reset-button
      now-button
    ></b-form-timepicker>
    <hr />
    <h2>Image</h2>
    <b-img src="https://picsum.photos/1024/400/?image=41" fluid></b-img>
    <hr />
    <b-row>
      <b-col>
        <b-img
          thumbnail
          fluid
          src="https://picsum.photos/250/250/?image=54"
          alt="Image 1"
        ></b-img>
      </b-col>
      <b-col>
        <b-img
          thumbnail
          fluid
          src="https://picsum.photos/250/250/?image=58"
          alt="Image 2"
        ></b-img>
      </b-col>
      <b-col>
        <b-img
          thumbnail
          fluid
          src="https://picsum.photos/250/250/?image=59"
          alt="Image 3"
        ></b-img>
      </b-col>
    </b-row><hr>
    <h2>Input group</h2>
    <b-input-group prepend="$" append=".00">
    <b-form-input></b-form-input>
    </b-input-group><br>
    <b-input-group>
    <b-input-group-prepend> 
    <b-button variant="primary">Button</b-button>
    </b-input-group-prepend>
    <b-form-input></b-form-input>
    <b-input-group-append>
    <b-button variant="outline-primary">Button</b-button>
    </b-input-group-append>
    </b-input-group><hr>
    <h2>Jumbotron</h2>
    <b-jumbotron header="BootstrapVue" lead="This is BootstrapVue tutorial" bg-variant="info" text-variant="white" border-variant="success">
    <p>Hello everyone my name is ishakha ganatra ...</p>
    <b-button variant="success">Button</b-button>
    </b-Jumbotron><hr><hr>
    <h2>Media</h2>
    <b-card>
    <b-media>
    <template #aside>
    <b-img blank blank-color="black" width="64"></b-img>
    </template>
    <h5 class="mt-2">Media title</h5><br>
    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </b-media><br>
    <b-media right-align>
    <template #aside>
    <b-img blank blank-color="black" width="64"></b-img>
    </template>
    <h5 class="mt-2">Media title</h5><br>
    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </b-media>
    </b-card><hr>
    <h2>Modal</h2>
    <b-button v-b-modal.modal-1>Show modal </b-button>
    <b-modal id="modal-1" title="BootstrapVue" variant="primary">
    <p class="my-4">Hello </p>
    <b-button v-b-modal.modal-2>Show 2 modal</b-button>
    </b-modal>
    <b-modal id="modal-2" title="vishakha" variant="success">
    <p class="my-4">Hello</p>
    <b-button v-b-modal.modal-3>Show 3 modal</b-button>
    </b-modal>
    <b-modal id="modal-3" title="ishan" variant="danger">
    <p class="my-4">Helo</p>
    </b-modal><hr>
    <h2>Nav</h2>
    <b-nav pills>
    <b-nav-item href="#" active>hello</b-nav-item>
    <b-nav-item href="#">active</b-nav-item>
    <b-nav-item href="#">service</b-nav-item>
    <b-nav-item href="#">about</b-nav-item>
    </b-nav><hr>
    <h2>Navbar</h2>
    <b-navbar variant="info" type="dark">
    <b-navbar-brand href="#">Navbar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
    <b-nav-item href="#" active>hello</b-nav-item>
    <b-nav-item href="#">active</b-nav-item>
    <b-nav-item href="#">service</b-nav-item>
    <b-nav-item href="#">about</b-nav-item>
    </b-navbar-nav>
    </b-collapse>
    </b-navbar><hr>
    <h2>Pagination</h2>
    <b-pagination :per-page="perPage" v-model="currentPage" :total-rows="rows" first-text="first" prev-text="prev" next-text="next"></b-pagination><hr>
    <h2>Popover</h2>
    <b-button v-b-popover.hover.top="vishakha" title="popover title">Hover me</b-button><hr>
    <h2>Progressbar</h2>
    <b-progress :value="value" :max="max" show-progress show-value animated></b-progress><hr>
    <h2>Sidebar</h2>
    <b-button v-b-toggle.sidebar-1>Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="sidebar" shadow>
    <div class="px-3 py-2">
    <p>hello world </p>
    <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
    </div>
    </b-sidebar><hr>
    <h2>skeleton</h2>
    <b-skeleton></b-skeleton>
    <b-skeleton type="avtar"></b-skeleton>
    <b-skeleton type="button"></b-skeleton><br>
    <b-skeleton-table :rows="5" :columns="4" :table-props="{bordered : true , striped : true }">
    </b-skeleton-table><hr>
    <h2>spinner</h2>
    <div class="text-center">
    <b-spinner label="spinner"></b-spinner>
    <b-spinner label="spinner" variant="primary"></b-spinner>
    <b-spinner label="spinner" type="grow"></b-spinner>
    </div><hr>
    <h2>table</h2>
    <div>
    <b-table striped hover :items="item"></b-table></div><hr>
    <h2>Tabs</h2>
    <b-tabs content-class="mt-3">
    <b-tab title="first"><p>Hello first tab</p></b-tab>
    <b-tab title="second"><p>second tab </p></b-tab>
    </b-tabs><br>
    <b-card>
    <b-tabs card pills>
    <b-tab title="tab-1">
    <b-card-text>Hello </b-card-text>
    </b-tab>
    <b-tab title="tab-2">
    <b-card-text>hiiii</b-card-text>
    </b-tab>
    </b-tabs>
    </b-card><br>
    <b-card>
    <b-tabs card pills vertical>
    <b-tab title="tab-1">
    <b-card-text>Hello </b-card-text>
    </b-tab>
    <b-tab title="tab-2">
    <b-card-text>hiiii</b-card-text>
    </b-tab>
    </b-tabs>
    </b-card><hr>
    <h2>Toast</h2>
    <div class="p-3 bg-secondary progress-bar-striped" style="min-height:170px;">
    <b-button class="mb-2" variant="primary" @click="$bvToast.show('example-toast')">show toast</b-button>
    <b-toast id="example-toast" title="toast" static no-auto-hide>hello vishakha...</b-toast>
    </div><hr>
    <h2>Tooltip</h2>
    <b-button v-b-Tooltip.hover title="tooltip" >Hover me </b-button>





    


  

















  </b-container>
</template>

<script>
export default {
  data() {
    return {
      item:[
        {age:30 , first_name:'vish' , last_name:'ganatra'},
        {age:30 , first_name:'ishh' , last_name:'aaaa',_rowVariant:'danger'}
      ],
      value:45,
      max:100,
      rows:100,
      currentPage:1,
      perPage:10,
      text: "",
      limit: 5,
      success_show: false,
      skills: ["php", "js", "python", "java", "android"],
      items: [
        {
          text: "home",
          href: "#",
        },
        {
          text: "about",
          href: "#",
        },
        {
          text: "carrier",
          href: "#",
        },
      ],
      selected: [],
      options: [
        { item: "A", name: "option A" },
        { item: "B", name: "option B" },
        { item: "C", name: "option C", notEnable: true },
        { item: "D", name: "option D" },
      ],
      name: "",
      username: "",
    };
  },
  methods: {
    toggle() {
      this.success_show = !this.success_show;
    },
    dismissed_show() {
      console.log("hi");
    },
    button() {
      alert("hello");
    },
    remove(value) {
      this.skills.splice(value, 1);
    },
    hello() {
      alert("hello");
    },
  },
  computed: {
    state() {
      return this.selected.length === 2;
    },
    // stateOne(){
    //   return this.name.length>=4;
    // },
    //   invalidFeedback() {
    //       if (this.name.length >= 4) {
    //         return '';
    //       }else if(this.name.length > 0){
    //         return 'Enter at least 4 characters.';
    //       }
    //       return 'Please enter something'
    // },
    // validFeedback(){
    //   return this.stateOne ? 'thank you' : ''
    // }
  },
  input_1_userstate() {
    this.username.length > 3;
  },
};
</script>
