import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '../store/auth.store'

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
  })

  it('logs in successfully', async () => {
    const auth = useAuthStore()

    await auth.login('admin@test.com', '123456')

    expect(auth.isAuthenticated).toBe(true)
    expect(auth.user?.email).toBe('admin@test.com')
  })

  it('restores session from localStorage', () => {
    localStorage.setItem('auth_token', 'test-token')
    localStorage.setItem(
      'auth_user',
      JSON.stringify({ id: 1, name: 'Virginia', email: 'test@test.com' }),
    )

    const auth = useAuthStore()

    auth.restoreSession()

    expect(auth.token).toBe('test-token')
    expect(auth.user?.email).toBe('test@test.com')
  })

  it('logs out correctly', async () => {
    const auth = useAuthStore()

    await auth.login('admin@test.com', '123456')

    auth.logout()

    expect(auth.isAuthenticated).toBe(false)
    expect(auth.token).toBe(null)
  })
})
