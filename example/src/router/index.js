import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/example1'
  },
  {
    path: '/example1',
    name: 'example1',
    component: () => import('../views/trTest/example1.vue')
  },
  {
    path: '/example2',
    name: 'example2',
    component: () => import('../views/trTest/example2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
