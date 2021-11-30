console.clear();

console.log(process.env);

process.env.NODE_ENV = "development";
console.table(process.env.NODE_ENV);

console.log(process.memoryUsage());
console.log(`the number of bytes that I needed to run this app was equal to ${process.memoryUsage().heapUsed}`);