import { Canvas } from "@react-three/fiber"
import { Sky } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./components/Ground"
import { FPV } from "./components/FPV"
import { Player } from "./components/Player"

function App() {
  return (
    <Canvas>
      <Sky sunPosition={[50, 10, 15]}></Sky>
      {/* Estos elementos de three js van en minuscula */}
      <ambientLight intensity={1} />
      <FPV />
      <Physics>
        <Player />
        <Ground />
      </Physics>
    </Canvas>
  )
}

export default App
