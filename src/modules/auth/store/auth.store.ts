import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { loginRequest } from '../services/auth.service'
import { saveSession, clearSession, getToken, getUser } from '../services/token.service'
import type { User } from '../types/auth.types'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const user = ref<User | null>(null)

  const isAuthenticated = computed(() => !!token.value)

  async function login(email: string, password: string) {
    const response = await loginRequest(email, password)

    token.value = response.token
    user.value = response.user

    saveSession(response.token, response.user)
  }

  function logout() {
    token.value = null
    user.value = null

    clearSession()
  }

  function restoreSession() {
    const storedToken = getToken()
    const storedUser = getUser()

    if (storedToken) token.value = storedToken
    if (storedUser) user.value = storedUser
  }

  return {
    token,
    user,
    isAuthenticated,
    login,
    logout,
    restoreSession,
  }
})
