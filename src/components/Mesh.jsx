import React, { useState } from 'react';
import { Text } from '@react-three/drei/core';

export default function Mesh({ position, title, textVisibility }) {
  const [count, setCount] = useState(0);

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
