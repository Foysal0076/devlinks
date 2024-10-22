import LinkFormItemLoader from '@/components/loaders/link-form-item-loader'

const LinkFormLoader = () => {
  return (
    <div className='flex h-[calc(100vh-5.75rem)] flex-col justify-between gap-6 overflow-y-auto md:h-[calc(100vh-9rem)]'>
      <div>
        <div className='p-5 md:p-6'>
          <div className='bg-loader mb-2 h-6 w-1/2 animate-pulse rounded md:h-[2.375rem]' />
          <div className='bg-loader h-5 w-4/6 animate-pulse rounded max-md:mb-2 md:h-6' />
          <div className='bg-loader h-5 w-5/6 animate-pulse rounded md:hidden md:h-6' />
        </div>
        <div className='w-full px-5 py-4 md:p-6'>
          <div className='bg-loader h-10 w-full animate-pulse rounded' />
        </div>
        <div className='w-full px-5 pt-6 md:px-6'>
          <LinkFormItemLoader />
        </div>
        <div className='hidden w-full px-5 pt-6 md:block md:px-6'>
          <LinkFormItemLoader />
        </div>
      </div>
      <div className='flex w-full p-5 md:p-6'>
        <div className='bg-loader ml-auto h-10 w-24 animate-pulse rounded' />
      </div>
    </div>
  )
}

export default LinkFormLoader
