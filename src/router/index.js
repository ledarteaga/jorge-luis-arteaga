import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/project/:id',
    name: 'Project',
    component: () => import(/* webpackChunkName: "projecto" */ '../views/Project.vue')
  }

  
  
]

const router = new VueRouter({
  routes
})

export default router
