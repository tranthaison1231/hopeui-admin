import axios from 'axios'

export const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

request.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

request.interceptors.response.use(function (config) {
  config.data = {
    ...config.data
  }
  return config
})
