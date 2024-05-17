import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import '@fontsource-variable/inter'

import '@/style.css'

createApp(App).use(router).mount('#app')
