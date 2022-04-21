"use strict";
console.clear();
/**
 * Function tha make the sum of two numbers
 *
 * @param n1  A number to be somed with n1
 * @param n2 A number to be somed with n2
 * @returns The sum of n1 and n2
 */
function sum(n1, n2) {
    const result = n1 + n2;
    return result;
}
function makeGreetings(name) {
    let message = name ? `Hello ${name}, ` : "Hello, ";
    message += "Your sum is:";
    console.log(message);
}
const userSum = sum(1, 5);
makeGreetings();
console.log(userSum);
