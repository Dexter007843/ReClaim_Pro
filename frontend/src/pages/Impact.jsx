/**
 * Impact Page
 * Track environmental impact and sustainability metrics
 */

import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import EmptyState from '../components/EmptyState'

function Impact() {
  const [hasImpactData, setHasImpactData] = useState(false)

  // In real app, fetch user's impact data from backend
  // const [impactData, setImpactData] = useState(null)
  // useEffect(() => { fetchImpactData() }, [])

  if (!hasImpactData) {
    return (
      <PageTransition>
        <div className="page">
          <div className="container">
            <EmptyState
              icon="🌍"
              title="Track Your Environmental Impact"
              description="Start assessing devices to see your contribution to sustainability. Track CO2 saved, e-waste diverted, and resources conserved through repair choices."
              actionLabel="Assess Your First Device"
              actionLink="/assess"
              size="large"
            />
          </div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="page">
        <div className="container">
          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ marginBottom: '0.5rem' }}>Your Environmental Impact</h1>
            <p style={{ color: 'var(--color-text-tertiary)' }}>
              Track your contribution to sustainability and the circular economy
            </p>
          </div>

          {/* Impact Summary Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {/* CO2 Saved */}
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.05))',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌱</div>
              <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>
                142 kg
              </h3>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                CO2 Emissions Saved
              </p>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)', marginTop: '0.5rem' }}>
                Equivalent to 640 km driven
              </p>
            </div>

            {/* E-Waste Diverted */}
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.05))',
              border: '1px solid rgba(6, 182, 212, 0.3)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>♻️</div>
              <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: '0.25rem', color: 'var(--color-secondary)' }}>
                8.4 kg
              </h3>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                E-Waste Diverted
              </p>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)', marginTop: '0.5rem' }}>
                From landfills
              </p>
            </div>

            {/* Water Saved */}
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.05))',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💧</div>
              <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: '0.25rem', color: 'var(--color-info)' }}>
                1,240 L
              </h3>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                Water Conserved
              </p>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)', marginTop: '0.5rem' }}>
                Through device repair
              </p>
            </div>

            {/* Devices Repaired */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔧</div>
              <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: '0.25rem', color: 'var(--color-accent)' }}>
                12
              </h3>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                Devices Assessed
              </p>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)', marginTop: '0.5rem' }}>
                Lifetime total
              </p>
            </div>
          </div>

          {/* Monthly Trend Chart */}
          <div className="card" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Monthly Impact Trend</h2>
            <div style={{ 
              height: '250px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-text-tertiary)'
            }}>
              📊 Chart visualization coming soon (integrate Chart.js or similar)
            </div>
          </div>

          {/* Achievements & Milestones */}
          <div className="card" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Achievements</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              padding: '1rem',
              background: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{ fontSize: '2rem' }}>🏆</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: '0.25rem' }}>Eco Warrior</h4>
                <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                  Assessed 10+ devices
                </p>
              </div>
              <div style={{ 
                padding: '0.5rem 1rem', 
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-primary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '600'
              }}>
                Unlocked
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              padding: '1rem',
              background: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{ fontSize: '2rem' }}>🌟</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: '0.25rem' }}>Carbon Saver</h4>
                <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                  Saved 100+ kg of CO2
                </p>
              </div>
              <div style={{ 
                padding: '0.5rem 1rem', 
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-primary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '600'
              }}>
                Unlocked
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              padding: '1rem',
              background: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              opacity: 0.6
            }}>
              <div style={{ fontSize: '2rem' }}>🔒</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: '0.25rem' }}>Repair Champion</h4>
                <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                  Complete 25 device assessments
                </p>
              </div>
              <div style={{ 
                padding: '0.5rem 1rem', 
                background: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-text-tertiary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '600'
              }}>
                13/25
              </div>
            </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="card">
            <h2 style={{ marginBottom: '1.5rem' }}>Your Impact vs. Average User</h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    CO2 Saved
                  </span>
                  <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-primary)' }}>
                    +35% more
                  </span>
                </div>
                <div style={{ 
                  height: '8px', 
                  background: 'var(--color-bg-secondary)', 
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    height: '100%', 
                    width: '75%', 
                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))'
                  }} />
                </div>
              </div>

              <div>
                <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                  Devices Assessed
                </span>
                <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-primary)' }}>
                  +20% more
                </span>
              </div>
              <div style={{ 
                height: '8px', 
                background: 'var(--color-bg-secondary)', 
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    height: '100%', 
                    width: '60%', 
                    background: 'linear-gradient(90deg, var(--color-secondary), var(--color-accent))'
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Impact
