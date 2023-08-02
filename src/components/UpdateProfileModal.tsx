import { getProfile, updateProfile } from '@/api/auth'
import { uploadImage } from '@/api/upload'
import { showError } from '@/utils/showError'
import { validator } from '@/utils/validator'
import { type SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import Avatar from './Avatar'
import FormItem from './FormItem'
import Input from './Input'
import Modal from './Modal'
import UploadButton from './UploadButton'

interface Inputs {
  name: string
  avatarURL: string
}

const UpdateProfileModal = () => {
  const { isLoading: isUploadImageLoading, mutateAsync: uploadImageMutate } = useMutation(uploadImage)
  const { isLoading: isUpdateProfileLoading, mutateAsync: updateProfileMutate } = useMutation(updateProfile)

  const client = useQueryClient()

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    control,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur'
  })

  useQuery('profile', getProfile, {
    onSuccess: (profile) => {
      setValue('name', profile.data.name)
      setValue('avatarURL', profile.data.avatarURL)
    }
  })

  const avatarURL = useWatch({
    control,
    name: 'avatarURL'
  })

  const onSubmit: SubmitHandler<Inputs> = async ({ name, avatarURL }) => {
    try {
      const newProfile = await updateProfileMutate({ name, avatarURL })
      client.setQueryData('profile', newProfile)
      toast.success('Profile updated successfully')
      window.modal.close()
    } catch (error) {
      showError(error)
    }
  }

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0]
      if (!file) return
      const formData = new FormData()
      formData.append('file', file)
      const { data } = await uploadImageMutate(formData)
      setValue('avatarURL', data.url)
      clearErrors('avatarURL')
    } catch (error) {
      showError(error)
    }
  }

  const handleRemoveAvatar = () => {
    setValue('avatarURL', '')
  }

  return (
    <Modal title="Update Profile" onSubmit={handleSubmit(onSubmit)} isSubmitLoading={isUpdateProfileLoading}>
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

          <FormItem label="Avatar URL" error={errors.avatarURL?.message}>
            {avatarURL
              ? (
              <Avatar url={avatarURL} onRemove={handleRemoveAvatar} />
                )
              : (
              <UploadButton
                isLoading={isUploadImageLoading}
                accept="image/*"
                {...register('avatarURL', {
                  required: 'Avatar is required',
                  pattern: {
                    value: validator.url,
                    message: 'Invalid URL'
                  }
                })}
                onChange={onUpload}
              />
                )}
          </FormItem>
        </div>
      </form>
    </Modal>
  )
}

export default UpdateProfileModal
