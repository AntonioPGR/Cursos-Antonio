const form = document.querySelector("form#userForm")
form.addEventListener("submit", (e)=>{
   e.preventDefault();
   addNewUser(e);
})

function addNewUser(){
   const username = document.getElementById("userNameInput").value;
   const age = document.getElementById("ageInput").value;
   const sex = document.getElementById("sexInput").value;

   fetch("http://127.0.0.1:8080 ", {
      method: "POST",
      body: JSON.stringify({
         nome:username,
         idade: age,
         sexo: sex
      }),
   })
   .then(res => console.log(res))
   .catch(err=>console.log(err))
}

