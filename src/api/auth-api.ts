import { axios } from '../utils/axios'
import { runRequest } from '../utils/request'

export type UserCredentials = {
  email: string
  password: string
}

export function login(credentials: UserCredentials) {
  return runRequest(() => axios.post('/users/login', { user: credentials }))
}
