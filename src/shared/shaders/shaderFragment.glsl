varying vec2 vUv;
varying float vPattern;
#include "./textureFragment.glsl";
void main() {
    gl_FragColor = vec4(vec3(vPattern), 1.0)*colorTexture();
} 