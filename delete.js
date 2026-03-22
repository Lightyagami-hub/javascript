const fs = require('fs');

fs.unlink('code.js', function(err) {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully');
  }
});