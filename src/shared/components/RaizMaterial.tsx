import { MeshProps, useFrame } from '@react-three/fiber';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import {
  DoubleSide,
  Mesh,
  ShaderMaterialParameters,
  Vector2,
  Vector3,
  Vector4
} from 'three';
import shaderVertex from '../shaders/shaderVertex.glsl';
import shaderFragment from '../shaders/shaderFragment.glsl';
import { UniformMap } from './WaveShaderMaterial';
import { MousePosition } from '@uidotdev/usehooks';
interface RaizProps extends MeshProps {
  mesh: MeshProps;
  texture?: string;
  mousePosition: MousePosition;
  setPosition?: Dispatch<SetStateAction<number>>;
}

const easeInOutQuad = (x: number): number => {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
};
const RaizMaterial: React.FC<RaizProps> = ({ mesh, mousePosition }) => {
  const ref = useRef<Mesh>(null);
  const [time, setTime] = useState(0);
  const { x, y } = mousePosition;
  const uniforms: UniformMap = {
    uTime: { value: time },
    uMousePosition: { value: new Vector2(x, y) },
    uResolution: { value: new Vector4() },
    uWidth: { value: window.innerWidth },
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
    <>
      <mesh {...mesh} scale={1.0} ref={ref}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <shaderMaterial args={[shaderMaterialConfig]}></shaderMaterial>
      </mesh>
    </>
  );
};

export default RaizMaterial;
