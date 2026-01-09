# Datasets Overview

This project uses three primary dataset categories. Handle data per license, privacy, and responsible AI practices.

## Device Specs Dataset
- **Purpose:** Features and metadata for makes/models (battery capacity, screen size, year, typical failure modes).
- **Sources:** Public spec sheets, manufacturer docs, open device catalogs.
- **Contents:** Make/model IDs, release year, hardware specs, repairability factors (battery accessibility, screws), part SKU refs.
- **Usage:** Feature engineering for repairability scoring; part compatibility checks.

## Damage Images Dataset
- **Purpose:** Train/validate vision models to detect screen cracks, battery swelling, port damage.
- **Sources:** Publicly licensed datasets (CC BY/CC0), synthetic augmentations, opt-in contributed images with consent.
- **Contents:** Labeled images with boxes/tags for damage types; varied lighting/angles.
- **Usage:** Vision model fine-tuning and evaluation; never for identifying individuals.

## Carbon Footprint Estimation Dataset
- **Purpose:** Estimate CO₂ impact of repair vs replace.
- **Sources:** Published LCA studies, industry reports, governmental/NGO datasets.
- **Contents:** Emission factors by category/component, embodied carbon estimates, transport/disposal factors.
- **Usage:** Compute carbon saved when repairing; document assumptions per factor set.

## Folder Structure
- **training/** - Training datasets for model development and fine-tuning
- **validation/** - Validation and test datasets for evaluation

## Data Format
- CSV for structured data
- JSONL for text data
- Images in subdirectories for vision models

## Guidelines
1. Do NOT commit large datasets to version control; use storage buckets.
2. Use `.gitignore` to exclude data files.
3. Document data sources, schemas, and versions; keep change logs.
4. Anonymize sensitive information; exclude PII; enforce consent for contributed images.
5. Encrypt at rest and in transit; apply access controls and audit logging.

## Ethical and Responsible AI Usage
- Use datasets with clear, permissive licenses for intended ML/analytics purposes.
- Exclude PII and sensitive attributes; support opt-out/withdrawal for contributed data.
- Anonymize/aggregate to avoid re-identification risks.
- Ensure diversity across device types and damage conditions to reduce bias; monitor performance across segments.
- Document lineage, assumptions, and limitations; retire data that no longer meets compliance/consent.
