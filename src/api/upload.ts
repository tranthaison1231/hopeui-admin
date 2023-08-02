import { request } from '@/utils/request'

export const uploadImage = async (data: FormData) => {
  return await request.post('/upload', data)
}
