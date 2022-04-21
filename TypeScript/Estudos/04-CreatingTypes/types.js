"use strict";
// instead of re-declare Product type all times i'll create a product or something that uses a sintax similar, I create a type and can use it to all things I'll need
const batata = {
    name: "batata",
    price: 15
};
const banana = {
    name: "banana",
    price: 10
};
function times(a, b) { return a * b; }
function makeOperations(callback) {
    return callback(5, 7);
}
const NormalPrice = 15;
const FormatedPrice = "R$15.00";
// You can also make this with functions
function getFilledArray(value, n) {
    return Array(n).fill(value);
}
let stringArray;
let numberArray;
let personArray;
let coordinateArray;
// Write your code below:
stringArray = getFilledArray('hi', 6);
numberArray = getFilledArray(9, 6);
personArray = getFilledArray({ name: "J. Dean", age: 24 }, 6);
coordinateArray = getFilledArray([3, 4], 6);
