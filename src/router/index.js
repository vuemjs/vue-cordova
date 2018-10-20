import Vue from 'vue'
import Router from 'vue-router'
import HelloVuem from '@/components/HelloVuem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloVuem',
      component: HelloVuem
    }
  ]
})
