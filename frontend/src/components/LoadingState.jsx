/**
 * LoadingState Component
 * Displays a friendly loading state with animated skeleton content
 */

import Skeleton from './Skeleton'

function LoadingState({ 
  message = 'Loading...', 
  subtitle = 'Please wait while we fetch your data',
  itemCount = 3,
  variant = 'card' // 'card', 'list', 'text'
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
        padding: 'var(--spacing-2xl)',
        animation: 'fadeIn 250ms ease-in-out',
      }}
    >
      {/* Loading Skeleton Content */}
      <div style={{ width: '100%', maxWidth: '600px' }}>
        {variant === 'card' && (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {Array.from({ length: itemCount }).map((_, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: 'var(--spacing-lg)',
                  display: 'grid',
                  gap: '0.75rem',
                }}
              >
                <Skeleton type="text" width="60%" height="20px" />
                <Skeleton type="text" width="100%" height="16px" />
                <Skeleton type="text" width="80%" height="16px" />
              </div>
            ))}
          </div>
        )}

        {variant === 'list' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Array.from({ length: itemCount }).map((_, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <Skeleton type="avatar" width="48px" height="48px" />
                <div style={{ flex: 1 }}>
                  <Skeleton type="text" width="40%" height="16px" style={{ marginBottom: '0.5rem' }} />
                  <Skeleton type="text" width="60%" height="14px" />
                </div>
              </div>
            ))}
          </div>
        )}

        {variant === 'text' && (
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {Array.from({ length: itemCount }).map((_, i) => (
              <Skeleton key={i} type="text" width={i === itemCount - 1 ? '80%' : '100%'} height="16px" />
            ))}
          </div>
        )}
      </div>

      {/* Loading Message */}
      <div
        style={{
          marginTop: '2rem',
          textAlign: 'center',
          animation: 'fadeIn 500ms ease-in-out 250ms both',
        }}
      >
        <div
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              animation: 'spin 1s linear infinite',
            }}
          >
            ⚡
          </span>
          {message}
        </div>
        <div
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-tertiary)',
          }}
        >
          {subtitle}
        </div>
      </div>

      {/* Animated Dots */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginTop: '1rem',
          justifyContent: 'center',
          animation: 'fadeIn 500ms ease-in-out 500ms both',
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--color-primary)',
              animation: `pulse 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default LoadingState
