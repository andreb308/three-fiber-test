import React, { useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './style.css';
import {
  OrbitControls,
  Stars,
  Cloud,
  PerformanceMonitor,
} from '@react-three/drei/core';
import { Gradient } from './components/Gradient.js';
/**********************************************************************************************

  IDEIAS:

  1. Colorir o fundo de preto
  2. Importar as imagens
  3. Usar map e random para colocar os objetos no céu
  4. Adicionar um fundo no céu

 **********************************************************************************************/

export function Overlay() {
  useLayoutEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);
}

export default function App() {
  return (
    <>
      <canvas id="gradient-canvas" data-transition-in />
      <Overlay />

      <Canvas style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* <spotLight position={[10, 10, 10]} /> */}
        <ambientLight />
        <OrbitControls enableZoom={true} enablePan={true} />

        <mesh position={[0, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="red" wireframe={true} />
        </mesh>

        <Stars />
        <Cloud
          opacity={0.6}
          speed={0.4} // Rotation speed
          width={10} // Width of the full cloud
          depth={0} // Z-dir depth
          segments={20} // Number of particles
          color={'hotpink'}
        />

        <PerformanceMonitor
          onIncline={() => console.log('Incline')}
          onDecline={() => console.log('Decline')}
        />
        {/* <gridHelper /> */}
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

 ****************************************************************************/
