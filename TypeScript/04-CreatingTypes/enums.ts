console.clear()

enum CalcOptions{
   plus,
   minus,
   times,
   divide,
   pow
}

/** 
enum CalcOptions{
   plus = "PLUS",
   minus = "MINUS",
   times = "TIMES",
   divide = "DIVIDE",
   pow = "POW"
}
*/

function calculate(option:CalcOptions, ...numbers:number[]):number{
   let result = numbers[0];
   const newNumbers = numbers;
   newNumbers.shift();

   newNumbers.map( (key, index) => {
      switch(option){
         case CalcOptions.plus:
            result += key;
         break;
         case CalcOptions.minus:
            result -= key;
         break;
         case CalcOptions.times:
            result *= key;
         break;
         case CalcOptions.divide:
            result /= key;
         break;
         case CalcOptions.pow:
            result **= key;
         break;
         default:
            throw Error("Operator invalid")
      }
   } )

   return result;
}

const userOption : CalcOptions = CalcOptions.divide;
const numbers = [15, 3];

console.log(calculate(userOption, ...numbers))
