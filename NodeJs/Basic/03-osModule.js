console.clear();

const os = require('os');

console.log(`system type: ${os.type()}`);
console.log(os.arch());
// console.log(os.networkInterfaces())
console.log(os.homedir());
console.log(os.hostname());
console.log(os.uptime());

const local = {  
   'Home Directory': os.homedir(),    
   'Operating System': os.type(),
   'Last Reboot': os.uptime()
}
console.log(local) 