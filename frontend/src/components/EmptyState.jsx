import { Link } from 'react-router-dom'

/**
 * EmptyState Component
 * Displays a friendly message when there's no content to show
 */

function EmptyState({
  icon = '📭',
  title = 'No data yet',
  description = 'Get started by creating something new',
  actionLabel = 'Get Started',
  actionLink = '#',
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
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
        borderRadius: 'var(--radius-2xl)',
        border: '2px dashed var(--color-border)',
        minHeight: size === 'large' ? '400px' : '300px',
        animation: 'fadeIn 250ms ease-out',
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: style.iconSize,
          marginBottom: '1.5rem',
          animation: 'bounce 3s ease-in-out infinite',
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: style.titleSize,
          marginBottom: '0.5rem',
          color: 'var(--color-text-primary)',
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

      {/* CTA Button */}
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
    </div>
  )
}

export default EmptyState
