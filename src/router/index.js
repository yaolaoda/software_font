import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Navigation from '@/components/Navigition'
import Paging from '@/components/Paging'
import Regist from '@/components/Regist'
import companyHome from '@/components/companyHome'
import postShow from '@/components/postShow'
import postedShow from '@/components/postedShow'
import commentC from '@/components/commentC'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Page1 from '@/components/Page1'
import Commodity from '@/components/Commodity'
import Question from '@/components/Question'
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
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/Commodity',
      name: 'Commodity',
      component: Commodity
    },
    {
      path: '/Question',
      name: 'Question',
      component: Question
    }
  ]
})
