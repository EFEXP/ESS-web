import Vue from 'vue'
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes:{
        light: {
            primary: "#FF9800",
            secondary: "#FFE0B2",
            accent: "#FF5252",
            error: '#b71c1c',
        }}
    },
    icons: {
        iconfont: 'fa',
    },
})
