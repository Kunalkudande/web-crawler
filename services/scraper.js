const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const { PRODUCT_PATTERNS } = require('../utils/constants');

// Fetch HTML content (static pages)
async function fetchHTML(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const content = await page.content();
  await browser.close();
  return content;
}


// Extract product URLs from HTML
function extractProductURLs(html, baseURL) {
  const $ = cheerio.load(html);
  const productURLs = [];

  $('a').each((_, element) => {
    const href = $(element).attr('href');

    if (href && PRODUCT_PATTERNS.some(pattern => href.includes(pattern))) {
      const fullURL = new URL(href, baseURL).toString();
      if (!productURLs.includes(fullURL)) {
        productURLs.push(fullURL);
      }
    }
  });

  return productURLs;
}

module.exports = { fetchHTML, extractProductURLs };
