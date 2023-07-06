import { updateProfile } from "@/api/auth"
import { showError } from "@/utils/showError"
import { validator } from "@/utils/validator"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { useQueryClient } from 'react-query'
import FormItem from "./FormItem"
import Input from "./Input"
import Modal from "./Modal"

interface Inputs {
  name: string
  avatarURL: string
}

const UpdateProfileModal = () => {
  const client = useQueryClient()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<Inputs> = async ({ name, avatarURL }) => {
    try {
      const newProfile = await updateProfile({ name, avatarURL })
      client.setQueryData('profile', newProfile)
      toast.success('Profile updated successfully')
      window.modal.close()
    } catch (error) {
      showError(error)
    }
  }
  
  return (
    <Modal title="Update Profile" onOk={handleSubmit(onSubmit)}>
      <form>
        <div className="w-full flex flex-col gap-2">
          <FormItem label="Name" error={errors.name?.message}>
            <Input
              type="text"
              {...register('name', {
                required: 'Name is required'
              })}
            />
          </FormItem>
          <FormItem label="Avatar URL" error={errors.name?.message}>
            <Input
              type="url"
              {...register('avatarURL', {
                required: 'Avatar is required',
                pattern: {
                  value: validator.url,
                  message: 'Invalid URL'
                }
              })}
            />
          </FormItem>
        </div>
      </form>
    </Modal>
  )
}

export default UpdateProfileModal
