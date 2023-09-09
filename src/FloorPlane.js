import * as THREE from "three";
import * as CANNON from "cannon-es";

export default class FloorPlane {
  constructor(size = [10, 10], color = "#ffffff") {
    this.size = size;
    this.color = color;
    this.mesh = this.createObject(size, color);
    this.mass = 0;
    this.bodyShape = new CANNON.Box(new CANNON.Vec3(size[0], 10, size[1]));
    this.body = new CANNON.Body({ mass: this.mass, shape: this.bodyShape });
    this.body.position.y = -15;
  }

  createObject(size, color) {
    const material = new THREE.MeshStandardMaterial({
      color: color,
      side: THREE.DoubleSide,
    });
    const geometry = new THREE.PlaneGeometry(size[0], size[1]);
    const plane = new THREE.Mesh(geometry, material);
    plane.rotateX(Math.PI / 2);
    return plane;
  }

  getMesh() {
    return this.mesh;
  }

  getRigidBody() {
    return this.body;
  }
}
