import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionApi from '@vue/composition-api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './icons'
import './router/premit'
// import './utils/kit.js'
//全局方法
import global from './utils/global.js'

Vue.use(ElementUI)
Vue.use(global)
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
