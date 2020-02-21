import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Registry from '@/components/Auth/Registry'
import Append from '@/components/News/Append'
import News from '@/components/News/News'
import OneNews from '@/components/News/OneNews'
import UserNews from '@/components/Users/UserNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '',
      component: Home
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'registry',
      path: '/registry',
      component: Registry
    },
    {
      name: 'append',
      path: '/append',
      component: Append
    },
    {
      name: 'news',
      path: '/news',
      component: News
    },
    {
      name: 'one-news',
      path: '/one-news',
      component: OneNews
    },
    {
      name: 'my-news',
      path: '/my-news',
      component: UserNews
    }
  ],
  mode: 'history'
})
