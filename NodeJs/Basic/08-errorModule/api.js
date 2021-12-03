const SumWith10 = (input, callback) => {
   console.log('Finding data from server...');
   let error;

   setTimeout(() => {
      if ( !isNaN(input) ) {
         const number = Number(input);
         callback(error, number + 10 );
      } else {
         error = new Error('the input value should be an integer or boolean');
         callback(error)
      }
   }, 300)
}

module.exports.sumWith10 = SumWith10;