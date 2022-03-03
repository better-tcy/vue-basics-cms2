const oneRouter = [
  {
    path: '/content/one/one',
    name: 'oneOne',
    component: () => import('@/views/content/one/OneOne.vue')
  },
  {
    path: '/content/one/two',
    name: 'oneTwo',
    component: () => import('@/views/content/one/OneTwo.vue')
  }
]

export default oneRouter
