import { createSSRApp } from 'vue';
import App from '@/App.vue'
import '@/styles/global.scss'
import ElementPlus from 'element-plus'
import 'normalize.css'
import '@/assets/fonts/iconfont.css'
import { createPinia } from 'pinia'
import { createRouter } from './router/index';

export function createApp () {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(ElementPlus)
    .use(createPinia())
    .use(router)

  return { app, router }
}
