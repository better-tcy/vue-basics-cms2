import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import store from './store'

import { myMessage, myFreeze, myBase64 } from '@/utils/public'

Vue.prototype.$myMessage = myMessage

Vue.prototype.$myFreeze = myFreeze

Vue.prototype.$myBase64 = myBase64

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
