import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Home from './components/HomePage.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/Home', component:Home },
  { path: '*', component:Home }
]

const appRouter = new VueRouter({routes})

new Vue({
  render: h => h(App)
  ,
  router : appRouter
}).$mount('#app')
