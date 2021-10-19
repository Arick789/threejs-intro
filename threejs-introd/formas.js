//Se crea la escena
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);

//Se añade la camara
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//ADD GEOMETRY
//cubo
var geometry = new THREE.BoxGeometry(1, 1, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true
});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

cube.position.x = 2;
cube.position.y = 0;
cube.position.z = 1;

camera.position.z = 5;

//circulo
var geometry = new THREE.CircleGeometry(1, 32);
var material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  wireframe: true
});
const circle = new THREE.Mesh(geometry, material);

scene.add(circle);

circle.position.x = 4.5;
circle.position.y = 0;
circle.position.z = 1;

camera.position.z = 5;

//cono
var geometry = new THREE.ConeGeometry(1, 1, 22);
var material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  wireframe: true
});
const cone = new THREE.Mesh(geometry, material);

scene.add(cone);

cone.position.x = -0.7;
cone.position.y = 0;
cone.position.z = 1;

camera.position.z = 5;

//cilindro
var geometry = new THREE.CylinderGeometry(1, 1, 1, 22);
var material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  wireframe: true
});
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

cylinder.position.x = -4;
cylinder.position.y = 0;
cylinder.position.z = 1;

camera.position.z = 5;

//animacion
var animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  circle.rotation.x += 0.01;
  circle.rotation.y += 0.01;

  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;

  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
