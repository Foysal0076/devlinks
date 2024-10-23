'use client'
import { ArrowRight } from '@phosphor-icons/react'
import React, { useMemo } from 'react'
import toast from 'react-hot-toast'

import DynamicIcon from '@/components/icons/dynamic-icon'
import { PlatformName, PLATFORMS } from '@/shared/config/constants'
import { cn, isValidPlatformUrl, sanitizeUrl } from '@/shared/utils'

type Props = {
  name: string
  url: string
  className?: string
}

const PlatformLink = ({ name, url, className }: Props) => {
  const { commonProps, content } = useMemo(() => {
    const icon = PLATFORMS.find((option) => name.includes(option.name))

    const commonProps = {
      className: cn(
        'flex transform items-center justify-between rounded-lg p-2 transition-transform duration-300 hover:scale-105 @lg:px-3.5 @lg:py-3',
        className
      ),
      style: {
        backgroundColor: `${icon?.backgroundColor}`,
        color: `${icon?.textColor}`,
      },
    }

    const content = (
      <>
        <div className='flex items-center gap-2'>
          {icon && (
            <DynamicIcon
              iconFile={icon.iconFile}
              iconName={icon.iconName}
              className='h-5 w-5'
            />
          )}
          <span className='line-clamp-1 text-sm font-medium text-inherit @lg:text-base'>
            {name}
          </span>
        </div>
        <ArrowRight className='h-4 w-4 @lg:h-5 @lg:w-5' weight='bold' />
      </>
    )

    return { icon, commonProps, content }
  }, [name, className])

  const isValidUrl = useMemo(() => {
    return isValidPlatformUrl(name as PlatformName, url)
  }, [url, name])

  if (isValidUrl) {
    return (
      <a
        target='_blank'
        rel='noopener'
        href={sanitizeUrl(url)}
        {...commonProps}>
        {content}
      </a>
    )
  } else {
    return (
      <button
        type='button'
        onClick={() => {
          toast.error('Invalid URL', { id: 'invalid-preview-url' })
        }}
        {...commonProps}>
        {content}
      </button>
    )
  }
}

export default PlatformLink
