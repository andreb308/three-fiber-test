import React from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { AppProvider } from "./components/AppContext";
import Mesh from "./components/Mesh";
import Input from "./components/Input";
import Styled3DText from "./components/Styled3DText";
import Skybox from "./components/Backdrop/Skybox";
import "./style.css";
// import { Gradient } from "./components/Backdrop/Gradient.js";

export default function App() {
  const color = "#ff00ff";

  return (
    <AppProvider>
      {/* <Input /> */}
      {/* <canvas id="gradient-canvas" data-transition-in />
      <Overlay /> */}

      <Canvas
        style={{ position: "absolute", top: 0, left: 0 }}
        camera={{ position: [0, 0, 7.5] }}
      >
        <Skybox />
        <motion.pointLight color={"pink"} intensity={1} position={[0, 0, 10]} />

        <OrbitControls
          reverseOrbit
          enablePan={false}
          enableRotate
          enableZoom={false}
        />

        <Center>
          <Styled3DText color={color} />
        </Center>
        <Mesh color={color} position={[0, 3, 0]} />
        <Mesh color={color} position={[0, -3, 0]} />
        <Mesh color={color} position={[-5, 0, 0]} />
        <Mesh color={color} position={[5, 0, 0]} />
      </Canvas>
    </AppProvider>
  );
}
// function Overlay() {
//   useLayoutEffect(() => {
//     const gradient = new Gradient();
//     gradient.initGradient("#gradient-canvas");
//   }, []);
// }