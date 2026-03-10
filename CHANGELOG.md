# Modification Log

This file tracks all modifications and updates made to the Antigravity project by the AI assistant. I will reference this file every time a new request is made to maintain context.

## [2026-03-10] - Contact Form Functionality & Site Optimizations
- Created `contact.php` endpoint to process and send contact form inquiries to `info@hartmanndigital.net` using standard PHP mail.
- Updated `script.js` to send form data via an AJAX POST request instead of simulating submission.
- Removed the public-facing email address from the homepage and schema to prevent scraping and spam.
- Made the 'Website URL' field optional on the contact form, updating both frontend HTML and backend validation.
- Removed external links from the Google Partner and Meta Verified badges in `index.html`.
- Created `robots.txt` with SEO best practices and instructions to keep malicious bots out.
- Generated `sitemap.xml` including all HTML pages for better search engine indexing.
- Added `CHANGELOG.md` to `.gitignore` to prevent tracking AI chat history changes in version control.

## [2026-03-09] - UI & Pricing Enhancements
- Updated Custom pricing plan features to reflect a tailored, pick-and-mix strategy across the four service pillars.
- Fixed 4-pillar service links to prevent text wrapping on smaller screens. 
- Repaired pricing section accordion logic: only one pricing block expands at a time now.
- Ensured uniform `760px` height across all pricing cards while unexpanded, and prevented horizontal buttons from overflowing.
- Restructured "Our Core Expertise" layout to display strictly as 2 columns or 4 columns on desktop sizes.

## [2026-03-08] - Form Security Update
- Implemented a dynamic math CAPTCHA on the contact form to prevent spam submissions.
- Added logic for CAPTCHA validation and regeneration upon language switch.

## [2026-03-08] - Initial Setup & Fixes
- Created `package.json` to resolve the `npm error ENOENT` when running `npm run dev`.
- Added a `dev` script using `npx --yes live-server` to spin up a local development server with live reload.
- Created this `CHANGELOG.md` file to keep track of all future modifications.
