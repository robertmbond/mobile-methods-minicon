# The Mobile Methods Mini-con @OSU Website

A lightweight, multi-page static conference site for **The Mobile Methods Mini-con @OSU** (May 1–2, 2026), designed for easy deployment on GitHub Pages and straightforward migration to a custom domain.

## 1) Project overview

This site provides an initial public-facing web presence to:
- Announce the event and establish credibility
- Explain mobile methods in clear, public-facing language
- Share registration status and venue information
- Present a provisional program structure
- Show placeholder speaker and organizer profiles that can be updated quickly

## 2) Tech stack chosen (and why)

- **HTML + CSS + vanilla JavaScript**
- No framework and no build tooling required

Why this choice:
- Very reliable for GitHub Pages
- Minimal complexity and low maintenance
- Easy handoff to future editors
- Easy custom-domain migration with no framework-specific routing concerns

## 3) How to run locally

From the repository root, run a local static server:

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/`

## 4) How to edit main content areas

Most reusable content is centralized in:

- `assets/js/data.js`

Update in `data.js` for:
- Navigation labels/routes
- Conference metadata
- Speaker placeholders / future real speaker cards
- Organizer names, bios, and image paths
- Venue names, links, and descriptions
- RSVP readiness and registration URL

Page-specific narrative content is in each page file:
- `index.html`, `about.html`, `program.html`, `speakers.html`, `venue.html`, `organizers.html`, `registration.html`, `contact.html`

## 5) Where to replace key placeholders

### RSVP link
- File: `assets/js/data.js`
- Keys:
  - `conference.rsvpUrl`
  - `conference.rsvpReady`

Set:
- `rsvpReady: true`
- `rsvpUrl: 'https://your-real-rsvp-link'`

### Speaker information
- File: `assets/js/data.js`
- Section: `speakers`

Replace each placeholder object with real:
- `name`
- `affiliation`
- `bio`
- `image`

### Organizer bios
- File: `assets/js/data.js`
- Section: `organizers`

Update each organizer’s `bio` text.

### Organizer photos
- Add image files under `assets/images/`
- Update each organizer `image` path in `assets/js/data.js`

### Program details
- File: `program.html`
- Replace provisional list items and notes with real session titles, times, and room information when available.

## 6) Deploy to GitHub Pages

### Option A: Deploy from root (simple static pages)
1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch), folder `/ (root)`
4. Save and wait for deployment.

### Option B: GitHub Actions
You can also deploy via GitHub Actions, but it is not required for this project.

## 7) Notes for future custom domain migration

When moving to a custom domain:
1. Add your domain in GitHub Pages settings.
2. Configure DNS records at your domain provider.
3. Add/update `CNAME` in the repo root if needed.
4. Enable HTTPS in Pages settings.

### Base-path note
This site uses **relative links** (e.g., `about.html`, `assets/...`), which helps it work both on:
- GitHub Pages project URLs (e.g., `/mobile-methods-minicon/`) and
- Custom domains at root

## 8) Folder structure overview

```text
mobile-methods-minicon/
├── index.html
├── about.html
├── program.html
├── speakers.html
├── venue.html
├── organizers.html
├── registration.html
├── contact.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── data.js
    │   └── site.js
    └── images/
        ├── favicon.svg
        ├── og-placeholder.svg
        ├── speaker-placeholder.svg
        └── organizer-placeholder.svg
```
