E-Waste AI Analysis Service

Run locally:

1. Create a virtual environment and install dependencies:

```bash
python -m venv .venv
source .venv/Scripts/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

2. Start the API:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

Notes:

- This service expects an `ollama` client to be configured on the host.
- Endpoint: `POST /analyze-ewaste` expects a multipart `image` file upload field.
