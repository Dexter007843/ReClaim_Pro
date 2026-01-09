# Vision Analysis

Computer vision pipelines for device imagery: detect components, surface damage, and condition cues used downstream in repairability scoring.

## Includes
- Model inference wrappers (e.g., detection/segmentation/classification)
- Pre/Post-processing utilities for images and bounding boxes
- Output schemas shared with repairability-scoring

## Notes
- Keep model weights outside the repo; store URIs/config only.
- Prefer batched inference interfaces for throughput.
