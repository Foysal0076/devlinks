'use client'

import dynamic from 'next/dynamic'
import React from 'react'

export type Props = React.HTMLAttributes<SVGSVGElement> & {
  iconFile: string
  iconName?: string
}

const DynamicIcon = ({ iconFile, iconName, ...rest }: Props) => {
  const _iconName = iconName || iconFile
  const DynamicIcon = dynamic(
    () => import(`./${iconFile}`).then((mod) => mod[_iconName]),
    {
      ssr: false,
    }
  )

  return <DynamicIcon {...rest} />
}

export default React.memo(DynamicIcon)
