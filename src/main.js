import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// import {request} from './network/request'
// request({
//   url:'/test'
// }).then(res=>{
//   console.log(res);
// })
