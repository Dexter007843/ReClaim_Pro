/**
 * Settings Page
 * User settings and preferences
 */

import PageTransition from '../components/PageTransition'

function Settings() {
  return (
    <PageTransition>
      <div className="page">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ marginBottom: '0.5rem' }}>Settings</h1>
          <p style={{ color: 'var(--color-text-tertiary)' }}>
            Manage your account preferences and application settings
          </p>
        </div>

        {/* Account Settings */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Account Settings</h2>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {/* Profile Section */}
            <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ marginBottom: '0.25rem' }}>Profile Information</h3>
                  <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                    Update your name and profile details
                  </p>
                </div>
                <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: 'var(--font-size-sm)' }}>
                  ✏️ Edit
                </button>
              </div>
              <div style={{ padding: '1rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', color: 'var(--color-text-tertiary)' }}>
                <div style={{ fontSize: 'var(--font-size-sm)' }}>📧 user@example.com</div>
              </div>
            </div>

            {/* Notifications Section */}
            <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Notifications</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ cursor: 'pointer' }} />
                  <span style={{ fontSize: 'var(--font-size-sm)' }}>Email me about assessment results</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ cursor: 'pointer' }} />
                  <span style={{ fontSize: 'var(--font-size-sm)' }}>Send repair recommendations</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                  <span style={{ fontSize: 'var(--font-size-sm)' }}>Weekly sustainability report</span>
                </label>
              </div>
            </div>

            {/* Privacy Section */}
            <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ marginBottom: '0.25rem' }}>Privacy & Data</h3>
                  <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                    Control how your data is used
                  </p>
                </div>
                <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: 'var(--font-size-sm)' }}>
                  🔐 Manage
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div style={{ padding: '1.5rem', background: 'rgba(239, 68, 68, 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-error)' }}>Danger Zone</h3>
              <p style={{ color: 'var(--color-text-tertiary)', marginBottom: '1rem', fontSize: 'var(--font-size-sm)' }}>
                Deleting your account is permanent and cannot be undone.
              </p>
              <button
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'var(--color-error)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: '600',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '0.9'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '1'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                🗑️ Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="card">
          <h2 style={{ marginBottom: '1rem' }}>About ReClaim Pro</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)', marginBottom: '0.25rem' }}>
                Version
              </div>
              <div style={{ fontWeight: '600' }}>1.0.0</div>
            </div>
            <div>
              <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)', marginBottom: '0.25rem' }}>
                Built for Sustainability
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-snug)', color: 'var(--color-text-secondary)' }}>
                ReClaim Pro helps users make sustainable choices about e-waste through AI-powered device assessment and repair recommendations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  )
}

export default Settings
