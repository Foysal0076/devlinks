import { ArrowRight } from '@phosphor-icons/react'
import React from 'react'

import DynamicIcon from '@/components/icons/dynamic-icon'
import { PLATFORMS } from '@/shared/config/constants'

type Props = {
  name: string
  url: string
}

const PlatformLink = ({ name, url }: Props) => {
  const icon = PLATFORMS.find((option) => name.includes(option.name))

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={url}
      className='flex transform items-center justify-between rounded-lg p-2 transition-transform duration-300 hover:scale-105 @lg/device-mock:px-3.5 @lg/device-mock:py-3'
      style={{
        backgroundColor: `${icon?.backgroundColor}`,
        color: `${icon?.textColor}`,
      }}>
      <div className='flex items-center gap-2'>
        {icon && (
          <DynamicIcon
            iconFile={icon.iconFile}
            iconName={icon.iconName}
            className='h-5 w-5'
          />
        )}
        <span className='line-clamp-1 text-sm font-medium text-inherit @lg/device-mock:text-base'>
          {name}
        </span>
      </div>
      <ArrowRight
        className='h-4 w-4 @lg/device-mock:h-5 @lg/device-mock:w-5'
        weight='bold'
      />
    </a>
  )
}

export default PlatformLink
