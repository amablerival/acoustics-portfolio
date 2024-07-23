// import { shaderMaterial } from '@react-three/drei';
import {
  Color,
  CubeTexture,
  Matrix3,
  Matrix4,
  Quaternion,
  Texture,
  Vector2,
  Vector3,
  Vector4
} from 'three';

// import textureFragment from '../shaders/textureFragment';
// import textureVertex from '../shaders/textureVertex';

export type UniformMap = {
  [uniform: string]:
    | number
    | boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | any
    | Vector2
    | Vector3
    | Vector4
    | Texture
    | Matrix4
    | Quaternion
    | Color
    | Matrix3
    | CubeTexture
    | Int32Array
    | Float32Array
    | null;
};

// const WaveShaderMaterial = shaderMaterial(
//   { uTime: 0 },
//   textureVertex,
//   textureFragment
// );

// export default WaveShaderMaterial;
