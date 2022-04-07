import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
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
},]

export function createRouter () {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
