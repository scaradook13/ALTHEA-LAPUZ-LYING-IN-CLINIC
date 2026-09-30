import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import AdminLoginView from '../views/admin/AdminLoginView.vue'
import AdminDashboardView from '../views/admin/AdminDashboardView.vue'
import { auth } from '../stores/clinicStore.js'

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
      component: AboutView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/admin/login',
      alias: '/login',
      name: 'admin-login',
      component: AdminLoginView
    },
    {
      path: '/admin',
      alias: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboardView,
      meta: { requiresAuth: true }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Navigation Guard for Admin Route
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.isAuthenticated.value) {
    next({ name: 'admin-login', query: { redirect: to.fullPath } })
  } else if (to.name === 'admin-login' && auth.isAuthenticated.value) {
    next({ name: 'admin-dashboard' })
  } else {
    next()
  }
})

export default router
