'use client'

import PlatformLink from '@/components/platform-link'
import Avatar from '@/components/ui/avatar'
import { cn } from '@/shared/utils'
import { UserInfoAndLinks as UserInfoAndLinksType } from '@/types'

type Props = {
  userInfoAndLinks: Omit<UserInfoAndLinksType, 'id'>
  linkButtonClassName?: string
  userInfoClassName?: string
}

const UserInfoAndLinks = ({
  userInfoAndLinks,
  linkButtonClassName,
  userInfoClassName,
}: Props) => {
  const fullName = `${userInfoAndLinks?.firstName} ${userInfoAndLinks?.lastName}`
  return (
    <div className='no-scrollbar max-h-[33.5rem] w-full overflow-y-auto px-6 xl:px-9'>
      <div
        className={cn(
          'mb-4 flex flex-col items-center justify-center gap-1 lg:gap-2',
          userInfoClassName
        )}>
        <Avatar
          url={userInfoAndLinks?.avatar}
          name={fullName}
          className='h-20 w-20'
          textClassName='md:text-3xl'
        />
        <h2 className='line-clamp-1 text-lg font-medium text-neutral-900 lg:text-xl'>
          {fullName}
        </h2>
        <p className='text-sm text-neutral-800'>{userInfoAndLinks?.email}</p>
      </div>
      <div className='flex flex-col gap-4'>
        {userInfoAndLinks?.links &&
          userInfoAndLinks?.links.map((link, index) => (
            <PlatformLink
              key={index}
              name={link.name}
              url={link.url}
              className={linkButtonClassName}
            />
          ))}
      </div>
    </div>
  )
}

export default UserInfoAndLinks
