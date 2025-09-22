import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from './config'

const TEST_USERS = [
  {
    name: 'John Doe',
    email: 'john.doe@test.com',
    password: 'password123'
  },
  {
    name: 'Michael Smith',
    email: 'michael.smith@test.com',
    password: 'password123'
  },
  {
    name: 'David Johnson',
    email: 'david.johnson@test.com',
    password: 'password123'
  }
]

export async function createTestUsers() {
  console.log('Creating test users...')

  for (const user of TEST_USERS) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      )

      await updateProfile(userCredential.user, {
        displayName: user.name
      })

      console.log(`✅ Created user: ${user.name} (${user.email})`)
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'code' in error && error.code === 'auth/email-already-in-use') {
        console.log(`ℹ️  User already exists: ${user.name} (${user.email})`)
      } else {
        console.error(`❌ Failed to create user ${user.name}:`, error instanceof Error ? error.message : 'Unknown error')
      }
    }
  }

  console.log('Test user creation complete!')
}

// Export test user credentials for the sign-in page
export { TEST_USERS }