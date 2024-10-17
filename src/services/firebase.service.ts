import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

import { db, storage } from '@/shared/config/firebase.config'

export const getUserById = async (id: string) => {
  const q = query(collection(db, 'users'), where(documentId(), '==', id))

  const querySnapshot = await getDocs(q)
  const result: any[] = []
  querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })
  return result
}

export const uploadFile = async (file: File | Blob, path: string) => {
  try {
    const storageRef = ref(storage, `${path}`)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
  } catch (error) {
    console.error('Error uploading file: ', error)
    throw error
  }
}
