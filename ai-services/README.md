# AI Services - Vertex AI & Gemini Integration

AI/ML services layer for integrating Vertex AI and Gemini API.

## Folder Structure

- **models/** - Pre-trained model configurations and custom model definitions
- **prompts/** - Gemini prompt templates and system prompts for different use cases
- **services/** - Service classes for API calls and AI operations
  - `geminiService.js` - Gemini API integration
  - `vertexAIService.js` - Vertex AI integration
  - `textAnalysisService.js` - Text processing and analysis

## Setup

1. Create Google Cloud Project
2. Enable Vertex AI and Gemini APIs
3. Create service account with appropriate permissions
4. Set credentials in environment variables

## Environment Variables

```
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account-key.json
GEMINI_API_KEY=your_gemini_api_key
VERTEX_AI_PROJECT_ID=your_project_id
VERTEX_AI_REGION=us-central1
```

## Usage Example

```javascript
const geminiService = require('./services/geminiService');

const response = await geminiService.generateContent(prompt);
```
