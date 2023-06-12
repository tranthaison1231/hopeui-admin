import LoginBg from '@/assets/images/login-bg.png'
import LogoBg2 from '@/assets/images/logo-bg2.png'
import Button from '@/components/Button'
import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import Logo from '@/components/Logo'
import Socials from '@/components/Socials'
import { validator } from '@/utils/validator'
import { useSignUp } from '@clerk/clerk-react'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

interface Inputs {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  confirmPassword: string
  password: string
  isAgreeTerm: boolean
}

const SignUp = (): JSX.Element => {
  const navigate = useNavigate()
  const { signUp, setActive, isLoaded } = useSignUp()
  
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur',
  })

  const password = useWatch({
    control,
    name: 'password'
  })


  const onSubmit: SubmitHandler<Inputs> = data => {
    if (!isLoaded) return
    signUp
      ?.create({
        emailAddress: data.email,
        password: data.password
      })
      .then(async result => {
        await signUp.prepareEmailAddressVerification({ strategy: 'email_link', redirectUrl: '/email' })
        toast.success('You are sign up successfully. Please check your email to confirm!')
      })
      .catch(err => toast.error(err.errors[0].longMessage))
  }


  const moveToLogin = () => {
    navigate('/sign-in')
  }

  return (
    <div className="w-full h-screen flex flex-row items-start ">
      <img src={LoginBg} className="w-1/2 h-full rotate-180" alt="login-bg" />
      <div className="w-1/2 flex justify-center items-center h-full">
        <div className="w-1/2">
          <Logo />
          <div className="text-center w-full mt-5 mb-4">
            <h1 className="font-serif font-normal text-[33px] leading-10 text-[#000000] mb-2">Sign Up</h1>
            <h2 className="text-[#8A92A6]">Create your Hope UI account</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-5 w-full">
              <FormItem label="First Name" error={errors?.firstName?.message}>
                <Input
                  type="text"
                  {...register('firstName', {
                    required: 'First Name is required'
                  })}
                />
              </FormItem>
              <FormItem label="Last Name" error={errors?.lastName?.message}>
                <Input
                  type="text"
                  {...register('lastName', {
                    required: 'Last Name is required'
                  })}
                />
              </FormItem>
              <FormItem label="Email" error={errors?.email?.message}>
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
              <FormItem label="Phone No" error={errors?.phoneNumber?.message}>
                <Input
                  type="text"
                  {...register('phoneNumber', {
                    required: 'Phone Number is required',
                    pattern: {
                      value: validator.phoneNumber,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                />
              </FormItem>
              <FormItem label="Password" error={errors?.password?.message}>
                <Input
                  type="password"
                  {...register('password', {
                    required: 'Password is required'
                  })}
                />
              </FormItem>
              <FormItem label="Confirm Password" error={errors?.confirmPassword?.message}>
                <Input
                  type="password"
                  {...register('confirmPassword', {
                    required: 'Confirm Password is required',
                    validate: value => value === password || 'The passwords do not match'
                  })}
                />
              </FormItem>
            </div>
            <div className="flex gap-2 mt-4">
              <input type="checkbox" className="border-box w-5 h-5" {...register('isAgreeTerm')} />
              <p className=" text-[#8A92A6]">I agree with the terms of use</p>
            </div>
            <Button className="text-white bg-primary mt-6 w-fit">Sign up</Button>
            <p className="text-[#232D42] mt-6 mb-4">or sign up with other accounts?</p>
            <Socials />
            <p className="text-[#232D42] mt-4">
              Already have an Account
              <span onClick={moveToLogin} className="text-primary cursor-pointer hover:text-[#4a66f3]">
                {' '}
                Sign in
              </span>
            </p>
          </form>
        </div>
      </div>
      <img src={LogoBg2} alt="LogoBg" className="absolute right-0 w-[20rem] h-[20rem]" />
    </div>
  )
}

export default SignUp
