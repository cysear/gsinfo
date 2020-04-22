import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'

import Layout from '@/views/layout/Layout'
Vue.use(Router);
export const constantRouterMap = [

  {path: '/login', name: 'login', component: Login},
  {
    path: '/pHome',
    name: 'PHome',
    component: () => import('../views/pc/papp.vue'), redirect: 'a',
    children:[
      {
        path: '/pHome/a',
        component: () => import('@/views/pc/A'),
        name: 'a',
        meta: { title: '电脑首页', noCache: true }
      },
    ]
  },
  {
    path: '/mHome',
    name: 'MHome',
    component: () => import('../views/mobile/mapp.vue'), redirect: 'a',
    children:[
      {
        path: '/mHome/ComtList',
        component: () => import('@/views/mobile/ComtList'),
        name: 'ComtList',
        meta: { title: '小区首页', noCache: true }
      },
      {
        path: '/mHome/DetailInfo',
        component: () => import('@/views/mobile/DetailInfo'),
        name: 'DetailInfo',
        meta: { title: '小区详情', noCache: true }
      }
    ]
  },

  {
    path: '',
    component: Layout,
    redirect: 'login',
    children: [
      {
      path: 'home',
      component: () => import('@/views/home/Home'),
      name: 'home',
      meta: { title: '首页', noCache: true }
    },

]
  },


];

export default new Router({
  mode: 'hash',
  routes: constantRouterMap
})
export const asyncRouterMap = [


];
