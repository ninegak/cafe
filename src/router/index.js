import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/About.vue')
    },
    {
      path: '/res',
      name: 'reserv',
      component: () => import('../components/Reserv.vue')
    },
    {
      path: '/rev',
      name: 'review',
      component: () => import('../components/Review.vue')
    },
    {
      path: '/ท่าช้าง',
      name: 'ท่าช้าง',
      component: () => import('../components/ท่าช้าง.vue')
    },
    {
      path: '/GoodViews',
      name: 'goodviews',
      component: () => import('../components/GoodViews.vue')
    },
    {
      path: '/RiverSide',
      name: 'riverside',
      component: () => import('../components/RiverSide.vue')
    },
    {
      path: '/WarmUp',
      name: 'warmup',
      component: () => import('../components/WarmUp.vue')
    },
    {
      path: '/THAY Nimman',
      name: 'thaynimman',
      component: () => import('../components/ThayNimman.vue')
    },
    {
      path: '/Lism Cafe',
      name: 'lism',
      component: () => import('../components/LismCafe.vue')
    },
    {
      path: '/Beer Lab',
      name: 'beerlab',
      component: () => import('../components/BeerLab.vue')
    },
    {
      path: '/TAMMA Cafe',
      name: 'tamma',
      component: () => import('../components/Tamma.vue')
    }
  ]
})


export default router
