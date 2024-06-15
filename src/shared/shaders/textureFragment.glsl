varying vec2 vUv;

uniform sampler2D uTexture;
uniform sampler2D uDisplacement;
uniform float uTime;
#include "./lightingFragment.glsl";

vec4 colorTexture() {
    vec4 color = texture2D(uTexture, vUv);
    return color*vec4(lighting(),1);
}