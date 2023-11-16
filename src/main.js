import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


import VueSocials from 'vue-socials';

const app = createApp(App)
app.use(VueSocials)