const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = process.cwd();
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Use cheerio, don't wrap body/html automatically if it's not present (but it is)
    const $ = cheerio.load(content, { decodeEntities: false });

    let count = 0;

    // 1. Navigation Links (pages in nav bar)
    $('.nav-links .nav-link').each((i, el) => {
        if (!$(el).attr('data-gtm')) {
            let text = $(el).text().trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            if (!text) text = 'nav-item';
            $(el).attr('data-gtm', `nav-${text}`);
            count++;
        }
    });

    // 2. All Links functioning as Buttons (.btn), buttons, and other specific clickable elements
    // e.g. .expand-btn, .mobile-menu-btn, input[type=submit] etc
    const buttonSelectors = ['.btn', 'button', '.service-link', '.sticky-cta', '.logo'];

    $(buttonSelectors.join(', ')).each((i, el) => {
        if (!$(el).attr('data-gtm')) {
            let baseId = $(el).attr('id');
            let baseClass = $(el).attr('class') ? $(el).attr('class').split(' ')[0] : '';
            let text = $(el).text().trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

            let gtmVal = '';

            if (baseId) {
                gtmVal = `btn-${baseId}`;
            } else if (text) {
                gtmVal = `btn-${text}`;
            } else if (baseClass) {
                gtmVal = `btn-${baseClass}`;
            } else {
                gtmVal = 'btn-generic';
            }

            $(el).attr('data-gtm', gtmVal);
            count++;
        }
    });

    if (count > 0) {
        fs.writeFileSync(filePath, $.html(), 'utf8');
        console.log(`Updated ${file} with ${count} GTM attributes.`);
    }
});
