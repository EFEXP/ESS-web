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
import Foreigner from './components/ForVisitors.vue'
Vue.use(Vuetify,{
  theme: {
    primary:"#FF9800",
    secondary:"#FFE0B2",
    accent: "#FF5252"
  }
})
Vue.use(VueRouter)
Vue.config.productionTip = true

const routes = [
  { path: '/', component:Home },
  { path: '/formember', component:ForMember },
  { path: '/about', component:About },
  { path: '/contact', component:Contact },
  { path: '/question', component:Question},
  { path: '/WelcomeToJapan', component:Foreigner},
  { path: '*', component:Home }
]

const appRouter = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router : appRouter
}).$mount('#app')
