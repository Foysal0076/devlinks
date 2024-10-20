import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/services/auth.service'
import {
  deleteUserLinks,
  getUserInfoAndLinks,
} from '@/services/firebase.service'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = params.id
    const data = await getUserInfoAndLinks(userId)
    return NextResponse.json(data)
  } catch (error) {
    if (error instanceof Error && error.message === 'Not Found') {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }
    return NextResponse.json({ message: 'Fetch Failed' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  //check auth, if no session, return 401
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const id = params.id
    const userId = session.user.id as unknown as string
    await deleteUserLinks(id, userId)
    return NextResponse.json({ message: 'Appointment deleted' })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Delete Failed' }, { status: 500 })
  }
}
