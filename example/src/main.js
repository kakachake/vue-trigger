import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import trigger from 'vue-trigger'

createApp(App).use(router).use(trigger).mount('#app')
