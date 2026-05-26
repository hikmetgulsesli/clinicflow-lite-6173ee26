---
name: Clinical Utility
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e1'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fb'
  surface-container: '#ededf5'
  surface-container-high: '#e8e7f0'
  surface-container-highest: '#e2e2ea'
  on-surface: '#1a1b21'
  on-surface-variant: '#434652'
  inverse-surface: '#2e3036'
  inverse-on-surface: '#f0f0f8'
  outline: '#737783'
  outline-variant: '#c3c6d4'
  surface-tint: '#2b5bb5'
  primary: '#003178'
  on-primary: '#ffffff'
  primary-container: '#0d47a1'
  on-primary-container: '#a1bbff'
  inverse-primary: '#b0c6ff'
  secondary: '#1b6d24'
  on-secondary: '#ffffff'
  secondary-container: '#a0f399'
  on-secondary-container: '#217128'
  tertiary: '#602100'
  on-tertiary: '#ffffff'
  tertiary-container: '#853100'
  on-tertiary-container: '#ffa781'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001945'
  on-primary-fixed-variant: '#00429c'
  secondary-fixed: '#a3f69c'
  secondary-fixed-dim: '#88d982'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005312'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#1a1b21'
  surface-variant: '#e2e2ea'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 12px
  margin: 16px
---

## Brand & Style
The design system is engineered for high-stakes medical environments where clarity, speed of recognition, and data density are paramount. The aesthetic is **Corporate / Modern** with a strong emphasis on **Minimalism**, stripping away decorative elements to prioritize functional information.

The visual narrative evokes a sense of "Clinical Precision." It is designed to feel calm and systematic, reducing cognitive load for healthcare professionals who interact with complex data for extended periods. Every element serves a specific purpose, utilizing a neutral, light-filled environment to highlight critical status changes and patient information.

## Colors
This design system utilizes a structured palette to communicate urgency and system status without overwhelming the user.

- **Primary (Medical Blue):** Reserved for core navigation, primary actions, and branding elements. It signifies stability and institutional trust.
- **Secondary (Sage Green):** Used exclusively for "Ready" or "Safe" states, such as completed appointments or stable patient vitals.
- **Warning (Amber):** High-visibility color for "Urgent" tasks or pending alerts that require attention but aren't yet critical.
- **Neutral (Slate/Gray):** A cool-toned neutral scale provides the foundation for backgrounds and borders, ensuring the UI feels clean and hygienic.

The default mode is **Light**, mimicking the bright, well-lit conditions of clinical spaces.

## Typography
**Inter** is the sole typeface for this design system, chosen for its exceptional legibility in small sizes and its neutral, systematic character.

- **Data Density:** The base body size is set to 14px (`body-md`) to allow for maximum information display on dashboards and patient lists.
- **Micro-Copy:** `label-sm` and `label-md` are used for metadata, timestamps, and table headers to preserve vertical space.
- **Hierarchy:** Weight is used more frequently than size to differentiate information levels, preventing the UI from feeling "loud" or disjointed.

## Layout & Spacing
This design system employs a **Fixed Grid** model on desktop to ensure predictable data alignment, transitioning to a fluid layout for tablets. 

The spacing rhythm is based on a **4px baseline**, emphasizing high density. 
- **Gutters:** Tight 12px gutters between cards and columns maximize screen real estate.
- **Margins:** Standard 16px outer margins provide a "safe zone" while keeping the interface feeling compact and professional.
- **Density:** Padding within containers is kept to a minimum (typically 8px or 12px) to reduce the need for excessive scrolling in data-heavy views like patient charts or scheduling grids.

## Elevation & Depth
To maintain a clean, clinical aesthetic, this design system avoids heavy shadows. Depth is communicated through **Low-contrast outlines** and **Tonal layers**.

- **Surface Levels:** The background uses the primary neutral hex. Content resides on white surfaces (`#FFFFFF`) with a subtle 1px border (`#E2E8F0`).
- **Interactive States:** Subtle depth is added only on hover using a very soft, low-opacity shadow (4px blur, 2% opacity) to indicate clickability without breaking the flat, professional plane of the UI.
- **Separation:** Vertical rhythm is established through horizontal dividers rather than stacked shadows, ensuring the interface remains "quiet" and focused.

## Shapes
The shape language is **Soft**, utilizing a consistent 4px radius (`0.25rem`) for most UI elements.

- **Standard Elements:** Buttons, input fields, and cards use the 4px radius to feel modern yet disciplined.
- **Status Pills:** Pills and badges utilize a fully rounded (pill-shaped) radius to distinguish them as status indicators rather than interactive buttons.
- **Consistency:** Sharp corners are avoided to prevent the UI from feeling overly aggressive, while large radii are avoided to maintain the professional, "lite" software feel.

## Components

### Buttons & Inputs
- **Primary Action:** Solid Medical Blue with white text, 4px radius, compact padding (8px x 16px).
- **Ghost Actions:** Transparent background with Medical Blue border and text, used for secondary operations to maintain low visual noise.
- **Input Fields:** 1px subtle border, white background. Labels are placed above the field in `label-sm` weight for clarity.

### Status Pills (Badges)
- **Ready:** Sage Green background (15% opacity) with #2E7D32 text.
- **Urgent:** Amber background (15% opacity) with #FFA000 text.
- **Neutral/Pending:** Light Gray background with dark gray text.
- **Form:** Pill-shaped with `label-sm` typography for immediate recognition.

### Data Tables & Lists
- **High Density:** Row heights are capped at 40px. 
- **Borders:** 1px horizontal dividers only; no vertical lines between columns to reduce visual "clutter."
- **Headers:** `label-md` typography with a subtle background tint (#F8FAFC) to anchor the data.

### Cards
- **Low-Profile:** White background, 1px border (#E2E8F0), no shadow.
- **Usage:** Used to group patient vitals, upcoming appointments, or clinic metrics. Header sections within cards are separated by a subtle 1px divider.

### Feedback & Alerts
- **In-line Alerts:** Horizontal banners with a 2px left-side accent color matching the status (Primary, Secondary, or Warning). These are integrated into the layout rather than floating as overlays.