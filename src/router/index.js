import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Page1 from '@/components/Page1'
import Commodity from '@/components/Commodity'
import Question from '@/components/Question'
Vue.use(Router)

export default new Router({
  routes: [
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
