import Vue from 'vue'
import Router from 'vue-router'
import auth from "./auth";
import HomePage from "./pages/home-page";
import VueRouter from "vue-router";

Vue.use(Router)

function requireAuth(to, from, next) {
    if (!auth.loggedIn){
        next({
            path: '/login',
            query: {redirect: to.fullPath}
        })
    }
    else{
        next()
    }
}

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/login-page'),
        beforeEnter: requireAuth},
    {
        path: '/logout',
        redirect: {name: 'Home',}
    },
    {
        path: '/profile/:id',
        name: 'Profile',
        component: () => import('./pages/profile-page'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('./pages/register-page'),
    },
    {
        path: '/addAdvert/:userID',
        name: 'AddAdvert',
        component: () => import('./pages/add-advert-page'),
    },
    {
        path: '/adverts/:id',
        name: 'AdvertDetails',
        component: () => import('./pages/advert-details-page'),
    },
    {
        path: '*',
        redirect: {name: 'Home',}
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
