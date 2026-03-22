const fs = require('fs')
fs.writeFile('code.js','MERN',function(err){
      if(err){
        console.error('error writing to file:',err);
      }else{
        console.log('file created successfully!');
      }
})