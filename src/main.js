import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs';
import store from './store'
import './permission' // permission control
import './icons/index.js' // icon

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
