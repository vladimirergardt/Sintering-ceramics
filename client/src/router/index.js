import Vue from 'vue'
import Router from 'vue-router'
// const Auth = () => import('@/components/Auth/Auth')
import Auth from '@/components/Auth/Auth.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth
    }
  ]
})
