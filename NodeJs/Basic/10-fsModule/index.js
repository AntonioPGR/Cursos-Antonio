console.clear();

const fs = require('fs');

const textCallback = (err, data) => {
   if(err){
      console.error(err);
   } else {
      console.log(data);
   }
}

fs.readFile('./texto.txt', 'utf-8', textCallback);
console.log('reading');