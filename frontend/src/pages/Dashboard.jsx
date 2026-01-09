import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import RepairabilityScore from '../components/RepairabilityScore'

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const sidebarItems = [
    { icon: '🏠', label: 'Dashboard', path: '/dashboard' },
    { icon: '📱', label: 'Assess Device', path: '/assess' },
    { icon: '📊', label: 'My Assessments', path: '/assessments' },
    { icon: '🌍', label: 'Impact Tracker', path: '/impact' },
    { icon: '🔧', label: 'Repair Shops', path: '/shops' },
    { icon: '⚙️', label: 'Settings', path: '/settings' },
  ]

  return (
    <PageTransition>
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      {/* Left Sidebar */}
      <aside
        style={{
          width: sidebarOpen ? '280px' : '80px',
          background: 'var(--color-bg-secondary)',
          borderRight: '1px solid var(--color-border)',
          padding: 'var(--spacing-md)',
          transition: 'width var(--transition-base)',
          position: 'relative',
          overflow: 'visible',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            alignSelf: 'flex-end',
            marginBottom: '1rem',
            width: '32px',
            height: '32px',
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-text-secondary)',
            transition: 'all var(--transition-fast)',
            fontSize: '18px',
            fontWeight: 'bold',
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-primary)'
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-bg-card)'
            e.currentTarget.style.color = 'var(--color-text-secondary)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
          title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {sidebarOpen ? '◀' : '▶'}
        </button>

        {/* Sidebar Items */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
          {sidebarItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className="list-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                color: 'var(--color-text-secondary)',
                transition: 'all var(--transition-fast)',
                whiteSpace: 'nowrap',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                background: 'transparent',
                cursor: 'pointer',
                border: 'none',
                animationDelay: `${index * 50}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)'
                e.currentTarget.style.color = 'var(--color-primary)'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--color-text-secondary)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <span style={{ fontSize: '1.25rem', minWidth: '24px' }}>{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          background: 'var(--color-bg-primary)',
          padding: 'var(--spacing-2xl)',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: '0.5rem' }}>
            Dashboard
          </h1>
          <p style={{ color: 'var(--color-text-tertiary)' }}>
            Welcome back! Here's your device assessment overview.
          </p>
        </div>

        {/* Widgets Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {/* Repairability Score Widget */}
          <RepairabilityScore score={92} size={180} />

          {/* Repair vs Recycle Widget */}
          <div
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              padding: 'var(--spacing-lg)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative background */}
            <div
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent)',
                borderRadius: '50%',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔄</div>
              <div style={{ color: 'var(--color-text-tertiary)', marginBottom: '1rem', fontSize: 'var(--font-size-sm)' }}>
                Recommendation
              </div>

              <div
                style={{
                  padding: '1rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                  REPAIR
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', marginTop: '0.25rem' }}>
                  Cost-effective restoration
                </div>
              </div>

              <Link to="/assess" style={{ textDecoration: 'none' }}>
                <button
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: 'var(--font-size-sm)',
                  }}
                >
                  Find Repair Shops
                </button>
              </Link>
            </div>
          </div>

          {/* CO₂ Saved Widget */}
          <div
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              textAlign: 'center',
              padding: 'var(--spacing-lg)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative background */}
            <div
              style={{
                position: 'absolute',
                bottom: '-50px',
                left: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent)',
                borderRadius: '50%',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
              <div style={{ color: 'var(--color-text-tertiary)', marginBottom: '0.5rem' }}>
                CO₂ Prevented
              </div>
              <div
                style={{
                  fontSize: 'var(--font-size-5xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                42.5
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>
                kg vs manufacturing new
              </div>
            </div>
          </div>

          {/* E-waste Prevented Widget */}
          <div
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              textAlign: 'center',
              padding: 'var(--spacing-lg)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative background */}
            <div
              style={{
                position: 'absolute',
                bottom: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent)',
                borderRadius: '50%',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>♻️</div>
              <div style={{ color: 'var(--color-text-tertiary)', marginBottom: '0.5rem' }}>
                E-waste Prevented
              </div>
              <div
                style={{
                  fontSize: 'var(--font-size-5xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem',
                }}
              >
                3.8
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>
                kg from landfill
              </div>
            </div>
          </div>
        </div>

        {/* Recent Assessments Section */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Recent Assessments</h2>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 'var(--font-size-sm)',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      color: 'var(--color-text-secondary)',
                      fontWeight: '600',
                    }}
                  >
                    Device
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      color: 'var(--color-text-secondary)',
                      fontWeight: '600',
                    }}
                  >
                    Score
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      color: 'var(--color-text-secondary)',
                      fontWeight: '600',
                    }}
                  >
                    Recommendation
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      color: 'var(--color-text-secondary)',
                      fontWeight: '600',
                    }}
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem' }}>📱 iPhone 13 Pro</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>92</span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: 'var(--color-primary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--font-size-xs)',
                      }}
                    >
                      Repair
                    </span>
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--color-text-tertiary)' }}>
                    Jan 2, 2026
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem' }}>💻 MacBook Pro M1</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>78</span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(6, 182, 212, 0.1)',
                        color: 'var(--color-secondary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--font-size-xs)',
                      }}
                    >
                      Refurbish
                    </span>
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--color-text-tertiary)' }}>
                    Jan 1, 2026
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
    </PageTransition>
  )
}

export default Dashboard
