import React, { useLayoutEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import "./style.css";
import {
  Center,
  Environment,
  OrbitControls,
  // Cloud,
  // PerformanceMonitor,
} from "@react-three/drei";
import { Gradient } from "./components/Backdrop/Gradient.js";
import Mesh from "./components/Mesh";
import Input from "./components/Input";
import { AppProvider } from "./components/AppContext";
import ImageComponent from "./components/Image";
import CaptureIMG_URL from "../src/assets/Capture001.png";
import * as THREE from "three";
import { TextureLoader } from "three";
import Styled3DText from "./components/Styled3DText";
import { motion } from "framer-motion-3d";
import Skybox from "./components/Backdrop/Skybox";

export function Overlay() {
  useLayoutEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
}

// const addTorus = (ind) => {
//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(100));
//   return <Mesh key={ind} position={[x, y, 0]} />;
// };

const Logo3D = () => {
  return (
    <mesh position={[0, 0, -10]}>
      <planeBufferGeometry args={[1, 1]} />
      <meshBasicMaterial>
        <texture attach="map" url={process.env.PUBLIC_URL + "/logo.svg"} />
      </meshBasicMaterial>
    </mesh>
  );
};

export default function App() {
  const color = "#ff00ff";

  return (
    <AppProvider>
      <Input />
      {/* <canvas id="gradient-canvas" data-transition-in />
      <Overlay /> */}

      <Canvas
        style={{ position: "absolute", top: 0, left: 0 }}
        camera={{ position: [0, 0, 7.5] }}
      >
        {/* <ambientLight color={"pink"} /> */}

        <Skybox />
        <motion.pointLight
          color={"pink"}
          // animate={{ scale: 0 }}
          intensity={1}
          position={[0, 0, 10]}
        />

        <OrbitControls
          reverseOrbit
          enablePan={false}
          enableRotate
          enableZoom={false}
        />

        {/* <ImageComponent  position={[0, 0, 0]} /> */}

        <Center>
          <Styled3DText color={color} />
          {/* <mesh>
            <planeBufferGeometry args={[3.704, 1]} />
            <meshBasicMaterial map={useLoader(TextureLoader, CaptureIMG_URL)} />
          </mesh> */}
          {/* <meshNormalMaterial /> */}
        </Center>
        {/* {Array(10)
          .fill()
          .forEach((val, ind) => addTorus(ind))} */}
        <Mesh color={color} position={[0, 3, 0]} />
        <Mesh color={color} position={[0, -3, 0]} />
        <Mesh color={color} position={[-5, 0, 0]} />
        <Mesh color={color} position={[5, 0, 0]} />

        {/* <Stars /> */}
      </Canvas>
    </AppProvider>
  );
}

/****************************************************************************
 
  <Canvas>
    <ambientLight />
    <OrbitControls />
    <color attach="background" args={['black']} />

    <mesh>
      <torusGeometry/>
      <meshStandardMaterial color="red" />
    </mesh>

    <AsciiRenderer fgColor="white" bgColor="transparent" />
  </Canvas>


  <PerformanceMonitor
    onIncline={() => console.log('Incline')}
    onDecline={() => console.log('Decline')}
  />



  <Cloud
    opacity={0.6}
    speed={0.4} // Rotation speed
    width={10} // Width of the full cloud
    depth={0} // Z-dir depth
    segments={20} // Number of particles
    color={'hotpink'}
  /> 
 ****************************************************************************/

/******************************************************************************************

  IDEIAS:

  1. Importar imagens
  2. Usar map e random para colocar os objetos no céu

 *****************************************************************************************/
