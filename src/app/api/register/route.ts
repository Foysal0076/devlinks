import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/services/auth.service'
import { auth, db } from '@/shared/config/firebase.config'

export async function POST(request: Request) {
  //check auth
  const session = await getServerSession(authOptions)
  if (session?.user?.id) {
    return NextResponse.redirect('/')
  }

  const { firstName, lastName = '', email, password } = await request.json()

  if (!firstName) {
    return NextResponse.json(
      { message: 'First Name is required' },
      { status: 400 }
    )
  }
  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 })
  }

  if (!password) {
    return NextResponse.json(
      { message: 'Password is required' },
      { status: 400 }
    )
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    await setDoc(doc(db, 'users', user.uid), {
      firstName,
      lastName,
      email,
      avatar: '',
    })

    return NextResponse.json({
      message: 'User signed up successfully',
      user: {
        uid: user.uid,
        firstName,
        lastName,
        email: user.email,
        avatar: '',
      },
    })
  } catch (error) {
    const _err = error as FirebaseError
    console.log(_err.customData, _err.code)
    return NextResponse.json({ message: _err.code }, { status: 400 })
  }
}
