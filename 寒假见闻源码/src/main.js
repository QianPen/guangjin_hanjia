import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import { setTheme, listenForThemeChanges } from './utils/theme'

// 初始化主题
setTheme()

// 创建应用实例
const app = createApp(App)

// 使用 Vant 组件库
app.use(Vant)

// 挂载应用
app.mount('#app')

// 监听系统主题变化
listenForThemeChanges()
