import * as TYPES from './types'

const mutations = {
  // 保存对应权限的所有菜单数据
  [TYPES.SET_MENU_DATA](state, menuData) {
    state.menuData = menuData
  },
}

export default mutations