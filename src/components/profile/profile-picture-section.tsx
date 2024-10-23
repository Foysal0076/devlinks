'use client'
import { Image as ImageIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import React, { useCallback, useMemo } from 'react'

import { useProfilePicture } from '@/components/profile/use-profile'
import Spinner from '@/components/ui/spinner'
import { cn } from '@/shared/utils'

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
      <div
        className={cn(
          'flex h-full w-full flex-col items-center justify-center gap-1',
          {
            'text-primary-500 group-hover:text-primary-600':
              placeholderText === 'Upload Picture',
            'text-neutral-0 dark:text-neutral-900':
              placeholderText === 'Change Picture',
          }
        )}>
        <ImageIcon
          className='h-12 w-12 max-sm:h-8 max-sm:w-8'
          weight='regular'
        />
        <span className='text-center font-bold text-inherit max-sm:text-xs'>
          + {placeholderText}
        </span>
      </div>
    ),
    []
  )

  return (
    <div className='mx-5 flex flex-col items-center justify-between rounded-xl bg-neutral-20 p-5 dark:bg-surface-200/40 md:mx-6 md:flex-row'>
      <span className='w-full text-center text-base font-medium @2xl/profile-picture:text-left @2xl/profile-picture:text-lg max-md:hidden'>
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
          <div className='flex h-[6rem] w-[6rem] items-center justify-center overflow-hidden rounded-full bg-primary-50 @lg/profile-picture:h-[12rem] @lg/profile-picture:w-[12rem] dark:bg-primary-200/10'>
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
                <div className='absolute inset-0 rounded-full bg-neutral-600/70 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:bg-surface-100/60'>
                  {imagePlaceholder('Change Picture')}
                </div>
              </>
            )}
            {!loading && !avatar && imagePlaceholder('Upload Picture')}
          </div>
        </label>
        <span className='text-center text-xs md:text-sm'>
          Image must be below 4000x3000px (2MB). <br /> Use .png, .jpg, .jpeg,
          or .bmp format.
        </span>
      </div>
    </div>
  )
}

export default ProfilePictureSection
