import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'blog',
      component: BlogView,
      props: { query: 1 }
    },
    {
      path: '/blog',
      name: 'pages',
      component: BlogView,
      props: route => ({ query: route.query.page })
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blog/:namePage',
      name: 'details',
      component: () => import('../views/WrongView.vue')
    }
  ]
})

export default router
