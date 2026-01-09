# Device Form Component Documentation

## Overview

The `DeviceForm` component is a controlled React form for collecting device information with image upload capability. It's designed to integrate with Cloud Functions backend API.

## Features

✅ **Controlled Components** - All inputs managed by React state  
✅ **Form Validation** - Client-side validation with error messages  
✅ **Image Upload** - File input with preview and validation  
✅ **File Size Validation** - Max 5MB limit  
✅ **Error Handling** - Real-time error feedback  
✅ **FormData Ready** - Prepared for multipart/form-data API calls  
✅ **Loading State** - Disable submit while processing  

## Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|-----------|
| **Device Type** | Select | Yes | Must select from dropdown |
| **Brand** | Text | Yes | Non-empty string |
| **Model Number** | Text | Yes | Non-empty string |
| **Device Age** | Number | Yes | 0-50 years |
| **Condition** | Select | Yes | Predefined options |
| **Issues** | Textarea | No | Free text, optional |
| **Image** | File | Conditional* | JPG/PNG, max 5MB |

*Either image or issues description required

## Device Type Options

- Mobile Phone
- Laptop
- Tablet
- Camera
- Smart Watch
- Other

## Condition Options

- Like New
- Good (Minor Scratches)
- Fair (Moderate Damage)
- Poor (Severe Damage)

## Props

### `onSubmit(formData)`
**Type**: Function (required)

Callback function called when form is successfully submitted.

**Receives**: FormData object containing:
```javascript
{
  deviceType: string,
  brand: string,
  modelNumber: string,
  deviceAge: number,
  condition: string,
  issues: string (optional),
  image: File (optional)
}
```

## Usage Example

```jsx
import DeviceForm from '../components/DeviceForm'

function MyPage() {
  const handleSubmit = async (formData) => {
    // Send to backend API
    const response = await fetch('/api/assess-device', {
      method: 'POST',
      body: formData // Automatically multipart/form-data with image
    })
    const result = await response.json()
    // Handle results...
  }

  return (
    <div>
      <h1>Device Assessment</h1>
      <DeviceForm onSubmit={handleSubmit} />
    </div>
  )
}
```

## Form State Structure

```javascript
const [formData, setFormData] = useState({
  deviceType: '',          // Dropdown selection
  brand: '',               // Text input
  modelNumber: '',         // Text input
  deviceAge: '',           // Number input
  condition: '',           // Dropdown selection
  issues: '',              // Textarea
  image: null,             // File object
  imagePreview: null       // Data URL for preview
})

const [errors, setErrors] = useState({})  // Error messages
const [isSubmitting, setIsSubmitting] = useState(false) // Loading state
```

## Validation Logic

```
All required fields must be filled:
✓ deviceType - not empty
✓ brand - not empty
✓ modelNumber - not empty
✓ deviceAge - valid number
✓ condition - selected
✓ Image OR Issues - at least one required

Image validation:
✓ File type must be image/*
✓ File size must be < 5MB
```

## Sending to Backend

The form uses `FormData` API which automatically formats as multipart/form-data:

```javascript
const submitData = new FormData()
submitData.append('deviceType', formData.deviceType)
submitData.append('brand', formData.brand)
// ... other fields
if (formData.image) {
  submitData.append('image', formData.image) // File object
}

// Send to backend
await fetch('/api/assess-device', {
  method: 'POST',
  body: submitData
})
```

## Integration with Cloud Functions

### Expected Endpoint
```
POST /api/assess-device
Content-Type: multipart/form-data
```

### Request Body
- All form fields as form data
- Image as binary file (if provided)

### Expected Response
```json
{
  "assessmentId": "abc123",
  "status": "processing",
  "estimatedTime": 30
}
```

## Component Handling

### Loading State
- Submit button shows "Analyzing Device..." while submitting
- Submit button disabled during submission

### Error Display
- Real-time validation on field blur
- Errors clear when user starts typing
- Submit error message displayed in banner

### Success
- Form resets after successful submission
- Parent component can redirect to results page

## Styling Classes

The component uses these CSS class names for styling:

```css
.form-group          /* Container for each form field */
.error              /* Error message text (red) */
.error-message      /* Submit error banner */
.image-preview      /* Image preview container */
.submit-button      /* Submit button */
.form-note          /* Helper text at bottom */
```

Example styles:
```css
.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.error {
  color: #d32f2f;
  font-size: 12px;
  margin-top: 4px;
}

.submit-button {
  padding: 12px 24px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.image-preview {
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.image-preview img {
  max-width: 300px;
  max-height: 300px;
}
```

## Future Enhancements

- [ ] Add drag-and-drop for image upload
- [ ] Camera capture for mobile devices
- [ ] Image compression before upload
- [ ] Real-time image analysis preview
- [ ] Custom validation rules per field
- [ ] Multi-language support
- [ ] Form autosave to local storage
- [ ] Accessibility improvements (ARIA labels)

## Testing

Example unit test:

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import DeviceForm from './DeviceForm'

test('submits form with valid data', async () => {
  const handleSubmit = jest.fn()
  render(<DeviceForm onSubmit={handleSubmit} />)
  
  // Fill form
  fireEvent.change(screen.getByLabelText(/device type/i), {
    target: { value: 'phone' }
  })
  // ... more field fills
  
  // Submit
  fireEvent.click(screen.getByText(/analyze device/i))
  
  // Verify
  expect(handleSubmit).toHaveBeenCalled()
})
```

## Related Files

- [DeviceUploadPage.jsx](./DeviceUploadPage.jsx) - Page using this form
- [deviceService.js](../services/deviceService.js) - Backend API calls
- [USER_FLOW.md](../../docs/USER_FLOW.md) - User journey documentation

---

**Version**: 1.0  
**Created**: January 2, 2026  
**Status**: Production Ready
