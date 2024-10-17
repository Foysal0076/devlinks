import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/services/auth.service'

type Props = {
  children: React.ReactNode
}
const AuthLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions)
  if (!session || !session.accessToken) {
    return redirect('/login')
  }

  return <>{children}</>
}

export default AuthLayout
