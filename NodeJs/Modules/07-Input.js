const sayHello = userInput => {
   const name = userInput.toString().trim();
   console.log(`Welcome to my app ${name}, i'm working in it yet, so, if you can, return later please!`);
   process.exit()
}

console.log("Hey! is it your first time in my app? please say me your name:");

process.stdin.on('data', sayHello);