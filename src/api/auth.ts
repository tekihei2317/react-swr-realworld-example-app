import { axios } from '../utils/axios'

export type UserCredentials = {
  email: string
  password: string
}

export function login(credentials: UserCredentials) {
  return axios.post('/users/login', credentials)
}
