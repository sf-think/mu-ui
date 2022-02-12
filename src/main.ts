import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import Murphy from './components/Murphy.vue'
import Murphy2 from './components/Murphy2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Murphy},
        {path: '/x', component: Murphy2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')