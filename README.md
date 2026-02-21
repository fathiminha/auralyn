# 🌸 Auralyn — Discover Your Glow

> A premium wellness & lifestyle Single Page Application built with React JS, featuring cinematic animations, smooth scroll transitions, and an elegant lavender-plum color palette.

![Auralyn Banner](https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=400&fit=crop)

---

## ✨ Live Demo

🔗 **[View Live Site](https://auralyn-wellness.netlify.app/)**  
📁 **[GitHub Repository](https://github.com/fathiminha/auralyn)**

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Color Palette](#color-palette)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Author](#author)

---

## 🌿 About

**Auralyn** is a premium wellness and lifestyle brand that helps people discover their inner balance through mindfulness, movement, and holistic living. This website delivers a world-class digital experience — crafted with cinematic animations, editorial typography, and a dreamy lavender-plum aesthetic inspired by the finest luxury wellness brands.

The site embodies the brand philosophy:

> *"Wellness is not a destination, it's a ritual."*

---

## 🎯 Features

### Animations & Transitions
- **Cinematic Preloader** — Letter-by-letter A-U-R-A-L-Y-N reveal with progress counter
- **Parallax Hero** — Smooth background image parallax on scroll
- **Word-by-Word Text Reveals** — Staggered text animation triggered on scroll into view
- **Rotating Hero Words** — Cycling words (Radiance, Balance, Wellness, Harmony, Serenity)
- **Custom Dual Cursor** — Plum ring + dot with spring physics and hover scaling
- **Clip-Path Menu** — Full-screen mobile menu with cinematic wipe transition
- **3D Tilt Journal Cards** — Mouse-tracked perspective transform on hover
- **Animated Counters** — Count-up statistics triggered on scroll into view
- **Infinite Marquee** — Scrolling text strip between sections (normal + reverse)
- **Rotating Decorative Circles** — Subtle background animation in Contact section
- **Film Grain Noise Overlay** — Premium texture across the entire site

### Page Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen parallax with giant split title and rotating tagline words |
| **About** | Word-by-word reveal, overlapping parallax images, animated counters |
| **Services** | Magazine-style Bento Grid with image zoom and hover content reveals |
| **Journal** | 3D tilt cards with image hover effects and staggered entrance |
| **Contact** | Giant animated CTA heading with email signup on deep plum background |
| **Footer** | Minimal footer with social links on deep plum background |

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React JS + Vite** | Frontend framework and build tool |
| **Framer Motion** | All animations and transitions |
| **Tailwind CSS v3** | Utility-first styling |
| **React Scroll** | Smooth scroll navigation between sections |
| **React Icons** | Social media and UI icons |
| **Google Fonts** | Playfair Display + Inter typography |

---

## 🎨 Color Palette

| Color | Hex | Usage |
|---|---|---|
| Lavender | `#E6D9F2` | Soft accents, text on dark backgrounds |
| Plum | `#6B3FA0` | Primary brand color, CTAs, buttons |
| Rose | `#C9808A` | Accent highlights, italic text |
| Cream | `#FDF6F0` | Light section backgrounds |
| Deep Plum | `#3B1F5E` | Dark text, hero overlay, contact & footer |

**Typography:**
- **Headings** — Playfair Display (Serif) — elegant and editorial
- **Body** — Inter (Sans-serif) — clean and modern
- **Labels** — System monospace — small caps, counters, tags

---

## 📁 Project Structure

```
auralyn/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero.jpg
│   │       ├── about.jpg
│   │       ├── about2.jpg
│   │       ├── mindful.jpg
│   │       ├── movement.jpg
│   │       ├── nourish.jpg
│   │       ├── glow.jpg
│   │       ├── journal1.jpg
│   │       ├── journal2.jpg
│   │       └── journal3.jpg
│   ├── components/
│   │   ├── Cursor.jsx        # Custom dual cursor with spring physics
│   │   ├── Preloader.jsx     # Full-screen loading animation
│   │   ├── Navbar.jsx        # Fixed nav with scroll behavior + mobile menu
│   │   ├── Hero.jsx          # Parallax hero with rotating words
│   │   ├── Intro.jsx         # About section with word reveals + counters
│   │   ├── Services.jsx      # Bento grid service cards
│   │   ├── Marquee.jsx       # Infinite scrolling text strip
│   │   ├── Journal.jsx       # 3D tilt journal cards
│   │   ├── Contact.jsx       # CTA + email signup
│   │   └── Footer.jsx        # Site footer
│   ├── App.jsx               # Root component + preloader state
│   ├── main.jsx
│   └── index.css             # Global styles + noise texture
├── tailwind.config.js
├── index.html
└── package.json
```
  <p>Made with 💜 using React + Framer Motion</p>
  <p><em>"Wellness is not a destination, it's a ritual."</em> — Auralyn</p>
</div>
