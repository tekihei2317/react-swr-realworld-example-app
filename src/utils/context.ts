import { createContext, useContext } from 'react'
import { User } from '../hooks/use-auth'

type AuthContextValue = { user?: User; isLoggedIn: boolean } | undefined
export const AuthContext = createContext<AuthContextValue>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('auth context is not provided.')
  }
  return context
}
