import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

// Function to load the 3D head model
export function loadModel({
  scene,
  position = new THREE.Vector3(0, 0, 0),
  scale = 2.0,
  color = new THREE.Vector3(0.13, 0.1, 0.93), // Default color
}) {
  // Uniforms for the shader material
  const uniforms = {
    mousePosition: { value: new THREE.Vector2(0.0, 0.0) },
    lightPosition: { value: new THREE.Vector3(1, 1, 2) },
    userColor: { value: new THREE.Color(color.x, color.y, color.z) }, // User-controlled color
  };

  // Vertex shader
  const vertexShader = `
    uniform vec2 mousePosition;
    uniform vec3 lightPosition;
    varying vec3 vNormal;
    varying vec3 vLightPosition;
    void main() {
      vNormal = normal;
      vLightPosition = lightPosition;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment shader
  const fragmentShader = `
    uniform vec3 userColor;
    varying vec3 vNormal;
    varying vec3 vLightPosition;
    void main() {
      const float ambient = 0.1;
      vec3 light = normalize(vLightPosition);
      float directional = max(dot(vNormal, light), 0.0);
      gl_FragColor = vec4((directional + ambient) * userColor, 1.0);
    }
  `;

  // Load the OBJ model
  new OBJLoader().load("/3d_playground/head.obj", (obj) => {
    obj.traverse((child) => {
      if (child.isMesh) {
        const geometry = child.geometry;
        geometry.center(); // Center the geometry

        // Create colors and displacement attributes for the geometry
        const numFaces = geometry.attributes.position.count / 3;
        const colors = new Float32Array(numFaces * 3 * 3);
        const displacement = new Float32Array(numFaces * 3 * 3);
        const faceColor = new THREE.Color(color.x, color.y, color.z);

        for (let f = 0; f < numFaces; f++) {
          const index = 9 * f;
          let lightness = 0.3 + Math.random() * 0.7;
          faceColor.setHSL(0.0, 1.0, lightness);
          let d = 10 * (0.5 - Math.random());
          for (let i = 0; i < 3; i++) {
            colors[index + 3 * i] = faceColor.r;
            colors[index + 3 * i + 1] = faceColor.g;
            colors[index + 3 * i + 2] = faceColor.b;
            displacement[index + 3 * i] = d;
            displacement[index + 3 * i + 1] = d;
            displacement[index + 3 * i + 2] = d;
          }
        }

        // Set color and displacement attributes
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute(
          "displacement",
          new THREE.BufferAttribute(displacement, 3)
        );

        // Create the shader material
        const shaderMaterial = new THREE.ShaderMaterial({
          uniforms,
          vertexShader,
          fragmentShader,
        });

        // Create the mesh and add it to the scene
        const mesh = new THREE.Mesh(geometry, shaderMaterial);
        mesh.position.copy(position);
        mesh.scale.setScalar(scale);
        scene.add(mesh);

        // Expose a method to update the color dynamically
        mesh.updateColor = (newColor) => {
          shaderMaterial.uniforms.userColor.value.set(newColor);
        };
      }
    });
  });
}
