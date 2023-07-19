import React, { useState, useContext, useRef } from "react";
import { Text } from "@react-three/drei/core";
import { AppContext } from "./AppContext";
import { useFrame } from "@react-three/fiber";

export default function Mesh({ position, color }) {
  const [count, setCount] = useState(0);

  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    // myMesh.current.rotation.x = Math.cosh(a);
    myMesh.current.rotation.z = Math.tan(a) / 10;
    myMesh.current.rotation.y = Math.cos(a) / 10;
    myMesh.current.rotation.x = Math.sin(a) / 2;
  });

  const { textVisibility } = useContext(AppContext);

  return (
    <group position={position}>
      <mesh
        ref={myMesh}
        onPointerDown={() => {
          setCount((count) => count + 1);
          console.log(count);
        }}
      >
        <latheGeometry />
        <meshStandardMaterial color={color} wireframe={false} />
      </mesh>

      <Text
        position={[0, -1.5, 0]}
        color="white"
        fontSize={0.5}
        maxWidth={30}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        // font="https://fonts.gstatic.com/s/pressstart2p/v10/8QIJdijZitv49rDfuIaO2Q.ttf"
      >
        {!textVisibility && count}
      </Text>
    </group>
  );
}
