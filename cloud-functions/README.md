# Cloud Functions - Serverless Backend

Firebase Cloud Functions for serverless backend operations.

## Folder Structure

- **functions/** - Main Cloud Function implementations
  - `index.js` - Entry point for all functions
  - Individual function files organized by feature
- **utils/** - Shared utility functions, helpers, and middleware
- **tests/** - Unit tests for Cloud Functions

## Cloud Functions Use Cases

- API endpoints for frontend communication
- Firestore triggers for automated processing
- Scheduled tasks using Cloud Scheduler
- Integration with Vertex AI and Gemini APIs
- File processing in Firebase Storage

## Setup

```bash
cd cloud-functions
npm install
firebase emulators:start
```

## Deploy

```bash
firebase deploy --only functions
```

## Environment Variables

Set in `.env` or Firebase config:
- `GEMINI_API_KEY`
- `VERTEX_AI_PROJECT_ID`
- `VERTEX_AI_REGION`
