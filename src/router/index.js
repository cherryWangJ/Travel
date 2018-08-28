import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
