import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import 'amfe-flexible/index.js'
import '@/style/index.scss'

const app = createApp(App)
app.use(router)

app.mount('#app')
