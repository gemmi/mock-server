import Vue from 'vue'
import Router from 'vue-router'
import Builder from '@/components/builder/builder'
import Mocker from '@/components/mocker/mocker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/api',
      redirect: '/api/mocker',
      component: {
        template: `<router-view></router-view>`
      },
      children:[
        {
          path: 'builder',
          name: 'builder',
          component: Builder
        },
        {
          path: 'mocker',
          name: 'mocker',
          component: Mocker
        }
      ]
    },
    
  ]
})
