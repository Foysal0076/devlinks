import LinkFormItemLoader from '@/components/loaders/link-form-item-loader'

const LinkFormLoader = () => {
  return (
    <div className='flex h-full max-h-[70vh] flex-col gap-6 overflow-y-auto'>
      <div className='w-full p-5 md:p-6'>
        <div className='bg-loader h-10 w-full animate-pulse rounded' />
      </div>
      {Array.from({ length: 2 }).map((_, index) => (
        <div className='w-full px-5 md:px-6' key={index}>
          <LinkFormItemLoader />
        </div>
      ))}
      <div className='flex w-full p-5 md:p-6'>
        <div className='bg-loader ml-auto h-10 w-24 animate-pulse rounded' />
      </div>
    </div>
  )
}

export default LinkFormLoader
