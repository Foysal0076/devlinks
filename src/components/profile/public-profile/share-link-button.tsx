'use client'

import { usePathname } from 'next/navigation'
import toast from 'react-hot-toast'

import Button from '@/components/ui/button'

const ShareLinkButton = () => {
  const pathname = usePathname()
  const onClick = () => {
    navigator.clipboard.writeText(`${window.location.origin}${pathname}`)
    toast.success('Link copied to clipboard')
  }
  return (
    <Button onClick={onClick} className='max-sm:text-sm'>
      Share Link
    </Button>
  )
}

export default ShareLinkButton
