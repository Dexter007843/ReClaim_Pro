# Frontend - React Application with Vite

Modern React frontend for ReClaim Pro built with Vite for fast development and optimized production builds.

## Folder Structure

```
frontend/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx       # Navigation header
│   │   └── ...              # Other components
│   ├── pages/               # Page-level components (routes)
│   │   ├── Home.jsx         # Home/landing page
│   │   ├── NotFound.jsx     # 404 page
│   │   └── ...              # Other pages
│   ├── services/            # API and external service integrations
│   │   ├── authService.js   # Firebase authentication
│   │   ├── deviceService.js # Device assessment API calls
│   │   └── ...              # Other services
│   ├── hooks/               # Custom React hooks
│   │   ├── useCustom.js     # useFetch, useForm, useLocalStorage
│   │   └── ...              # Other hooks
│   ├── contexts/            # React Context for global state
│   ├── utils/               # Utility functions and helpers
│   │   ├── helpers.js       # formatDate, formatCurrency, etc.
│   │   └── ...              # Other utilities
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Setup & Installation

### Prerequisites
- Node.js 16+ and npm/yarn
- Git

### Install Dependencies

```bash
npm install
```

This will install:
- **react** - UI library
- **react-router-dom** - Client-side routing
- **vite** - Build tool and dev server

## Development

### Start Dev Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Hot Module Replacement (HMR)
Changes to React components automatically reflect in the browser without page refresh.

## Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure Explained

### Components (`src/components/`)
Reusable React components used across multiple pages.

**Examples:**
- `Header.jsx` - Navigation bar
- `DeviceForm.jsx` - Device input form
- `ResultsCard.jsx` - Display assessment results
- `Modal.jsx` - Reusable modal dialog

### Pages (`src/pages/`)
Page-level components that correspond to routes.

**Examples:**
- `Home.jsx` - Landing page
- `AssessDevice.jsx` - Device assessment page
- `Dashboard.jsx` - User dashboard
- `Results.jsx` - Assessment results page

### Services (`src/services/`)
API calls and external integrations.

**Current Services:**
- `authService.js` - Firebase Auth (sign up, sign in, sign out)
- `deviceService.js` - Device assessment API calls

**Future Services:**
- `firebaseService.js` - Firestore database operations
- `storageService.js` - Firebase Storage file uploads
- `vertexAIService.js` - Vertex AI integration

### Hooks (`src/hooks/`)
Custom React hooks for reusable logic.

**Current Hooks:**
- `useFetch()` - Fetch data with loading/error states
- `useForm()` - Form handling and validation
- `useLocalStorage()` - Persistent local storage

### Utils (`src/utils/`)
Utility functions and constants.

**Current Utilities:**
- `helpers.js` - formatDate, formatCurrency, capitalize, validation functions

## Routing Setup

React Router is configured for client-side routing.

**Current Routes:**
- `/` - Home page
- `*` - 404 Not Found

**Future Routes:**
- `/assess` - Device assessment page
- `/results/:id` - Assessment results
- `/dashboard` - User dashboard
- `/login` - Login page
- `/signup` - Sign up page

### Adding New Routes

1. Create a new page component in `src/pages/`
2. Import the component in `App.jsx`
3. Add a `<Route>` to the `<Routes>` in `App.jsx`

```jsx
<Route path="/new-page" element={<NewPage />} />
```

## Environment Variables

Create `.env.local` file in the project root:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_GEMINI_API_KEY=your_key
```

Access in components:
```jsx
const apiUrl = import.meta.env.VITE_API_BASE_URL
```

## Dependencies

### Production Dependencies
- **react** (18.x) - UI library
- **react-router-dom** (6.x) - Client-side routing

### Development Dependencies
- **vite** - Build tool and dev server
- **@vitejs/plugin-react** - React plugin for Vite

### Future Dependencies
- **firebase** - Firebase SDK
- **axios** - HTTP client (alternative to fetch)
- **zustand** or **redux** - State management
- **tailwindcss** - Utility-first CSS framework
- **react-query** - Data fetching and caching

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Lint code (when ESLint is added)
npm run test       # Run tests (when testing is configured)
```

## Project Architecture

```
User Interface (React Components)
        ↓
React Router (Page Navigation)
        ↓
Hooks & Context (State Management)
        ↓
Services (API Integration)
        ↓
Cloud Functions / Firebase Backend
```

## Development Workflow

1. **Create/Edit Pages** - Build page components in `src/pages/`
2. **Create/Edit Components** - Build reusable components in `src/components/`
3. **Use Services** - Call backend APIs via `src/services/`
4. **Use Hooks** - Share logic across components with custom hooks
5. **Test** - Manual testing via dev server
6. **Build** - Create production build for deployment

## Performance Optimization

- **Code Splitting** - Vite automatically splits code by route
- **Tree Shaking** - Removes unused code from production builds
- **Fast Refresh** - HMR for instant feedback during development
- **Lazy Loading** - Components can be code-split with React.lazy()

Example:
```jsx
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./components/HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

## Testing (Future)

When testing is configured:

```bash
npm run test       # Run unit tests
npm run test:ui    # Run tests with UI
npm run test:coverage  # Coverage report
```

## Deployment

### Build
```bash
npm run build
```

### Deploy to Firebase Hosting

```bash
firebase login
firebase init hosting
firebase deploy --only hosting
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

## Troubleshooting

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Hot Module Replacement not working
Clear browser cache or restart dev server

## Next Steps

1. Add styling (CSS Modules, Tailwind, etc.)
2. Set up Firebase authentication
3. Create device assessment page
4. Implement form validation
5. Set up state management (Context API or Zustand)
6. Add testing (Vitest, React Testing Library)
7. Configure CI/CD pipeline

## Resources

- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [React Documentation](https://react.dev)
- [Firebase Documentation](https://firebase.google.com/docs)

---

**Created**: January 2, 2026  
**Status**: Development Phase - Basic Structure Ready
