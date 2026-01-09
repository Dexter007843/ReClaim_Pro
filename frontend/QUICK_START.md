# Quick Start Guide - React Frontend

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment
Copy `.env.example` to `.env.local` and fill in your values:
```bash
cp .env.example .env.local
```

### Step 3: Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser! 🎉

---

## 📁 What's Inside

**Folders:**
- `src/components/` - Reusable UI components
- `src/pages/` - Full page components (routable)
- `src/services/` - API and backend integrations
- `src/hooks/` - Custom React hooks
- `src/utils/` - Utility functions
- `src/contexts/` - Global state (Context API)

**Files Already Created:**
- `App.jsx` - Main app with routing
- `Header.jsx` - Navigation component
- `Home.jsx` & `NotFound.jsx` - Pages
- `authService.js` - Authentication API
- `deviceService.js` - Device assessment API
- `helpers.js` - Utility functions
- `useCustom.js` - Custom hooks (useFetch, useForm, useLocalStorage)

---

## 📝 Common Tasks

### Add a New Page
1. Create file: `src/pages/MyPage.jsx`
2. Add route in `App.jsx`:
```jsx
import MyPage from './pages/MyPage'
// ...
<Route path="/my-page" element={<MyPage />} />
```

### Add a New Component
1. Create file: `src/components/MyComponent.jsx`
2. Export and import where needed

### Add a Service Function
Services in `src/services/` handle API calls:
```jsx
// In your component:
import * as deviceService from '../services/deviceService'

await deviceService.assessDevice(data)
```

### Use Custom Hooks
```jsx
import { useFetch, useForm } from '../hooks/useCustom'

function MyComponent() {
  const { data, loading, error } = useFetch('/api/data')
  const { values, handleChange, handleSubmit } = useForm(onSubmit)
  // ...
}
```

---

## 🎨 Next: Add Styling

This project has **NO styling yet**. You can add:

- **Tailwind CSS** (recommended)
- **CSS Modules**
- **Styled Components**
- **Bootstrap**

Example with Tailwind:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 📦 Available Scripts

```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Create production build
npm run preview  # Preview production build locally
```

---

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Vite Docs](https://vitejs.dev)
- [Project README](./README.md)

---

## 💡 Pro Tips

✅ **Use the browser DevTools** to inspect components  
✅ **Check console for errors** when something breaks  
✅ **Keep components small** - easier to reuse  
✅ **Use services for API calls** - not in components  
✅ **Use custom hooks** to share logic between components  

---

**Happy coding! 🚀**
