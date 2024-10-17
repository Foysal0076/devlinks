import { signOut } from 'firebase/auth'
import { NextResponse } from 'next/server'

import { auth } from '@/shared/config/firebase.config'

export async function POST() {
  try {
    //sign out user from firebase
    await signOut(auth)
    return NextResponse.json({
      message: 'User signed out successfully',
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
