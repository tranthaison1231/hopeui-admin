import Logo from '@/components/Logo'
import loginBg from '@/assets/images/login-bg.png'
import Input from '@/components/Input'
import FormItem from '@/components/FormItem'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validator } from '@/utils/validator'
import { useSignIn } from '@clerk/clerk-react'
// import toast from 'react-hot-toast'

interface Inputs {
  email: string
}

const ResetPassword = (): JSX.Element => {
  const { isLoaded, signIn } = useSignIn()

  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<Inputs> = data => {
    if (!isLoaded) return null
    // signIn
    //   ?.create({
    //     strategy: '',
    //     identifier: data.email
    //   })
    //   .then(_ => {
    //     toast.success('Please check your email to reset password')
    //   })
    //   .catch(err => toast.error(err.errors[0].longMessage))
  }


  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2 flex items-center">
        <form className="ml-24" onSubmit={handleSubmit(onSubmit)}>
          <Logo className="mb-10" />
          <div className="flex flex-col justify-center items-center mt-10">
            <h2 className="text-4xl mt-2">Reset Password</h2>
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
            <button className="bg-primary text-white px-6 py-2 rounded shadow-md mt-10">Reset</button>
          </div>
        </form>
      </div>
      <img src={loginBg} className="w-1/2" alt="bg-login" />
    </div>
  )
}

export default ResetPassword
