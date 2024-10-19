import Image from 'next/image'

import UserInfoAndLinks from '@/components/user-info-and-links'

const DeviceLinkPreview = () => {
  return (
    <div className='flex w-full px-2 py-10 @container/device-mock'>
      <div className='relative mx-auto h-[39.5rem] w-[13rem] px-4 lg:w-[18rem] xl:w-[19.25rem]'>
        <Image
          src='/assets/images/mobile-mock.svg'
          alt=''
          fill
          className='object-contain'
        />
        <div className='absolute inset-0 flex items-center justify-center px-6 xl:px-9'>
          <UserInfoAndLinks />
        </div>
      </div>
    </div>
  )
}

export default DeviceLinkPreview
