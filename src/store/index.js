import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import user from './modules/user'
Vue.use(Vuex)

const store=new Vuex.Store({
  modules:{
    user
  },
  state:{
    num:0
  },
  getters:{

  },
  mutations:{ //只能通过mutations来修改state状态
     'CHANGE'(state,action){
        console.log(state,action)
     }
  },
  actions:{
      
  }
})
window.store=store
export default store