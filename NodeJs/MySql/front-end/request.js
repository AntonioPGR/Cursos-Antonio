fetch("https://localhost:8080", {
   method: "POST",
   body: JSON.stringify({
      name:"maria",
      age: 15,
      sex: "F"
   })
})
.then(()=>console.log("deu certo"))
.catch(err=>console.log(err))