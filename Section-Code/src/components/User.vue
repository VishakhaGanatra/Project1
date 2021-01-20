<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>{{age}}</p>
        <button @click="change">Change</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" @changeName="name=$event" :userAge="age" ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @changedAge="age=$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data: function(){
            return {
                name:'max',
                age:21
            };
        },
        methods:{
            change(){
                this.name='vishakha';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
