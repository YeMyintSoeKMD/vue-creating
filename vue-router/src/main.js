import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 1. Define components 
// const Index = () => import('./App.vue')
// const About = () => import('./pages/About.vue')
// const Contact = () => import('./pages/Contact.vue')

// 2. Define routes
// const routes = [
//     {path: '/', component: () => import('./App.vue')},
//     {path: '/about', component: () => import('./pages/About.vue')},
//     {path: '/contact', component: () => import('./pages/Contact.vue')},
// ]

//3. Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: () => import('./pages/Index.vue')},
        {path: '/about', component: () => import('./pages/About.vue')},
        {path: '/contact', component: () => import('./pages/Contact.vue')},
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
