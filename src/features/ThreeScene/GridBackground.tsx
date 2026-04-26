import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GridBackgroundProps {
  mousePosition: { x: number; y: number };
}

/**
 * GridBackground Component
 * Creates an animated grid background for depth
 */
const GridBackground: React.FC<GridBackgroundProps> = ({ mousePosition }) => {
  const gridRef = useRef<THREE.LineSegments>(null);

  // Create grid geometry
  const gridGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const size = 20;
    const divisions = 20;
    const step = size / divisions;
    const halfSize = size / 2;

    // Horizontal lines
    for (let i = 0; i <= divisions; i++) {
      const y = -halfSize + i * step;
      vertices.push(-halfSize, y, 0, halfSize, y, 0);
    }

    // Vertical lines
    for (let i = 0; i <= divisions; i++) {
      const x = -halfSize + i * step;
      vertices.push(x, -halfSize, 0, x, halfSize, 0);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (!gridRef.current) return;

    // Subtle wave animation
    const time = state.clock.elapsedTime;
    gridRef.current.position.z = Math.sin(time * 0.5) * 0.5 - 8;
    
    // Respond to mouse
    gridRef.current.rotation.x = -Math.PI / 3 + mousePosition.y * 0.1;
    gridRef.current.rotation.y = mousePosition.x * 0.1;
  });

  return (
    <lineSegments ref={gridRef} geometry={gridGeometry}>
      <lineBasicMaterial
        color="#6366f1"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
};

export default GridBackground;
