import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export function loadModel({
  scene,
  position = new THREE.Vector3(0, 0, 0),
  scale = 2.0,
  color = "blue", // Default color
}) {
  const uniforms = {
    mousePosition: { value: new THREE.Vector2(0.0, 0.0) },
    lightPosition: { value: new THREE.Vector3(1, 1, 2) },
    userColor: { value: new THREE.Color(color) }, // User-controlled color
  };

  const vertexShader = `
  uniform vec2 mousePosition;
  uniform vec3 lightPosition;
  varying vec3 vNormal;
  varying vec3 vLightPosition;
  void main() {
    vNormal = normal;
    vLightPosition = lightPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

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

  new OBJLoader().load("/3d_playground/head.obj", (obj) => {
    obj.traverse((child) => {
      if (child.isMesh) {
        const geometry = child.geometry;
        geometry.center();

        const numFaces = geometry.attributes.position.count / 3;
        const colors = new Float32Array(numFaces * 3 * 3);
        const displacement = new Float32Array(numFaces * 3 * 3);
        const color = new THREE.Color();

        for (let f = 0; f < numFaces; f++) {
          const index = 9 * f;
          let lightness = 0.3 + Math.random() * 0.7;
          color.setHSL(0.0, 1.0, lightness);
          let d = 10 * (0.5 - Math.random());
          for (let i = 0; i < 3; i++) {
            colors[index + 3 * i] = color.r;
            colors[index + 3 * i + 1] = color.g;
            colors[index + 3 * i + 2] = color.b;
            displacement[index + 3 * i] = d;
            displacement[index + 3 * i + 1] = d;
            displacement[index + 3 * i + 2] = d;
          }
        }

        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute(
          "displacement",
          new THREE.BufferAttribute(displacement, 3)
        );

        const shaderMaterial = new THREE.ShaderMaterial({
          uniforms,
          vertexShader,
          fragmentShader,
        });

        const mesh = new THREE.Mesh(geometry, shaderMaterial);
        mesh.position.copy(position);
        mesh.scale.setScalar(scale);
        scene.add(mesh);

        // Make color changeable
        mesh.updateColor = (newColor) => {
          shaderMaterial.uniforms.userColor.value.set(newColor);
        };
      }
    });
  });
}
