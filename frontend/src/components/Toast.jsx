import { useEffect } from 'react'

/**
 * Toast Component
 * Displays temporary notification messages
 * @param {string} message - The message to display
 * @param {string} type - success, error, info, warning
 * @param {function} onClose - Callback when toast is dismissed
 * @param {number} duration - Auto-dismiss duration in ms (default: 5000)
 */
function Toast({ message, type = 'info', onClose, duration = 5000 }) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅'
      case 'error':
        return '❌'
      case 'warning':
        return '⚠️'
      case 'info':
      default:
        return 'ℹ️'
    }
  }

  const getColor = () => {
    switch (type) {
      case 'success':
        return 'var(--color-success)'
      case 'error':
        return 'var(--color-error)'
      case 'warning':
        return 'var(--color-warning)'
      case 'info':
      default:
        return 'var(--color-info)'
    }
  }

  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        minWidth: '300px',
        maxWidth: '500px',
        background: 'var(--color-bg-card)',
        border: `2px solid ${getColor()}`,
        borderRadius: 'var(--radius-lg)',
        padding: '1rem 1.5rem',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        animation: 'slideIn 0.3s ease-out',
        zIndex: '9999',
      }}
    >
      <div
        style={{
          fontSize: '1.5rem',
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {getIcon()}
      </div>
      <div
        style={{
          flex: 1,
          color: 'var(--color-text-primary)',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-normal)',
        }}
      >
        {message}
      </div>
      <button
        onClick={onClose}
        aria-label="Close notification"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--color-text-tertiary)',
          fontSize: '1.25rem',
          cursor: 'pointer',
          padding: '0.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-sm)',
          transition: 'var(--transition-fast)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--color-bg-hover)'
          e.currentTarget.style.color = 'var(--color-text-primary)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = 'var(--color-text-tertiary)'
        }}
      >
        ✕
      </button>
    </div>
  )
}

export default Toast
