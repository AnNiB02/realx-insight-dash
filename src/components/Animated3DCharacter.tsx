import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cone } from '@react-three/drei';
import * as THREE from 'three';

const Character = () => {
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      // Main floating animation
      groupRef.current.position.y = Math.sin(time * 1.5) * 0.3;
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    }

    if (headRef.current) {
      // Head bobbing
      headRef.current.rotation.z = Math.sin(time * 2) * 0.1;
    }

    if (leftArmRef.current && rightArmRef.current) {
      // Arm waving
      leftArmRef.current.rotation.z = Math.sin(time * 3) * 0.3 - 0.2;
      rightArmRef.current.rotation.z = Math.sin(time * 3 + Math.PI) * 0.3 + 0.2;
    }

    if (bodyRef.current) {
      // Body slight rotation
      bodyRef.current.rotation.x = Math.sin(time * 1.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Body */}
      <Box ref={bodyRef} args={[1.2, 1.5, 0.8]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#4F46E5" />
      </Box>
      
      {/* Head */}
      <Sphere ref={headRef} args={[0.8]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#F59E0B" />
      </Sphere>
      
      {/* Eyes */}
      <Sphere args={[0.1]} position={[-0.3, 1.2, 0.6]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.1]} position={[0.3, 1.2, 0.6]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      
      {/* Nose */}
      <Cone args={[0.1, 0.3]} position={[0, 1, 0.7]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#EF4444" />
      </Cone>
      
      {/* Left Arm */}
      <Box ref={leftArmRef} args={[0.3, 1, 0.3]} position={[-0.8, -0.2, 0]} rotation={[0, 0, -0.2]}>
        <meshStandardMaterial color="#4F46E5" />
      </Box>
      
      {/* Right Arm */}
      <Box ref={rightArmRef} args={[0.3, 1, 0.3]} position={[0.8, -0.2, 0]} rotation={[0, 0, 0.2]}>
        <meshStandardMaterial color="#4F46E5" />
      </Box>
      
      {/* Left Leg */}
      <Box args={[0.4, 1.2, 0.4]} position={[-0.3, -1.8, 0]}>
        <meshStandardMaterial color="#1E40AF" />
      </Box>
      
      {/* Right Leg */}
      <Box args={[0.4, 1.2, 0.4]} position={[0.3, -1.8, 0]}>
        <meshStandardMaterial color="#1E40AF" />
      </Box>
      
      {/* Hat */}
      <Cone args={[0.9, 0.8]} position={[0, 1.8, 0]}>
        <meshStandardMaterial color="#DC2626" />
      </Cone>
    </group>
  );
};

export const Animated3DCharacter = () => {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#4F46E5" />
        <Character />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};