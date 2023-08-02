import { resetPassword } from '@/api/auth'
import loginBg from '@/assets/images/login-bg.png'
import Button from '@/components/Button'
import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import Logo from '@/components/Logo'
import { showError } from '@/utils/showError'
import { validator } from '@/utils/validator'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useSearchParams, useNavigate } from 'react-router-dom'

interface Inputs {
  newPassword: string
}

const ResetPassword = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<Inputs> = async ({ newPassword }) => {
    try {
      setIsLoading(true)
      const token = searchParams.get('token')
      if (!token) return toast.error('Token is required')
      await resetPassword(newPassword, token)
      toast.success('Please check your email!')
      navigate('/sign-in')
    } catch (error) {
      showError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2 flex items-center">
        <form className="ml-24" onSubmit={handleSubmit(onSubmit)}>
          <Logo className="mb-10" />
          <div className="flex flex-col justify-center items-center mt-10">
            <h2 className="text-4xl mt-2">Reset Password</h2>
            <p className="w-[466px] text-[#8A92A6] text-center mt-2 mb-12">
              Enter your new password to reset
            </p>
            <FormItem label="New Password" className="w-full" error={errors.newPassword?.message}>
              <Input
                type="password"
                {...register('newPassword', {
                  required: 'New Password is required',
                  pattern: {
                    value: validator.password,
                    message: 'Please enter a valid password'
                  }
                })}
              />
            </FormItem>
            <Button className="mt-10" isLoading={isLoading}>
              Reset
            </Button>
          </div>
        </form>
      </div>
      <img src={loginBg} className="w-1/2" alt="bg-login" />
    </div>
  )
}

export default ResetPassword
