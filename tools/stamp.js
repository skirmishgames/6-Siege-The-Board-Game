// Stamp CSS and JS links in index.html with a version for cache busting.
// Usage: node tools/stamp.js
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'index.html');
const v = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 12);
const html = fs.readFileSync(file, 'utf8').replace(/(\.(?:css|js))\?v=[\w.]+/g, `$1?v=${v}`);
fs.writeFileSync(file, html);
console.log('Stamped', v);
