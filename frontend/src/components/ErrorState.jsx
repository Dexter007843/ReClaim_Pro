import { Link } from 'react-router-dom'

/**
 * ErrorState Component
 * Displays friendly error messages with recovery options
 */

function ErrorState({
  icon = '⚠️',
  title = 'Something went wrong',
  description = 'We encountered an error while processing your request',
  actionLabel = 'Try Again',
  actionLink = '#',
  secondaryLabel = 'Go Home',
  secondaryLink = '/',
  size = 'default',
}) {
  const sizeStyles = {
    small: {
      padding: '2rem',
      iconSize: '3rem',
      titleSize: 'var(--font-size-2xl)',
      descSize: 'var(--font-size-sm)',
    },
    default: {
      padding: '3rem',
      iconSize: '4rem',
      titleSize: 'var(--font-size-3xl)',
      descSize: 'var(--font-size-base)',
    },
    large: {
      padding: '4rem',
      iconSize: '5rem',
      titleSize: 'var(--font-size-4xl)',
      descSize: 'var(--font-size-lg)',
    },
  }

  const style = sizeStyles[size] || sizeStyles.default

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: style.padding,
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%)',
        borderRadius: 'var(--radius-2xl)',
        border: '2px solid rgba(239, 68, 68, 0.2)',
        minHeight: size === 'large' ? '400px' : '300px',
        animation: 'fadeIn 250ms ease-out',
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: style.iconSize,
          marginBottom: '1.5rem',
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: style.titleSize,
          marginBottom: '0.5rem',
          color: 'var(--color-error)',
          fontWeight: 'var(--font-weight-semibold)',
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: style.descSize,
          color: 'var(--color-text-tertiary)',
          marginBottom: '2rem',
          maxWidth: '500px',
          lineHeight: 'var(--line-height-snug)',
        }}
      >
        {description}
      </p>

      {/* Action Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {actionLabel && actionLink && (
          <Link to={actionLink} style={{ textDecoration: 'none' }}>
            <button
              className="btn btn-primary"
              style={{
                padding: '0.875rem 2rem',
                fontSize: 'var(--font-size-base)',
                fontWeight: '600',
              }}
            >
              {actionLabel}
            </button>
          </Link>
        )}

        {secondaryLabel && secondaryLink && (
          <Link to={secondaryLink} style={{ textDecoration: 'none' }}>
            <button
              className="btn btn-secondary"
              style={{
                padding: '0.875rem 2rem',
                fontSize: 'var(--font-size-base)',
                fontWeight: '600',
              }}
            >
              {secondaryLabel}
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ErrorState
