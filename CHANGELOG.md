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
- Removed the "Careers" link from the footer section of all HTML files.
- Created `privacy-policy.html` and `terms-of-service.html` with appropriate baseline text.
- Updated the footer Legal Links to correctly point to the newly created privacy and TOS pages.
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

### UI & Pricing Overhaul (Latest Session)
- Styled contact form checkboxes to match the site's dark theme.
- Fixed text alignment for the Google Business Profile checkbox option.
- Fixed CSS to restore visibility to the Google reCAPTCHA v3 floating badge.
- Generated and added avicon.png across all HTML headers.
- Rewrote the pricing block section in index.html to a 3-tier structure (Starter, Accelerator, Market Leader) based on the new framework.
- Added 'Growth Boosters' section below the pricing grid for a la carte upsells.

### UI & Multilingual Support (Latest Session)
- Hid the 'Partner Logos' block from the homepage interface temporarily.
- Renamed 'Upsells' to 'Addons' under the Growth Boosters pricing block.
- Injected the Language Switcher logic into the Navbars of all 7 internal HTML pages.
- Upgraded \script.js\ dictionary to store Russian & Romanian translations for the inner-page hero texts.
- Mapped all internal pages with \data-i18n\ translation keys so language applies site-wide seamlessly.

### Form Submission & ReCaptcha Fixes
- Injected the missing "recaptchaToken" hidden input field into "index.html" so the ReCaptcha token actually sends to the backend.
- Rewrote the ReCaptcha execution and Form Submission fetch in "script.js" to include robust try/catch blocks that automatically bypass ReCaptcha and PHP validation if testing is detected on "localhost" via "live-server", repairing the "JSON.parse" fatal error.

### Mobile UI Optimization
- Adjusted @media (max-width: 768px) queries in style.css to fix horizontal overflows on smaller screens.
- Decreased .container padding from 2rem to 1rem on mobile to maximize screen usage for text/images.
- Converted .main-nav height from 100vh to 100svh (Small Viewport Height) to prevent iOS Safari address bar cutoffs.
- Re-anchored the .lang-dropdown to the right edge to stop language switcher horizontal scrolling.
- Adjusted .case-studies-grid and .contact-grid templates to fallback to 1fr properly on phone widths.
- Forced .hero-actions flexbox to stack .btn columns instead of row-wrapping them to fix overlap issues.
