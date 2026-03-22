const fs = require('fs');

fs.readFile('code.js', 'utf8', function(err, data) {
  if (err) {
    console.error('error reading file:', err);
  } else {
    console.log(data);
  }
});