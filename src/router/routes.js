export default [
  {
    path: '/',
    redirect: '/center'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login/login.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('../pages/center/center.vue')
  }
]
