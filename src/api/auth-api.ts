import { axios } from '../utils/axios'
import { runRequest } from '../utils/request'

export type UserCredentials = {
  email: string
  password: string
}

export type User = {
  username: string
  email: string
  bio: string | null
  image: string | null
  token: string
}

export function login(credentials: UserCredentials) {
  return runRequest(() => axios.post<{ user: User }>('/users/login', { user: credentials }))
}

export function getCurrentUser() {
  return runRequest(() => axios.get<{ user: User }>('/user'))
}
