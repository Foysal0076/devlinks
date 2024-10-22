'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import UserInfoAndLinksLoader from '@/components/loaders/user-info-and-links-loader'
import UserInfoAndLinks from '@/components/user-info-and-links'
import { useFetchUserInformationQuery } from '@/redux/queries/user.queries'
import {
  getUserLinksFromRedux,
  setUserInfo,
} from '@/redux/slice/user-links-slice'

const DeviceLinkPreview = () => {
  const dispatch = useDispatch()
  const userInfoAndLinks = useSelector(getUserLinksFromRedux)
  const { data, isFetching, isLoading, isSuccess } =
    useFetchUserInformationQuery(null)

  const fullName = `${userInfoAndLinks?.firstName} ${userInfoAndLinks?.lastName}`

  useEffect(() => {
    if (data && !isFetching && isSuccess) {
      const userInfo = data[0]
      dispatch(setUserInfo({ ...userInfo }))
    }
  }, [isFetching, isSuccess])

  return (
    <div className='flex w-full px-2 py-10 @container'>
      <div className='relative mx-auto h-[39.5rem] w-[13rem] px-4 lg:w-[18rem] xl:w-[19.25rem]'>
        <Image
          src='/assets/images/mobile-mock.svg'
          alt=''
          fill
          className='object-contain dark:hidden'
        />
        <Image
          src='/assets/images/mobile-mock-dark.svg'
          alt=''
          fill
          className='hidden object-contain dark:block'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          {isLoading ? (
            <UserInfoAndLinksLoader />
          ) : (
            <UserInfoAndLinks userInfoAndLinks={userInfoAndLinks} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DeviceLinkPreview
