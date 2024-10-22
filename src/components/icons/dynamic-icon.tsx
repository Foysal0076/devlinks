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
      ssr: true,
      loading: () => (
        <div className='h-5 w-5 animate-pulse rounded-lg bg-surface-100/40' />
      ),
    }
  )

  return <DynamicIcon {...rest} />
}

export default React.memo(DynamicIcon)
