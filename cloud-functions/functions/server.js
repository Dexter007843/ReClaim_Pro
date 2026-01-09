const express = require('express')
const multer = require('multer')
const cors = require('cors')

// Import the vision analysis service from the ai-services folder
const { analyzeDeviceImage } = require('../../ai-services/services/visionAnalysisService')

const app = express()
app.use(cors())
app.use(express.json())

// Use multer memory storage so we have the image as a Buffer
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } })

app.get('/', (req, res) => {
  res.json({ message: 'ReClaim local functions server. POST /api/assess-device' })
})

/**
 * POST /api/assess-device
 * Accepts multipart/form-data with a single `image` file plus optional fields.
 * Calls analyzeDeviceImage({ imageBuffer }) and returns the analysis JSON.
 */
app.post('/api/assess-device', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No image file uploaded (field name: image)' })
    }

    const imageBuffer = req.file.buffer

    // Call the vision analysis service
    const analysis = await analyzeDeviceImage({ imageBuffer })

    // Return analysis together with any form fields for traceability
    return res.json({ success: true, analysis, fields: req.body })
  } catch (err) {
    console.error('Error in /api/assess-device:', err)
    return res.status(500).json({ success: false, error: err.message || String(err) })
  }
})

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`ReClaim local functions server listening on http://localhost:${PORT}`)
})
