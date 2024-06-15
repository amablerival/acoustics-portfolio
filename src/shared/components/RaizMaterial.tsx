/* eslint-disable react/no-unknown-property */
import { MeshProps, useFrame, useLoader, useThree } from '@react-three/fiber';
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events';
import { useRef, useState } from 'react';
import { Mesh, TextureLoader, Vector2, Vector3, Vector4 } from 'three';

import fragmentShader from '../shaders/textureFragment';
import vertexShader from '../shaders/textureVertex';
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
    // perlinFactor: params.perlinFactor,
    // randomFactor: params.randomFactor
  };

  // const [onHover, hover] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => {
  //   if (ref.current && !onHover) {
  //     ref.current.rotation.x += ref.current.rotation.y + 0.01;
  //   }
  // });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={3.0}
      onPointerEnter={() => hover(true)}
      onPointerLeave={() => hover(false)}
      // onPointerMove={animate}
    >
      <boxGeometry args={[1, 1, 1]} />
      {/* <sphereGeometry args={[1, 64, 64]} /> */}
      <shaderMaterial
        fragmentShader={fragmentShader()}
        vertexShader={vertexShader()}
        uniforms={uniforms}
      ></shaderMaterial>
    </mesh>
  );
};

export default RaizMaterial;
