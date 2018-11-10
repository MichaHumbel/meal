import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '../components/SignUp/SignUp.vue'
import Login from '../components/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
