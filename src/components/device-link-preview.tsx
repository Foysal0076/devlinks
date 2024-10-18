import Image from 'next/image'

const DeviceLinkPreview = () => {
  return (
    <div className='w-full px-8 py-10'>
      <div>
        <div className='relative h-[40rem] w-full'>
          <Image
            src='/assets/images/mobile-mock.svg'
            alt=''
            fill
            className='object-contain'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            Links
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceLinkPreview
