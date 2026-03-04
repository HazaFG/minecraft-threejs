import { usePlane } from "@react-three/cannon";

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [0, 0, 0],
    position: [0, 0, 0]
  }))

  return (
    // El mesh es la malla en la que basicamente mezclas geometria y textura
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial attach='material' color='green' />
    </mesh>
  )
}
