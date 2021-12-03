console.clear();

const api = require('./api');

const callback = (err, result) => {
   if (err) {
      console.log(`${err}`);
   } else {
      console.log(`Everything happened great, data = ${result}`);
   }

   process.exit()

};

const getInputData = input => {
   api.sumWith10(input, callback);
}

console.log(`Digite um numero para ser somado com 10:`)
process.stdin.on('data', getInputData);
