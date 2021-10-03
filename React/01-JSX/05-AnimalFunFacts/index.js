import React from "react";
import ReactDOM from "react-dom";

const animals = [
  {
    name: 'dolphin',
    funfact: 'Dolphins help the sick or injured members',
    img: 'img/dolphin.png',
  },
  {
    name: 'crab',
    funfact: 'Crabs walk and swim sideways.',
    img: 'img/Crab.jpg',
  },
  {
    name: 'starfish',
    funfact: 'They have no brain and no blood',
    img: 'img/starfish.jpg',
  }
];
const title = 'Fun Facts about some interesting animals';
let current_animal = 1;

const page = (
  <div>
    <h1>
      {title}
    </h1>

    <p>Click in one animal to see a curious fact about it</p>
    <ul>
      {animals.map((animal, v) => {
        return <li key={`animal_${v}`} className="animal_item" onClick={(e)=>changeAnimal(v)}>{animal.name}</li> 
      })}
    </ul>
    
    <div>
      <p id="current_animal">{animals[current_animal].name}: {animals[current_animal].funfact}</p>
      <div>
        <img id="animal_img" alt={animals[current_animal].name} src={animals[current_animal].img}/>
      </div>
    </div>

  </div>
)

function changeAnimal(i){
  current_animal = i;
  document.querySelector('#current_animal').innerHTML = `${animals[i].name}: ${animals[i].funfact}`;
  document.querySelector('#animal_img').src = animals[i].img;
  document.querySelector('#animal_img').alt = animals[i].name;
}

ReactDOM.render(
  page,
  document.getElementById('root')  
)