# COMPLETE DETAILED PROMPT: DAYALX LANDING PAGE WITH ALL VISUAL EFFECTS

---

## COLOR PALETTE

- **Primary Background:** `#0f1211` (Deep navy-black)
- **Foreground Text:** `#e7eceb` (Light off-white)
- **Primary Accent (Teal):** `#78fcd6` (Bright neon teal)
- **Accent Bright:** `#00ffb6` (Neon bright teal)
- **Muted Text:** `#a3aca8` (Gray-green)
- **Border Color:** White at 8–20% opacity
- **Card Background:** White at 1–8% opacity with backdrop blur

---

## TYPOGRAPHY

- **Font Family:** `Sora` (sans-serif) — clean, modern, professional
- **Font Family (Mono):** `JetBrains Mono` — for kit codes, order IDs, data fields
- **Heading Sizes:**
  - H1 (Hero): `2.25rem` mobile → `3.75rem` desktop
  - H2 (Section Titles): `1.875rem` mobile → `3rem` desktop
  - H3 (Subsections): `1.125rem–1.5rem`
- **Body Text:** `1rem`, line-height `1.6`
- **Font Weights:** 400, 500, 600
- **Text Alignment:** Center for headings, left for body copy

---

## GLASSMORPHISM & BLUR EFFECTS

### Hero Section Background

- **Large gradient blur circle:**
  - Color: Teal (`#78fcd6`)
  - Position: Top-left area
  - Blur radius: `130px`
  - Opacity: `10%`
  - Size: `~547px × 938px`
  - Rotation: `-33.39°`
  - Effect: Creates a soft glowing haze in background

- **Grid overlay pattern:**
  - Subtle diagonal grid on background
  - White lines at `5%` opacity
  - Grid spacing: `~40px`
  - Effect: Adds technical depth without overwhelming

### All Card/Feature Components — Glassmorphism

- **Backdrop Filter:** `blur(4px)` (frosted glass effect)
- **Background:** `rgba(255, 255, 255, 0.08)`
- **Border:** `1px solid rgba(255, 255, 255, 0.2)`
- **Gradient Overlay:** `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 50%)`
- **Box Shadow:** `0px 8px 32px rgba(0, 0, 0, 0.1)`
- **Border Radius:** `16px`
- **Effect:** Semi-transparent frosted glass over dark background

### Testimonial Cards — Special Blur

- **Small testimonials:**
  - Backdrop blur: `4px`
  - Background: `rgba(255,255,255,0.08)`
  - Border: `1px rgba(255,255,255,0.2)`

- **Large testimonials:**
  - More pronounced shadows
  - Stronger border definition
  - SVG background pattern overlay with subtle texture

### Footer & Section Dividers

- **Top border:** `1px solid rgba(255,255,255,0.08)`
- **Backdrop blur on fixed header:** `8px`
- **Header shadow:** `0px 4px 12px rgba(0,0,0,0.3)`

---

## GRADIENT EFFECTS

### Hero Title Gradient (Headline Text)

- **Gradient Type:** Linear across text
- **Colors:** Teal (`#78fcd6`) → Light (`#e7eceb`)
- **Direction:** Left to right
- **Headline:** `"One Kit. Every Practical. All Semester."`
- **Effect:** Subtle color shift adds visual interest

### Feature Cards — Top Gradient Overlay

- **Gradient:** `rgba(255,255,255,0.05)` at top → Transparent at middle
- **Height:** ~30% of card
- **Effect:** Highlights top edge, suggests light source

### CTA Button Gradients

- **Primary Button:** Solid teal (`#78fcd6`) with hover brightness +10%
- **Secondary Button:** Transparent with border, hover adds subtle background

### Bento Grid Background Decoration

- **Large teal blur circle:**
  - Position: Top-left/center
  - Size: `~500px+`
  - Blur: `130px`
  - Opacity: `10%`
  - Color: `#78fcd6`
  - Effect: Subtle ambient glow

---

## SHADOW & DEPTH EFFECTS

### Card Shadows

- **Standard:** `box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08)`
- **Pricing "Popular" (Institution) card:** `box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.1)`
- **Header fixed:** `box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3)`

### Hover States — Shadow Lift

- Shadow increases on hover (lift effect)
- Transition: `box-shadow 300ms ease-out`

---

## TYPOGRAPHY WITH EFFECTS

### Headings

- **H1 (Hero):**
  - Size: `36px` (mobile) → `60px` (desktop)
  - Font weight: `600`
  - Gradient overlay: Teal → light
  - Letter spacing: `-0.02em`
  - Line height: `1.2`

- **H2 (Section titles):**
  - Size: `30px` → `48px`
  - Font weight: `600`
  - Color: `#e7eceb`
  - Letter spacing: `-0.01em`

- **H3 (Card titles):**
  - Size: `18px` → `24px`
  - Font weight: `600`
  - Color: `#e7eceb`

### Body Text

- Size: `16px`
- Font weight: `400`
- Color: `#e7eceb` (light) or `#a3aca8` (muted)
- Line height: `1.5–1.6`
- Letter spacing: `0.015em`

### Small Text/Labels

- Size: `12px` → `14px`
- Color: `#a3aca8`
- Font weight: `400–500`

---

## BORDER & OUTLINE EFFECTS

- **Standard Card Borders:** `1px solid rgba(255, 255, 255, 0.2)`
- **Active/Hover Borders:** `rgba(255, 255, 255, 0.3)` — transition `200ms ease`
- **Header Border:** `1px solid rgba(255, 255, 255, 0.08)`
- **Section Dividers:** `1px solid rgba(255, 255, 255, 0.05)` top only

---

## ANIMATION & MICRO-INTERACTIONS

### Page Load Animations

- **Fade In:**
  - Opacity: `0 → 1`
  - Duration: `600ms`, easing: `ease-out`
  - Applied to: Major sections, components

- **Slide Up (Entrance):**
  - Transform: `translateY(20px) → translateY(0)`
  - Opacity: `0 → 1`
  - Duration: `800ms`
  - Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`
  - Stagger: `100ms` between elements

### Button Interactions

- **Hover:** Opacity `90% → 100%`, brightness +5–10%, `200ms ease`
- **Active/Click:** Scale `1 → 0.98`, `100ms ease`

### Card Hover Effects

- **Lift:** `translateY(-4px)`, shadow increases, `300ms cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Border Glow:** Border opacity `20% → 30%`, background opacity increases slightly

### Pricing Toggle Animation

- Background blur: `4px`
- Scale: Slight zoom on toggle
- Opacity fade: `200ms` out → `200ms` in
- Transition: `500ms cubic-bezier(0.4, 0, 0.2, 1)`

### Accordion (FAQ Section)

- Max height: `0 → auto`
- Opacity: `0 → 1`, duration `300ms ease`
- Chevron rotation: `0deg → -180deg`

### Scroll Animations

- **Parallax:** Background blur circle moves slower than content
- **Fade on scroll:** IntersectionObserver, staggered delays

---

## PAGE STRUCTURE & SECTIONS

### 1. HEADER (Navigation Bar)

- Fixed sticky, dark navy background, backdrop blur `8px`
- Logo: **DAYALX** wordmark (bold, teal accent on "X")
- Nav links: `Solutions`, `How It Works`, `Subjects`, `About`, `Contact`
- CTA: `Get Early Access` — teal (`#78fcd6`) background, dark text
- Bottom border: `1px solid rgba(255,255,255,0.08)`
- Z-index: `50`
- Shadow grows on scroll

---

### 2. HERO SECTION

- **Min-height:** `100vh`
- **Background layers (z-index order):**
  - z-1: `#0f1211` base
  - z-2: Diagonal grid overlay (white 5%)
  - z-3: Teal blur circle (no interaction)
  - z-4: Content (headline, subtext, buttons)
  - z-5: Kit illustration / dashboard mockup

- **Badge above headline:** `✦ Simplifying Lab Procurement for India's Colleges`
- **Main Headline:** `"One Kit. Every Practical. All Semester."` — with teal → light gradient
- **Subheading:** `"DAYALX delivers syllabus-aligned laboratory kits to colleges — so procurement teams stop chasing 50 vendors and start focusing on what matters."`
- **Primary CTA:** `"Request a Kit Demo"` — teal `#78fcd6`, dark text, `rounded-full`
- **Secondary CTA:** `"See How It Works"` — ghost button
- **Visual Below CTAs:** Flat/isometric illustration of a lab kit unpacking into consumables, glassware, reagents — OR clean dashboard mockup of a kit order flow

---

### 3. SOCIAL PROOF SECTION

- `"Already in conversation with institutions across India"`
- 6–8 muted, grayscale college/institution logos
- Centered layout, `gap-8`

---

### 4. PROBLEM → SOLUTION SECTION (Two-Panel)

**Left — The Problem:**
- Headline: `"The Way Colleges Buy Lab Supplies is Broken"`
- 🔴 40–50 separate vendor orders every semester
- 🔴 Delays causing cancelled practicals
- 🔴 No standardization across batches
- 🔴 Heavy admin burden on lab staff

**Right — The DAYALX Fix:**
- Headline: `"We Turned Fragmented Procurement into One Smart Kit"`
- ✅ One order per subject per semester
- ✅ Syllabus-aligned, batch-ready kits
- ✅ On-time delivery, guaranteed
- ✅ Less admin. More teaching.

---

### 5. FEATURES SECTION (BENTO GRID LAYOUT)

- **Title:** `"Built for How Labs Actually Work"`
- **Subtitle:** `"Every kit is designed around your syllabus, your batch size, and your semester schedule."`
- **Grid:** 1 col → 2 col → 3 col, `gap-6`

**6 Feature Cards:**
1. **Syllabus-Aligned Kits** — Pre-mapped to university curriculum for pharmacy, nursing, medical & science labs
2. **Batch-Ready Quantities** — Calibrated consumable quantities for your exact student batch size
3. **Multi-Subject Coverage** — Chemistry, Biology, Pharmacology, Microbiology & more
4. **Single Vendor, One PO** — Replace 40+ vendor relationships with one purchase order
5. **Semester Planning Dashboard** — Track orders, delivery status, and kit inventory in one place
6. **Custom Kit Requests** — Build a custom kit for your institution's specific syllabus

**Card Styling:**
- Backdrop blur: `4px`
- Background: `rgba(255,255,255,0.08)`
- Border: `1px solid rgba(255,255,255,0.2)`
- Padding: `24px`
- Image area height: `288px`
- Border radius: `16px`

**Background Decoration:** Large teal blur circle `547px × 938px`, rotated `-33.39°`, top-left, `130px` blur, `10%` opacity

---

### 6. LARGE FEATURED TESTIMONIAL

- Background: `#78fcd6` (teal), dark text
- Quote: *"We used to spend three weeks every semester just coordinating lab supply orders. DAYALX cut that to a single afternoon."*
- Attribution: `Dr. [Name], HOD – Department of Pharmacy, [College Name]`
- Card height: `502px`, full width
- SVG background pattern overlay

---

### 7. TESTIMONIAL GRID

- **Title:** `"Lab Coordinators Love It"`
- 7 testimonials: HODs, Lab Technicians, Procurement Managers, Principals
- **2 Large Cards** (`384px × 502px`):
  - One teal background + dark text
  - One off-white 12% background + light text
- **5 Small Cards** (full width, `244px` height)
- Avatar: `48px` large, `36px` small, `border-radius: 50%`
- Padding: `30px` large, `24px` small
- Shadow: `0px 2px 4px rgba(0,0,0,0.08)`

---

### 8. HOW IT WORKS (3-Step Flow)

- **Title:** `"From Order to Practical — In 3 Steps"`
1. **Share Your Syllabus** — Upload your subject list and batch size
2. **We Build Your Kit** — Receive a customized, packed, labelled kit
3. **Deliver to Your Lab** — On-time, semester-ready, no follow-ups needed
- Horizontal animated timeline on desktop, stacked on mobile
- Animated step connectors

---

### 9. SUBJECTS / SOLUTIONS SECTION

- **Title:** `"Kits Designed for Your Department"`
- 🔬 Pharmacy Labs
- 🩺 Nursing & Medical Labs
- ⚗️ Science & Chemistry Labs
- 🧫 Microbiology & Biotech Labs
- Card style: bordered, teal glow on hover (`#78fcd6`)

---

### 10. PRICING SECTION

- **Title:** `"Institutional Plans Built for Every College"`
- **Toggle:** Per Semester / Annual Contract (smooth blur + scale, `500ms`)

**3 Tiers:**
1. **Starter** — Small colleges, 1–2 subjects, up to 30 students/batch
2. **Institution** *(Popular)* — 5–10 subjects, 60–120 students — teal background `#78fcd6`, dark text, `Popular` badge (gradient teal → white)
3. **Enterprise** — Multi-campus, custom kits, dedicated account manager

- Pricing: `"Contact for Quote"` or placeholder
- Card: `16px` padding, `12px` border radius

---

### 11. FAQ SECTION

- **Title:** `"Frequently Asked Questions"`
- Accordion, `300ms ease`, chevron rotates `-180deg` on open
- Questions:
  - What subjects are DAYALX kits available for?
  - How are kit quantities decided?
  - Can we request a custom kit for our syllabus?
  - What is the minimum order size?
  - How far in advance should we order before the semester?
  - Do you deliver pan-India?
  - Can multiple departments at the same college order together?

---

### 12. EARLY ACCESS CTA SECTION

- **Headline:** `"Be Among the First Colleges to Transform Your Lab Procurement"`
- **Subtext:** `"Join our early access program and get priority onboarding, custom kit design, and semester-one support."`
- **Primary CTA:** `"Request Early Access"` — teal `#78fcd6`
- **Secondary CTA:** `"Talk to Our Team"` — ghost button
- Full-width dark background

---

### 13. FOOTER

- **Background:** `#0f1211`
- **4-column grid:**
  - DAYALX logo + `"One Kit. Every Practical. All Semester."`
  - Product: `How It Works, Subjects, Kit Builder, Pricing`
  - Company: `About, Blog, Careers, Press`
  - Legal: `Privacy Policy, Terms of Service`
  - Social: LinkedIn, Twitter/X, Instagram, WhatsApp
- **Bottom Bar:** Copyright + `"Built for India's Educational Labs 🇮🇳"`
- **Top border:** `1px solid rgba(255,255,255,0.08)`
- Padding: `56px` top, `24px` bottom

---

## LAYOUT WITH VISUAL HIERARCHY

### Hero Section

- **Content max-width:** `700px` (readable headline)
- CTA buttons centered, side-by-side on desktop
- Overflow: `hidden` (clips blur effects)

### Bento Grid

- CSS Grid (not flexbox) for 2D layout
- Gap: `24px × 24px`
- Background blur circle: `position: absolute`, behind grid

### Testimonial Grid

- Flex wrap, `gap-24px`
- Stack fully on mobile

---

## SPECIFIC COLOR STATES

### Button States

- **Default:** `#78fcd6` background, dark text
- **Hover:** Brightness +10%, opacity 95%
- **Active:** Scale `0.98`, brightness +5%
- **Disabled:** Opacity `50%`, cursor `not-allowed`

### Text Color States

- **Primary heading:** `#e7eceb`
- **Secondary/muted text:** `#a3aca8`
- **Link:** `#78fcd6`
- **Link hover:** `#00ffb6`

### Background States

- **Card hover:** Background `8% → 12%` opacity
- **Border hover:** `20% → 30%` opacity

---

## RESPONSIVE VISUAL EFFECTS

| Breakpoint | Blur | Shadows | Grid |
|---|---|---|---|
| Mobile `<640px` | `2px` (reduced) | Softer | 1 col |
| Tablet `768px–1023px` | `4px` | Moderate | 2 col |
| Desktop `1024px+` | `4px` (full) | Full depth | 3 col |

---

## ANIMATION TIMING & EASING

- **Quick interactions (buttons):** `ease-out`, `200–300ms`
- **Entrance animations:** `cubic-bezier(0.34, 1.56, 0.64, 1)`, `600–800ms`
- **Hover effects:** `ease-in-out`, `300ms`
- **Default transitions:** `0.3s cubic-bezier(0.4, 0, 0.2, 1)`

**Stagger pattern:**
- 1st element: `0ms` delay
- 2nd element: `100ms` delay
- 3rd element: `200ms` delay

---

## ADDITIONAL MICRO DETAILS

### Focus States (Accessibility)

- Focus ring: `2px solid #78fcd6`
- Outline offset: `2px`
- Visible on keyboard navigation

### Link Styles

- Default: `#78fcd6`, no underline
- Hover: Underline, color → `#00ffb6`

### Form/Input Elements

- Focus border: `2px solid #78fcd6`
- Focus background: Slight white opacity increase
- Cursor: `text`

### Scrollbar Styling

- Thumb: `#78fcd6` at `60%` opacity
- Track: Transparent
- Width: `8px`
- Hover: Opacity → `80%`

---

## DESIGN TOKENS SUMMARY

```
Background:    hsl(210 11% 7%)       → #0f1211
Foreground:    hsl(160 14% 93%)      → #e7eceb
Primary:       hsl(165 96% 71%)      → #78fcd6
Primary Dark:  hsl(160 100% 50%)     → #00ffb6
Primary Light: Custom teal variants
Secondary:     hsl(160 14% 93%)      → #e7eceb
Muted:         hsl(240 2% 16%)       → #3f3f42
Accent:        hsl(240 2% 25%)
Border Radius: 0.5rem (8px)
```

---

## TECHNICAL SPECIFICATIONS

- **Framework:** Next.js with App Router
- **Styling:** Tailwind CSS with custom design tokens
- **Typography:** Google Fonts (`Sora`, `JetBrains Mono`)
- **Components:** shadcn/ui (buttons, accordion, toggle, badge)
- **Icons:** Lucide React
- **Image Optimization:** Next.js `<Image />`
- **Analytics:** Vercel Analytics
- **Accessibility:** Semantic HTML, ARIA labels, alt text

---

*This is the complete V2 prompt for the DAYALX landing page — ready to hand to your developer or paste into any AI code generation tool.*
