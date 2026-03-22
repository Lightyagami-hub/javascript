const fs = require('fs');

fs.appendFile('code.js', '\n New line added', function(err) {
  if (err) {
    console.error('Error appending file:', err);
  } else {
    console.log('Content appended successfully');
  }
});