// Repair Shop Dashboard
// Shows incoming repair requests, device demand, and earnings (mock data for now).

import PageTransition from '../components/PageTransition'

const mockRequests = [
  { id: 'REQ-1042', device: 'iPhone 13', issue: 'Cracked screen', eta: '2d', value: 220, status: 'New' },
  { id: 'REQ-1043', device: 'Samsung S21', issue: 'Battery swelling', eta: '1d', value: 180, status: 'New' },
  { id: 'REQ-1044', device: 'Dell XPS 15', issue: 'Charging port', eta: '3d', value: 260, status: 'Queued' },
]

const mockDemand = [
  { type: 'Phones', share: 48, topModels: ['iPhone 13', 'Samsung S21', 'Pixel 6'] },
  { type: 'Laptops', share: 32, topModels: ['Dell XPS', 'MacBook Pro 14', 'Lenovo T14'] },
  { type: 'Tablets', share: 12, topModels: ['iPad Air', 'Galaxy Tab S7'] },
  { type: 'Wearables', share: 8, topModels: ['Apple Watch 7', 'Fitbit Versa'] },
]

const mockEarnings = {
  monthToDate: 8420,
  forecast: 12350,
  avgTicket: 215,
}

function RepairShopDashboard() {
  return (
    <PageTransition>
      <div className="page">
        <div className="container">
          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ marginBottom: '0.5rem' }}>🔧 Repair Shop Dashboard</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-tertiary)' }}>
              Track incoming requests, demand, and earnings (mock data)
            </p>
          </div>

          {/* Incoming Requests */}
          <section className="card" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <h2 style={{ marginBottom: '1rem' }}>📥 Incoming Repair Requests</h2>
              <span style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>Mock data</span>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Request</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Device</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Issue</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>ETA</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Est. Value</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--color-text-secondary)' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockRequests.map((req) => (
                    <tr key={req.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '0.75rem' }}>{req.id}</td>
                      <td style={{ padding: '0.75rem' }}>{req.device}</td>
                      <td style={{ padding: '0.75rem' }}>{req.issue}</td>
                      <td style={{ padding: '0.75rem' }}>{req.eta}</td>
                      <td style={{ padding: '0.75rem', fontWeight: '600' }}>${req.value}</td>
                      <td style={{ padding: '0.75rem' }}>
                        <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(6, 182, 212, 0.12)', borderRadius: '999px', color: 'var(--color-secondary)', fontSize: '0.85rem' }}>
                          {req.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Device Types in Demand */}
          <section className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>📈 Device Types in Demand</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {mockDemand.map((item) => (
                <div key={item.type} style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0 }}>{item.type}</h3>
                    <span style={{ fontWeight: '700', color: 'var(--color-primary)' }}>{item.share}%</span>
                  </div>
                  <p style={{ margin: '0.5rem 0', color: 'var(--color-text-tertiary)' }}>Top models:</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {item.topModels.map((model) => (
                      <span key={model} style={{ padding: '0.25rem 0.6rem', background: 'var(--color-bg-secondary)', borderRadius: '999px', fontSize: '0.85rem' }}>
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Estimated Earnings */}
          <section className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>💵 Estimated Earnings</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <EarningStat label="Month-to-date" value={`$${mockEarnings.monthToDate.toLocaleString()}`} accent="var(--color-primary)" />
              <EarningStat label="Forecast (30d)" value={`$${mockEarnings.forecast.toLocaleString()}`} accent="var(--color-secondary)" />
              <EarningStat label="Avg ticket" value={`$${mockEarnings.avgTicket.toLocaleString()}`} accent="var(--color-text-primary)" />
            </div>
          </section>

          {/* Quick Actions */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">View All Jobs</button>
            <button className="btn btn-secondary">Update Profile</button>
            <button className="btn btn-secondary">Download Report</button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

function EarningStat({ label, value, accent }) {
  return (
    <div style={{ padding: '1.25rem', border: '1px solid var(--color-border)', borderRadius: '0.75rem' }}>
      <div style={{ fontSize: '0.9rem', color: 'var(--color-text-tertiary)', marginBottom: '0.35rem' }}>{label}</div>
      <div style={{ fontSize: '1.8rem', fontWeight: '700', color: accent }}>{value}</div>
    </div>
  )
}

export default RepairShopDashboard
