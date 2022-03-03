import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import mode1 from './modules/mode1'

Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    mode1
  }
})

export default store
