// Device Assessment Service
// Handles API calls to Cloud Functions for device assessment

/**
 * Assess a device for repairability
 * @param {Object} deviceData - Device information from form
 * @returns {Promise<Object>} - Assessment results from Cloud Function
 */
export async function assessDevice(deviceData) {
  try {
    const response = await fetch('/api/assess-device', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deviceData),
    })

    if (!response.ok) {
      throw new Error(`Assessment failed: ${response.statusText}`)
    }

    const results = await response.json()
    return results
  } catch (error) {
    console.error('Error assessing device:', error)
    throw error
  }
}

/**
 * Get assessment history for current user
 * @returns {Promise<Array>} - Array of previous assessments
 */
export async function getAssessmentHistory() {
  try {
    const response = await fetch('/api/assessment-history')
    
    if (!response.ok) {
      throw new Error(`Failed to fetch history: ${response.statusText}`)
    }

    const history = await response.json()
    return history
  } catch (error) {
    console.error('Error fetching assessment history:', error)
    throw error
  }
}

/**
 * Get device recommendations based on assessment results
 * @param {string} assessmentId - ID of the assessment
 * @returns {Promise<Object>} - Recommendations for the device
 */
export async function getRecommendations(assessmentId) {
  try {
    const response = await fetch(`/api/recommendations/${assessmentId}`)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch recommendations: ${response.statusText}`)
    }

    const recommendations = await response.json()
    return recommendations
  } catch (error) {
    console.error('Error fetching recommendations:', error)
    throw error
  }
}

/**
 * Get a single assessment result by id
 * @param {string} assessmentId - ID of the assessment
 * @returns {Promise<Object>} - Assessment result payload from backend
 */
export async function getAssessmentResult(assessmentId) {
  if (!assessmentId) {
    throw new Error('assessmentId is required')
  }

  const response = await fetch(`/api/assessments/${assessmentId}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch assessment: ${response.statusText}`)
  }
  return response.json()
}

export default {
  assessDevice,
  getAssessmentHistory,
  getRecommendations,
  getAssessmentResult,
}
