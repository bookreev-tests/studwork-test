import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'starships'}
    },
    {
      path: '/starships',
      name: 'starships',
      component: () => import('@/components/views/Starships')
    },
  ]
})

export default router