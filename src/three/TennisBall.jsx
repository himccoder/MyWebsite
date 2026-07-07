import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const R = 1; // ball radius

/**
 * Classic tennis-ball seam: sampled parametric curve normalized onto the
 * sphere surface, rendered as a closed tube.
 */
function useSeamGeometry() {
  return useMemo(() => {
    const pts = [];
    const a = 1,
      b = 0.38,
      c = 0.72;
    for (let i = 0; i <= 220; i++) {
      const t = (i / 220) * Math.PI * 2;
      const v = new THREE.Vector3(
        a * Math.cos(t) + b * Math.cos(3 * t),
        a * Math.sin(t) - b * Math.sin(3 * t),
        c * Math.sin(2 * t)
      );
      v.normalize().multiplyScalar(R * 1.001); // sit just above the felt
      pts.push(v);
    }
    const curve = new THREE.CatmullRomCurve3(pts, true);
    return new THREE.TubeGeometry(curve, 320, R * 0.035, 12, true);
  }, []);
}

export default function TennisBall() {
  const group = useRef();
  const flash = useRef();
  const seamGeometry = useSeamGeometry();

  // interaction state (refs — no re-renders in the hot path)
  const vel = useRef({ x: 0.15, y: 0.55 }); // rad/s angular velocity
  const punch = useRef(0); // 0..1 smash impulse
  const drag = useRef({ active: false, lastX: 0, lastY: 0, moved: 0 });

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const d = Math.min(dt, 0.05); // clamp tab-switch jumps

    // spin + drift back toward idle speed
    g.rotation.y += vel.current.y * d;
    g.rotation.x += vel.current.x * d;
    vel.current.x = THREE.MathUtils.damp(vel.current.x, 0.15, 0.9, d);
    vel.current.y = THREE.MathUtils.damp(vel.current.y, 0.55, 0.9, d);

    // smash impulse: scale punch + recoil, decays fast
    punch.current = THREE.MathUtils.damp(punch.current, 0, 5.5, d);
    g.scale.setScalar(1 + punch.current * 0.16);
    g.position.z = -punch.current * 0.8;

    // idle float
    g.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.07;

    // neon flash light tracks the punch
    if (flash.current) flash.current.intensity = punch.current * 26;
  });

  const onPointerDown = (e) => {
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);
    drag.current = { active: true, lastX: e.clientX, lastY: e.clientY, moved: 0 };
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.lastX;
    const dy = e.clientY - drag.current.lastY;
    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;
    drag.current.moved += Math.abs(dx) + Math.abs(dy);
    vel.current.y += dx * 0.02;
    vel.current.x += dy * 0.02;
  };

  const onPointerUp = (e) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    // a click (not a drag) = smash
    if (drag.current.moved < 8) {
      punch.current = 1;
      vel.current.y += (Math.random() > 0.5 ? 1 : -1) * (6 + Math.random() * 4);
      vel.current.x += (Math.random() - 0.5) * 5;
    }
    e.target.releasePointerCapture?.(e.pointerId);
  };

  return (
    <group
      ref={group}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* felt body — optic yellow with sheen for the fuzz */}
      <mesh>
        <sphereGeometry args={[R, 64, 64]} />
        <meshPhysicalMaterial
          color="#c8e022"
          roughness={0.92}
          sheen={1}
          sheenColor="#e8ff6a"
          sheenRoughness={0.6}
        />
      </mesh>

      {/* seam */}
      <mesh geometry={seamGeometry}>
        <meshStandardMaterial color="#f2f4ee" roughness={0.7} />
      </mesh>

      {/* smash flash */}
      <pointLight ref={flash} color="#00e5ff" intensity={0} distance={7} decay={2} />
    </group>
  );
}
