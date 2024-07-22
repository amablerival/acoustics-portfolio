/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { DoubleSide, Mesh, ShaderMaterialParameters, Vector4 } from 'three';
// @ts-expect-error
import shaderVertex from '../shaders/shaderVertex.glsl';
// @ts-expect-error
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
    uResolution: { value: new Vector4() }
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
