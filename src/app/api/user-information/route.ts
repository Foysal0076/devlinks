import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/services/auth.service'
import { getUserById } from '@/services/firebase.service'

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const userId = session.user.id as unknown as string
    const data = await getUserById(userId)
    if (!data || !data.length) {
      return NextResponse.json(
        { message: 'No user information found' },
        { status: 404 }
      )
    }
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
