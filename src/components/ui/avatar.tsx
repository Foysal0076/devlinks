import Image from 'next/image'

import { cn,createInitial } from '@/shared/utils'

type Props = {
  name: string
  url?: string
  size?: number
  className?: string
  textClassName?: string
}

const Avatar = ({ name, url, className, textClassName }: Props) => {
  const initial = createInitial(name)

  return (
    <div
      className={cn(
        `relative flex h-8 w-8 items-center justify-center rounded-full border-neutral-100 bg-surface-300 text-base font-bold`,
        className
      )}>
      {url ? (
        <Image
          src={url}
          alt={name}
          fill
          className='rounded-full object-cover'
        />
      ) : (
        <span className={cn('text-sm font-bold md:text-base', textClassName)}>
          {initial}
        </span>
      )}
    </div>
  )
}

export default Avatar
