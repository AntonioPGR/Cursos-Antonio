// import { sum, minus, times, divide } from './operations'; não funciona pq???
const { sum, minus, times, divide } = require("./operations.js");

const n1 = 10;
const n2 = 5;

console.log( sum( n1, n2 ) );
console.log( minus( n1, n2) );
console.log( times( n1, n2 ) );
console.log( divide( n1, n2) );