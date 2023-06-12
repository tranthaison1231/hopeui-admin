import { forgotPassword } from '@/api/auth'
import loginBg from '@/assets/images/login-bg.png'
import Button from '@/components/Button'
import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import Logo from '@/components/Logo'
import { showError } from '@/utils/showError'
import { validator } from '@/utils/validator'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

interface Inputs {
  email: string
}

const ForgotPassword = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<Inputs> = async ({ email}) => {
    try {
      setIsLoading(true)
      await forgotPassword(email)
      toast.success('Please check your email!')
    } catch (error) {
      showError(error)
    } finally{
      setIsLoading(false)
    }
  }
  
  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2 flex items-center">
        <form className="ml-24" onSubmit={handleSubmit(onSubmit)}>
          <Logo className="mb-10" />
          <div className="flex flex-col justify-center items-center mt-10">
            <h2 className="text-4xl mt-2">Forgot Password</h2>
            <p className="w-[466px] text-[#8A92A6] text-center mt-2 mb-12">
              Enter your email address and we’ll send you an email with instructions to reset your password
            </p>
            <FormItem label="Email" className="w-full" error={errors.email?.message}>
              <Input
                type="text"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: validator.email,
                    message: 'Please enter a valid email'
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

export default ForgotPassword
