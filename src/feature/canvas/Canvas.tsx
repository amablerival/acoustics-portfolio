/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { PropsWithChildren } from 'react';

const CanvasComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Canvas className="flex min-h-96">
      {children}
      <OrbitControls />
    </Canvas>
  );
};

export default CanvasComponent;
