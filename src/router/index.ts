import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Game1 from '../views/games/Game1.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import(/* webpackChunkName: "about" */ '../views/Skill.vue')
  },
  {
    path: '/game1',
    name: 'Game1',
    component: () => import(/* webpackChunkName: "about" */ '../views/games/Game1.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
