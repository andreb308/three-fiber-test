import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function Skybox() {
  const map = useTexture(
    "textures/tech_noir__cyberpunk_a_city_set_in_the_future_wit.jpg"
  );

  return (
    <mesh>
      <sphereGeometry args={[50, 32, 32]} />
      <meshBasicMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
}

export default Skybox;
