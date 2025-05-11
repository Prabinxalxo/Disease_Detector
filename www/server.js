const express = require('express');
const compression = require('compression');
const cors = require('cors');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable compression
app.use(compression());

// Enable CORS
app.use(cors());

// Serve static files
app.use(serveStatic(path.join(__dirname, '.'), {
  maxAge: '1d',
  setHeaders: setCustomCacheControl
}));

// Custom Cache Control for specific file types
function setCustomCacheControl(res, path) {
  if (path.endsWith('.html')) {
    // No cache for HTML files
    res.setHeader('Cache-Control', 'no-cache');
  } else if (path.endsWith('.tflite')) {
    // Long cache for model files
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
}

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});