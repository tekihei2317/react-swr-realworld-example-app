import Axios, { AxiosRequestConfig } from 'axios'
import { tokenStorage } from './token-storage'

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
})

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = tokenStorage.get()
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` }
  }
  return config
}

axios.interceptors.request.use(authRequestInterceptor)
