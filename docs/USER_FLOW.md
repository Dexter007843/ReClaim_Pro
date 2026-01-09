# User Flow: ReClaim Pro Core Journey

## Overview

This document defines the primary user flow for ReClaim Pro, from app launch to receiving repairability assessment and environmental impact insights. Designed for UI/UX wireframing and development reference.

---

## Core User Flow: Device Assessment & Recommendation

### Step 1: App Launch & Authentication
```
User Opens App
    ↓
Is User Logged In?
    ├─ YES → Skip to Step 2
    └─ NO → Show Login/Signup Screen
         ├─ Email/Password Login
         ├─ Google OAuth
         └─ Skip (as Guest)
    ↓
Home Dashboard Displayed
```

**UI Elements:**
- App logo & branding
- "Get Started" CTA button
- Quick stats: e-waste facts, platform impact

---

### Step 2: Access Device Assessment
```
User on Home Dashboard
    ↓
User Clicks "Assess Your Device" Button
    ↓
Device Assessment Screen Opened
```

**UI Elements:**
- Hero image of device
- "Assess Device" primary button
- Quick info: "Find out if your device can be repaired"
- Optional: Browse by device category (phones, laptops, tablets)

---

### Step 3: Provide Device Information (Option A: Quick Entry)
```
Assessment Form Displayed
    ↓
User Inputs:
    ├─ Device Type (Dropdown)
    │   └─ Mobile, Laptop, Tablet, Camera, etc.
    ├─ Brand & Model (Autocomplete search)
    ├─ Age of Device (Slider or Date picker)
    ├─ Condition (Radio buttons)
    │   ├─ Like New
    │   ├─ Good (Minor Damage)
    │   ├─ Fair (Moderate Damage)
    │   └─ Poor (Severe Damage)
    ├─ Specific Issues (Multi-select checkboxes)
    │   ├─ Screen damage
    │   ├─ Battery issues
    │   ├─ Hardware failure
    │   ├─ Software issues
    │   └─ Water/Physical damage
    └─ User clicks "Next"
```

**UI Elements:**
- Clean form with step indicators (1/3)
- Input validation & helper text
- "Back" & "Next" navigation buttons

---

### Step 3 Alternative: Provide Device Information (Option B: Image Upload)
```
Assessment Screen - Image Upload Tab
    ↓
User Clicks "Upload Photo" Button
    ↓
Camera/Gallery Access Requested
    ↓
User Captures or Selects Photo of Device
    ↓
Image Processed by Cloud Function
    ├─ Extract device model (if visible)
    ├─ Assess visible damage
    └─ Pre-fill form fields
    ↓
User Verifies/Edits Auto-filled Information
```

**UI Elements:**
- Tab: "Manual Entry" | "Upload Photo" (Active)
- Large upload area with camera icon
- Processing spinner with message
- Auto-filled form for review

---

### Step 4: Confirm Device Details
```
Summary Screen (Step 2/3)
    ↓
Display User Inputs:
    ├─ Device: [Brand Model]
    ├─ Condition: [User's selection]
    ├─ Issues: [List of selected problems]
    └─ Age: [Years]
    ↓
User Reviews & Confirms
    ├─ Looks Good? → Click "Assess"
    └─ Wrong Info? → Click "Back to Edit"
```

**UI Elements:**
- Clean summary card with device info
- Checkmark for each field
- "Assess Device" CTA button
- "Edit Information" secondary button

---

### Step 5: Processing & AI Analysis
```
User Clicks "Assess Device"
    ↓
Loading Screen (Step 3/3)
    ├─ Spinner animation
    ├─ Status messages (sequential):
    │   ├─ "Analyzing device specifications..."
    │   ├─ "Checking parts availability..."
    │   ├─ "Calculating environmental impact..."
    │   └─ "Generating recommendations..."
    ↓
Cloud Function Execution:
    ├─ Send device data to Gemini API
    ├─ Gemini generates:
    │   ├─ Repairability score (0-100)
    │   ├─ Estimated repair cost
    │   ├─ Repair time estimate
    │   ├─ Residual value for resale
    │   ├─ Material composition
    │   └─ Recovery potential
    ├─ Calculate environmental impact:
    │   ├─ CO2 saved if repaired vs. new device
    │   ├─ Water usage reduction
    │   ├─ Material waste reduction
    │   └─ Recyclable material value
    ↓
Results Data Returned to Frontend
```

**UI Elements:**
- Full-screen loading modal
- Animated progress indicator
- Real-time status messaging
- Encouraging message: "We're analyzing your device..."

---

### Step 6: Display Assessment Results
```
Results Screen
    ↓
PRIMARY INFORMATION:
    ├─ Repairability Score (Large visual: gauge/percentage)
    │   ├─ Color coding:
    │   │   ├─ Green (75-100): Highly Repairable
    │   │   ├─ Yellow (50-74): Moderately Repairable
    │   │   └─ Red (0-49): Limited Repairability
    │   └─ Score explanation text
    ├─ Recommended Action (Large prominent box)
    │   ├─ Option 1: "REPAIR THIS DEVICE" (if score ≥ 70)
    │   ├─ Option 2: "REFURBISH & RESELL" (if 40-70)
    │   └─ Option 3: "RECYCLE RESPONSIBLY" (if < 40)
    └─ Confidence Level: "We're 85% confident in this assessment"
```

**UI Elements:**
- Hero result with device image
- Large repairability gauge/percentage
- Color-coded visual feedback
- Bold recommendation statement

---

### Step 7: Display Environmental Impact
```
Environmental Impact Section
    ↓
THREE-COLUMN IMPACT DISPLAY:
    ├─ CO2 Emissions Saved
    │   ├─ Icon: Leaf/Carbon
    │   ├─ Value: "47 kg CO2"
    │   └─ Comparison: "= 130 km car drive"
    ├─ Water Conserved
    │   ├─ Icon: Water droplet
    │   ├─ Value: "240 liters"
    │   └─ Comparison: "= 6 days human consumption"
    └─ Material Waste Prevented
        ├─ Icon: Recycle symbol
        ├─ Value: "2.5 kg"
        └─ Comparison: "= your weekly trash"
    ↓
IMPACT COMPARISON:
    ├─ If Repaired: [Green box with positive stats]
    ├─ vs. If Recycled: [Yellow box with medium stats]
    └─ vs. If Discarded: [Red box with negative stats]
```

**UI Elements:**
- Large, colorful impact cards
- Icon + metric + comparison
- Bar chart or visual comparison
- Animated numbers counting up
- Social sharing button: "Share my impact"

---

### Step 8: Display Recommended Actions
```
Recommended Next Steps Section
    ↓
ACTION CARDS (Based on Repairability Score):
    ├─ IF REPAIR RECOMMENDED (Score ≥ 70):
    │   ├─ Card 1: "Find Repair Shops Near You"
    │   │   ├─ Shows certified repair shops
    │   │   ├─ Distance, ratings, estimated cost
    │   │   └─ CTA: "View Shops" → Map view
    │   ├─ Card 2: "Get Repair Quote"
    │   │   ├─ Connect with technician
    │   │   └─ CTA: "Request Quote"
    │   └─ Card 3: "DIY Repair Resources"
    │       ├─ Links to repair guides
    │       └─ CTA: "View Guides"
    │
    ├─ IF REFURBISH RECOMMENDED (Score 40-70):
    │   ├─ Card 1: "Refurbishment Centers"
    │   │   ├─ List of certified centers
    │   │   └─ CTA: "Send Device"
    │   ├─ Card 2: "Resale Options"
    │   │   ├─ Estimated resale value: $X
    │   │   └─ CTA: "List for Resale"
    │   └─ Card 3: "Trade-In Programs"
    │       ├─ OEM trade-in options
    │       └─ CTA: "Check Programs"
    │
    └─ IF RECYCLE RECOMMENDED (Score < 40):
        ├─ Card 1: "Find Recycling Centers"
        │   ├─ Certified e-waste recyclers
        │   ├─ Nearby locations
        │   └─ CTA: "Find Recycler"
        ├─ Card 2: "Schedule Pickup"
        │   ├─ Free home pickup option
        │   └─ CTA: "Schedule"
        └─ Card 3: "Track Impact"
            ├─ See what happens to your device
            └─ CTA: "Track Device"
```

**UI Elements:**
- Horizontal scrolling card carousel or vertical stack
- Each card has icon, title, description, CTA button
- Color-coded cards matching action type
- "Learn More" sections with expandable details

---

### Step 9: User Takes Action
```
User Selects Action (Example: Find Repair Shops)
    ↓
Action Details Displayed:
    ├─ List of Repair Shops / Recyclers / Refurbishers
    ├─ Each option shows:
    │   ├─ Name & Location
    │   ├─ Rating (stars)
    │   ├─ Distance
    │   ├─ Price estimate (if repair)
    │   ├─ Certification badge
    │   └─ Contact & CTA button
    ↓
User Contacts/Schedules Service
    ├─ App redirects to:
    │   ├─ Phone call
    │   ├─ SMS/WhatsApp
    │   ├─ Email
    │   └─ Native booking flow
    ↓
Device Tracking Initiated (Optional)
    └─ User can track device status in app
```

**UI Elements:**
- List or map view of options
- Business cards with key info
- Distance/rating prominently displayed
- Multiple contact methods
- "Book Now" or "Contact" button

---

### Step 10: Results Summary & Save
```
User Completes Action (or Dismisses)
    ↓
Results Saved to User Dashboard
    ├─ Assessment History
    ├─ Cumulative Environmental Impact
    ├─ Tracked Devices
    └─ User Profile
    ↓
User Option to:
    ├─ Share Results (Social media, email)
    ├─ Save Assessment Report (PDF)
    ├─ Assess Another Device
    └─ Exit to Dashboard
```

**UI Elements:**
- "Assessment Saved" confirmation
- Share buttons (Facebook, Twitter, WhatsApp, Email)
- "Download Report" button (PDF)
- "Assess Another Device" prominent CTA
- Hamburger menu to navigate

---

## User Flow Summary Diagram

```
┌─────────────────────────────────────┐
│        App Launch                   │
│     (Auth if needed)                │
└────────────────┬────────────────────┘
                 ↓
        ┌────────────────────┐
        │ Home Dashboard     │
        │ "Assess Device"    │
        └────────┬───────────┘
                 ↓
    ┌────────────┴────────────┐
    ↓                         ↓
┌──────────────┐       ┌──────────────┐
│ Manual Entry │ OR    │ Photo Upload │
│   (Form)     │       │  (Computer   │
│              │       │   Vision)    │
└──────────────┘       └──────────────┘
    │                         │
    └────────────┬────────────┘
                 ↓
      ┌──────────────────────┐
      │ Confirm Device Info  │
      │ (Review Screen)      │
      └────────────┬─────────┘
                   ↓
      ┌──────────────────────────┐
      │ AI Processing            │
      │ (Gemini API Analysis)    │
      │ (Environmental Calcs)    │
      └────────────┬─────────────┘
                   ↓
      ┌──────────────────────────┐
      │ Results Screen           │
      │ - Repairability Score    │
      │ - Recommendation         │
      │ - Environmental Impact   │
      │ - Next Steps             │
      └────────────┬─────────────┘
                   ↓
    ┌──────────────┴─────────────────┐
    ↓                                ↓
┌────────────────┐          ┌────────────────┐
│ User Takes     │          │ User Shares &  │
│ Action:        │          │ Saves Results  │
│ - Contacts     │          │ - PDF Report   │
│   Repair Shop  │          │ - Social Share │
│ - Books Pickup │          │ - Dashboard    │
│ - Views Guides │          │   History      │
└────────────────┘          └────────────────┘
    ↓                                ↓
    └──────────────┬─────────────────┘
                   ↓
      ┌──────────────────────────┐
      │ Dashboard/Profile        │
      │ - Assessment History     │
      │ - Cumulative Impact      │
      │ - Device Tracking        │
      └──────────────────────────┘
```

---

## Key UX Principles

✅ **Progressive Disclosure** - Show only essential info at each step  
✅ **Visual Feedback** - Loading states, color coding, animations  
✅ **Mobile-First** - Responsive design for phone primary use case  
✅ **Accessibility** - Clear labels, high contrast, keyboard navigation  
✅ **Speed** - Minimize form fields; use smart defaults  
✅ **Social Proof** - Show ratings, certifications, impact numbers  
✅ **Action-Oriented** - Clear CTAs leading to next steps  
✅ **Gamification** - Celebrate environmental impact, earn points  

---

## Wireframing Checklist

- [ ] **Step 1**: Auth screens (login, signup, guest)
- [ ] **Step 2**: Home dashboard with hero CTA
- [ ] **Step 3A**: Device info form (quick entry)
- [ ] **Step 3B**: Image upload screen
- [ ] **Step 4**: Confirmation/review screen
- [ ] **Step 5**: Loading screen with animations
- [ ] **Step 6**: Results screen with score display
- [ ] **Step 7**: Environmental impact cards
- [ ] **Step 8**: Recommended actions carousel
- [ ] **Step 9**: Shop/recycler listing & booking
- [ ] **Step 10**: Dashboard & sharing options

---

## Development Notes

- All screens should be mobile-responsive
- Cloud Functions handle AI processing (Step 5)
- Firestore stores assessment history
- Firebase Storage for device images
- Real-time updates for tracking (Step 9+)
- Analytics track user conversions at each step

---

**Document Version:** 1.0  
**Date:** January 2, 2026
