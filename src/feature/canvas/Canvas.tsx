import { Canvas } from '@react-three/fiber';
import { PropsWithChildren } from 'react';

const CanvasComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return <Canvas className="flex min-h-96">{children}</Canvas>;
};

export default CanvasComponent;
