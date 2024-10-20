import {
  collection,
  deleteDoc,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

import { db, storage } from '@/shared/config/firebase.config'
import {
  FirebaseUserLinksPostFormData,
  FirebaseUserLinksPutFormData,
  UserInfoAndLinks,
  UserInformationPutFormData,
} from '@/types'

const LINKS_DOC = 'userlinks'
const USER_DOC = 'users'

export const getUserById = async (id: string) => {
  const q = query(collection(db, USER_DOC), where(documentId(), '==', id))

  const querySnapshot = await getDocs(q)
  const result: any[] = []
  querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })
  return result
}

export const updateUserProfile = async (
  data: UserInformationPutFormData & { id: string }
) => {
  try {
    const { id, ...rest } = data
    const docRef = doc(db, USER_DOC, id)

    await setDoc(docRef, { ...rest }, { merge: true })

    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      throw new Error('No such document!')
    }
  } catch (error) {
    console.error('Error updating document: ', error)
    throw error
  }
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

export const createUserLinks = async (data: FirebaseUserLinksPostFormData) => {
  try {
    const uniqueId = Date.now().toString()
    const docRef = doc(db, LINKS_DOC, uniqueId)
    await setDoc(docRef, { ...data })
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const id = docSnap.id
      return { id, ...docSnap.data() }
    } else {
      throw new Error('No such document!')
    }
  } catch (error) {
    console.error('Error creating document: ', error)
    throw error
  }
}

export const updateUserLinks = async (data: FirebaseUserLinksPutFormData) => {
  try {
    const { id, ...rest } = data
    const docRef = doc(db, LINKS_DOC, id)

    await setDoc(docRef, { ...rest }, { merge: true })

    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      throw new Error('No such document!')
    }
  } catch (error) {
    console.error('Error updating document: ', error)
    throw error
  }
}

export const getUserInfoAndLinks = async (
  userId: string
): Promise<UserInfoAndLinks> => {
  try {
    let response: UserInfoAndLinks = {} as UserInfoAndLinks
    const linksRef = collection(db, LINKS_DOC)

    const _query = query(linksRef, where('userId', '==', userId))

    const data = await getDocs(_query)

    const result: any[] = []

    data.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() })
    })
    const userInformationData = await getUserById(userId)

    const userInfo = userInformationData[0]
    delete userInfo.id
    response = {
      ...userInfo,
      links: result.length ? JSON.parse(result[0].links) : [],
      id: result.length ? result[0].id : '',
    }

    return response
  } catch (error) {
    console.error('Error fetching user links: ', error)
    throw error
  }
}

export const getUserLinksByDocId = async (docId: string) => {
  try {
    const linksRef = collection(db, LINKS_DOC)

    const _query = query(linksRef, where(documentId(), '==', docId))

    const data = await getDocs(_query)

    const result: any[] = []

    data.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() })
    })

    if (result.length) {
      const links = result[0]
      const userId = links.userId

      const userInformationData = await getUserById(userId)
      if (!userInformationData) {
        throw new Error('No such document!')
      }
      const userInfo = userInformationData[0]
      delete userInfo.id
      return { ...userInfo, ...links }
    } else {
      throw new Error('No such document!')
    }
  } catch (error) {
    console.error('Error fetching links: ', error)
    throw error
  }
}

export const deleteUserLinks = async (docId: string, userId: string) => {
  try {
    const docRef = doc(db, LINKS_DOC, docId)
    //check if the document exists and the userId match
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) {
      throw new Error('No such document!')
    }
    const data = docSnap.data()
    if (data.userId !== userId) {
      throw new Error('Unauthorized')
    }

    await deleteDoc(docRef)
    return { message: 'User links deleted' }
  } catch (error) {
    console.error('Error deleting document: ', error)
    throw error
  }
}
