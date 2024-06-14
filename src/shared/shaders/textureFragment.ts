const textureFragment = () => {
  return `
          varying vec3 Normal;
          varying vec3 Position;
          varying vec2 vUv;

          uniform sampler2D uTexture;
          uniform sampler2D uDisplacement;
          uniform float uTime;
          uniform vec3 Ka;
          uniform vec3 Kd;
          uniform vec3 Ks;
          uniform vec4 LightPosition;
          uniform vec3 LightIntensity;
          uniform float Shininess;

          vec3 lighting() {
            vec3 n = normalize(Normal);
            vec3 s = normalize(vec3(LightPosition) - Position);
            vec3 v = normalize(vec3(-Position));
            vec3 r = reflect(-s, n);

            vec3 ambient = Ka;
            vec3 diffuse = Kd * max(dot(s, n), 0.0);
            vec3 specular = Ks * pow(max(dot(r, v), 0.0), Shininess);

            return LightIntensity * (ambient + diffuse + specular);
          }
            
          vec4 colorTexture() {
            float bias = 0.00005;
            vec2 dis = vec2(vUv.x, vUv.y);
            vec4 displace = texture2D(uDisplacement, dis.xy);
            vec4 color = texture2D(uTexture, vUv + (displace.xy * 0.0));

            
            // color.r = texture2D(uTexture, displace.xy + vec2(0.,0.0098)* bias).r;
            // color.g = texture2D(uTexture, displace.xy + vec2(0.,0.0098)* bias).g;
            // color.b = texture2D(uTexture, displace.xy + vec2(0.,0.0098)* bias).b;

            return color*vec4(lighting(),1);
          }

          void main() {
            gl_FragColor = colorTexture();
          }`;
};

export default textureFragment;
