import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

import { authRoutes } from '@/modules/auth/auth.routes'
import { dashboardRoutes } from '@/modules/dashboard/dashboard.routes'

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
