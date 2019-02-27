import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // history表示vue router的连接是可读的，如http://localhost:8000/about，而不是http://localhost:8000/hashCode
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // 当匹配到“/”时，跳转到Home组件
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // 下面这种方式是懒加载的，可以优化用户体验
      component: () => import('./views/About.vue')
    }
  ]
})
