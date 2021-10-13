const loginRouter = [
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/login/Login.vue'], resolve),
  }
]

export default loginRouter