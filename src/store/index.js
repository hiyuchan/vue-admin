import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
  },
  getters:{ //computed
  },
  mutations: {//更改state的值
    SET_isCollapse(state){
      state.isCollapse = !state.isCollapse;
      sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
    }
  },
  actions: {},
  modules: {}
});
