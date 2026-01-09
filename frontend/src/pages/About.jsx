/**
 * About Page
 * Information about ReClaim Pro platform and mission
 */

import PageTransition from '../components/PageTransition'

function About() {
  return (
    <PageTransition>
      <div className="page">
      <div className="container">
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>♻️</div>
          <h1 style={{ marginBottom: '1rem' }}>About ReClaim Pro</h1>
          <p style={{ 
            fontSize: 'var(--font-size-lg)', 
            color: 'var(--color-text-secondary)', 
            maxWidth: '700px', 
            margin: '0 auto' 
          }}>
            Empowering sustainable e-waste management through AI-powered insights
          </p>
        </div>

        {/* Mission Section */}
        <div className="card" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Our Mission</h2>
          <p style={{ 
            fontSize: 'var(--font-size-lg)', 
            lineHeight: 'var(--line-height-relaxed)', 
            color: 'var(--color-text-secondary)',
            marginBottom: '1rem'
          }}>
            ReClaim Pro is dedicated to revolutionizing e-waste management by making device repairability 
            transparent and accessible. We leverage cutting-edge AI technology to help individuals and 
            organizations make informed decisions about their electronic devices.
          </p>
          <p style={{ 
            fontSize: 'var(--font-size-lg)', 
            lineHeight: 'var(--line-height-relaxed)', 
            color: 'var(--color-text-secondary)'
          }}>
            Our platform bridges the gap between device owners, repair professionals, and recycling centers, 
            creating a sustainable circular economy for electronics.
          </p>
        </div>

        {/* The Problem */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>The E-Waste Challenge</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ marginBottom: '0.5rem' }}>2.12B Tons</h3>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                Annual global e-waste generation
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>♻️</div>
              <h3 style={{ marginBottom: '0.5rem' }}>32% Only</h3>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                Properly recycled or managed
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3 style={{ marginBottom: '0.5rem' }}>4-6%</h3>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                Revenue lost to inefficiency
              </p>
            </div>
          </div>
        </div>

        {/* Our Solution */}
        <div className="card" style={{ marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(6, 182, 212, 0.05))' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Our Solution</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>🤖 AI-Powered Assessment</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Using Gemini AI and Vertex AI to analyze device repairability, providing instant scores 
                and actionable recommendations.
              </p>
            </div>
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>🌍 Environmental Impact Tracking</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Calculate real CO2, water, and material waste savings from repairing vs. replacing devices.
              </p>
            </div>
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>🔧 Repair Network</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Connect with certified repair shops and technicians, making repair accessible and affordable.
              </p>
            </div>
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>📊 Data-Driven Insights</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Track your sustainability journey and understand your contribution to the circular economy.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Powered by Advanced Technology</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🧠</div>
              <h4>Gemini AI</h4>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                Advanced language models
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
              <h4>Vertex AI</h4>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                Machine learning platform
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔥</div>
              <h4>Firebase</h4>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                Cloud infrastructure
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚛️</div>
              <h4>React</h4>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                Modern web framework
              </p>
            </div>
          </div>
        </div>

        {/* Team & Values */}
        <div className="card" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Our Values</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem' }}>🌱</span>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Sustainability First</h4>
                <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                  Every decision prioritizes environmental impact and circular economy principles
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem' }}>🔓</span>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Transparency</h4>
                <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                  Clear, honest assessments with detailed explanations and data-driven insights
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem' }}>🤝</span>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Accessibility</h4>
                <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                  Making device repair information accessible to everyone, everywhere
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem' }}>🚀</span>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Innovation</h4>
                <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                  Leveraging cutting-edge AI to solve real-world sustainability challenges
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem 2rem', 
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Join the Movement</h2>
          <p style={{ 
            fontSize: 'var(--font-size-lg)', 
            color: 'var(--color-text-secondary)', 
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Start making a difference today. Assess your devices and contribute to a sustainable future.
          </p>
          <button 
            className="btn btn-primary" 
            style={{ fontSize: 'var(--font-size-lg)', padding: '1rem 2rem' }}
            onClick={() => window.location.href = '/assess'}
          >
            ⚡ Get Started
          </button>
        </div>
      </div>
    </div>
    </PageTransition>
  )
}

export default About
