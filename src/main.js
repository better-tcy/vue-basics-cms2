import Vue from 'vue'

import MyUI from 'vue-component-storehouse'
import 'vue-component-storehouse/lib/vue-component-storehouse.css';

import App from './App.vue'
import router from './router'
import store from './store'

import {
  myMessage,
  myFreeze,
  myBase64,
} from '@/utils/public'

Vue.prototype.$myMessage = myMessage

Vue.prototype.$myFreeze = myFreeze

Vue.prototype.$myBase64 = myBase64

Vue.config.productionTip = false

Vue.use(MyUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
