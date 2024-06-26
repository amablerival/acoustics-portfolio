/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MeshProps, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh, ShaderMaterialParameters, TextureLoader, Vector2 } from 'three';
// @ts-expect-error
import shaderVertex from '../shaders/shaderVertex.glsl';
// @ts-expect-error
import shaderFragment from '../shaders/shaderFragment.glsl';
import { UniformMap } from './WaveShaderMaterial';
import { lightingParams } from '../config/lighting.config';
interface RaizProps extends MeshProps {
  mesh: MeshProps;
  texture: string;
}
const RaizMaterial: React.FC<RaizProps> = ({ mesh, texture }) => {
  // This reference gives us direct access to the THREE.Mesh object
  const [onTick, tick] = useState(0.0);

  const ref = useRef<Mesh>(null);
  const basePath = 'textures/local';
  const materialName = '/' + texture;
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(
    TextureLoader,
    ['_Color.jpg', '_Displacement.jpg', '_NormalDX.jpg', '_Roughness.jpg'].map(
      (m) => basePath + materialName + materialName + m
    )
  );
  const uniforms: UniformMap = {
    ...lightingParams,
    uTexture: { value: colorMap },
    uDisplacement: { value: displacementMap },
    uNormal: { value: normalMap },
    uRoughness: { value: roughnessMap },
    u_resolution: { value: new Vector2(1500.0, 1500.0) },
    uTime: { value: 0 }
  };
  const shaderMaterialConfig: ShaderMaterialParameters = {
    uniforms: uniforms,
    fragmentShader: shaderFragment,
    vertexShader: shaderVertex
  };
  useFrame((state) => {
    shaderMaterialConfig.uniforms!.uTime.value = +state.clock.elapsedTime;
  });
  return (
    <mesh {...mesh} ref={ref} scale={1.6}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <sphereGeometry args={[1.0, 100, 100]} />
      <shaderMaterial args={[shaderMaterialConfig]}></shaderMaterial>
    </mesh>
  );
};

export default RaizMaterial;
