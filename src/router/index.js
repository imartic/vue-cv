import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from '@/App'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
  routes: [
    { path: '/', name: 'About', component: About, redirect:'/about' },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
  ]
})
export default router