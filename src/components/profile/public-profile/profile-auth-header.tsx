import Link from 'next/link'
import { getServerSession } from 'next-auth'

import ShareLinkButton from '@/components/profile/public-profile/share-link-button'
import Button from '@/components/ui/button'
import { authOptions } from '@/services/auth.service'
import { routes } from '@/shared/config/routes'

type Props = {
  profileId?: string
}
const ProfileAuthHeader = async ({ profileId }: Props) => {
  const session = await getServerSession(authOptions)
  const isMyProfile = profileId === session?.user?.id

  if (!session || !session.user || !isMyProfile) {
    return null
  }
  return (
    <header className='flex items-center justify-between gap-2 rounded-xl bg-neutral-0 p-4 dark:bg-surface-100'>
      <Link href={routes.links}>
        <Button variant='secondary' className='max-sm:!px-4 max-sm:text-sm'>
          Back to Editor
        </Button>
      </Link>
      <ShareLinkButton />
    </header>
  )
}

export default ProfileAuthHeader
