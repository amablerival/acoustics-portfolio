varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;

void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = vec3(modelViewMatrix * vec4(position, 0.0));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
    vUv = uv;
}