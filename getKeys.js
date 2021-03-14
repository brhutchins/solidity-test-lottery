const path = require('path');
const fs = require('fs');

let keyPath = path.resolve(__dirname, 'keys/keys.json');
let keys = JSON.parse(fs.readFileSync(keyPath, 'utf8'));

module.exports = keys;
