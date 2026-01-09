// Analysis Result Page
// Displays AI assessment results from backend: repairability, recommendation, costs, and environmental impact.

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import LoadingState from '../components/LoadingState'
import ErrorState from '../components/ErrorState'
import { formatCurrency } from '../utils/helpers'
import { getAssessmentResult } from '../services/deviceService'

function AnalysisResultPage() {
  const [searchParams] = useSearchParams()
  const assessmentId = searchParams.get('id')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(Boolean(assessmentId))
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    async function load() {
      if (!assessmentId) return
      setLoading(true)
      setError(null)
      try {
        const result = await getAssessmentResult(assessmentId)
        if (active) setData(result)
      } catch (err) {
        if (active) setError(err.message || 'Failed to load results')
      } finally {
        if (active) setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [assessmentId])

  const score = data?.repairability_score ?? 0
  const recommendation = (data?.recommendation || 'Repair').toUpperCase()
  const cost = data?.cost_comparison || {}
  const impact = data?.environmental_impact || {}

  const scoreLabel = useMemo(() => {
    if (score >= 75) return 'Highly Repairable'
    if (score >= 50) return 'Moderately Repairable'
    if (score >= 25) return 'Challenging'
    return 'Not Recommended'
  }, [score])

  if (loading) {
    return (
      <PageTransition>
        <LoadingState message="Fetching analysis results..." />
      </PageTransition>
    )
  }

  if (error) {
    return (
      <PageTransition>
        <ErrorState message={error} />
      </PageTransition>
    )
  }

  if (!assessmentId) {
    return (
      <PageTransition>
        <ErrorState message="No assessment id provided." />
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="page">
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ marginBottom: '1rem' }}>Device Assessment Results</h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-tertiary)' }}>
              Your personalized repairability analysis and recommendations
            </p>
          </div>

          {/* Repairability Score - Hero Section */}
          <div
            className="card"
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              padding: '3rem',
              background:
                'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
              border: '2px solid var(--color-primary)',
            }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ marginBottom: '0.5rem' }}>Repairability Score</h2>
            <div
              style={{
                fontSize: '5rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1',
              }}
            >
              {Math.round(score)}
            </div>
            <p
              style={{
                fontSize: '1.25rem',
                color: 'var(--color-primary)',
                fontWeight: '600',
                marginTop: '0.5rem',
              }}
            >
              {scoreLabel}
            </p>
            <div
              style={{
                width: '100%',
                height: '12px',
                background: 'var(--color-bg-secondary)',
                borderRadius: '9999px',
                overflow: 'hidden',
                marginTop: '1.5rem',
              }}
            >
              <div
                style={{
                  width: `${Math.min(Math.max(score, 0), 100)}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                  transition: 'width 0.8s ease',
                }}
              />
            </div>
          </div>

          {/* Cost Comparison */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>💰 Cost Comparison</h2>
            <div className="grid grid-3">
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Repair Cost</h3>
                <div style={{ fontSize: '2rem', fontWeight: '700' }}>
                  {cost.repairCost != null ? formatCurrency(cost.repairCost) : '—'}
                </div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Replace Cost</h3>
                <div style={{ fontSize: '2rem', fontWeight: '700' }}>
                  {cost.replaceCost != null ? formatCurrency(cost.replaceCost) : '—'}
                </div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Savings</h3>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--color-primary)',
                  }}
                >
                  {cost.savings != null ? formatCurrency(cost.savings) : '—'}
                </div>
                <p style={{ color: 'var(--color-text-tertiary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                  Repair vs replace delta
                </p>
              </div>
            </div>
          </section>

          {/* Environmental Impact */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>🌍 Environmental Impact</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              <ImpactCard
                icon="💨"
                title="Carbon Saved"
                value={impact.carbonSavedKg != null ? `${impact.carbonSavedKg} kg` : '—'}
                subtitle="By choosing repair over replace"
              />
              <ImpactCard
                icon="♻️"
                title="E-waste Reduced"
                value={impact.ewasteReducedKg != null ? `${impact.ewasteReducedKg} kg` : '—'}
                subtitle="Material diverted from landfill"
              />
              <ImpactCard
                icon="💰"
                title="Economic Value Retained"
                value={impact.economicValueRetained != null ? formatCurrency(impact.economicValueRetained) : '—'}
                subtitle="Value preserved via repair"
              />
            </div>
          </section>

          {/* Recommended Action */}
          <section style={{ marginBottom: '3rem' }}>
            <div
              className="card"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-secondary-dark))',
                border: 'none',
                padding: '2.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '4rem' }}>🔧</div>
                <div style={{ flex: '1' }}>
                  <h2 style={{ marginBottom: '0.5rem', color: 'white' }}>
                    Recommended Action: {recommendation}
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0', fontSize: '1.125rem' }}>
                    {data?.explanation || 'Based on your device condition and costs, this is the best path forward.'}
                  </p>
                </div>
                <button
                  className="btn"
                  style={{
                    background: 'white',
                    color: 'var(--color-primary)',
                    fontWeight: '600',
                    padding: '1rem 2rem',
                    fontSize: '1.125rem',
                  }}
                >
                  Find Repair Shops →
                </button>
              </div>
            </div>
          </section>

          {/* Alternative Options */}
          <section>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Alternative Options</h2>
            <div className="grid grid-3">
              <div className="card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔄</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Refurbishment & Resale</h3>
                <p style={{ color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
                  Get your device refurbished and sell for residual value
                </p>
                <button className="btn btn-secondary" style={{ width: '100%' }}>
                  Explore Options
                </button>
              </div>

              <div className="card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>♻️</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Recycling Partners</h3>
                <p style={{ color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
                  Connect with certified e-waste recyclers near you
                </p>
                <button className="btn btn-secondary" style={{ width: '100%' }}>
                  Find Recyclers
                </button>
              </div>

              <div className="card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛠️</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>DIY Repair Resources</h3>
                <p style={{ color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
                  Access step-by-step guides and repair tutorials
                </p>
                <button className="btn btn-secondary" style={{ width: '100%' }}>
                  View Guides
                </button>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              marginTop: '3rem',
              flexWrap: 'wrap',
            }}
          >
            <button className="btn btn-secondary">📤 Share Results</button>
            <button className="btn btn-secondary">📄 Download Report</button>
            <button className="btn btn-primary">🔄 Assess Another Device</button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

function ImpactCard({ icon, title, value, subtitle }) {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <div
        style={{
          fontSize: '2.25rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {value}
      </div>
      <p style={{ color: 'var(--color-text-tertiary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
        {subtitle}
      </p>
    </div>
  )
}

export default AnalysisResultPage
