import { MeshProps, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import {
  Mesh,
  ShaderMaterialParameters,
  TextureLoader,
  Vector3,
  Vector4
} from 'three';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import vertexShader from '../shaders/raizVertex.glsl';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import textureFragment from '../shaders/textureFragment.glsl';
import { UniformMap } from './WaveShaderMaterial';

export const lightingParams = {
  Ka: { value: new Vector4(1, 1, 1) },
  Kd: { value: new Vector3(1, 1, 1) },
  Ks: { value: new Vector3(1, 1, 1) },
  LightIntensity: { value: new Vector4(1.0, 1.0, 1.0, 1.0) },
  LightPosition: { value: new Vector4(0.0, 2000.0, 0.0, 1.0) },
  Shininess: { value: 2.0 }
};

const RaizMaterial = (props: MeshProps) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null);
  const basePath = 'textures';
  const materialName = '/Wood026_4K-JPG';
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(
    TextureLoader,
    ['_Color.jpg', '_Displacement.jpg', '_NormalDX.jpg', '_Roughness.jpg'].map(
      (m) => basePath + materialName + materialName + m
    )
  );
  const uniforms: UniformMap = {
    ...lightingParams,
    uTexture: { value: colorMap },
    uDisplacement: { value: displacementMap }
  };
  const shaderMaterialConfig: ShaderMaterialParameters = {
    uniforms: uniforms,
    fragmentShader: textureFragment,
    vertexShader: vertexShader
  };

  return (
    <mesh {...props} ref={ref} scale={3.0}>
      <boxGeometry args={[1, 1, 1]} />
      <shaderMaterial args={[shaderMaterialConfig]}></shaderMaterial>
    </mesh>
  );
};

export default RaizMaterial;
