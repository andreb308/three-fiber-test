import React from "react"
import { useFrame } from "@react-three/fiber";

function Cube() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <PerspectiveCamera />
      <boxGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}
