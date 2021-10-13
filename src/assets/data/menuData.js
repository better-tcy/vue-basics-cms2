// 这只是模拟菜单数据 ps:真正的菜单数据 是根据登录的用户 后台返回的
const menuData = [
  {
    name: '首页',
    path: '/content/home',
  },
  {
    name: 'one',
    path: '/content/one',
    children: [
      {
        name: 'oneOne',
        path: '/content/one/one',
      }, {
        name: 'oneTwo',
        path: '/content/one/two',
      }
    ]
  },
  {
    name: 'two',
    path: '/content/two',
    children: [
      {
        name: 'twoOne',
        path: '/content/two/one',
      }, {
        name: 'twoTwo',
        path: '/content/two/two',
      }
    ]
  }
]

export default menuData