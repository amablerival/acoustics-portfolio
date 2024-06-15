import { MeshProps, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import {
  Mesh,
  ShaderMaterialParameters,
  TextureLoader,
  Vector2,
  Vector3,
  Vector4
} from 'three';

// @ts-expect-error
import shaderVertex from '../shaders/shaderVertex.glsl';
// @ts-expect-error
import shaderFragment from '../shaders/shaderFragment.glsl';
import { UniformMap } from './WaveShaderMaterial';
import { lightingParams } from '../config/lighting.config';

const RaizMaterial = (props: MeshProps) => {
  // This reference gives us direct access to the THREE.Mesh object
  const [onTick, tick] = useState(0.0);

  const ref = useRef<Mesh>(null);
  const basePath = 'textures/local';
  const materialName = '/Marble006_4K-JPG';
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
    u_resolution: { value: new Vector2(1500.0, 1500.0) },
    uTime: { value: 0 }
  };
  const shaderMaterialConfig: ShaderMaterialParameters = {
    uniforms: uniforms,
    fragmentShader: shaderFragment,
    vertexShader: shaderVertex
  };
  useFrame((state) => {
    const tick = Math.floor(Date.now() / 1000);
    shaderMaterialConfig.uniforms!.uTime.value = +state.clock.elapsedTime;
  });
  return (
    <mesh {...props} ref={ref} scale={1.6}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <sphereGeometry args={[1.0, 100, 100]} />
      <shaderMaterial args={[shaderMaterialConfig]}></shaderMaterial>
    </mesh>
  );
};

export default RaizMaterial;
