import { type AxiosError } from 'axios'
import toast from 'react-hot-toast'

export const showError = (error: unknown) => {
  return toast.error((error as AxiosError<{ message: string }>).response?.data?.message || 'Internal Server Error')
}
