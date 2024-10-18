import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/services/auth.service'
import {
  createUserLinks,
  getUserLinks,
  updateUserLinks,
} from '@/services/firebase.service'
import {
  FirebaseUserLinksPostFormData,
  FirebaseUserLinksPutFormData,
  UserLinks,
} from '@/types'

export async function POST(request: Request) {
  //check auth, if no session, return 401
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const userId = session.user.id as unknown as string

    const { links }: Omit<UserLinks, 'id'> = await request.json()

    const formData: FirebaseUserLinksPostFormData = {
      userId,
      links: JSON.stringify(links),
    }

    const data = await createUserLinks(formData)
    return NextResponse.json(data)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  //check auth, if no session, return 401
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const userId = session.user.id as unknown as string
    const data = await getUserLinks(userId)
    return NextResponse.json({ ...data, links: JSON.parse(data.links) })
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  //check auth, if no session, return 401
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const userId = session.user.id as unknown as string
    const { id, links }: UserLinks = await request.json()
    const formData: FirebaseUserLinksPutFormData = {
      id,
      userId,
      links: JSON.stringify(links),
    }
    const data = await updateUserLinks(formData)
    return NextResponse.json(data)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
