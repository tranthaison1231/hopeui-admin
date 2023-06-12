import { getProfile } from '@/api/auth'
import React, { useEffect } from 'react'

interface User {
  _id: number
  email: string
  name: string
  avatarUrl: string
}

export const useProfile = () => {
  const [profile, setProfile] = React.useState<User | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile()
        setProfile(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProfile()
  }, [])

  return { profile }
}
