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

export const signIn = (email: string, password: string) => {
  return request.post('/sign-in', {
    email,
    password
  })
}

export const signUp = (email: string, password: string) => {
  return request.post('/sign-up', {
    email,
    password
  })
}

export const forgotPassword = (email: string) => {
  return request.post('/forgot-password', {
    email
  })
}

export const changePassword = (password: string, newPassword: string) => {
  return request.post('/change-password', {
    password,
    newPassword
  })
}

export const resetPassword = (newPassword: string, token: string) => {
  return request.post(
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

export const getProfile = () => {
  return request.get<User>('/profile')
}

export const updateProfile = (data: UpdatedUserDto) => {
  return request.put<User>('/profile', data)
}
