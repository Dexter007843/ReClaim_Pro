# Backend - Firebase Configuration

Firebase backend configuration and business logic.

## Folder Structure

- **config/** - Firebase initialization, credentials, and configuration files
- **firestore/collections/** - Firestore collection schema definitions and data models
- **storage/** - Firebase Storage bucket configurations and file operations
- **auth/** - Authentication logic, user management, and security rules

## Setup

1. Initialize Firebase project in Firebase Console
2. Download service account key and place in config/
3. Configure Firestore security rules in firestore/
4. Set up Storage buckets in storage/

## Firebase CLI

```bash
npm install -g firebase-tools
firebase login
firebase init
```

## Deployment

```bash
firebase deploy
```
