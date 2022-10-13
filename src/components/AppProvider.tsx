import React from 'react'
import { useAuth } from '../hooks/use-auth'
import { AuthContext } from '../utils/context'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const authContextValue = useAuth()

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}
