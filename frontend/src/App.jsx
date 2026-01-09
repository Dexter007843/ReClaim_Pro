import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingState from './components/LoadingState'
import { ToastProvider } from './contexts/ToastContext'

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/Home'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const LandingPage = lazy(() => import('./pages/LandingPage'))
const DeviceUploadPage = lazy(() => import('./pages/DeviceUploadPage'))
const AnalysisResultPage = lazy(() => import('./pages/AnalysisResultPage'))
const RepairShopDashboard = lazy(() => import('./pages/RepairShopDashboard'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const Assessments = lazy(() => import('./pages/Assessments'))
const Settings = lazy(() => import('./pages/Settings'))
const About = lazy(() => import('./pages/About'))
const Impact = lazy(() => import('./pages/Impact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <Router>
          <Navigation />
          <ErrorBoundary>
            <Suspense fallback={<LoadingState />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/assess" element={<DeviceUploadPage />} />
                <Route path="/results" element={<AnalysisResultPage />} />
                <Route path="/assessments" element={<Assessments />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<About />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/repair-dashboard" element={<RepairShopDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Router>
      </ToastProvider>
    </ErrorBoundary>
  )
}

export default App
