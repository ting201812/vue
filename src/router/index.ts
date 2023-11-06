import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/pages/Main/index.vue'),
  },
  {
    path: '/cesium',
    name: '地图',
    component: () => import('@/pages/Cesium/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
