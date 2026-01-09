# Firebase Setup Guide

## Overview
Firebase has been initialized for the ReClaim-Pro project with the following services:
- **Firebase Authentication** - User authentication and authorization
- **Firestore** - NoSQL cloud database
- **Firebase Storage** - Cloud file storage

## Configuration File
The Firebase configuration is located at [frontend/src/config/firebase.js](frontend/src/config/firebase.js).

## Environment Variables

### Using Environment Variables with Vite

Vite exposes environment variables through `import.meta.env`. All variables must be prefixed with `VITE_` to be exposed to the client-side code.

### Setup Steps

1. **Copy the example file**:
   ```bash
   cd frontend
   cp .env.example .env.local
   ```

2. **Get your Firebase credentials**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Click the gear icon (⚙️) > Project Settings
   - Scroll to "Your apps" section
   - If you haven't added a web app, click "Web" icon
   - Copy the configuration values

3. **Fill in your `.env.local` file**:
   ```env
   VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
   VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
   ```

### Environment Files

- **`.env.local`** - Local development (not committed to Git)
- **`.env.production`** - Production environment (not committed to Git)
- **`.env.example`** - Template file (committed to Git)

## Usage Examples

### Importing Firebase Services

```javascript
import { auth, db, storage } from '@/config/firebase';
```

### Authentication Example

```javascript
import { auth } from '@/config/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut 
} from 'firebase/auth';

// Sign up
const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Sign in
const signIn = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Sign out
const logout = async () => {
  await signOut(auth);
};
```

### Firestore Example

```javascript
import { db } from '@/config/firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';

// Get a document
const getDevice = async (deviceId) => {
  const docRef = doc(db, 'devices', deviceId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

// Get all documents from a collection
const getAllDevices = async () => {
  const querySnapshot = await getDocs(collection(db, 'devices'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Add a document
const addDevice = async (deviceData) => {
  const docRef = await addDoc(collection(db, 'devices'), deviceData);
  return docRef.id;
};

// Update a document
const updateDevice = async (deviceId, updates) => {
  const docRef = doc(db, 'devices', deviceId);
  await updateDoc(docRef, updates);
};

// Delete a document
const deleteDevice = async (deviceId) => {
  const docRef = doc(db, 'devices', deviceId);
  await deleteDoc(docRef);
};
```

### Firebase Storage Example

```javascript
import { storage } from '@/config/firebase';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';

// Upload a file
const uploadDeviceImage = async (file, deviceId) => {
  const storageRef = ref(storage, `devices/${deviceId}/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};

// Get download URL
const getImageURL = async (path) => {
  const storageRef = ref(storage, path);
  return await getDownloadURL(storageRef);
};

// Delete a file
const deleteImage = async (path) => {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
};
```

## Installing Dependencies

Install Firebase SDK if not already installed:

```bash
cd frontend
npm install firebase
```

## Security Best Practices

1. **Never commit `.env.local` or `.env.production`** - These contain sensitive credentials
2. **Use Firebase Security Rules** - Configure Firestore and Storage security rules in Firebase Console
3. **Restrict API Key** - In Firebase Console, restrict your API key to specific domains
4. **Use Authentication** - Always verify user authentication before allowing data access
5. **Validate Data** - Validate all user inputs on both client and server side

## Firebase Console Setup Required

After creating your Firebase project, enable these services:

1. **Authentication**:
   - Go to Authentication > Sign-in method
   - Enable Email/Password provider
   - Configure authorized domains

2. **Firestore**:
   - Go to Firestore Database
   - Create database in production or test mode
   - Set up security rules

3. **Storage**:
   - Go to Storage
   - Get started and configure security rules

## Troubleshooting

### Environment variables not loading
- Restart the Vite dev server after changing `.env.local`
- Ensure variables are prefixed with `VITE_`
- Check that `.env.local` is in the `frontend/` directory

### Firebase initialization error
- Verify all environment variables are set correctly
- Check Firebase Console for correct credentials
- Ensure Firebase project is active

### Permission denied errors
- Check Firebase Security Rules
- Verify user is authenticated
- Ensure user has proper permissions

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
