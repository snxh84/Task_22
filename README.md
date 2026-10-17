# Project — Tailwind Hero Landing Page 

A clean, modern **hero landing page** for a digital workspace platform, built entirely with
**Tailwind CSS utilities** . The page focuses on the hero section layout:
sticky navigation, headline structure, call-to-action buttons, floating information cards,
a positioned dashboard preview, and a fixed chat widget.

## File Structure

```
T20_Tailwind_Hero_Landing_Page/
├── index.html    # Main page — all layout via Tailwind utility classes
├── style.css     # Minimal custom CSS (hero gradient + card float animation)
├── script.js     # Mobile menu toggle & chat widget interactions
└── README.md     # This file
```

## How to Run

1. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).
   An internet connection is required for the Tailwind CDN, Google Fonts, and images.

## Features

| Section | Details |
|---|---|
| **Sticky Navbar** | `sticky top-0 z-50` bar with "✦ Project" logo, nav links, and a "Get AI free" CTA |
| **Hero Headline** | "Write, plan, share. With AI at your side." with a descriptive sub-paragraph |
| **CTA Buttons** | "Get AI free →" (relative) and "Request a demo" (absolute, offset from the primary) |
| **Dashboard Preview** | Centered image positioned with `absolute left-1/2 -translate-x-1/2` inside a `relative` parent |
| **Floating Cards** | Tasks, Project Status, and Team Activity cards placed with `absolute` + `z-index` + `shadow` |
| **Chat Widget** | 💬-style chat icon fixed at `bottom-6 right-6 z-50`, opens a small panel on click |
| **Responsive** | Mobile hamburger menu; floating cards switch to a static grid on small screens |

## Tailwind Positioning Utilities Used

- **relative** — hero containers, CTA button group, dashboard preview wrapper
- **absolute** — dashboard image, floating info cards, secondary CTA button
- **sticky** — top navigation bar (`sticky top-0 z-50`)
- **fixed** — chat widget (`fixed bottom-6 right-6 z-50`)
- Plus spacing (`p-`, `m-`, `gap-`), color (`bg-`, `text-`), `shadow-`, and `z-` utilities throughout

