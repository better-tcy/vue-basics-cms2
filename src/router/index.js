import Vue from "vue";
import VueRouter from "vue-router";

import loginRouter from './login/login'
import homeRouter from "./content/home";
import oneRouter from './content/one'
import twoRouter from './content/two'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/login' //重定向
},

...loginRouter,

{
  path: '/content',
  name: 'content',
  component: () => import('@/components/frame/FrameWork.vue'),
  children: [
    {
      path: '/content',
      redirect: '/content/home'
    },
    ...homeRouter,
    ...oneRouter,
    ...twoRouter
  ]
}

];

var router = new VueRouter({
  routes
})



// 路由导航守卫 前置
router.beforeEach((to, from, next) => {
  // console.log('触发导航前置守卫')
  // console.log('当前离开的导航', from.path)
  // console.log('将要去的导航', to.path)

  let isNext = false

  // 允许直接放行的页面path数组
  const nextPathArr = ['/login']

  for (let item of nextPathArr) {
    if (to.path === item) {
      isNext = true
      break
    }
  }

  if (isNext) {
    next();
  } else {

    localStorage.getItem('token') ? next() : next({
      path: '/login',
    })

    // 下面这个方法有些问题(待优化) 问题:登录成功之后 在whole页面刷新浏览器 也会再次跳转到登录页
    // 因为直接刷新浏览器 from.path === '/' 
    // // 直接在浏览器地址栏输入path访问  from.path === '/' 
    // if (from.path !== '/' && localStorage.getItem('token')) {
    //   next();
    // } else {
    //   // 防止在浏览器url中直接输入whole中的页面path
    //   next({
    //     path: '/login',
    //   })
    // }
  }
});

export default router;