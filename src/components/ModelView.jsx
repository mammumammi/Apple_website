import { View } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import IPhone from './IPhone';
const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
  return (
    <Canvas className="w-full h-full">
      <View
        index={index}
        id={gsapType}
        className={`border-2 border-red-500 w-full h-full ${
          index === 2 ? 'right-[-100%]' : ''
        }`}
      >
        <ambientLight intensity={0.3} />
      </View>
      <IPhone />
    </Canvas>
  );
};

export default ModelView;
