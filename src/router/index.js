import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import City from '@/pages/city/City'
import Detail from '@/pages/city/Detail'

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
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail,
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
