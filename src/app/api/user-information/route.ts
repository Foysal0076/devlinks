import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/services/auth.service'
import { getUserById, updateUserProfile } from '@/services/firebase.service'
import { UserInformationPutFormData } from '@/types'

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

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const userId = session.user.id as unknown as string
    const { firstName, lastName, avatar, email }: UserInformationPutFormData =
      await request.json()

    if (!firstName && !lastName && !avatar) {
      return NextResponse.json(
        { message: 'No data to update' },
        { status: 400 }
      )
    }
    ;``

    const formData = {
      id: userId,
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(avatar && { avatar }),
      ...(email && { email }),
    }

    const data = await updateUserProfile(formData)

    if (!data) {
      return NextResponse.json({ message: 'Update failed' }, { status: 400 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
