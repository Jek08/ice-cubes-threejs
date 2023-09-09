import * as THREE from "three";
import * as CANNON from "cannon-es";

export default class IceCube {
  constructor(size, position) {
    this.size = size;
    this.iceCube = this.createObject(size, position);
    this.bodyShape = new CANNON.Box(
      new CANNON.Vec3(size[0] / 2, size[1] / 2, size[2] / 2)
    );
    this.mass = 0.001;
    this.body = new CANNON.Body({ mass: this.mass, shape: this.bodyShape });
    this.body.position.set(position.x, position.y, position.z);
  }

  createObject(size, position) {
    let material = new THREE.MeshStandardMaterial({
      color: "rgb(130, 200, 255)",
      transparent: true,
      opacity: 0.8,
    });
    const geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
    geometry.translate(position);
    const cube = new THREE.Mesh(geometry, material);
    return cube;
  }

  getCube() {
    return this.iceCube;
  }

  getRigidBody() {
    return this.body;
  }
}
