import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import TennisBall from "./TennisBall";

/**
 * Hero 3D scene: neon-lit tennis ball over a glowing court line.
 * touch-action pan-y keeps vertical page scroll working on mobile.
 */
export default function BallScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.35, 4.4], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ touchAction: "pan-y" }}
    >
      {/* key + fills */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 3]} intensity={1.6} color="#ffffff" />
      {/* cyan rim from behind-left, deep blue fill from below */}
      <directionalLight position={[-5, 2, -4]} intensity={2.2} color="#00e5ff" />
      <pointLight position={[0, -3, 1]} intensity={0.6} color="#1e3aff" />

      <TennisBall />

      {/* neon "court" baseline under the ball */}
      <mesh position={[0, -1.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 0.045]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.65} />
      </mesh>
      <mesh position={[0, -1.45, -1.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 0.02]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.2} />
      </mesh>

      <ContactShadows position={[0, -1.44, 0]} opacity={0.55} scale={6} blur={2.4} color="#000000" />
    </Canvas>
  );
}
