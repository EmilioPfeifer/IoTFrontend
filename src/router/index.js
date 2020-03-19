import Vue from 'vue'
import Router from 'vue-router'

import Repot from '../components/Reportes'
import Disps from '../components/Dispositivos'
import Dash from '../components/Dash'
import Alert from '../components/Alertas'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Reportes',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Repot//() => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/Dispositivos',
            name: 'Dispositivos',
            component: Disps
        },
        {
            path: '/Dashboard',
            name: 'Tablas',
            component: Dash
        },
        {
            path: '/Alertas',
            name: 'Alerta',
            component: Alert
        }
    ]
})