import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WaveFieldProps {
  mousePosition: { x: number; y: number };
}

/**
 * WaveField Component
 * Creates an animated wave field for dynamic background
 */
const WaveField: React.FC<WaveFieldProps> = ({ mousePosition }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create plane geometry with many vertices for wave effect
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(15, 15, 50, 50);
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;
    const positionAttribute = meshRef.current.geometry.attributes.position;

    if (positionAttribute) {
      const positions = positionAttribute.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        
        if (x !== undefined && y !== undefined) {
          // Create wave pattern
          const waveX = Math.sin(x * 0.3 + time) * 0.3;
          const waveY = Math.sin(y * 0.3 + time * 0.8) * 0.3;
          const waveXY = Math.sin((x + y) * 0.2 + time * 0.5) * 0.2;
          
          positions[i + 2] = waveX + waveY + waveXY;
        }
      }
      
      positionAttribute.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }

    // Respond to mouse
    meshRef.current.rotation.x = -Math.PI / 4 + mousePosition.y * 0.05;
    meshRef.current.rotation.z = mousePosition.x * 0.05;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]} geometry={geometry}>
      <meshStandardMaterial
        color="#4f46e5"
        emissive="#4f46e5"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default WaveField;
