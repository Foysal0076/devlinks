const UserInfoAndLinksLoader = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='bg-loader mb-4 h-20 w-20 animate-pulse rounded-full' />
      <div className='bg-loader mb-4 h-7 w-4/6 animate-pulse rounded' />
      <div className='bg-loader h-5 w-1/2 animate-pulse rounded' />
      <div className='mt-4 flex w-full flex-col gap-2 px-8'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className='bg-loader h-9 w-full animate-pulse rounded @lg:h-12'
          />
        ))}
      </div>
    </div>
  )
}

export default UserInfoAndLinksLoader
