varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;

uniform vec4 uResolution;
uniform vec3 uPrimaryColor;
uniform vec3 uSecondaryColor;
uniform vec3 uAccentColor;
uniform vec2 uMousePosition;
uniform float uWidth;

#include "./fragment/gavoronoiseFragment.glsl";
#include "./fragment/noiseFragment.glsl";
#define M_PI 3.1415926535897932384626433832795


float lines(vec2 uv, float offset){
    return smoothstep(
        0., 0.5 + offset * 0.5,
        0.5 * abs(sin(uv.x * 30.) + offset * 2.)    
    );
}

mat2 rotate2D(float angle){
    return mat2(
        cos(angle),-sin(angle),
        sin(angle),cos(angle)
    );
}


void main() {
    float calculatedPosition = ((uMousePosition.x + uMousePosition.y) * uWidth) * 0.00000125;
    float sphereVolume = M_PI * pow((calculatedPosition/8.0), 2.0);
    float bias = (sin(uTime * 0.05) * 0.1) + 0.05;
    
    float g = clamp(gavoronoiseMan(vPosition.xy), -0.5, 0.1);
    float n = noise(vPosition + uTime);

    vec2 baseUV = rotate2D(n + g) * vPosition.xy * bias;
    float basePattern = lines(baseUV, 0.1);
    float secondPattern = lines(baseUV, 0.5);

    vec3 baseColor = mix(uSecondaryColor, uPrimaryColor, basePattern);
    vec3 secondbaseColor = mix(baseColor, uAccentColor, secondPattern);
    // vec3 thirdBaseColor = mix(secondbaseColor,  vec3(0.01, 0.07, 0.75), sphereVolume);

    gl_FragColor = vec4(vec3(secondbaseColor), 1.);
} 