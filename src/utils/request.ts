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
    avatarUrl: 'https://kenh14cdn.com/thumb_w/660/2018/5/18/ton-ngo-khong-1526576783846651684687.jpg',
    ...config.data
  }
  return config
})
