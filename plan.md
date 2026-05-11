# Update Styling and Branding for Alta Analytics & Consultancy

Apply a new color palette and branding based on the company logo.

## 1. Color Palette Extraction
- **Primary Teal**: `#0D9488` (Extracted from logo background and elements)
- **Secondary Dark Gray**: `#1F2937` (Extracted from logo elements)
- **Accent White**: `#FFFFFF` (Extracted from logo text and elements)

## 2. Global Styling Updates
- Update `src/index.css` to include the new brand colors in the Tailwind theme.
- Define `--color-brand-teal` and `--color-brand-dark` for consistent usage.
- Update global text and background defaults to align with the new palette.

## 3. Component Branding
- **Logo Integration**: Update `Navigation.tsx` and `Footer.tsx` to use the provided logo image URL.
- **Color Replacement**:
    - Replace all `blue-600` instances with `brand-teal`.
    - Replace `blue-100` background accents with `brand-teal/10`.
    - Replace `slate-900` headings/text with `brand-dark`.
    - Ensure buttons and hover states use the new teal primary color.
- **Hero Section**: Adjust the gradient and badge colors to match the new branding.
- **Market Analysis**: Update the dark section to use `brand-dark` and the accent borders to use `brand-teal`.
- **Pricing**: Update the "Most Popular" badge and button colors.
- **Contact**: Update icon backgrounds and submit button colors.

## 4. Assets
- Logo URL: `https://storage.googleapis.com/dala-prod-public-storage/attachments/f70f5978-9e0c-4b86-b536-713e6d34dff0/1778502918049_photo_2026-05-11_15-35-06.jpg`
