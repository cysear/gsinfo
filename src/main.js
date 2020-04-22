import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import qs from 'qs';
import store from './store'
import bus from './utils/bus'
// import './permission' // permission control
import './icons/index.js' // icon

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Group, Cell, DatetimePlugin, CloseDialogsPlugin, ConfigPlugin, BusPlugin, LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'

Vue.use(BusPlugin)
Vue.use(AlertPlugin )
Vue.use(ConfirmPlugin )
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.use(ElementUI);
sync(store, router)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
