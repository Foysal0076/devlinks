import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/services/auth.service'
import {
  deleteUserLinks,
  getUserLinksByDocId,
} from '@/services/firebase.service'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const docId = params.id
    const data = await getUserLinksByDocId(docId)
    return NextResponse.json({ ...data, links: JSON.parse(data.links) })
  } catch (error) {
    console.log(error)
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
