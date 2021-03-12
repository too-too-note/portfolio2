import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Title from '../views/mogura/Title.vue'

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
    path: '/title',
    name: 'Title',
    component: () => import(/* webpackChunkName: "about" */ '../views/mogura/Title.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
