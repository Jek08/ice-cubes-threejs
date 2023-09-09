import * as THREE from "three";
import * as CANNON from "cannon-es";
import IceCube from "./IceCube";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import FloorPlane from "./FloorPlane";

//----------Initialization--------------
const iceCubeArray = [];
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.translateZ(7 * 2);
camera.translateY(5 * 2);
camera.translateX(-5 * 2);
camera.rotateX(-Math.PI / 6);
camera.rotateY(-Math.PI / 5);
camera.rotateZ(-Math.PI / 12);

const directionalLightTop = new THREE.DirectionalLight(0xfffff0, 1.5);
scene.add(directionalLightTop);
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//----------------------------------------

//---------------Helpers------------------
const axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);
const gridHelper = new THREE.GridHelper(80, 80);
scene.add(gridHelper);
//-------------------------------

//---------------3D Objects---------------
const plane = new FloorPlane([80, 80], "#ffff00");
const planeMesh = plane.getMesh();
scene.add(planeMesh);
//----------------------------------------

//--------------Controls & Events---------
// orbit control
const orbitController = new OrbitControls(camera, renderer.domElement);
orbitController.listenToKeyEvents(window);
orbitController.enableDamping = true;
orbitController.dampingFactor = 0.05;
orbitController.screenSpacePanning = false;
orbitController.minDistance = 15;
orbitController.maxDistance = 50;
orbitController.maxPolarAngle = Math.PI / 2;
//----------------------------------------

//-------------Physics--------------------
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -1, 0),
});
const planeBody = plane.getRigidBody();
world.addBody(planeBody);
//----------------------------------------

function animate() {
  requestAnimationFrame(animate);

  // apply physics changes to objects
  iceCubeArray.forEach((el) => {
    el.getCube().position.copy(el.getRigidBody().position);
    el.getCube().quaternion.copy(el.getRigidBody().quaternion);
  });

  world.fixedStep();
  renderer.render(scene, camera);
}
animate();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
  const randomPos = {
    x: getRandomInt(-20, 20),
    z: getRandomInt(-20, 20),
  };
  const newIceCube = new IceCube(
    [3, 3, 3],
    new THREE.Vector3(randomPos.x, 5, randomPos.z)
  );
  iceCubeArray.push(newIceCube);
  world.addBody(newIceCube.getRigidBody());
  scene.add(newIceCube.getCube());
}, 2000);

setInterval(() => {
  let objectBody = iceCubeArray[0].getRigidBody();
  objectBody.applyForce(new CANNON.Vec3(1, 1, 0));
}, 10000);
