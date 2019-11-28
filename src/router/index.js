import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token') !== null) next('/dashboard')
        else next()
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token') === null) next('/')
        else next()
    }
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token') === null) {
        next('/')
      } else { 
        if ((localStorage.getItem('roles').split(',')).includes('ROLE_ADMIN')) {
          next()
        } else {
          next('/dashboard')
        }
      }
    }
  },
  {
    path: '/funcionarios',
    name: 'funcionarios',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token') === null) {
          next('/')
        } else { 
          if ((localStorage.getItem('roles').split(',')).includes('ROLE_ADMIN')) {
            next()
          } else {
            next('/dashboard')
          }
        }
    }
  },
  {
    path: '/apontamentos',
    name: 'apontamentos',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token') === null) {
        next('/')
      } else { 
        if ((localStorage.getItem('roles').split(',')).includes('ROLE_USER')) {
          next()
        } else {
          next('/dashboard')
        }
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
