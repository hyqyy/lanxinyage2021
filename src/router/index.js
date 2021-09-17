import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component:() => import('../views/common/404'),
    },
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component:() => import('../views/common/Index'),
    },
    { path: '/login',
      name: 'Login',
      component:() => import('../views/common/Login'),},
    {
      path: '/artworks',
      name: 'ArtWorks',
      component:() => import('../views/goods/ArtWorks'),
    },
    {
      path: '/project',
      name: 'Project',
      component:() => import('../views/goods/Project'),
    },
    {
      path: '/package',
      name: 'Package',
      component:() => import('../views/goods/Package'),
    }

  ]
})
