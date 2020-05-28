import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.config.productionTip = true




new Vue({
  vuetify,
  router,
  render: h => h(App),

}).$mount('#app')
