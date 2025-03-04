import * as THREE from "three";

let default_color_list = [
  { name: "pastelPink", color: new THREE.Vector3(1, 0.71, 0.76) },
  { name: "pastelBlue", color: new THREE.Vector3(0.68, 0.85, 0.9) },
  { name: "pastelGreen", color: new THREE.Vector3(0.61, 0.87, 0.69) },
  { name: "pastelPurple", color: new THREE.Vector3(0.8, 0.6, 0.79) },
];

function extractedColors(list) {
  return list.map((colorObj) => {
    const vectorColor = colorObj.color; // Get the Vector3 color
    return new THREE.Color(vectorColor.x, vectorColor.y, vectorColor.z); // Convert to THREE.Color
  });
}

export function createSplitSphere({
  scene,
  position = new THREE.Vector3(0, 0, 0),
  scale = 1,
  maxSeparation = 2,
  numSections = 70,
  pauseDuration = 4000, // 4 seconds
  scatterAxis = "xyz", // Options: "x", "y", "z", "xy", "xz", "yz", "xyz"
  color_list = default_color_list,
}) {
  const geometry = new THREE.SphereGeometry(1, 32, 32);

  const sectionGeometries = Array.from(
    { length: numSections },
    () => new THREE.BufferGeometry()
  );

  const vertices = geometry.attributes.position.array;
  const indices = geometry.index.array;

  const sectionVertices = Array.from({ length: numSections }, () => []);
  const sectionIndices = Array.from({ length: numSections }, () => []);
  const vertexMaps = Array.from({ length: numSections }, () => new Map());
  const sectionCounts = Array(numSections).fill(0);

  function getSectionIndex(x, y, z) {
    const angle = Math.atan2(y, x) + Math.PI;
    return Math.floor((angle / (2 * Math.PI)) * numSections) % numSections;
  }

  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i],
      b = indices[i + 1],
      c = indices[i + 2];

    const va = vertices.slice(a * 3, a * 3 + 3);
    const vb = vertices.slice(b * 3, b * 3 + 3);
    const vc = vertices.slice(c * 3, c * 3 + 3);

    const sectionIndex =
      (getSectionIndex(...va) +
        getSectionIndex(...vb) +
        getSectionIndex(...vc)) %
      numSections;

    [a, b, c].forEach((v) => {
      if (!vertexMaps[sectionIndex].has(v)) {
        vertexMaps[sectionIndex].set(v, sectionCounts[sectionIndex]++);
        sectionVertices[sectionIndex].push(
          vertices[v * 3],
          vertices[v * 3 + 1],
          vertices[v * 3 + 2]
        );
      }
    });

    sectionIndices[sectionIndex].push(
      vertexMaps[sectionIndex].get(a),
      vertexMaps[sectionIndex].get(b),
      vertexMaps[sectionIndex].get(c)
    );
  }

  // Extract and convert colors
  const converted_colors = extractedColors(color_list);
  // const colors = ["red", "blue", "green", "yellow", "purple", "orange", "cyan"];
  const meshes = [];

  for (let i = 0; i < numSections; i++) {
    sectionGeometries[i].setAttribute(
      "position",
      new THREE.Float32BufferAttribute(sectionVertices[i], 3)
    );
    sectionGeometries[i].setIndex(sectionIndices[i]);
    sectionGeometries[i].computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: converted_colors[i % converted_colors.length],
      wireframe: false,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(sectionGeometries[i], material);
    scene.add(mesh);
    meshes.push(mesh);
  }

  let time = 0;
  let pauseTime = 0;
  let isPaused = false;

  function animate() {
    requestAnimationFrame(animate);

    if (isPaused) {
      if (performance.now() - pauseTime >= pauseDuration) {
        isPaused = false;
        time += 0.02;
      }
      return;
    }

    const sineValue = Math.sin(time);
    const separation = Math.abs(sineValue * maxSeparation);

    for (let i = 0; i < numSections; i++) {
      const angle = (i / numSections) * Math.PI * 2;

      // Calculate displacement based on scatterAxis
      let dx = 0,
        dy = 0,
        dz = 0;

      switch (scatterAxis) {
        case "x":
          dx = Math.cos(angle) * separation * scale;
          break;
        case "y":
          dy = Math.sin(angle) * separation * scale;
          break;
        case "z":
          dz = Math.sin(angle * 2) * separation * scale;
          break;
        case "xy":
          dx = Math.cos(angle) * separation * scale;
          dy = Math.sin(angle) * separation * scale;
          break;
        case "xz":
          dx = Math.cos(angle) * separation * scale;
          dz = Math.sin(angle * 2) * separation * scale;
          break;
        case "yz":
          dy = Math.sin(angle) * separation * scale;
          dz = Math.sin(angle * 2) * separation * scale;
          break;
        case "xyz":
          dx = Math.cos(angle) * separation * scale;
          dy = Math.sin(angle) * separation * scale;
          dz = Math.sin(angle * 2) * separation * scale;
          break;
        default:
          dx = Math.cos(angle) * separation * scale;
          dy = Math.sin(angle) * separation * scale;
          dz = Math.sin(angle * 2) * separation * scale;
          break;
      }

      meshes[i].position.set(position.x + dx, position.y + dy, position.z + dz);
    }

    if (Math.abs(sineValue) < 0.01 && !isPaused) {
      isPaused = true;
      pauseTime = performance.now();
      return;
    }

    time += 0.02;
  }

  animate();
}
