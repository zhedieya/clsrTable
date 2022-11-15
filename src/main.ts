import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { router } from './router'

// 创建应用 返回对应的实例对象
const app = createApp(App)
  
// 安装 vue-router 插件
app.use(router)
// 调用mount方法
app.mount('#app')
