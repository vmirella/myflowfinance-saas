import type { LoginResponse } from '../types/auth.types'

export async function loginRequest(email: string, password: string): Promise<LoginResponse> {
  await new Promise((r) => setTimeout(r, 500))

  if (email === 'admin@test.com' && password === '123456') {
    return {
      token: 'fake-jwt-token',
      user: {
        id: 1,
        name: 'Virginia',
        email,
      },
    }
  }

  throw new Error('Invalid credentials')
}
