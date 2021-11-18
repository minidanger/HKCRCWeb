import { createRouter, createWebHistory } from 'vue-router'

import Layout from "../layout/Layout";

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: "/buildTable",
    children:[{
      path: 'buildTable',
      name: 'BuildTable',
      component: () => import("@/components/BuildTable")
    },
      {
        path: 'book',
        name: 'Book',
        component: () => import("@/views/Book")
      }
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component:  () => import("@/views/Login")
  },
  {
    path: '/Register',
    name: 'Register',
    component:  () => import("@/views/Register")
  },
  {
    path: '/Aside',
    name: 'Aside1',
    component:  () => import("@/components/Aside")
  },
  {
    path: '/ckPlayer',
    name: 'ckPlayer',
    component:  () => import("@/components/ckplayer")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
