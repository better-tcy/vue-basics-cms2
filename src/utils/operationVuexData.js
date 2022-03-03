import store from '@/store/index'

// 缓存vuex数据
export function setVuexData() {
  // 在页面刷新时将vuex里的信息保存到sessionStorage里
  window.addEventListener('beforeunload', () => {
    const { state } = store
    sessionStorage.setItem(
      'store',
      JSON.stringify({
        menuData: state.menuData
      })
    )
  })
}

// 获取缓存数据 合并vuex
export function getDataMergeVuex() {
  if (sessionStorage.getItem('store')) {
    store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem('store'))))
    // 给vuex赋值成功后  清空sessionStorage
    sessionStorage.clear()
  }
}
