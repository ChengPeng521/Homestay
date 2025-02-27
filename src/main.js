import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


axios.defaults.baseURL= "http://localhost:9000"
Vue.prototype.path= "http://localhost:9000"
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
