import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Firebase configuration, for demo purpose I am keeping these values here, best practice is to move these to .env file

const firebaseConfig = {
  apiKey: 'AIzaSyCrQ0ZqzqMHkUUGpm32kfMuIFxJoHhq_1Y',
  authDomain: 'devlinks-e9514.firebaseapp.com',
  projectId: 'devlinks-e9514',
  storageBucket: 'devlinks-e9514.appspot.com',
  messagingSenderId: '74845490312',
  appId: '1:74845490312:web:34077ee024c4644eefe33d',
  measurementId: 'G-GL061C0VF5',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)
export { auth, db, storage }
