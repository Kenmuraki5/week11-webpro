import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomePage.vue'), // set home as path '/'
  },
  {
    path: '/blog/create',
    name: 'Create new blog',
    component: () => import('./views/blogs/CreateBlog.vue') // set create blog as path '/blog/create'
  },
  {
    path: '/blogs/:id',
    name: 'BlogDetail',
    component: () => import('./views/blogs/DetailPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router