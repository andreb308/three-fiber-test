import React, { useLayoutEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import './style.css';
import {
  OrbitControls,
  Stars,
  // Cloud,
  // PerformanceMonitor,
} from '@react-three/drei/core';
import { Gradient } from './components/Gradient.js';
import Mesh from './components/Mesh';
import Input from './components/Input';


export function Overlay() {
  useLayoutEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);
}

export default function App() {
  const [title, setTitle] = useState('Wireframed \nRed Sphere');
  const [textVisibility, setTextVisibility] = useState(true);

  return (
    <>
      <Input title={title} setTitle={setTitle} setTextVisibility={setTextVisibility} textVisibility={textVisibility}
      />
      <canvas id="gradient-canvas" data-transition-in />
      <Overlay />

      <Canvas style={{ position: 'absolute', top: 0, left: 0 }} camera={{position: [0, 0, ]}}>
        <ambientLight />
        <OrbitControls enableZoom={true} enablePan={true} autoRotate />

        <Mesh position={[0, 3, 0]} title={title} textVisibility={textVisibility} />
        <Mesh position={[0, 0, 0]} title={title} textVisibility={textVisibility} />
        <Mesh position={[0, -3, 0]} title={title} textVisibility={textVisibility} />

        <Stars />
      </Canvas>
    </>
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