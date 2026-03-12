const TOKEN_KEY = 'auth_token'
const USER_KEY = 'auth_user'

export function saveSession(token: string, user: unknown) {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function getUser() {
  const raw = localStorage.getItem(USER_KEY)

  if (!raw || raw === 'undefined') return null

  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}
