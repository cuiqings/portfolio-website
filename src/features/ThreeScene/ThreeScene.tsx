import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import Loading from '../../components/UI/Loading';
import ParticleSystem from './ParticleSystem';

interface ThreeSceneProps {
  onLoadComplete?: () => void;
  onLoadError?: (error: Error) => void;
}

/**
 * ThreeScene Component
 * Renders a 3D scene with particle system and mouse parallax effect
 * Requirements: 1.1, 1.5, 1.6, 15.3
 */
const ThreeScene: React.FC<ThreeSceneProps> = ({ 
  onLoadComplete, 
  onLoadError 
}) => {
  const { t } = useTranslation();
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Check WebGL support (Requirement 1.6)
  useEffect(() => {
    const checkWebGLSupport = (): boolean => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
      } catch (e) {
        return false;
      }
    };

    const supported = checkWebGLSupport();
    setWebglSupported(supported);

    if (!supported && onLoadError) {
      onLoadError(new Error('WebGL not supported'));
    }
  }, [onLoadError]);

  // Track mouse position for parallax effect (Requirement 1.2)
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle successful load
  useEffect(() => {
    if (webglSupported && !hasError && onLoadComplete) {
      // Delay to ensure scene is fully rendered
      const timer = setTimeout(() => {
        onLoadComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [webglSupported, hasError, onLoadComplete]);

  // Error handler for Canvas
  const handleCanvasError = () => {
    const error = new Error('Canvas rendering failed');
    console.error('3D Scene Error:', error);
    setHasError(true);
    if (onLoadError) {
      onLoadError(error);
    }
  };

  // WebGL not supported - return null to trigger fallback (Requirement 1.6, 15.3)
  if (webglSupported === false) {
    return null;
  }

  // Still checking WebGL support
  if (webglSupported === null) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <Loading size="lg" text={t('home.loading3d')} />
      </div>
    );
  }

  // Error occurred - return null to trigger fallback (Requirement 15.3)
  if (hasError) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <Loading size="lg" text={t('home.loading3d')} />
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          onError={handleCanvasError}
          gl={{ 
            antialias: false, // 关闭抗锯齿提升性能
            alpha: true,
            powerPreference: 'high-performance'
          }}
        >
          {/* 简化的灯光设置 */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />

          {/* 只保留粒子系统 */}
          <ParticleSystem mousePosition={mousePosition} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ThreeScene;
