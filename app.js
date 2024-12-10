const express = require('express');
const crawlerRoutes = require('./routes/crawler');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.use('/api', crawlerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
