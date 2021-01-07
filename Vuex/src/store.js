import {createStore} from 'vuex';


const countermodule={
    namespaced : true,
    state(){
        return{
            counter:0
        }; 
    },
    mutations:{
        increment(state){
            state.counter ++;
        },
        increase(state,payload){
            state.counter = state.counter + payload.value;
        },
    },
    actions:{
        increment(context){
            setTimeout(function() {
                context.commit('increment');
            } ,5000)

        },
        increase(context,payload){
            context.commit('increase',payload);
        },
    },
    getters:{
        finalcounter(state){
            return state.counter * 2;
        },
        Normal(_,getters){
            const finalcounter = getters.finalcounter;   // const finalcounter= state.counter*2
            if(finalcounter < 0){
                return 0;
            } 
            
            if(finalcounter > 100){
                return 100;
            }
            return finalcounter;
        },
    }

}

const store = createStore({
     modules:{
         numbers: countermodule
     },
    state(){
        return{
           authislog : false
        };
    },
    mutations:{
        
        setAuth(state,payload){
            state.authislog = payload.isAuth;
        }
    },
    actions:{
        
        login(context){
            context.commit('setAuth',{isAuth:true});
        },
        logout(context){
            context.commit('setAuth',{isAuth:false});
        }
    },
    getters:{
        
        Userisauth(state){
            return state.authislog;
        }
    }
 });



 export default store;

