import EmptyState from '../components/EmptyState'
import PageTransition from '../components/PageTransition'

/**
 * Assessments Page - shows user's device assessments
 * Displays empty state when no assessments exist
 */

function Assessments() {
  // In real app, this would fetch from backend
  const assessments = [] // Empty for demo

  return (
    <PageTransition>
      <div className="page">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ marginBottom: '0.5rem' }}>My Assessments</h1>
          <p style={{ color: 'var(--color-text-tertiary)' }}>
            View all your device repairability assessments and environmental impact
          </p>
        </div>

        {/* Empty State */}
        {assessments.length === 0 ? (
          <EmptyState
            icon="📱"
            title="No Assessments Yet"
            description="Start by assessing your first device to get a repairability score, repair recommendations, and environmental impact metrics."
            actionLabel="Assess Your First Device"
            actionLink="/assess"
            size="default"
          />
        ) : (
          <div>
            {/* Assessment Grid would go here */}
          </div>
        )}
      </div>
    </div>
    </PageTransition>
  )
}

export default Assessments
