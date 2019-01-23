import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/pages/Auth/Auth.vue'
import HelpApi from '@/pages/HelpApi/HelpApi.vue'
import Calculation from '@/pages/Calculation/Calculation.vue'
import CalculationResult from '@/pages/CalculationResult/CalculationResult.vue'
import MaterialsList from '@/pages/MaterialsList/MaterialsList.vue'
import MaterialEdit from '@/pages/MaterialEdit/MaterialEdit.vue'
import Menu from '@/components/Menu/Menu.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/',
      name: 'calculation',
      components: {
        default: Calculation,
        menu: Menu
      }
    },
    {
      path: '/calculation-result',
      name: 'calculationResult',
      components: {
        default: CalculationResult,
        menu: Menu
      }
    },
    {
      path: '/materials-list',
      name: 'materialsList',
      components: {
        default: MaterialsList,
        menu: Menu
      }
    },
    {
      path: '/material-edit',
      name: 'materialEdit',
      component: MaterialEdit
    },
    {
      path: '/api',
      name: 'helpApi',
      component: HelpApi
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'auth') next();
  if (localStorage.authStatus === 'false' || !localStorage.authStatus) {
    next({ path: '/auth' });
  } else next();
})

export default router
