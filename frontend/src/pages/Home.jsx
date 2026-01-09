// Home Page Component
// Main landing/dashboard page for ReClaim Pro

import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

function Home() {
  return (
    <PageTransition>
      <div className="page">
      <div className="container">
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌍</div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            ReClaim Pro
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-tertiary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
            AI-Driven Repairability & Circular Economy Platform for E-Waste
          </p>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Make sustainable choices for e-waste management with AI-powered insights
          </p>
          <Link to="/assess" style={{ textDecoration: 'none' }}>
            <button className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem', border: 'none', cursor: 'pointer' }}>
              ⚡ Get Started - Assess Your Device
            </button>
          </Link>
        </section>

        {/* Features Grid */}
        <section>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Platform Features</h2>
          <div className="grid grid-2">
            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
              <h3>AI-Powered Assessment</h3>
              <p style={{ color: 'var(--color-text-tertiary)' }}>
                Get instant device repairability scores using Gemini AI and Vertex AI technology
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌱</div>
              <h3>Environmental Impact</h3>
              <p style={{ color: 'var(--color-text-tertiary)' }}>
                Calculate CO2, water, and material waste saved through repair and recycling
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔧</div>
              <h3>Repair Network</h3>
              <p style={{ color: 'var(--color-text-tertiary)' }}>
                Connect with certified repair shops and technicians in your area
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
              <h3>Track Your Impact</h3>
              <p style={{ color: 'var(--color-text-tertiary)' }}>
                Monitor your sustainability contributions and circular economy participation
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </PageTransition>
  )
}

export default Home
