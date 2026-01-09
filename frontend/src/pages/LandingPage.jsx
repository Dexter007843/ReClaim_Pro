// Landing Page - Modern Climate-Tech Design
// Main entry point showcasing platform features

import PageTransition from '../components/PageTransition'

function LandingPage() {
  return (
    <PageTransition>
      <div className="page">
      <div className="container">
        {/* Hero Section - Two Column Layout */}
        <section style={{ marginBottom: '6rem', marginTop: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', minHeight: '600px' }}>
            {/* Left Column - Content */}
            <div>
              {/* Product Name */}
              <h1 style={{ fontSize: 'var(--font-size-6xl)', marginBottom: '1rem', lineHeight: 'var(--line-height-tight)' }}>
                ReClaim Pro
              </h1>

              {/* Tagline */}
              <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-primary)', fontWeight: '600', marginBottom: '2rem', lineHeight: 'var(--line-height-normal)' }}>
                Make Every Device a Second Chance
              </p>

              {/* Subheading */}
              <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 'var(--line-height-normal)' }}>
                AI-powered device repairability assessment. Connect repair shops. Track environmental impact.
              </p>

              {/* Value Propositions - Bullet Points */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>✓</div>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>Instant AI Assessment</div>
                    <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>Get device repairability scores in 60 seconds</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>✓</div>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>Environmental Impact Tracking</div>
                    <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>Measure CO2, water, and material waste prevented</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>✓</div>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>Repair Network Connection</div>
                    <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>Connect with certified shops and recyclers near you</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" style={{ fontSize: 'var(--font-size-lg)', padding: '1rem 2rem', fontWeight: '600' }}>
                  ⚡ Check Device Repairability
                </button>
                <button className="btn btn-secondary" style={{ fontSize: 'var(--font-size-lg)', padding: '1rem 2rem', fontWeight: '600' }}>
                  🌍 View Environmental Impact
                </button>
              </div>
            </div>

            {/* Right Column - Illustration Placeholder */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1000px' }}>
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                borderRadius: 'var(--radius-3xl)',
                border: '2px solid var(--color-border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-xl)',
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{ fontSize: '4rem' }}>♻️</div>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>
                    AI-Powered Device Analysis
                  </div>
                  <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                    Illustration placeholder - Replace with device image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌍</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                62M+
              </div>
              <div style={{ color: 'var(--color-text-tertiary)', fontSize: '0.875rem' }}>Tons E-Waste Annually</div>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>♻️</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                $57B
              </div>
              <div style={{ color: 'var(--color-text-tertiary)', fontSize: '0.875rem' }}>Value Lost Per Year</div>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔧</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                85%+
              </div>
              <div style={{ color: 'var(--color-text-tertiary)', fontSize: '0.875rem' }}>AI Accuracy</div>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💚</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                40M
              </div>
              <div style={{ color: 'var(--color-text-tertiary)', fontSize: '0.875rem' }}>Tons Reduction Target</div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>How It Works</h2>
          <div className="grid grid-2">
            <div className="card">
              <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '1rem', boxShadow: 'var(--shadow-glow)' }}>
                📱
              </div>
              <h3>1. Upload Device Info</h3>
              <p>Enter your device details or snap a photo for instant analysis</p>
            </div>

            <div className="card">
              <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '1rem', boxShadow: 'var(--shadow-glow)' }}>
                🤖
              </div>
              <h3>2. AI Assessment</h3>
              <p>Gemini AI analyzes repairability, materials, and environmental impact</p>
            </div>

            <div className="card">
              <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '1rem', boxShadow: 'var(--shadow-glow)' }}>
                📊
              </div>
              <h3>3. Get Insights</h3>
              <p>View repairability score, CO2 impact, and material recovery potential</p>
            </div>

            <div className="card">
              <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '1rem', boxShadow: 'var(--shadow-glow)' }}>
                🔄
              </div>
              <h3>4. Take Action</h3>
              <p>Connect with certified repair shops, recyclers, or refurbishment centers</p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Platform Features</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-tertiary)', maxWidth: '600px', margin: '0 auto' }}>
              Everything you need to make informed decisions about your devices
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* Feature 1 - AI Repairability Score */}
            <div className="card" style={{
              transition: 'all var(--transition-base)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                marginBottom: '1rem',
                boxShadow: 'var(--shadow-glow-primary)',
              }}>
                📊
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>AI Repairability Score</h4>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-snug)' }}>
                Get an instant AI-powered assessment of your device's repairability
              </p>
            </div>

            {/* Feature 2 - Repair vs Recycle */}
            <div className="card" style={{
              transition: 'all var(--transition-base)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                marginBottom: '1rem',
                boxShadow: 'var(--shadow-glow-secondary)',
              }}>
                🔄
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Smart Recommendations</h4>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-snug)' }}>
                Get personalized repair vs recycle recommendations based on device analysis
              </p>
            </div>

            {/* Feature 3 - Nearby Repair Shops */}
            <div className="card" style={{
              transition: 'all var(--transition-base)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                marginBottom: '1rem',
                boxShadow: 'var(--shadow-glow-primary)',
              }}>
                📍
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Nearby Repair Shops</h4>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-snug)' }}>
                Discover and connect with certified repair shops near your location
              </p>
            </div>

            {/* Feature 4 - Circular Impact Dashboard */}
            <div className="card" style={{
              transition: 'all var(--transition-base)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                marginBottom: '1rem',
                boxShadow: 'var(--shadow-glow-secondary)',
              }}>
                🌱
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Circular Impact Dashboard</h4>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-snug)' }}>
                Track your environmental impact and sustainability contributions
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ textAlign: 'center', padding: '3rem', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to Make an Impact?</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-tertiary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Join thousands of users making sustainable choices for e-waste management
          </p>
          <button className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
            🚀 Start Assessment
          </button>
        </section>
      </div>
    </div>
    </PageTransition>
  )
}

export default LandingPage
