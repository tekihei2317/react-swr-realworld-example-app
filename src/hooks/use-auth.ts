import { useEffect, useMemo, useState } from 'react'
import { getCurrentUser } from '../api/auth-api'
import { User } from '../api/auth-api'

export function useAuth() {
  const [user, setUser] = useState<User>()

  const isLoggedIn = useMemo(() => user !== undefined, [user])

  useEffect(() => {
    // set current user
    const fetchData = async () => {
      const { data, status } = await getCurrentUser()
      if (status === 200) {
        setUser(data.user)
      }
    }

    fetchData()
  }, [])

  return { user, isLoggedIn, setUser }
}
