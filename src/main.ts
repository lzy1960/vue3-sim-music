import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/global.scss'
import ElementPlus from 'element-plus'
import 'normalize.css'
import '@/assets/fonts/iconfont.css'
import { createPinia } from 'pinia'
import router from './router/index';

export const app = createApp(App)
app.use(ElementPlus)
  .use(createPinia())
  .use(router)
  .mount('#app')
