import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './components/Planet';
import Ring from './components/Ring';



function App() {

  return (
    <div>
      <Canvas camera={{ position: [100, 250, 350], fov: 50 }}
        style={{
          backgroundColor: '#110626',
          width: '100%',
          height: '100vh',
        }}>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} />
        {/* Sun */}
        <Planet name='Sun' rotationValue={0} position={[0, 0, 0]} scale={[30, 30, 30]} texture={'/textures/8k_sun.jpg'} />
        {/* Mercury */}
        <Planet name='Mercury' speed={0.002} rotationValue={50} position={[50, 0, 0]} scale={[0.108, 0.108, 0.108]} texture={'/textures/mercury.jpg'} />
        <Ring label='Mercury' scale={[50, 50, 50]} attributes={[.999, 1, 128]} />
        {/* Venus */}
        <Planet name='Venus' speed={0.001} rotationValue={60} position={[60, 0, 0]} scale={[0.26, 0.26, 0.26]} texture={'/textures/venus.jpg'} />
        <Ring scale={[60, 60, 60]} attributes={[.999, 1, 128]} />
        {/* Earth */}
        <Planet name='Earth' speed={0.003} rotationValue={70} position={[70, 0, 0]} scale={[0.27, 0.27, 0.27]} texture={'/textures/earth.jpg'} />
        <Ring scale={[70, 70, 70]} attributes={[.999, 1, 128]} />
        {/* Mars */}
        <Planet name='Mars' speed={0.0003} rotationValue={80} position={[80, 0, 0]} scale={[0.14, 0.14, 0.14]} texture={'/textures/mars.jpg'} />
        <Ring scale={[80, 80, 80]} attributes={[.999, 1, 128]} />
        {/* Jupiter */}
        <Planet name='Jupiter' speed={0.005} rotationValue={90} position={[90, 0, 0]} scale={[2.7, 2.7, 2.7]} texture={'/textures/jupiter.jpg'} />
        <Ring scale={[90, 90, 90]} attributes={[.999, 1, 128]} />
        {/* Saturn */}
        <Planet name='Saturn' speed={0.004} rotationValue={100} position={[100, 0, 0]} scale={[2.5, 2.5, 2.5]} texture={'/textures/saturn.jpg'} />
        <Ring name='Saturn' scale={[100, 100, 100]} attributes={[.999, 1, 128]} />
        {/* Neptune */}
        <Planet name='Neptune' speed={0.007} rotationValue={110} position={[110, 0, 0]} scale={[1.08, 1.08, 1.08]} texture={'/textures/neptune.jpg'} />
        <Ring scale={[110, 110, 110]} attributes={[.999, 1, 128]} />
        {/* Uranus */}
        <Planet name='Uranus' speed={0.001} rotationValue={120} position={[120, 0, 0]} scale={[1.09, 1.09, 1.09]} texture={'/textures/uranus.jpg'} />
        <Ring scale={[120, 120, 120]} attributes={[.999, 1, 128]} />
        {/* Pluto */}
        <Planet name='Pluto' speed={0.008} rotationValue={130} position={[130, 0, 0]} scale={[0.05, 0.05, 0.05]} color={'#34cfeb'} texture={'/textures/uranus.jpg'} />
        <Ring scale={[130, 130, 130]} attributes={[.999, 1, 128]} />
      </Canvas>
    </div>
  );
}

export default App;
