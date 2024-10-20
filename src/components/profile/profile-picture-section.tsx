'use client'
import { Image as ImageIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import React, { useCallback, useMemo } from 'react'

import { useProfilePicture } from '@/components/profile/use-profile'
import Spinner from '@/components/ui/spinner'

const ProfilePictureSection = () => {
  const { avatar, handleImageChange, isUpdatingProfile } = useProfilePicture()
  const loading = isUpdatingProfile

  const loader = useMemo(
    () => (
      <div className='absolute inset-0'>
        <Spinner className='ml-0 h-full w-full' />
      </div>
    ),
    []
  )

  const imagePlaceholder = useCallback(
    (placeholderText: string) => (
      <div className='flex h-full w-full flex-col items-center justify-center gap-1 text-primary-500 dark:text-primary-50'>
        <ImageIcon size={48} weight='regular' />
        <span className='font-bold text-inherit'>+ {placeholderText}</span>
      </div>
    ),
    []
  )

  return (
    <div className='flex flex-col items-center justify-between rounded-xl bg-neutral-10 p-5 dark:bg-surface-100/20 md:flex-row'>
      <span className='w-full text-center text-base font-medium @2xl/profile-picture:text-left @2xl/profile-picture:text-lg'>
        Profile Picture
      </span>
      <div className='flex w-full flex-col items-center gap-2 @3xl/profile-picture:flex-row'>
        <label className='group relative cursor-pointer'>
          <input
            type='file'
            accept='image/jpeg, image/jpg, image/png, image/bmp'
            className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
            onChange={handleImageChange}
            disabled={loading}
          />
          <div className='flex h-[12rem] w-[12rem] items-center justify-center overflow-hidden rounded-full bg-primary-50 dark:bg-primary-200/10'>
            {loading && loader}
            {!loading && avatar && (
              <>
                <Image
                  src={avatar}
                  alt='Profile'
                  className='h-full w-full object-cover'
                  height={192}
                  width={192}
                />
                <div className='absolute inset-0 rounded-full bg-black/80 opacity-0 transition-opacity group-hover:opacity-100'>
                  {imagePlaceholder('Change Picture')}
                </div>
              </>
            )}
            {!loading && !avatar && imagePlaceholder('Upload Picture')}
          </div>
        </label>
        <span className='text-center text-sm'>
          Image must be below 1024x1024px. <br /> Use PNG, JPG, or BMP format.
        </span>
      </div>
    </div>
  )
}

export default ProfilePictureSection
