"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";

function OpticalSystem() {
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.08;
    group.current.rotation.x = state.pointer.y * 0.08;
    group.current.rotation.z = state.pointer.x * 0.08;
  });
  return <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.25}><group ref={group} rotation={[0.25, -0.3, 0]}>
    {[0, 1, 2, 3, 4, 5].map((ring) => <mesh key={ring} position={[0, 0, (ring - 2.5) * 0.28]} rotation={[0, 0, ring * 0.16]}><torusGeometry args={[1.65 - ring * 0.1, 0.045 + ring * 0.006, 12, 80]} /><meshStandardMaterial color={ring === 2 ? "#f7d84a" : "#292b29"} metalness={0.92} roughness={0.18} emissive={ring === 2 ? "#7b6712" : "#000000"} emissiveIntensity={0.55} /></mesh>)}
    <mesh><sphereGeometry args={[0.78, 32, 32]} /><meshPhysicalMaterial color="#151713" metalness={0.25} roughness={0.08} transmission={0.78} thickness={1.5} ior={1.42} transparent opacity={0.9} /></mesh>
    {Array.from({ length: 6 }).map((_, index) => <mesh key={`node-${index}`} position={[Math.cos((index / 6) * Math.PI * 2) * 2.25, Math.sin((index / 6) * Math.PI * 2) * 2.25, -0.2]}><sphereGeometry args={[0.055, 20, 20]} /><meshStandardMaterial color="#f7d84a" emissive="#f7d84a" emissiveIntensity={2.8} /></mesh>)}
  </group></Float>;
}

export function LensScene() {
  const [visible, setVisible] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (container.current) observer.observe(container.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={container} className="lens-canvas" aria-hidden="true"><Canvas frameloop={visible ? "always" : "never"} camera={{ position: [0, 0, 6.2], fov: 38 }} dpr={1} gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}><ambientLight intensity={1.5} /><directionalLight position={[4, 5, 5]} intensity={4} color="#fff4c2" /><pointLight position={[-4, -1, 3]} intensity={22} color="#f7d84a" distance={10} /><OpticalSystem /></Canvas></div>;
}
