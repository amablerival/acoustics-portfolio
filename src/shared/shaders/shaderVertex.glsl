varying vec3 Normal;
varying vec3 Position;
varying vec2 vUv;

#include "./vertex/displacementVertex.glsl"
void main() {
    Normal = normalize(normalMatrix * normal);
    Position = vec3(modelViewMatrix * vec4(position, 1.0));

    vec3 newPosition = displacement();
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    vUv = uv;
}