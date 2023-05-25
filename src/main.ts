import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { createPinia } from 'pinia'
import router from './router'
const pinia = createPinia()

createApp(App).use(router).use(Antd).use(pinia).mount('#app')
