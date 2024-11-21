import { PerspectiveCamera, View } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Lights from './Lights';
import { div } from 'three/webgpu';
import IPhone from './iPhone.jsx';

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
  return (
    
      
    <Canvas className="w-full h-full">
      <View
        index={index}
        id={gsapType}
        className={`border-2 border-red-500 w-full h-full ${
          index === 2} ? 'right-[-100%]' : ''
          `}
          >
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0,0,4]} />
        <Lights />

        <Suspense
        fallback={<div>Loading</div>}
        >
        <IPhone />
        </Suspense>
      </View>
    </Canvas>
          
  );
};

export default ModelView;
