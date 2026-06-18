// Serverless PDF export.
// Renders the deployed "Trip Plan PDF.dc.html" with headless Chrome and returns a real,
// vector A4 .pdf as a download. The page's @media print CSS (true A4 pages + our running
// header/footer) is what page.pdf() uses, so the file looks exactly like the print layout.
//
// Runs ONLY on Vercel (needs the bundled Chromium). It does nothing on a local static server.
const chromium = require('@sparticuz/chromium');
const puppeteer = require('puppeteer-core');

// Which page to render → output filename. Add more entries to export other docs.
const DOCS = {
  trip: { path: '/Trip%20Plan%20PDF.dc.html', file: 'Bangkok-Slow-Days.pdf' }
};

module.exports = async (req, res) => {
  let browser;
  try {
    const which = (req.query && req.query.doc) || 'trip';
    const doc = DOCS[which] || DOCS.trip;
    const proto = String(req.headers['x-forwarded-proto'] || 'https').split(',')[0];
    const host = req.headers['x-forwarded-host'] || req.headers['host'];
    const target = proto + '://' + host + doc.path;

    browser = await puppeteer.launch({
      args: [...chromium.args, '--font-render-hinting=none'],
      defaultViewport: { width: 1240, height: 1754, deviceScaleFactor: 2 },
      executablePath: await chromium.executablePath(),
      headless: chromium.headless
    });
    const page = await browser.newPage();
    await page.goto(target, { waitUntil: 'networkidle0', timeout: 45000 });
    try { await page.evaluate(() => document.fonts && document.fonts.ready); } catch (e) {}
    await new Promise(r => setTimeout(r, 1000)); // let the dc-runtime finish rendering

    const pdf = await page.pdf({ printBackground: true, preferCSSPageSize: true });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="' + doc.file + '"');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(pdf);
  } catch (e) {
    res.status(500).send('PDF generation failed: ' + (e && e.message ? e.message : String(e)));
  } finally {
    if (browser) { try { await browser.close(); } catch (e) {} }
  }
};
