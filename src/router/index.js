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
  }
});

export default router;