import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import HeaUi from '../packages/index'
import store from './store'
Vue.component('demo-block', demoBlock);
Vue.use(HeaUi);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
