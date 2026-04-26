import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GeometricShapesProps {
  mousePosition: { x: number; y: number };
}

/**
 * GeometricShapes Component
 * Adds floating geometric shapes for visual interest
 */
const GeometricShapes: React.FC<GeometricShapesProps> = ({ mousePosition }) => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;

    // Rotate the entire group slowly
    groupRef.current.rotation.y += delta * 0.1;
    groupRef.current.rotation.x = mousePosition.y * 0.1;
    groupRef.current.rotation.z = mousePosition.x * 0.1;

    // Individual ring rotations
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.3;
      ring1Ref.current.rotation.y += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.2;
      ring2Ref.current.rotation.z += delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y += delta * 0.25;
      ring3Ref.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Large outer ring */}
      <mesh ref={ring1Ref} position={[0, 0, -2]}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Medium ring */}
      <mesh ref={ring2Ref} position={[0, 0, -1]}>
        <torusGeometry args={[2, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.6}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Small inner ring */}
      <mesh ref={ring3Ref} position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.7}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Floating cubes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 0.5) * 2;

        return (
          <mesh key={i} position={[x, y, z]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#60a5fa' : '#c084fc'}
              emissive={i % 2 === 0 ? '#60a5fa' : '#c084fc'}
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default GeometricShapes;
