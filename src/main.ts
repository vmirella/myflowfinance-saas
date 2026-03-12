import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './app/router'
import { useAuthStore } from '@/modules/auth/store/auth.store'

import './styles/style.css'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const authStore = useAuthStore()
authStore.restoreSession()

app.use(router)

app.mount('#app')
