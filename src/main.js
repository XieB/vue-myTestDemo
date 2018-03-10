// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import axios from 'axios'
import Qs from 'qs'

var axios_instance = axios.create({
  baseURL: 'http://127.0.0.1',
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }]
})

Vue.config.productionTip = false
Vue.use(VueWechatTitle)
Vue.prototype.$http = axios_instance
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
