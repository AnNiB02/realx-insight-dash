import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Cylinder, RoundedBox, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AIAssistant = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Group>(null);
  const rightEyeRef = useRef<THREE.Group>(null);
  const mouthRef = useRef<THREE.Mesh>(null);
  
  const [isWaving, setIsWaving] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [blinkTimer, setBlinkTimer] = useState(0);

  useEffect(() => {
    // Start wave animation after a short delay
    const waveTimeout = setTimeout(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000);
    }, 1000);

    // Set up periodic blinking
    const blinkInterval = setInterval(() => {
      setBlinkTimer(Date.now());
    }, 3000 + Math.random() * 2000);

    return () => {
      clearTimeout(waveTimeout);
      clearInterval(blinkInterval);
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      // Gentle breathing motion
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.08;
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.05;
    }

    if (headRef.current) {
      // Subtle head movement
      headRef.current.rotation.x = Math.sin(time * 0.6) * 0.03;
      headRef.current.rotation.y = Math.sin(time * 0.4) * 0.04;
    }

    if (bodyRef.current) {
      // Breathing body movement
      bodyRef.current.scale.x = 1 + Math.sin(time * 0.8) * 0.02;
      bodyRef.current.scale.z = 1 + Math.sin(time * 0.8) * 0.02;
    }

    // Wave animation
    if (isWaving && rightArmRef.current) {
      const waveTime = time * 4;
      rightArmRef.current.rotation.z = 0.3 + Math.sin(waveTime) * 0.4;
      rightArmRef.current.rotation.x = Math.sin(waveTime * 0.8) * 0.2;
    } else if (rightArmRef.current) {
      rightArmRef.current.rotation.z = 0.1 + Math.sin(time * 0.5) * 0.05;
    }

    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = -0.1 + Math.sin(time * 0.6) * 0.05;
    }

    // Blinking animation
    const blinkProgress = Math.max(0, 1 - (Date.now() - blinkTimer) / 300);
    if (leftEyeRef.current && rightEyeRef.current) {
      const blinkScale = 1 - blinkProgress * 0.9;
      leftEyeRef.current.scale.y = blinkScale;
      rightEyeRef.current.scale.y = blinkScale;
    }

    // Speaking animation (mouth movement)
    if (isSpeaking && mouthRef.current) {
      mouthRef.current.scale.x = 1 + Math.sin(time * 8) * 0.1;
      mouthRef.current.scale.y = 1 + Math.sin(time * 6) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Torso */}
      <RoundedBox ref={bodyRef} args={[1.4, 2.2, 1]} radius={0.1} position={[0, 0.5, 0]}>
        <meshLambertMaterial color="#E8E2F4" />
      </RoundedBox>
      
      {/* Head */}
      <group ref={headRef} position={[0, 2.2, 0]}>
        <Sphere args={[0.75]} position={[0, 0, 0]}>
          <meshLambertMaterial color="#F5D5AE" />
        </Sphere>
        
        {/* Eyes */}
        <group ref={leftEyeRef} position={[-0.25, 0.15, 0.6]}>
          <Sphere args={[0.12]}>
            <meshLambertMaterial color="#FFFFFF" />
          </Sphere>
          <Sphere args={[0.08]} position={[0, 0, 0.05]}>
            <meshLambertMaterial color="#4A5568" />
          </Sphere>
        </group>
        
        <group ref={rightEyeRef} position={[0.25, 0.15, 0.6]}>
          <Sphere args={[0.12]}>
            <meshLambertMaterial color="#FFFFFF" />
          </Sphere>
          <Sphere args={[0.08]} position={[0, 0, 0.05]}>
            <meshLambertMaterial color="#4A5568" />
          </Sphere>
        </group>
        
        {/* Nose */}
        <Box args={[0.08, 0.06, 0.08]} position={[0, -0.05, 0.65]}>
          <meshLambertMaterial color="#F5D5AE" />
        </Box>
        
        {/* Mouth */}
        <Box ref={mouthRef} args={[0.25, 0.08, 0.05]} position={[0, -0.25, 0.6]}>
          <meshLambertMaterial color="#E8B4B8" />
        </Box>
        
        {/* Hair */}
        <Sphere args={[0.78, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.6]} position={[0, 0.3, -0.1]}>
          <meshLambertMaterial color="#8B5CF6" />
        </Sphere>
      </group>
      
      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.8, 1.6, 0]}>
        <Cylinder args={[0.12, 0.12, 1.2]} rotation={[0, 0, -0.1]}>
          <meshLambertMaterial color="#E8E2F4" />
        </Cylinder>
        {/* Hand */}
        <Sphere args={[0.15]} position={[0, -0.7, 0]}>
          <meshLambertMaterial color="#F5D5AE" />
        </Sphere>
      </group>
      
      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.8, 1.6, 0]}>
        <Cylinder args={[0.12, 0.12, 1.2]} rotation={[0, 0, 0.1]}>
          <meshLambertMaterial color="#E8E2F4" />
        </Cylinder>
        {/* Hand */}
        <Sphere args={[0.15]} position={[0, -0.7, 0]}>
          <meshLambertMaterial color="#F5D5AE" />
        </Sphere>
      </group>
      
      {/* Subtle glow effect */}
      <pointLight position={[0, 2, 1]} intensity={0.3} color="#E8E2F4" />
    </group>
  );
};

export const Animated3DCharacter = () => {
  return (
    <div className="w-full h-96">
      <Canvas 
        camera={{ position: [0, 1, 4], fov: 45 }}
        shadows
        gl={{ antialias: true }}
      >
        {/* Soft, natural lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[3, 4, 2]} 
          intensity={0.6} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight 
          position={[0, 6, 3]} 
          angle={0.3} 
          penumbra={0.5} 
          intensity={0.3} 
          color="#F0E8FF"
        />
        
        <AIAssistant />
        
        {/* Slightly limit camera movement for more focused view */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2.2} 
          minPolarAngle={Math.PI / 3} 
          maxAzimuthAngle={Math.PI / 6}
          minAzimuthAngle={-Math.PI / 6}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};