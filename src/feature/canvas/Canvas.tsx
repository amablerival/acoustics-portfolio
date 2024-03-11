/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { PropsWithChildren } from 'react'

const CanvasComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Canvas className="flex min-h-96">
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {children}
    </Canvas>
  )
}

export default CanvasComponent
