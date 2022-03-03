const twoRouter = [
  {
    path: '/content/two/one',
    name: 'twoOne',
    component: () => import('@/views/content/two/TwoOne.vue')
  },
  {
    path: '/content/two/two',
    name: 'twoTwo',
    component: () => import('@/views/content/two/TwoTwo.vue')
  }
]

export default twoRouter
