// Vertex AI Vision-based device image analysis for damage cues.
// Detects screen damage, battery swelling, and port damage with heuristic scoring.

const vision = require('@google-cloud/vision')

const client = new vision.ImageAnnotatorClient()

/**
 * Analyze a device image via Vertex AI Vision API.
 * Provide exactly one of imageBuffer or gcsUri.
 * @param {Object} params
 * @param {Buffer} [params.imageBuffer] - Raw image bytes.
 * @param {string} [params.gcsUri] - gs:// URI to an image.
 * @returns {Promise<Object>} Structured findings with confidences and raw evidence.
 */
async function analyzeDeviceImage({ imageBuffer, gcsUri }) {
  if (!imageBuffer && !gcsUri) {
    throw new Error('Provide imageBuffer or gcsUri')
  }

  const [result] = await client.annotateImage({
    image: imageBuffer ? { content: imageBuffer } : { source: { imageUri: gcsUri } },
    features: [
      { type: 'LABEL_DETECTION', maxResults: 50 },
      { type: 'OBJECT_LOCALIZATION', maxResults: 50 },
    ],
  })

  const labels = (result.labelAnnotations || []).map((l) => ({
    description: l.description,
    score: l.score,
    topicality: l.topicality,
  }))

  const objects = (result.localizedObjectAnnotations || []).map((o) => ({
    name: o.name,
    score: o.score,
    boundingPoly: o.boundingPoly,
  }))

  const screenDamage = scoreByKeywords(labels, [
    'cracked screen',
    'fracture',
    'shattered',
    'broken screen',
    'scratch',
    'crack',
  ])

  const batterySwelling = scoreByKeywords(labels, [
    'swollen battery',
    'deformation',
    'bulge',
    'swelling',
  ])

  const portDamage = scoreByKeywords(labels, [
    'usb port',
    'charging port',
    'connector',
    'damaged port',
    'bent connector',
  ])

  return {
    screenDamage,
    batterySwelling,
    portDamage,
    raw: { labels, objects },
  }
}

function scoreByKeywords(labels, keywords, threshold = 0.6) {
  const hits = labels.filter((l) =>
    keywords.some((kw) => l.description.toLowerCase().includes(kw.toLowerCase())),
  )
  const best = hits.sort((a, b) => b.score - a.score)[0]
  return {
    present: Boolean(best && best.score >= threshold),
    confidence: best ? best.score : 0,
    evidence: best ? best.description : null,
  }
}

module.exports = {
  analyzeDeviceImage,
}
