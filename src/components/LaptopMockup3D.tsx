import { useEffect, useRef } from "react";
import * as THREE from "three";

export const LaptopMockup3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const laptopRef = useRef<THREE.Group>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    
    const width = 600;
    const height = 400;
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Laptop group
    const laptopGroup = new THREE.Group();
    laptopRef.current = laptopGroup;
    scene.add(laptopGroup);

    // Laptop base (keyboard area)
    const baseGeometry = new THREE.BoxGeometry(4, 0.2, 3);
    const baseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xe8e8e8,
      shininess: 30
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.castShadow = true;
    base.receiveShadow = true;
    laptopGroup.add(base);

    // Laptop screen
    const screenGeometry = new THREE.BoxGeometry(3.6, 2.4, 0.1);
    const screenMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1a1a1a,
      shininess: 100
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 1.3, -1.4);
    screen.rotation.x = -0.1;
    screen.castShadow = true;
    laptopGroup.add(screen);

    // Screen content (dashboard preview)
    const screenContentGeometry = new THREE.PlaneGeometry(3.4, 2.2);
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 330;
    const ctx = canvas.getContext('2d')!;
    
    // Draw dashboard preview
    const gradient = ctx.createLinearGradient(0, 0, 512, 330);
    gradient.addColorStop(0, '#8B5CF6');
    gradient.addColorStop(1, '#3B82F6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 330);
    
    // Add some dashboard elements
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(20, 20, 120, 80);
    ctx.fillRect(160, 20, 120, 80);
    ctx.fillRect(300, 20, 120, 80);
    ctx.fillRect(450, 20, 42, 80);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillRect(20, 120, 472, 180);

    const texture = new THREE.CanvasTexture(canvas);
    const screenContentMaterial = new THREE.MeshBasicMaterial({ 
      map: texture,
      transparent: true
    });
    const screenContent = new THREE.Mesh(screenContentGeometry, screenContentMaterial);
    screenContent.position.set(0, 1.3, -1.35);
    screenContent.rotation.x = -0.1;
    laptopGroup.add(screenContent);

    // Position camera
    camera.position.set(3, 2, 5);
    camera.lookAt(0, 0.5, 0);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (laptopRef.current) {
        laptopRef.current.rotation.y += 0.002;
        laptopRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.05;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (mountRef.current && rendererRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full min-h-[400px] flex items-center justify-center"
      style={{ background: 'transparent' }}
    />
  );
};