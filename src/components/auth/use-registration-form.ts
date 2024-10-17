import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { apiRoutes } from '@/shared/config/api-routes'
import { registrationFormSchema } from '@/shared/validators/auth.schema'

type FormValueTypes = {
  firstName: string
  lastName?: string
  email: string
  password: string
}

export const useRegistrationForm = () => {
  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormValueTypes>({
    resolver: yupResolver(registrationFormSchema),
    mode: 'all',
  })

  const onsubmit = async (data: FormValueTypes) => {
    try {
      setLoading(true)
      const res: any = await fetch(apiRoutes.auth.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        await res.json()
        await signIn('credentials', {
          email: data.email,
          password: data.password,
          callbackUrl: '/',
        })
        reset()
      } else {
        const data = await res.json()
        throw new Error(data.message)
      }
    } catch (error: any) {
      toast.error(error?.message ?? 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return {
    onsubmit,
    handleSubmit,
    register,
    loading,
    errors,
  }
}
