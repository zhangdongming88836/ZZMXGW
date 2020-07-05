import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myheader from "./components/myheader.vue"
import myfooter from "./components/myfooter.vue"
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'ELy6uokzhQix6yGqoQh8qngMim0tsGEk'    //这个地方是官方提供的ak密钥//ELy6uokzhQix6yGqoQh8qngMim0tsGEk
})
Vue.config.productionTip = false
Vue.component("my-header",myheader);
Vue.component("my-footer",myfooter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
