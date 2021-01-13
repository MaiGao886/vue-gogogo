import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/home/:id',
        component: () => import('../views/home/Home.vue')
    },
    {
        path: '/',
        component: () => import('../views/login/Login')
    }
]

const router = new Router({
    routes
})


export default router;
