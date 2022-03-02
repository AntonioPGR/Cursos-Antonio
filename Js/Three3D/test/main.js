import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
// distancia da camera em relação ao ponto inicial
const initialCameraPosition = 40
camera.position.setZ(initialCameraPosition)

// criação e adição da forma geométrica
const geometry = new THREE.BoxGeometry(10, 10, 10);
// Basics material não reagem com luz, standard sim
// wireframe show the border of geometry
const material = new THREE.MeshStandardMaterial({
  color: 0xFFFFFF,
})
const square = new THREE.Mesh( geometry, material );
scene.add(square)

// criação da luz
// pointlight é boa para iluminar algum local específico
const pointLight = new THREE.PointLight(0xFFFF99)
pointLight.position.set( 10, 5, 40 )
scene.add(pointLight)

// ambiental light é uma luz para toda a cena
const ambientalLight = new THREE.AmbientLight(0xFFFFAA)
// scene.add(ambientalLight)

// ajuda na criação da luz
const pointLightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
scene.add(pointLightHelper)

// const controls = new OrbitControls(camera, renderer.domElement)

document.body.onscroll = (ev) => {
  const height = document.body.getBoundingClientRect().top
  const newPosition = initialCameraPosition - height * 0.05;
  console.log(initialCameraPosition)
  console.log(newPosition)
  camera.position.setZ(newPosition)
}

function animate(){
  requestAnimationFrame( animate )

  square.rotateX(0.005)
  square.rotateY(0.007)
  square.rotateZ(0.005)

  // controls.update()

  renderer.render(scene, camera)
}


animate()
