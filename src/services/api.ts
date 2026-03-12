import axios from 'axios'
import { getToken } from '@/modules/auth/services/token.service'

export const api = axios.create({
  baseURL: 'https://api.example.com',
})

api.interceptors.request.use((config) => {
  const token = getToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
