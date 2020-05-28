import Home from "./components/HomePage";
import ForMember from "./components/ForMemberPage";
import About from "./components/AboutUsPage";
import Contact from "./components/ContactUsPage";
import Question from "./components/QandAPage";
import Foreigner from "./components/ForVisitors";
import Gallery from "./components/GalleryPage";
import Timeline from "./components/YearTimelinePage";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
},
    {
        path: '/formember',
        component: ForMember
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
    },
    {
        path: '/WelcomeToJapan',
        component: Foreigner
    },
    {
        path: '/gallery',
        component: Gallery
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
