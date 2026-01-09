function RepairabilityScore({ score = 75, size = 200 }) {
  // Determine color and status based on score
  const getColorAndStatus = (score) => {
    if (score >= 70) {
      return {
        color: 'var(--color-primary)', // Green
        status: 'Highly Repairable',
        description: 'Cost-effective repair is recommended',
        bgColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 0.2)',
      }
    } else if (score >= 40) {
      return {
        color: 'var(--color-warning)', // Yellow
        status: 'Borderline',
        description: 'Consider repair vs refurbish',
        bgColor: 'rgba(245, 158, 11, 0.1)',
        borderColor: 'rgba(245, 158, 11, 0.2)',
      }
    } else {
      return {
        color: 'var(--color-error)', // Red
        status: 'Recycle Recommended',
        description: 'Better to recycle or responsibly dispose',
        bgColor: 'rgba(239, 68, 68, 0.1)',
        borderColor: 'rgba(239, 68, 68, 0.2)',
      }
    }
  }

  const { color, status, description, bgColor, borderColor } = getColorAndStatus(score)

  // SVG circle dimensions
  const radius = size / 2 - 10
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '2rem',
        background: bgColor,
        border: `2px solid ${borderColor}`,
        borderRadius: 'var(--radius-2xl)',
        transition: 'all var(--transition-base)',
      }}
    >
      {/* Circular Progress */}
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg
          width={size}
          height={size}
          style={{
            transform: 'rotate(-90deg)',
            filter: `drop-shadow(0 0 20px ${color}20)`,
          }}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-bg-tertiary)"
            strokeWidth="8"
          />

          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset var(--transition-slow)',
            }}
          />
        </svg>

        {/* Center content */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <div
            style={{
              fontSize: 'calc(var(--font-size-6xl) * 0.8)',
              fontWeight: 'var(--font-weight-bold)',
              color: color,
              lineHeight: 1,
            }}
          >
            {score}
          </div>
          <div
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-text-tertiary)',
              fontWeight: '500',
            }}
          >
            / 100
          </div>
        </div>
      </div>

      {/* Status Section */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: color,
            marginBottom: '0.5rem',
          }}
        >
          {status}
        </div>
        <div
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-tertiary)',
            lineHeight: 'var(--line-height-snug)',
            maxWidth: '280px',
          }}
        >
          {description}
        </div>
      </div>

      {/* Score Breakdown */}
      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: `1px solid ${borderColor}`,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-text-tertiary)',
              marginBottom: '0.25rem',
            }}
          >
            Condition
          </div>
          <div
            style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: '600',
              color: 'var(--color-text-primary)',
            }}
          >
            85%
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-text-tertiary)',
              marginBottom: '0.25rem',
            }}
          >
            Parts Available
          </div>
          <div
            style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: '600',
              color: 'var(--color-text-primary)',
            }}
          >
            92%
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-text-tertiary)',
              marginBottom: '0.25rem',
            }}
          >
            Cost Factor
          </div>
          <div
            style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: '600',
              color: 'var(--color-text-primary)',
            }}
          >
            68%
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepairabilityScore
