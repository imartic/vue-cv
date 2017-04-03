import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from '@/App'
import About from '@/components/About'

Vue.use(Router)
Vue.use(VueMaterial)
Vue.use(Vuetify)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/about', name: 'About', component: About }
  ]
})
