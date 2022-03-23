import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Manga from '../views/Manga.vue'
import ShowManga from '../views/ShowManga.vue'
import CreateManga from '../views/CreateManga.vue'
import UpdateManga from '../views/UpdateManga.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/manga',
    name: 'manga',
    component:  Manga
  },
  {
    path: '/manga/:id/:slug',
    name: 'showManga',
    component:  ShowManga
  },
  {
    path: '/manga/:id/:slug/update',
    name: 'updateManga',
    component:  UpdateManga
  },
  {
    path: '/manga/create',
    name: 'createManga',
    component:  CreateManga
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
