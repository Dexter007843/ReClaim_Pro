// Device Upload Form Component
// Controlled form for collecting device information with image upload

import { useState } from 'react'
import { useToast } from '../contexts/ToastContext'

function DeviceForm({ onSubmit }) {
  const toast = useToast()
  
  // Form state - controlled components
  const [formData, setFormData] = useState({
    deviceType: '',
    brand: '',
    modelNumber: '',
    deviceAge: '',
    condition: '',
    issues: '',
    image: null,
    imagePreview: null,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle text/select input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: 'Image size must be less than 5MB',
        }))
        return
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors((prev) => ({
          ...prev,
          image: 'Please upload a valid image file',
        }))
        return
      }

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result,
        }))
      }
      reader.readAsDataURL(file)

      // Clear error
      setErrors((prev) => ({
        ...prev,
        image: '',
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.deviceType.trim()) {
      newErrors.deviceType = 'Device type is required'
    }

    if (!formData.brand.trim()) {
      newErrors.brand = 'Brand is required'
    }

    if (!formData.modelNumber.trim()) {
      newErrors.modelNumber = 'Model number is required'
    }

    if (!formData.deviceAge) {
      newErrors.deviceAge = 'Device age is required'
    }

    if (!formData.condition) {
      newErrors.condition = 'Condition is required'
    }

    if (!formData.image && !formData.issues) {
      newErrors.image = 'Please upload an image or describe issues'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      toast.warning('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare form data for backend (multipart/form-data for image)
      const submitData = new FormData()
      submitData.append('deviceType', formData.deviceType)
      submitData.append('brand', formData.brand)
      submitData.append('modelNumber', formData.modelNumber)
      submitData.append('deviceAge', formData.deviceAge)
      submitData.append('condition', formData.condition)
      submitData.append('issues', formData.issues)
      
      if (formData.image) {
        // backend expects the file field as `file` for the FastAPI endpoint
        submitData.append('file', formData.image)
      }

      // Call parent component's onSubmit (will be connected to API)
      if (onSubmit) {
        await onSubmit(submitData)
      }

      // Reset form on success
      setFormData({
        deviceType: '',
        brand: '',
        modelNumber: '',
        deviceAge: '',
        condition: '',
        issues: '',
        image: null,
        imagePreview: null,
      })
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Failed to submit form. Please try again.')
      setErrors((prev) => ({
        ...prev,
        submit: 'Failed to submit form. Please try again.',
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Submit error message */}
      {errors.submit && (
        <div className="error-message">
          <p>{errors.submit}</p>
        </div>
      )}

      {/* Device Type */}
      <div className="form-group">
        <label htmlFor="deviceType" className="form-label">📱 Device Type *</label>
        <select
          id="deviceType"
          name="deviceType"
          value={formData.deviceType}
          onChange={handleInputChange}
          className="form-select"
          required
          aria-describedby={errors.deviceType ? 'deviceType-error' : undefined}
          aria-invalid={!!errors.deviceType}
        >
          <option value="">Select Device Type</option>
          <option value="phone">📱 Mobile Phone</option>
          <option value="laptop">💻 Laptop</option>
          <option value="tablet">📲 Tablet</option>
          <option value="camera">📷 Camera</option>
          <option value="smartwatch">⌚ Smart Watch</option>
          <option value="other">🔧 Other</option>
        </select>
        {errors.deviceType && <span id="deviceType-error" className="form-error" role="alert">{errors.deviceType}</span>}
      </div>

      {/* Brand */}
      <div className="form-group">
        <label htmlFor="brand" className="form-label">🏷️ Brand *</label>
        <input
          id="brand"
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          className="form-input"
          placeholder="e.g., Apple, Samsung, Dell"
          required
          aria-describedby={errors.brand ? 'brand-error' : undefined}
          aria-invalid={!!errors.brand}
        />
        {errors.brand && <span id="brand-error" className="form-error" role="alert">{errors.brand}</span>}
      </div>

      {/* Model Number */}
      <div className="form-group">
        <label htmlFor="modelNumber" className="form-label">🔢 Model Number *</label>
        <input
          id="modelNumber"
          type="text"
          name="modelNumber"
          value={formData.modelNumber}
          onChange={handleInputChange}
          className="form-input"
          placeholder="e.g., iPhone 12, XPS 13"
          required
          aria-describedby={errors.modelNumber ? 'modelNumber-error' : undefined}
          aria-invalid={!!errors.modelNumber}
        />
        {errors.modelNumber && <span id="modelNumber-error" className="form-error" role="alert">{errors.modelNumber}</span>}
      </div>

      {/* Device Age */}
      <div className="form-group">
        <label htmlFor="deviceAge" className="form-label">📅 Device Age (years) *</label>
        <input
          id="deviceAge"
          type="number"
          name="deviceAge"
          min="0"
          max="50"
          value={formData.deviceAge}
          onChange={handleInputChange}
          className="form-input"
          placeholder="e.g., 3"
          required
          aria-describedby={errors.deviceAge ? 'deviceAge-error' : undefined}
          aria-invalid={!!errors.deviceAge}
        />
        {errors.deviceAge && <span id="deviceAge-error" className="form-error" role="alert">{errors.deviceAge}</span>}
      </div>

      {/* Condition */}
      <div className="form-group">
        <label htmlFor="condition" className="form-label">⚡ Device Condition *</label>
        <select
          id="condition"
          name="condition"
          value={formData.condition}
          onChange={handleInputChange}
          className="form-select"
          required
          aria-describedby={errors.condition ? 'condition-error' : undefined}
          aria-invalid={!!errors.condition}
        >
          <option value="">Select Condition</option>
          <option value="like_new">✨ Like New</option>
          <option value="good">👍 Good (Minor Scratches)</option>
          <option value="fair">👌 Fair (Moderate Damage)</option>
          <option value="poor">⚠️ Poor (Severe Damage)</option>
        </select>
        {errors.condition && <span id="condition-error" className="form-error" role="alert">{errors.condition}</span>}
      </div>

      {/* Issues/Damage Description */}
      <div className="form-group">
        <label htmlFor="issues" className="form-label">📝 Describe Any Issues (Optional)</label>
        <textarea
          id="issues"
          name="issues"
          value={formData.issues}
          onChange={handleInputChange}
          className="form-textarea"
          placeholder="e.g., Screen has cracks, battery dies quickly, won't turn on..."
          rows="4"
        />
      </div>

      {/* Image Upload */}
      <div className="form-group">
        <label htmlFor="imageInput" className="form-label">📸 Upload Device Photo</label>
        <div style={{ 
          border: '2px dashed var(--color-border)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '2rem', 
          textAlign: 'center',
          background: 'var(--color-bg-secondary)',
          cursor: 'pointer',
          transition: 'all var(--transition-base)'
        }}>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            aria-label="Upload device photo"
            aria-describedby={errors.image ? 'image-error' : 'image-help'}
          />
          <label htmlFor="imageInput" style={{ cursor: 'pointer' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }} aria-hidden="true">📷</div>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              Click to upload or drag and drop
            </p>
            <p id="image-help" style={{ color: 'var(--color-text-tertiary)', fontSize: '0.875rem' }}>
              JPG, PNG up to 5MB
            </p>
          </label>
        </div>
        {errors.image && <span id="image-error" className="form-error" role="alert">{errors.image}</span>}
        
        {/* Image Preview */}
        {formData.imagePreview && (
          <div style={{ 
            marginTop: '1rem', 
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden', 
            border: '1px solid var(--color-border)',
            background: 'var(--color-bg-secondary)',
            padding: '1rem'
          }}>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Preview:</p>
            <img 
              src={formData.imagePreview} 
              alt={`Preview of ${formData.brand || 'device'} ${formData.modelNumber || 'image'} showing device condition`}
              style={{ 
                maxWidth: '100%', 
                maxHeight: '300px',
                borderRadius: 'var(--radius-md)',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary"
        style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', marginTop: '1rem' }}
        aria-label={isSubmitting ? 'Analyzing device, please wait' : 'Submit form to analyze device with AI'}
      >
        {isSubmitting ? '⚡ Analyzing Device...' : '🤖 Analyze Device with AI'}
      </button>

      <p style={{ textAlign: 'center', color: 'var(--color-text-tertiary)', fontSize: '0.875rem', marginTop: '1rem' }}>
        * Required fields
      </p>
    </form>
  )
}

export default DeviceForm
