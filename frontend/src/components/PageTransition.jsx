import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * PageTransition Component
 * Wraps page content with fade-in animation on route change
 */

function PageTransition({ children }) {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div
      style={{
        animation: 'fadeIn 300ms ease-out',
      }}
    >
      {children}
    </div>
  )
}

export default PageTransition
