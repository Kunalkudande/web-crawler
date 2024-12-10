const PRODUCT_PATTERNS = [
  // Amazon
    '/dp/',       // Product pages on Amazon (e.g., /dp/B08N5WRWNW)
    '/gp/',       // General product pages on Amazon (e.g., /gp/product/B09G3HRMVP)
    '/s?k=',      // Search results pages (e.g., /s?k=laptop)
  
    // eBay
    '/itm/',      // Product pages on eBay (e.g., /itm/1234567890)
    '/sch/',      // Search/category pages on eBay (e.g., /sch/i.html?_nkw=laptop)
  
    // Walmart
    '/ip/',       // Product pages on Walmart (e.g., /ip/12345678)
    '/product/',  // Product listing pages on Walmart (e.g., /product/23456789)
  
    // Best Buy
    '/site/',     // Product pages on Best Buy (e.g., /site/laptops/)
    '/prod/',     // Specific product URLs (e.g., /prod/2345678)
  
    // Target
    '/p/',        // Product pages on Target (e.g., /p/123456789/)
    '/product/',  // Another product pattern on Target (e.g., /product/567890)
  
    // AliExpress
    '/item/',     // Product pages on AliExpress (e.g., /item/123456789)
    '/store/',    // Store-specific product pages (e.g., /store/123456)
  
    // Etsy
    '/listing/',  // Product pages on Etsy (e.g., /listing/12345678)
  
    // Newegg
    '/Product/',  // Product pages on Newegg (e.g., /Product/Product.aspx?Item=N82E16812345678)
  
    // Shopify-based websites (general pattern)
    '/products/', // Generic Shopify store product page (e.g., /products/laptop)

  ];
  
  

module.exports = { PRODUCT_PATTERNS };
