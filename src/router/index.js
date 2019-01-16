
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import AllTodoList from '../pages/AllTodoList'
import Actived from '../pages/Actived'
import Unfinish from '../pages/Unfinish'
export default new VueRouter({
   routes: [
     {
       path: '/',
       redirect: '/all'
     },
     {
       path: '/all',
       component: AllTodoList
     },
    {
      path: '/actived',
      component: Actived
    },
     {
       path: '/unfinish',
       component: Unfinish
     }
  ]
})