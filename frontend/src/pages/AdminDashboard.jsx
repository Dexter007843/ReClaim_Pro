// Admin Dashboard
// Shows devices analyzed, repair vs recycle ratio, and CO2 impact. Chart placeholders included (no chart lib yet).

import PageTransition from '../components/PageTransition'

const mockStats = {
  totalDevices: 45678,
  repairedPercent: 62,
  recycledPercent: 38,
  co2SavedKg: 2500000,
}

function AdminDashboard() {
  return (
    <PageTransition>
      <div className="page">
        <div className="container">
          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ marginBottom: '0.5rem' }}>⚙️ Admin Dashboard</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-tertiary)' }}>
              Platform impact overview (mock data)
            </p>
          </div>

          {/* Key Stats */}
          <section style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <StatCard label="Total devices analyzed" value={mockStats.totalDevices.toLocaleString()} icon="📱" />
              <StatCard label="% repaired" value={`${mockStats.repairedPercent}%` } icon="🔧" accent="var(--color-primary)" />
              <StatCard label="% recycled" value={`${mockStats.recycledPercent}%` } icon="♻️" accent="var(--color-secondary)" />
              <StatCard label="Estimated CO2 saved" value={`${(mockStats.co2SavedKg / 1000).toLocaleString()} t`} icon="🌍" />
            </div>
          </section>

          {/* Charts placeholders */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <ChartPlaceholder title="Repair vs Recycle" description="Placeholder for a donut/pie chart" />
            <ChartPlaceholder title="Devices analyzed over time" description="Placeholder for a line/area chart" />
            <ChartPlaceholder title="CO2 saved trend" description="Placeholder for a bar/line chart" />
          </section>

          {/* Recent snapshot */}
          <section className="card">
            <h2 style={{ marginBottom: '1rem' }}>Recent Summary (mock)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <SummaryItem label="Yesterday analyzed" value="1,240" />
              <SummaryItem label="Repairs completed" value="780" />
              <SummaryItem label="Recycles processed" value="460" />
              <SummaryItem label="CO2 saved (kg)" value="65,000" />
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}

function StatCard({ label, value, icon, accent }) {
  return (
    <div className="card" style={{ padding: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <div style={{ fontSize: '1.5rem' }}>{icon}</div>
        <div style={{ fontSize: '0.95rem', color: 'var(--color-text-tertiary)' }}>{label}</div>
      </div>
      <div style={{ fontSize: '2rem', fontWeight: '700', color: accent || 'var(--color-text-primary)' }}>{value}</div>
    </div>
  )
}

function ChartPlaceholder({ title, description }) {
  return (
    <div className="card" style={{ minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h2 style={{ marginBottom: '0.5rem' }}>{title}</h2>
        <p style={{ color: 'var(--color-text-tertiary)', fontSize: '0.95rem', marginBottom: '1rem' }}>{description}</p>
      </div>
      <div style={{ flex: 1, border: '1px dashed var(--color-border)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>
        Chart placeholder
      </div>
    </div>
  )
}

function SummaryItem({ label, value }) {
  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div style={{ color: 'var(--color-text-tertiary)', marginBottom: '0.25rem' }}>{label}</div>
      <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{value}</div>
    </div>
  )
}

export default AdminDashboard
