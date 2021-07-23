import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/alojamiento',
    name: 'Alojamiento',
    component: () => import('@/views/Alojamiento.vue')
  },
  {
    path: '/transporte',
    name: 'Transporte',
    component: () => import('@/views/Transporte.vue')
  },
  {
    path: '/excursiones',
    name: 'Excursiones',
    component: () => import('@/views/Excursiones.vue')
  },
  {
    path: '/invetario',
    name: 'Inventario',
    component: () => import('@/views/Inventario.vue')
  },
  {
    path: '/playlist',
    name: 'Playlist',
    component: () => import('@/views/Playlist.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
