import Home from "./components/HomePage";
import About from "./components/AboutUsPage";
import Contact from "./components/ContactUsPage";
import Question from "./components/QandAPage";
import Timeline from "./components/YearTimelinePage";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
},

    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/question',
        component: Question
    }, {
        path: '/timeline',
        component: Timeline
    },
    {
        path: '*',
        component: Home
    }
]

const router = new VueRouter({
    routes
})

export default router
