import { Vector3, Vector4 } from 'three';

export const lightingParams = {
  Ka: { value: new Vector4(1, 1, 1) },
  Kd: { value: new Vector3(1, 1, 1) },
  Ks: { value: new Vector3(1, 1, 1) },
  LightIntensity: { value: new Vector4(1.0, 1.0, 1.0, 1.0) },
  LightPosition: { value: new Vector4(0.0, 2000.0, 0.0, 1.0) },
  Shininess: { value: 2.0 }
};
