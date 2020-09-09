import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: false,
    count: 10
  },
  getters:{ //computed
    count: (state)=>state.count + 10
  },
  mutations: {//更改state的值
    SET_isCollapse(state){
      state.isCollapse = !state.isCollapse
      console.log(state.isCollapse)
    },
    SET_count(state,value){
      state.count = value
      console.log(state.count)
    }
  },
  actions: {},
  modules: {}
});
