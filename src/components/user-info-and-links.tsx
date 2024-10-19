'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PlatformLink from '@/components/platform-link'
import Avatar from '@/components/ui/avatar'
import { useFetchUserInformationQuery } from '@/redux/queries/user.queries'
import {
  getUserLinksFromRedux,
  setUserInfo,
} from '@/redux/slice/user-links-slice'

const UserInfoAndLinks = () => {
  const dispatch = useDispatch()
  const userInfoAndLinks = useSelector(getUserLinksFromRedux)
  const { data, isFetching, isSuccess } = useFetchUserInformationQuery(null)

  const fullName = `${userInfoAndLinks?.firstName} ${userInfoAndLinks?.lastName}`

  useEffect(() => {
    if (data && !isFetching && isSuccess) {
      console.log(data)
      const userInfo = data[0]
      dispatch(setUserInfo({ ...userInfo }))
    }
  }, [isFetching, isSuccess])

  return (
    <div className='w-full'>
      <div className='mb-4 flex flex-col items-center justify-center gap-1 lg:gap-2'>
        <Avatar
          url={userInfoAndLinks?.avatar}
          name={fullName}
          className='h-20 w-20'
          textClassName='md:text-3xl'
        />
        <h2 className='line-clamp-1 text-lg font-medium text-neutral-900 dark:text-neutral-0 lg:text-xl'>
          {fullName}
        </h2>
        <p className='text-sm text-neutral-800 dark:text-neutral-0'>
          {userInfoAndLinks?.email}
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        {userInfoAndLinks?.links &&
          userInfoAndLinks?.links.map((link, index) => (
            <PlatformLink key={index} name={link.name} url={link.url} />
          ))}
      </div>
    </div>
  )
}

export default UserInfoAndLinks
