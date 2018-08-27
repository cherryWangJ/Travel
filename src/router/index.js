import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import '../assets/styles/reset.css'
import '../assets/styles/border.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
