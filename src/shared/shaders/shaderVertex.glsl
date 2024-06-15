varying vec3 Normal;
varying vec3 Position;
varying vec2 vUv;
varying float vPattern;

#include "./gavoronoiseFragment.glsl";
void main() {
    
    Normal = normalize(normalMatrix * normal);
    Position = vec3(modelViewMatrix * vec4(position, 1.0));
    float r = gavoronoiseMan(uv);
    vec3 newPosition = position + normal * clamp(r,0.0, 0.6); 

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    vUv = uv;
    vPattern = r;
}