/**
 * Loading Skeleton Component
 * Displays animated skeleton loaders while data is fetching
 */

function Skeleton({ width = '100%', height = '1rem', count = 1, type = 'text' }) {
  if (type === 'card') {
    return (
      <div
        className="skeleton-card"
        style={{
          animation: 'shimmer 2s infinite',
        }}
      >
        <div
          className="skeleton skeleton-text"
          style={{
            height: '2rem',
            marginBottom: '1rem',
            borderRadius: 'var(--radius-md)',
          }}
        />
        <div
          className="skeleton skeleton-text"
          style={{
            height: '1rem',
            marginBottom: '0.75rem',
          }}
        />
        <div
          className="skeleton skeleton-text"
          style={{
            height: '1rem',
            width: '80%',
          }}
        />
      </div>
    )
  }

  if (type === 'avatar') {
    return (
      <div
        className="skeleton"
        style={{
          width: height,
          height: height,
          borderRadius: '50%',
          animation: 'shimmer 2s infinite',
        }}
      />
    )
  }

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="skeleton skeleton-text"
          style={{
            width,
            height,
            marginBottom: i < count - 1 ? 'var(--spacing-sm)' : 0,
            animation: 'shimmer 2s infinite',
            animationDelay: `${i * 100}ms`,
          }}
        />
      ))}
    </>
  )
}

export default Skeleton
