import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import {
  DoubleSide,
  Mesh,
  ShaderMaterialParameters,
  Vector3,
  Vector4
} from 'three';
import shaderVertex from '../shaders/shaderVertex.glsl';
import shaderFragment from '../shaders/shaderFragment.glsl';
import { UniformMap } from './WaveShaderMaterial';
interface RaizProps extends MeshProps {
  mesh: MeshProps;
  texture?: string;
}
const RaizMaterial: React.FC<RaizProps> = ({ mesh }) => {
  const ref = useRef<Mesh>(null);
  const [time, setTime] = useState(0);
  const uniforms: UniformMap = {
    uTime: { value: time },
    uResolution: { value: new Vector4() },
    uPrimaryColor: {
      value: new Vector3(0.71, 0.37, 0.15) // #B55E27
    },
    uSecondaryColor: {
      value: new Vector3(0.38, 0.42, 0.22) // #606C38
    },
    uAccentColor: {
      value: new Vector3(0.11, 0.13, 0.11) // #1D211D
    }
  };
  const shaderMaterialConfig: ShaderMaterialParameters = {
    uniforms: uniforms,
    fragmentShader: shaderFragment,
    vertexShader: shaderVertex,
    side: DoubleSide
  };
  useFrame((state) => {
    setTime(state.clock.elapsedTime * 0.16);
  });
  return (
    <mesh {...mesh} ref={ref} scale={1.0}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <shaderMaterial args={[shaderMaterialConfig]}></shaderMaterial>
    </mesh>
  );
};

export default RaizMaterial;
