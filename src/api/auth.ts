import { request } from '@/utils/request'

export interface User {
  _id: number
  email: string
  name: string
  avatarURL: string
}

interface UpdatedUserDto {
  name?: string
  avatarURL?: string
}

export const signIn = async (email: string, password: string) => {
  return await request.post('/sign-in', {
    email,
    password
  })
}

export const signUp = async (email: string, password: string) => {
  return await request.post('/sign-up', {
    email,
    password
  })
}

export const forgotPassword = async (email: string) => {
  return await request.post('/forgot-password', {
    email
  })
}

export const changePassword = async (password: string, newPassword: string) => {
  return await request.post('/change-password', {
    password,
    newPassword
  })
}

export const resetPassword = async (newPassword: string, token: string) => {
  return await request.post(
    '/reset-password',
    {
      newPassword
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export const getProfile = async () => {
  return await request.get<User>('/profile')
}

export const updateProfile = async (data: UpdatedUserDto) => {
  return await request.put<User>('/profile', data)
}
