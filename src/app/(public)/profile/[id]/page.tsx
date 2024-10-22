import { notFound } from 'next/navigation'

import PublicProfile from '@/components/profile/public-profile/public-profile'
import { getUserInfoAndLinks } from '@/services/firebase.service'

export const dynamic = 'force-dynamic'

const fetchUserInfoAndLinks = async (id: string) => {
  try {
    const userInfoAndLinks = await getUserInfoAndLinks(id)
    return userInfoAndLinks
  } catch (error) {
    console.error(error)
    return null
  }
}

const PreviewProfilePage = async ({ params }: { params: { id: string } }) => {
  const userInfoAndLinks = await fetchUserInfoAndLinks(params.id)
  if (!userInfoAndLinks) {
    return notFound()
  }
  return <PublicProfile userInfoAndLinks={userInfoAndLinks} />
}

export default PreviewProfilePage
