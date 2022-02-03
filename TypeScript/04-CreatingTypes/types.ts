type Product = {
   name: string,
   shelfLife?: string,
   price: number
} 

// instead of re-declare Product type all times i'll create a product or something that uses a sintax similar, I create a type and can use it to all things I'll need

const batata :Product = {
   name: "batata",
   price: 15
}

const banana :Product = {
   name: "banana",
   price: 10
}

// with type you can create a function type definition too, look below
type OperatorFunction = (a:number, b:number) => number;

function times(a:number, b:number) { return a * b }

function makeOperations(callback :OperatorFunction){
   return callback(5, 7)
}

// You also can create a generic function that can change the theme in the time that you'll use it, its a little confuse, but look below
// https://www.codecademy.com/courses/learn-typescript/lessons/typescript-custom-types/exercises/generic-types

type Price<T> = T;

const NormalPrice :Price<number> = 15;
const FormatedPrice :Price<string> = "R$15.00";

// You can also make this with functions

function getFilledArray<T>(value: T, n: number): T[] {
   return Array(n).fill(value);
 }
 
 let stringArray: string[];
 let numberArray: number[];
 let personArray: {name: string, age: number}[];
 let coordinateArray: [number, number][];
 
 // Write your code below:
 stringArray = getFilledArray<string>('hi', 6);
 numberArray = getFilledArray<number>(9, 6);
 personArray = getFilledArray<{name:string, age:number}>({name:"J. Dean", age:24}, 6);
 coordinateArray = getFilledArray<[number, number]>([3, 4], 6);