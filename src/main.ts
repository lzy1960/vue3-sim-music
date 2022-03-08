import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'normalize.css'
import 'element-plus/dist/index.css'
import './assets/fonts/iconfont.css'
import { createPinia } from 'pinia'
import router from './router/index';
import './styles/global.scss'

export const app = createApp(App)
app.use(ElementPlus)
  .use(createPinia())
  .use(router)
  .mount('#app')
