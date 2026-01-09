import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../config/firebase'

export const USER_ROLES = Object.freeze({
  USER: 'User',
  REPAIR_SHOP: 'RepairShop',
  ADMIN: 'Admin',
})

function assertValidRole(role) {
  const allowedRoles = Object.values(USER_ROLES)
  if (!allowedRoles.includes(role)) {
    throw new Error(`Invalid role "${role}". Allowed roles: ${allowedRoles.join(', ')}`)
  }
}

async function getUserRole(uid) {
  const snap = await getDoc(doc(db, 'users', uid))
  if (!snap.exists()) {
    return null
  }
  const data = snap.data()
  return data.role || null
}

export async function signUp(email, password, role = USER_ROLES.USER, profile = {}) {
  assertValidRole(role)
  const { user } = await createUserWithEmailAndPassword(auth, email, password)

  await setDoc(doc(db, 'users', user.uid), {
    email: user.email,
    role,
    ...profile,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })

  return { uid: user.uid, email: user.email, role }
}

export async function signIn(email, password) {
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  const role = await getUserRole(user.uid)
  return { uid: user.uid, email: user.email, role }
}

export async function signOut() {
  await firebaseSignOut(auth)
}

export async function getCurrentUser() {
  const user = auth.currentUser
  if (!user) {
    return null
  }
  const role = await getUserRole(user.uid)
  return { uid: user.uid, email: user.email, role }
}

export function subscribeToAuthChanges(callback) {
  return onAuthStateChanged(auth, async (user) => {
    if (!user) {
      callback(null)
      return
    }

    const role = await getUserRole(user.uid)
    callback({ uid: user.uid, email: user.email, role })
  })
}

export default {
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  subscribeToAuthChanges,
  USER_ROLES,
}
