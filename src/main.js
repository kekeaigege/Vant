import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'
Vue.config.productionTip = false
import Vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
Vue.use(Vant);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
