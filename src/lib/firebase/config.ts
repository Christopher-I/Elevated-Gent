import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyBs8ws7NpUrmW6jyR-dkWZpfN7M5m9KfcQ",
  authDomain: "elevatedgent-e9c36.firebaseapp.com",
  projectId: "elevatedgent-e9c36",
  storageBucket: "elevatedgent-e9c36.firebasestorage.app",
  messagingSenderId: "1058735432920",
  appId: "1:1058735432920:web:7865e246cff8bab221a3ad",
  measurementId: "G-W3MMSQFSZB"
}

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Initialize Analytics (only on client-side)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null

export default app