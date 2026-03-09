# Modification Log

This file tracks all modifications and updates made to the Antigravity project by the AI assistant. I will reference this file every time a new request is made to maintain context.

## [2026-03-09] - UI & Pricing Enhancements
- Updated Custom pricing plan features to reflect a tailored, pick-and-mix strategy across the four service pillars.
- Fixed 4-pillar service links to prevent text wrapping on smaller screens. 
- Repaired pricing section accordion logic: only one pricing block expands at a time now.
- Ensured uniform `760px` height across all pricing cards while unexpanded, and prevented horizontal buttons from overflowing.

## [2026-03-08] - Form Security Update
- Implemented a dynamic math CAPTCHA on the contact form to prevent spam submissions.
- Added logic for CAPTCHA validation and regeneration upon language switch.

## [2026-03-08] - Initial Setup & Fixes
- Created `package.json` to resolve the `npm error ENOENT` when running `npm run dev`.
- Added a `dev` script using `npx --yes live-server` to spin up a local development server with live reload.
- Created this `CHANGELOG.md` file to keep track of all future modifications.
