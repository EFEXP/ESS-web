import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Home from './components/HomePage.vue'
import About from './components/AboutUsPage.vue'
import Contact from './components/ContactUsPage.vue'
import ForMember from './components/ForMemberPage.vue'
import Question from './components/QandAPage.vue'
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = true

const routes = [
  { path: '/', component:Home },
  { path: '/formember', component:ForMember },
  { path: '/about', component:About },
  { path: '/contact', component:Contact },
  { path: '/question', component:Question},
  { path: '*', component:Home }
]

const appRouter = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router : appRouter
}).$mount('#app')
