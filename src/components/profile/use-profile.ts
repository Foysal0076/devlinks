import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import {
  useFetchUserInformationQuery,
  useUpdateUserProfileMutation,
} from '@/redux/queries/user.queries'
import { apiRoutes } from '@/shared/config/api-routes'

export const useProfilePicture = () => {
  const [selectedImageFileUrl, setSelectedImageFileUrl] = useState<
    string | null
  >(null)

  const [avatar, setAvatar] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  const { data, isSuccess, isFetching, isLoading } =
    useFetchUserInformationQuery(null)

  const [
    updateProfile,
    { isError: hasUpdateProfileError, isLoading: isUpdatingProfile },
  ] = useUpdateUserProfileMutation()

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = event.target.files?.[0]
      if (
        file &&
        (file.type === 'image/jpeg' ||
          file.type === 'image/jpg' ||
          file.type === 'image/png' ||
          file.type === 'image/bmp')
      ) {
        setUploading(true)
        const uploadLink = await uploadPicture(file)
        if (uploadLink) {
          await updateProfile({
            avatar: uploadLink as unknown as string,
          })
        }
        setSelectedImageFileUrl(URL.createObjectURL(file))
        setUploading(false)
      } else {
        toast.error(
          'Please upload a valid image file (JPEG, JPG, PNG, BMP) with a maximum size of 1024x1024.'
        )
      }
    } catch (error) {
      console.error(error)
      setSelectedImageFileUrl(null)
    } finally {
      setUploading(false)
    }
  }

  const uploadPicture = async (file: File | null) => {
    try {
      if (!file) return
      const fileExtension = file.name.split('.').pop()
      const fileFormData = new FormData()
      const uniqueId = `dp_${Date.now()}`
      fileFormData.append(
        'folderName',
        `profile-pictures/${uniqueId}.${fileExtension}`
      )
      fileFormData.append('file', file)

      const res = await fetch(apiRoutes.uploadFile, {
        method: 'POST',
        body: fileFormData,
      })
      if (res.ok) {
        const data = await res.json()
        return data.uploadLink
      } else {
        const data = await res.json()
        console.log(data)
        throw new Error('Failed to upload audio')
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || error?.data?.message || error?.message
      toast.error(errorMessage)
      return null
    }
  }

  useEffect(() => {
    if (isSuccess && data) {
      if (data.length > 0) {
        const user = data[0]
        setAvatar(user.avatar)
      }
    }
  }, [isFetching, isSuccess])

  return {
    avatar: selectedImageFileUrl ?? avatar,
    handleImageChange,
    hasUpdateProfileError,
    isUpdatingProfile: uploading || isUpdatingProfile,
    isLoadingProfilePicture: isLoading,
  }
}
