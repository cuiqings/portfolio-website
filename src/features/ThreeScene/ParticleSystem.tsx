import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleSystemProps {
  mousePosition: { x: number; y: number };
}

/**
 * ParticleSystem Component
 * Creates an animated particle field with mouse parallax effect
 * Requirements: 1.2
 */
const ParticleSystem: React.FC<ParticleSystemProps> = ({ mousePosition }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  // Optimize particle count based on device performance
  const particleCount = useMemo(() => {
    // Check if device is mobile or has limited performance
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    if (isMobile || isLowPerformance) {
      return 500; // 进一步减少移动端粒子数量
    }
    return 1000; // 减少桌面端粒子数量提升性能
  }, []);

  // Generate particle positions and attributes
  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Random position in a sphere
      const radius = Math.random() * 10 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Enhanced color gradient: blue -> purple -> pink
      const colorMix = Math.random();
      const colorVariant = Math.floor(Math.random() * 3);
      
      if (colorVariant === 0) {
        // Blue tones
        colors[i3] = 0.2 + colorMix * 0.3; // R
        colors[i3 + 1] = 0.4 + colorMix * 0.4; // G
        colors[i3 + 2] = 0.9 + colorMix * 0.1; // B
      } else if (colorVariant === 1) {
        // Purple tones
        colors[i3] = 0.5 + colorMix * 0.3; // R
        colors[i3 + 1] = 0.3 + colorMix * 0.2; // G
        colors[i3 + 2] = 0.8 + colorMix * 0.2; // B
      } else {
        // Pink tones
        colors[i3] = 0.7 + colorMix * 0.3; // R
        colors[i3 + 1] = 0.3 + colorMix * 0.3; // G
        colors[i3 + 2] = 0.7 + colorMix * 0.3; // B
      }

      // Random size
      sizes[i] = Math.random() * 2 + 1;
    }

    return { positions, colors, sizes };
  }, [particleCount]);

  // Update target rotation based on mouse position (±15 degrees = ±0.26 radians)
  useEffect(() => {
    const maxRotation = 0.26; // 15 degrees in radians
    targetRotation.current = {
      x: mousePosition.y * maxRotation,
      y: mousePosition.x * maxRotation,
    };
  }, [mousePosition]);

  // Animation loop - 简化动画提升性能
  useFrame((_state, delta) => {
    if (!pointsRef.current) return;

    // Smooth rotation interpolation (lerp)
    const lerpFactor = 0.05;
    pointsRef.current.rotation.x +=
      (targetRotation.current.x - pointsRef.current.rotation.x) * lerpFactor;
    pointsRef.current.rotation.y +=
      (targetRotation.current.y - pointsRef.current.rotation.y) * lerpFactor;

    // Slow continuous rotation for ambient movement
    pointsRef.current.rotation.z += delta * 0.05;

    // 移除粒子位置动画以提升性能
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleSystem;
