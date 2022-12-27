import './bootstrap';
import '../css/app.css';

import { createApp } from "vue";
import App from "./components/App.vue"
import router from "./router";
import axios from "axios";
import vueAwesomeSidebar from 'vue-awesome-sidebar';
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'


const app =createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.use(vueAwesomeSidebar)
app.mount('#app')

// createApp(App).use(router).mount("#app")

