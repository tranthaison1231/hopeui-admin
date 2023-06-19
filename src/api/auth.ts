import { request } from '@/utils/request'

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
  return request.get('/profile')
}
