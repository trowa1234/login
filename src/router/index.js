import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Register from '@/pages/register/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
  ]
})
