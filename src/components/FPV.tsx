import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function FPV() {
  const { camera, gl } = useThree()

  //Wow, definitivamente me lo apunto para futuros proyectos
  return (
    <PointerLockControls args={[camera, gl.domElement]} />
  )
}
