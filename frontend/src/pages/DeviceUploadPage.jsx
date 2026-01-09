// Device Upload Page
// Allows users to upload device information for assessment (manual form or image)

import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import DeviceForm from '../components/DeviceForm'
import { useToast } from '../contexts/ToastContext'

function DeviceUploadPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [latestResult, setLatestResult] = useState(null)
  const toast = useToast()

  // Handle form submission - prepare to send to backend
  const handleFormSubmit = async (formData) => {
    setLoading(true)
    toast.info('Submitting device assessment...')

    try {
      console.log('Sending form data to local API...')
      const response = await fetch('http://localhost:8000/analyze-ewaste', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      const result = await response.json()
      console.log('AI result:', result)
      setLatestResult(result)
      // Mark submitted so we show the post-submission UI
      setSubmitted(true)
      toast.success('Device assessment completed ✓')
    } catch (error) {
      console.error('Error submitting device assessment:', error)
      toast.error('Failed to submit assessment. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <PageTransition>
        <div className="page">
          <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
            <div className="card" style={{ padding: '3rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚡</div>
            <h1 style={{ marginBottom: '1rem' }}>Assessment Submitted</h1>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              {latestResult ? 'Analysis complete — summary shown below.' : 'Your device is being analyzed by our AI system.'}
            </p>
            {latestResult && (
              <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
                <p><strong>Device:</strong> {latestResult.device}</p>
                <p><strong>Category:</strong> {latestResult.category}</p>
                <p><strong>Reason:</strong> {latestResult.reason}</p>
                <p><strong>Estimated Value:</strong> {latestResult.currency}{latestResult.estimated_value}</p>
              </div>
            )}
            <div style={{ 
              background: 'var(--color-bg-secondary)', 
              padding: '1rem', 
              borderRadius: 'var(--radius-md)', 
              marginBottom: '2rem' 
            }}>
              <p style={{ color: 'var(--color-text-tertiary)', marginBottom: '0' }}>
                ⏱️ Typically takes 30-60 seconds
              </p>
            </div>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
              🔄 Assess Another Device
            </button>
          </div>
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
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ marginBottom: '1rem' }}>Assess Your Device</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-tertiary)', maxWidth: '600px', margin: '0 auto' }}>
            Upload device information for AI-powered repairability assessment
          </p>
        </div>

        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          {/* Form Section */}
          <div className="card">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>📋 Device Information</h2>
            <DeviceForm onSubmit={handleFormSubmit} />
          </div>

          {/* Info Section */}
          <div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>🚀 How It Works</h3>
              <ol style={{ paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Enter Details:</strong> Fill in device information or upload a photo
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>AI Analysis:</strong> Our system evaluates repairability and impact
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Get Results:</strong> View metrics and personalized recommendations
                </li>
                <li>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Take Action:</strong> Connect with repair shops or recyclers
                </li>
              </ol>
            </div>

            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))', border: '1px solid var(--color-primary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💡</div>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>Pro Tip</h4>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0' }}>
                Upload a clear photo of your device for more accurate AI analysis and faster results!
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </PageTransition>
  )
}

export default DeviceUploadPage
