'use client'

import { useProfileEditForm } from '@/components/profile/use-profile'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/Input'

const ProfileEditForm = () => {
  const { errors, onSubmit, register, isLoading } = useProfileEditForm()

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className='flex grow flex-col justify-between'>
      <div className='flex flex-col gap-5 rounded-xl bg-neutral-10 p-5 dark:bg-surface-100/20 md:gap-6'>
        <div className='@lg/profile-picture:flex @lg/profile-picture:items-center'>
          <label
            htmlFor='firstName'
            className='mb-2 block @lg/profile-picture:mb-0 @lg/profile-picture:w-1/3 @lg/profile-picture:pr-4'>
            First Name
          </label>
          <div className='w-full @lg/profile-picture:w-2/3'>
            <Input
              id='firstName'
              {...register('firstName')}
              error={errors.firstName?.message}
            />
          </div>
        </div>
        <div className='@lg/profile-picture:flex @lg/profile-picture:items-center'>
          <label
            htmlFor='lastName'
            className='mb-2 block @lg/profile-picture:mb-0 @lg/profile-picture:w-1/3 @lg/profile-picture:pr-4'>
            Last Name
          </label>
          <div className='w-full @lg/profile-picture:w-2/3'>
            <Input id='lastName' {...register('lastName')} />
          </div>
        </div>
        <div className='@lg/profile-picture:flex @lg/profile-picture:items-center'>
          <label
            htmlFor='email'
            className='mb-2 block @lg/profile-picture:mb-0 @lg/profile-picture:w-1/3 @lg/profile-picture:pr-4'>
            Email
          </label>
          <div className='w-full @lg/profile-picture:w-2/3'>
            <Input
              id='email'
              {...register('email')}
              error={errors.email?.message}
            />
          </div>
        </div>
      </div>
      <div className='sticky bottom-0 flex border-t-2 border-dashed border-neutral-20 p-5 dark:border-surface-100/20'>
        <Button type='submit' loading={isLoading} className='ml-auto'>
          Save
        </Button>
      </div>
    </form>
  )
}

export default ProfileEditForm
