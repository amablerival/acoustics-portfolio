// varying vec2 vUv;
#define M_PI 3.1415926535897932384626433832795
uniform sampler2D uTexture;
uniform sampler2D uDisplacement;
uniform sampler2D uNormal;
uniform sampler2D uRoughness;
uniform float uTime;
#include "./lightingFragment.glsl";
// #include "./pbrFragment.glsl
vec4 colorTexture() {
    vec4 texColor, texDisplacement, texNormal, texRoughness;

    texColor = texture2D(uDisplacement, vUv) * texture2D(uTexture, vUv) / M_PI;
    texDisplacement = texture2D(uDisplacement, vUv);
    texNormal = texture2D(uNormal, vUv);
    texRoughness = texture2D(uRoughness, vUv);

    vec4 color = mix(texColor, texRoughness, texNormal);
    return color*vec4(lighting(), 1.0);
}