import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/Home.vue')
  },
  {
    name: 'searchList',
    path: '/searchList',
    component: () => import('@/pages/SearchList.vue')
  },
  {
    name: 'songInfo',
    path: '/songInfo/:id',
    component: () => import('@/pages/SongInfo.vue')
  },
  {
    name: 'playlist',
    path: '/playlist/:id',
    component: () => import('@/pages/Playlist.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
