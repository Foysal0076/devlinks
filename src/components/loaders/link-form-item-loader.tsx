const LinkFormItemLoader = () => {
  return (
    <div className='flex flex-col rounded-lg bg-neutral-10 p-5 pb-6 dark:bg-surface-200/40'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='bg-loader h-6 w-6 animate-pulse rounded' />
          <div className='bg-loader ml-2 h-6 w-24 animate-pulse rounded' />
        </div>
        <div className='bg-loader mb-1.5 h-4 w-20 animate-pulse rounded' />
      </div>
      <div className='flex flex-col gap-6 md:gap-8'>
        <div>
          <div className='bg-loader mb-1.5 h-4 w-14 animate-pulse rounded' />
          <div className='bg-loader h-10 w-full animate-pulse rounded' />
        </div>
        <div>
          <div className='bg-loader mb-1.5 h-4 w-14 animate-pulse rounded' />
          <div className='bg-loader h-10 w-full animate-pulse rounded' />
        </div>
      </div>
    </div>
  )
}

export default LinkFormItemLoader
