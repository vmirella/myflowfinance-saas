import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

import { authRoutes } from '@/modules/auth/auth.routes'
import { dashboardRoutes } from '@/modules/dashboard/dashboard.routes'
import { useAuthStore } from '@/modules/auth/store/auth.store'
import { authMiddleware } from '@/app/router/middleware/auth.middleware'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: dashboardRoutes,
  },
  {
    path: '/',
    component: AuthLayout,
    children: authRoutes,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return '/auth/login'
  }

  if (to.path.startsWith('/auth') && authStore.isAuthenticated) {
    return '/'
  }
})

router.beforeEach(authMiddleware)
