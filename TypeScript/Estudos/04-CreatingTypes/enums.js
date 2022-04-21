"use strict";
console.clear();
var CalcOptions;
(function (CalcOptions) {
    CalcOptions[CalcOptions["plus"] = 0] = "plus";
    CalcOptions[CalcOptions["minus"] = 1] = "minus";
    CalcOptions[CalcOptions["times"] = 2] = "times";
    CalcOptions[CalcOptions["divide"] = 3] = "divide";
    CalcOptions[CalcOptions["pow"] = 4] = "pow";
})(CalcOptions || (CalcOptions = {}));
/**
enum CalcOptions{
   plus = "PLUS",
   minus = "MINUS",
   times = "TIMES",
   divide = "DIVIDE",
   pow = "POW"
}
*/
function calculate(option, ...numbers) {
    let result = numbers[0];
    const newNumbers = numbers;
    newNumbers.shift();
    newNumbers.map((key, index) => {
        switch (option) {
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
                throw Error("Operator invalid");
        }
    });
    return result;
}
const userOption = CalcOptions.divide;
const numbers = [15, 3];
console.log(calculate(userOption, ...numbers));
