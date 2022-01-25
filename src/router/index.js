import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import MenuDetail from '../views/MenuDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import BerhasilDipesan from '../views/BerhasilDipesan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu/:id',
    name: 'MenuDetail',
    component: MenuDetail
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
  {
    path: '/berhasil-dipesan',
    name: 'BerhasilDipesan',
    component: BerhasilDipesan
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
