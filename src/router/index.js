import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Layout from '@/components/Layout'

Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    { path: '/', name: 'Layout', component: Layout }
  ]
})
