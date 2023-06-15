import React, { useState, useContext } from "react";
import { Text } from "@react-three/drei/core";
import { AppContext } from "./AppContext";

export default function Mesh({ position }) {
  const [count, setCount] = useState(0);

  const { title, textVisibility } = useContext(AppContext);

  return (
    <mesh
      position={position}
      onPointerDown={() => {
        setCount(count + 1);
        console.log(count);
      }}
    >
      <sphereGeometry />
      <meshStandardMaterial color="red" wireframe={true} />

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
        {textVisibility ? title : count}
      </Text>
    </mesh>
  );
}
