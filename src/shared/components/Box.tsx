/* eslint-disable react/no-unknown-property */
import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

const Box = (props: MeshProps) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) =>
  //   ref.current
  //     ? (ref.current.rotation.x = Math.cos(Date.now() * 0.005) * Math.PI * 0.5)
  //     : delta
  // )
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = Math.cos(Date.now() * 0.0005) * Math.PI * 0.5;
      delta > 0.021
        ? (ref.current.rotation.y =
            Math.sin(Date.now() * 0.0005) * Math.PI * 0.5)
        : true;
    } else {
      delta;
    }
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Box;
