console.clear()

// A array declaration in ts can be make by: :type[] or Array<type>
const shoppingList :string[] = [
   "batata", "arroz", "feijão", "panqueca"
]

// to declarea a array tha contain another array, you can do something like this: :type[][], where the last [] is the highest array, and the first is the lowest
const NamesAndLastnames :string[][] = [
   ["Antonio", "Pacheco Gerim Ribeiro"],
   ["Josefa", "Da Silva Oliveira"]
]

const shoppingList2 :[string, number][] = [
   ["Arroz", 2],
   ["Bolacha", 4],
] 

// tuples are arrays that can't be changed, and need all of their params to be especified
const coordenates :[[number, number, string], [number, number, string]] = [
   [17, 45, 'N'],
   [142, 30, 'E']
   // [110, 20, 'W']
   // it will not run, because the third array isn't especified on type definition
]

//coordenates[3] = [15, 27, "W"]
// not works because tuples can't be changed
// obs: if you want to so something like this, use .push() or array functions in js


// A way to use ilimited paramters in ts is to use the spread operator in the last param of function and set it like a array of sometype, look below
// obs: you need to have a "normal" first param
function sumAllNumbers(n1:number, ...otherNumbers:number[]):number{
   let sum = n1;

   otherNumbers.map(key => {
      sum += key
   })

   return sum;
}

// if you have a function that receives a lot of params, you can use the spread sintax to re-write this function cleaner. Like, you put all values on a const ou let, and pass it to a function using ...
function partsOfYourPc(cpu:string, ram:number, motherboard:string, gpu:string, storage:number):void{
   console.log(`Your pc config is: 
   CPU: ${cpu} 
   MotherBoard: ${motherboard} 
   GPU: ${gpu} 
   RAM: ${ram}Gb 
   Storage: ${storage}Gb
   `)
}

const config :[string, number, string, string, number] = [
   "Intel i510400f", 16, "Asus H510M-E", "Nvidia GT630", 1240
]
partsOfYourPc(...config)