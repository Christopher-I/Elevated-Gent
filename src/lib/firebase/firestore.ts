import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
} from 'firebase/firestore'
import { db } from './config'

// Types
export interface User {
  id: string
  email: string
  displayName?: string
  photoURL?: string
  subscriptionStatus?: 'active' | 'inactive' | 'cancelled'
  stripeCustomerId?: string
  stripeSubscriptionId?: string
  subscriptionStartDate?: Timestamp
  createdAt: Timestamp
  updatedAt: Timestamp
  preferences?: {
    newsletter: boolean
    notifications: boolean
  }
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  inStock: boolean
  featured: boolean
  stripeProductId?: string
  stripePriceId?: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number // in minutes
  category: string
  available: boolean
  stripeProductId?: string
  stripePriceId?: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: Address
  billingAddress: Address
  paymentIntentId?: string
  stripeSessionId?: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface OrderItem {
  productId: string
  productName: string
  quantity: number
  price: number
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Appointment {
  id: string
  userId: string
  serviceId: string
  serviceName: string
  date: Timestamp
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

// Collection references
export const collections = {
  users: 'users',
  products: 'products',
  services: 'services',
  orders: 'orders',
  appointments: 'appointments',
} as const

// Helper functions
export async function createUser(userId: string, userData: Partial<User>) {
  const userRef = doc(db, collections.users, userId)
  const now = Timestamp.now()

  const user: Omit<User, 'id'> = {
    email: userData.email || '',
    displayName: userData.displayName,
    photoURL: userData.photoURL,
    subscriptionStatus: 'inactive',
    createdAt: now,
    updatedAt: now,
    preferences: {
      newsletter: true,
      notifications: true,
      ...userData.preferences,
    },
  }

  await updateDoc(userRef, user)
  return { id: userId, ...user }
}

export async function getUser(userId: string): Promise<User | null> {
  const userRef = doc(db, collections.users, userId)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) return null

  return { id: userSnap.id, ...userSnap.data() } as User
}

export async function updateUser(userId: string, updates: Partial<User>) {
  const userRef = doc(db, collections.users, userId)
  await updateDoc(userRef, {
    ...updates,
    updatedAt: Timestamp.now(),
  })
}

// Products
export async function getProducts(categoryFilter?: string, limitCount = 12) {
  const productsRef = collection(db, collections.products)
  let q = query(
    productsRef,
    where('inStock', '==', true),
    orderBy('createdAt', 'desc'),
    limit(limitCount)
  )

  if (categoryFilter) {
    q = query(
      productsRef,
      where('category', '==', categoryFilter),
      where('inStock', '==', true),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )
  }

  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product))
}

export async function getProduct(productId: string): Promise<Product | null> {
  const productRef = doc(db, collections.products, productId)
  const productSnap = await getDoc(productRef)

  if (!productSnap.exists()) return null

  return { id: productSnap.id, ...productSnap.data() } as Product
}

// Services
export async function getServices() {
  const servicesRef = collection(db, collections.services)
  const q = query(
    servicesRef,
    where('available', '==', true),
    orderBy('createdAt', 'desc')
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Service))
}

export async function getService(serviceId: string): Promise<Service | null> {
  const serviceRef = doc(db, collections.services, serviceId)
  const serviceSnap = await getDoc(serviceRef)

  if (!serviceSnap.exists()) return null

  return { id: serviceSnap.id, ...serviceSnap.data() } as Service
}

// Orders
export async function createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) {
  const ordersRef = collection(db, collections.orders)
  const now = Timestamp.now()

  const order = {
    ...orderData,
    createdAt: now,
    updatedAt: now,
  }

  const docRef = await addDoc(ordersRef, order)
  return { id: docRef.id, ...order }
}

export async function getUserOrders(userId: string) {
  const ordersRef = collection(db, collections.orders)
  const q = query(
    ordersRef,
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order))
}

export async function updateOrderStatus(orderId: string, status: Order['status']) {
  const orderRef = doc(db, collections.orders, orderId)
  await updateDoc(orderRef, {
    status,
    updatedAt: Timestamp.now(),
  })
}

// Appointments
export async function createAppointment(appointmentData: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>) {
  const appointmentsRef = collection(db, collections.appointments)
  const now = Timestamp.now()

  const appointment = {
    ...appointmentData,
    createdAt: now,
    updatedAt: now,
  }

  const docRef = await addDoc(appointmentsRef, appointment)
  return { id: docRef.id, ...appointment }
}

export async function getUserAppointments(userId: string) {
  const appointmentsRef = collection(db, collections.appointments)
  const q = query(
    appointmentsRef,
    where('userId', '==', userId),
    orderBy('date', 'desc')
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Appointment))
}