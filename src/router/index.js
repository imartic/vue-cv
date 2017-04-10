import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from '@/App'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
  routes: [
    { path: '/about', name: 'About', component: About, meta:{title:'IM'} },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio, meta:{title:'Portfolio | IM'} },
    { path: '/contact', name: 'Contact', component: Contact, meta:{title:'Contact me | IM'} },
    { path: '/', redirect:'/about' },
  ]
})

router.afterEach(route => {
	document.title = route.meta.title;
})

export default router