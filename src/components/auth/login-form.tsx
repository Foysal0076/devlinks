'use client'
import { Envelope, Key } from '@phosphor-icons/react'
import Link from 'next/link'

import { useLoginForm } from '@/components/auth/use-login-form'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/Input'
import { routes } from '@/shared/config/routes'

const LoginForm = () => {
  const { handleSubmit, onsubmit, errors, register, loading } = useLoginForm()
  console.log(errors)
  return (
    <div className='mx-auto w-full max-w-lg rounded-xl bg-surface-0 p-6 shadow-sm dark:bg-surface-100 md:p-8'>
      <h2 className='h4 mb-2 text-center'>Login to Your Account</h2>
      <p className='mb-8 text-center'>Please enter your credentials</p>
      <form
        className='flex flex-col gap-6'
        noValidate
        onSubmit={handleSubmit(onsubmit)}>
        <Input
          label='Email'
          placeholder='Enter your email'
          {...register('email')}
          error={errors?.email ? errors.email.message : ''}
          startAdornment={{
            adornment: (
              <Envelope
                size={20}
                className='text-neutral-800 dark:text-neutral-400'
              />
            ),
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
            adornment: (
              <Key
                size={20}
                className='text-neutral-800 dark:text-neutral-400'
              />
            ),
            className: '',
          }}
        />
        <Button type='submit' className='mt-2 w-full' loading={loading}>
          Login
        </Button>
        <div className='flex flex-col items-center justify-center gap-1'>
          <p className='text-sm text-neutral-800'>
            Don&apos;t have an account?
          </p>
          <Link
            href={routes.register}
            className='text-sm font-semibold hover:text-primary-500 hover:underline'>
            Create an account
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
