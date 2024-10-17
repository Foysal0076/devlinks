'use client'

import { Envelope, Key, User } from '@phosphor-icons/react'
import Link from 'next/link'

import { useRegistrationForm } from '@/components/auth/use-registration-form'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/Input'
import { routes } from '@/shared/config/routes'

const RegistrationForm = () => {
  const { handleSubmit, onsubmit, errors, register, loading } =
    useRegistrationForm()

  return (
    <div className='mx-auto w-full max-w-lg rounded-xl bg-surface-0 p-5 shadow-sm dark:bg-surface-100 md:p-8'>
      <h2 className='h4 mb-2 text-center'>Create Your Account</h2>
      <p className='mb-4 text-center md:mb-8'>Please enter your details</p>
      <form
        className='flex flex-col gap-6'
        noValidate
        onSubmit={handleSubmit(onsubmit)}>
        <Input
          label='First Name'
          placeholder='Enter your first name'
          {...register('firstName')}
          error={errors?.firstName ? errors.firstName.message : ''}
          startAdornment={{
            adornment: <User size={20} className='text-neutral-800' />,
            className: '',
          }}
        />
        <Input
          label='Last Name'
          placeholder='Enter your last name'
          {...register('lastName')}
          error={errors?.lastName ? errors.lastName.message : ''}
          startAdornment={{
            adornment: <User size={20} className='text-neutral-800' />,
            className: '',
          }}
        />
        <Input
          label='Email'
          placeholder='Enter your email'
          {...register('email')}
          error={errors?.email ? errors.email.message : ''}
          startAdornment={{
            adornment: <Envelope size={20} className='text-neutral-800' />,
            className: '',
          }}
        />
        <Input
          type='password'
          label='Password'
          placeholder='Enter your password'
          {...register('password')}
          error={errors?.password ? errors.password.message : ''}
          startAdornment={{
            adornment: <Key size={20} className='text-neutral-800' />,
            className: '',
          }}
        />
        <Button type='submit' className='mt-2 w-full' loading={loading}>
          Create Account
        </Button>
        <div className='flex flex-col items-center justify-center gap-1'>
          <p className='text-sm text-neutral-800'>Already have an account?</p>
          <Link
            href={routes.login}
            className='text-sm font-semibold hover:text-primary-500 hover:underline'>
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
