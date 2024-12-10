const { fetchHTML, extractProductURLs } = require('./scraper');

async function crawlDomains(domains) {
  const results = [];

  for (const domain of domains) {
    try {
      console.log(`Crawling domain: ${domain}`);
      const html = await fetchHTML(domain);
      const productURLs = extractProductURLs(html, domain);
      results.push({ domain, productURLs });
    } catch (error) {
      console.error(`Error crawling ${domain}:`, error);
      results.push({ domain, productURLs: [] });
    }
  }

  return results;
}

module.exports = { crawlDomains };
