import { changePassword } from '@/api/auth'
import Button from '@/components/Button'
import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import PrivateLayout from '@/components/PrivateLayout'
import { showError } from '@/utils/showError'
import { validator } from '@/utils/validator'
import { useState } from 'react'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-hot-toast'

interface Inputs {
  password: string
  newPassword: string
  confirmNewPassword: string
}

const ChangePassword = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      password: ''
    },
  })
  const newPassword = useWatch({ control: control,  name: 'newPassword' })
  

  const onSubmit: SubmitHandler<Inputs> = async ({ newPassword, password }) => {
    try {
      setIsLoading(true)
      await changePassword(password, newPassword)
      toast.success('Change password successfully!')
    } catch (error) {
      showError(error)
    } finally{
      setIsLoading(false)
    }
  }


  return (
    <PrivateLayout bodyClass="flex justify-center h-full items-center">
      <div className="card w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Reset password!</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center p-0 gap-6 order-1 "
          >
            <div className="w-full flex flex-col gap-2">
              <FormItem label="Current Password" error={errors.password?.message}>
                <Input
                  type="password"
                  {...register('password', {
                    required: 'Current password is required',
                    pattern: {
                      value: validator.password,
                      message: 'Please enter a valid password'
                    }
                  })}
                />
              </FormItem>
              <FormItem label="New Password" error={errors.newPassword?.message}>
                <Input
                  type="password"
                  {...register('newPassword', {
                    required: 'New password is required',
                    pattern: {
                      value: validator.password,
                      message: 'Please enter a valid password'
                    }
                  })}
                />
              </FormItem>
              <FormItem label="Confirm New Password" error={errors.confirmNewPassword?.message}>
                <Input
                  type="password"
                  {...register('confirmNewPassword', {
                    required: 'Confirm New password is required',
                    pattern: {
                      value: validator.password,
                      message: 'Please enter a valid password'
                    },
                    validate: value => value === newPassword || 'The passwords do not match'
                  })}
                />
              </FormItem>
            </div>
            <Button type="submit" isLoading={isLoading} disabled={isLoading}>Change Password</Button>
          </form>
        </div>
      </div>
    </PrivateLayout>
  )
}

export default ChangePassword
