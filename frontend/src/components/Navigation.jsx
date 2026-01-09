import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Assess Device', path: '/assess' },
    { label: 'Impact', path: '/impact' },
    { label: 'About', path: '/about' },
  ]

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-sticky)',
        background: 'rgba(10, 15, 26, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(52, 211, 153, 0.1)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--spacing-lg)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Logo / App Name */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              transition: 'var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <div
              style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ♻️
            </div>
            <div
              style={{
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-primary)',
              }}
            >
              ReClaim Pro
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: isActive(item.path)
                    ? 'var(--color-primary)'
                    : 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: '500',
                  transition: 'var(--transition-fast)',
                  position: 'relative',
                  paddingBottom: '0.5rem',
                  borderBottom: isActive(item.path)
                    ? '2px solid var(--color-primary)'
                    : '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = 'var(--color-primary)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = 'var(--color-text-secondary)'
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="nav-cta-desktop">
            <Link to="/assess" style={{ textDecoration: 'none' }}>
              <button
                className="btn btn-primary"
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: '600',
                  transition: 'var(--transition-fast)',
                }}
              >
                ⚡ Assess Device
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile navigation menu"
            className="nav-mobile-menu"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: isActive(item.path)
                    ? 'var(--color-primary)'
                    : 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  transition: 'var(--transition-fast)',
                  background: isActive(item.path)
                    ? 'rgba(16, 185, 129, 0.1)'
                    : 'transparent',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/assess" style={{ textDecoration: 'none' }}>
              <button
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  marginTop: '0.5rem',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                ⚡ Assess Device
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
