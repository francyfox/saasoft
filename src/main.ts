import { Icon } from 'lucide-vue-next'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

import './style.css'
import App from './App.vue'

const pinia = createPinia()

const app = createApp(App)

app.component('Icon', Icon)
app.use(pinia)

app.mount('#app')
