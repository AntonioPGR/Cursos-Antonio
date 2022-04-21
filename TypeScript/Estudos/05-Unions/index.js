"use strict";
console.clear();
// Unions are basacally when you want to a vartiable to can has more than one especific tipe.
// To define a union we use the 'operator' |
let price;
price = 15;
price = "R$15,00";
// like you see, the let price was assingment to a number and a string
// Narrowing
// narrowing is to use ifs with typeof when you use a union type. It make the code safer, and without bugs
const showThePrice = (price) => {
    let formatedPrice;
    if (typeof price === "number") {
        formatedPrice = `R$${price.toFixed(2)}`;
    }
    if (typeof price === "string") {
        formatedPrice = price;
    }
    console.log(`The price of your superkart is ${formatedPrice}`);
};
// showThePrice(15);
// showThePrice("15.00")
// to create a union array ( an array tha supports more than one type ) you can use the following sintax: (type | type)[] . It will create an array with 2 types for you
const passwords = [
    "batatafrita123",
    12345678,
    "20comer70correr",
    1029384756,
];
