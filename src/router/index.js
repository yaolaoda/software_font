import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Commodity from '@/components/Commodity'
import Navigation from '@/components/Navigition'
import Paging from '@/components/Paging'
import Regist from '@/components/Regist'
import companyHome from '@/components/companyHome'
import postShow from '@/components/postShow'
import postedShow from '@/components/postedShow'
import commentC from '@/components/commentC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'commentC',
      component: commentC
    },
    {
      path: '/',
      name: 'postedShow',
      component: postedShow
    },
    {
      path: '/postShow',
      name: 'postShow',
      component: postShow
    },
    {
      path: '/',
      name: 'companyHome',
      component: companyHome
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/Paging',
      name: 'Paging',
      component: Paging
    },
    {
      path: '/Navigition',
      name: 'Navigition',
      component: Navigation
    },
    {
      path: '/Commodity',
      name: 'Commodity',
      component: Commodity
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
