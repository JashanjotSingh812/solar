import * as THREE from 'three';

export class Planet {
  constructor(name, radius, distance, speed, color, scene) {
    this.name = name;
    this.radius = radius;
    this.distance = distance;
    this.speed = speed;
    this.color = color;

    // Create the planet mesh
    this.geometry = new THREE.SphereGeometry(radius, 32, 32);
    this.material = new THREE.MeshBasicMaterial({ color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.x = distance;

    // Add the mesh to the scene
    scene.add(this.mesh);
  }

  update() {
    // Update planet rotation and position
    this.mesh.rotation.y += this.speed;
    const angle = Date.now() * this.speed;
    this.mesh.position.x = Math.cos(angle) * this.distance;
    this.mesh.position.z = Math.sin(angle) * this.distance;
  }
}
