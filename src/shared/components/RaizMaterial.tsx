/* eslint-disable react/no-unknown-property */
import { MeshProps, useFrame, useLoader } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Mesh, TextureLoader } from 'three'

const RaizMaterial = (props: MeshProps) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null)
  const basePath = 'textures/Wood026_4K-JPG/'
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(
    TextureLoader,
    [
      'Wood026_4K-JPG_Color.jpg',
      'Wood026_4K-JPG_Displacement.jpg',
      'Wood026_4K-JPG_NormalDX.jpg',
      'Wood026_4K-JPG_Roughness.jpg'
    ].map((m) => basePath + m)
  )

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = Math.cos(Date.now() * 0.0005) * Math.PI * 0.5
      delta > 0.0015
        ? (ref.current.rotation.y =
            Math.sin(Date.now() * 0.00005) * Math.PI * 0.5)
        : true
    } else {
      delta
    }
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={2.5}
      onClick={() => click(!clicked)}
      //   onPointerOver={() => hover(true)}
      //   onPointerOut={() => hover(false)}
    >
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial
        displacementScale={0.0125}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
      />
    </mesh>
  )
}

export default RaizMaterial
