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
  mode: 'history',
  routes: [
    { path: '/', name: 'About', component: About },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
  ]
})
export default router