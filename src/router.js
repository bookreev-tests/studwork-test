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
    {
      path: '/starship/:alias',
      name: 'starship',
      component: () => import('@/components/views/Starship'),
      props: true
    },
  ]
})

export default router