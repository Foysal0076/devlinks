import PlatformLink from '@/components/platform-link'
import ProfileAuthHeader from '@/components/profile/public-profile/profile-auth-header'
import Avatar from '@/components/ui/avatar'
import { UserInfoAndLinks as UserInfoAndLinksType } from '@/types'

const PublicProfile = ({
  userInfoAndLinks,
}: {
  userInfoAndLinks: UserInfoAndLinksType
}) => {
  const fullName = `${userInfoAndLinks?.firstName} ${userInfoAndLinks?.lastName}`

  return (
    <div className='pb-12'>
      <div className='h-auto bg-transparent p-5 sm:h-[25rem] sm:rounded-b-2xl sm:bg-primary-500 md:rounded-b-3xl lg:py-10'>
        <ProfileAuthHeader profileId={userInfoAndLinks?.userId} />
      </div>
      <div className='mx-5 rounded-3xl border border-neutral-30 bg-neutral-0 py-8 shadow-sm @container/device-mock dark:bg-surface-100 sm:mx-auto sm:-mt-[14rem] sm:max-w-[22rem] md:mx-auto md:py-10'>
        <div className='w-full px-6 xl:px-9'>
          <div className='mb-6 flex flex-col items-center justify-center gap-1 md:mb-10 lg:gap-4'>
            <Avatar
              url={userInfoAndLinks?.avatar}
              name={fullName}
              className='h-32 w-32'
              textClassName='text-3xl md:text-4xl'
            />
            <h2 className='line-clamp-1 text-2xl font-medium text-neutral-900 lg:text-3xl'>
              {fullName}
            </h2>
            <p className='text-sm text-neutral-800'>
              {userInfoAndLinks?.email}
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            {userInfoAndLinks?.links ? (
              userInfoAndLinks?.links.map((link, index) => (
                <PlatformLink
                  key={index}
                  name={link.name}
                  url={link.url}
                  className='!px-3.5 !py-3'
                />
              ))
            ) : (
              <div className='flex h-full items-center justify-center'>
                <p className='text-sm text-neutral-800'>
                  No links found for this user
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicProfile
