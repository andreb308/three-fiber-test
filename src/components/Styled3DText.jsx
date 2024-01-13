import React, { useContext } from "react";
import { Center, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import fontUrl from "../assets/Bosch_Regular.json";
import { AppContext } from "./AppContext";

export default function Styled3DText({ color }) {
  const { title, textVisibility } =
    useContext(AppContext);
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    // myMesh.current.rotation.x = Math.cosh(a);
    textVisibility && (myMesh.current.rotation.x = Math.tan(a) / 10);
    textVisibility && (myMesh.current.rotation.z = Math.sin(a) / 30);
  });
  return (
    <Center>
      <Text3D font={fontUrl} bevelEnabled bevelOffset={0.01} ref={myMesh}>
        {textVisibility ? title : "Click the\n Shapes!"}
        <meshStandardMaterial color={color} />
      </Text3D>
    </Center>
  );
}
