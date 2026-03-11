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

### Mobile Horizontal Overflow Fix
- Added overflow-x: hidden and width: 100% to both html and ody selectors in style.css.
- Replaced 100vw/100vh on .background-effects with 100% to prevent scrollbar-width overflow.
- Removed hardcoded inline style=grid-template-columns: repeat(3, 1fr) from the .pricing-grid in index.html so CSS breakpoints can properly override it on mobile.
- Removed hardcoded inline style=grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) from .services-grid-3 and moved it to style.css.
- Added @media (max-width: 768px) override for .growth-boosters to reduce its inline padding override.
- Updated .pricing-grid base rule from 
epeat(4, 1fr) to 
epeat(3, 1fr) to match the 3-tier plan structure.

### Fix White Background on Inner Pages (Mobile)
- Added ackground-color: #0b0c10 solid fallback before the animated gradient on ody in style.css. Without this, mobile browsers that don't run CSS animations (or that use prefers-reduced-motion) show a white page.
- Added explicit ody.dark-theme CSS rule to lock the background on all inner pages.
- Added @media (prefers-reduced-motion: reduce) rule to disable the gradient animation and use the solid dark color instead.

### Fix Burger Menu Not Working on Inner Pages
- Fixed a critical null reference error in script.js where mobileMenuBtn.querySelector('i') was called on line 661 BEFORE the null guard if (mobileMenuBtn) on line 663. This caused a TypeError crash that silently broke ALL mobile menu functionality on inner pages.
- Moved the mobileMenuIcon variable declaration inside the if (mobileMenuBtn && mainNav) guard block to prevent any crash.

### Fix Burger Menu Click Not Registering on Mobile
- Root cause: .main-nav is position: fixed on mobile and occupied the same visible z-index area as the hamburger button, intercepting touch events before they could reach the button.
- Added z-index: 1002 and position: relative to the base .mobile-menu-btn rule.
- Added pointer-events: none to .main-nav on mobile so the invisible off-screen panel never blocks clicks.
- Added pointer-events: all to .main-nav.active to restore interactivity when the menu is open.

### Fix Burger Menu Double-Click Bug on Inner Pages
- Removed redundant inline `<script>` tags from 7 inner HTML pages (`ads.html`, `case-studies.html`, `email-automation.html`, `local-seo.html`, `privacy-policy.html`, `terms-of-service.html`, `tracking.html`) that were duplicating `script.js`'s mobile menu toggling logic and causing the menu to instantly close when opened.

### Google Tag Manager Integration
- Injected the main Google Tag Manager `<script>` snippet high up in the `<head>` of all 8 HTML files.
- Injected the fallback Google Tag Manager `<noscript>` iframe snippet immediately following the opening `<body>` tag on all 8 HTML files.
- Automatically injected explicit `data-gtm` attributes across all 8 HTML files for navigation links (`nav-links nav-link`), CTA links (`.btn`, `.sticky-cta`, `.service-link`), logo links, and `<button>` elements to enable granular event tracking in Google Tag Manager.

### Hide Social Links
- Added `style="display: none;"` to the `.footer-social` block in `index.html` to temporarily hide the social media icons.
