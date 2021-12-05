console.clear();

console.log("please wait! we're processing our server response")

setTimeout(()=>{
   const buffer1 = Buffer.from('Hello ');
   const buffer2 = Buffer.from('World! ');
   const concatBuffer = Buffer.concat([buffer1, buffer2]);
   const response = concatBuffer.toString();

   console.log(response)
}, 3000)