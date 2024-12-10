const express = require('express');
const { crawlDomains } = require('../services/crawler');

const router = express.Router();

// Route to trigger the crawler
router.post('/crawl', async (req, res) => {
  const { domains } = req.body;

  if (!domains || !Array.isArray(domains)) {
    return res
      .status(400)
      .json({ error: 'Please provide a valid array of domains in the request body.' });
  }

  try {
    const results = await crawlDomains(domains);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while crawling the domains.' });
  }
});

module.exports = router;
