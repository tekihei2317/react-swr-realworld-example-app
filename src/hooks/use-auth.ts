import { useMemo, useState } from 'react'

export type User = {
  name: string
}

export function useAuth() {
  const [user, setUser] = useState<User>()

  const isLoggedIn = useMemo(() => user !== undefined, [user])

  return { user, isLoggedIn }
}
