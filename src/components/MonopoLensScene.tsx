import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const MonopoLensScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene, Camera, Transparent Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0); // 100% transparent background
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Studio Lighting for the 3D Optical Crystal Element
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Warm champagne key light
    const dirLight1 = new THREE.DirectionalLight(0xe8c949, 3.2);
    dirLight1.position.set(5, 5, 4);
    scene.add(dirLight1);

    // Sage-emerald rim light
    const dirLight2 = new THREE.DirectionalLight(0x789e71, 2.4);
    dirLight2.position.set(-5, -3, 2);
    scene.add(dirLight2);

    // Cursor-tracking interactive point light
    const pointLight = new THREE.PointLight(0xe8c949, 2.5, 12);
    pointLight.position.set(1.5, 1.5, 2.5);
    scene.add(pointLight);

    // 3. 3D Optical Crystal Lens Core
    const group = new THREE.Group();
    scene.add(group);

    // Main Crystal Sphere
    // Main Optical Crystal Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.15, 64, 64);
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffffff'),
      emissive: new THREE.Color('#1c1406'),
      roughness: 0.03,
      metalness: 0.06,
      transmission: 0.78,
      ior: 1.48,
      thickness: 1.2,
      specularIntensity: 1.8,
      specularColor: new THREE.Color('#e8c949'),
      iridescence: 0.95,
      iridescenceIOR: 1.35,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      transparent: true,
      opacity: 0.94,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);

    // Inner Luminous Radiant Core (Provides internal warmth and refraction depth)
    const coreGeometry = new THREE.SphereGeometry(0.38, 32, 32);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#e8c949'),
      emissive: new THREE.Color('#e09442'),
      emissiveIntensity: 1.8,
      roughness: 0.2,
      metalness: 0.8,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    // Floating Orbital Halo Ring
    const ringGeometry = new THREE.TorusGeometry(1.48, 0.012, 16, 128);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#e8c949'),
      emissive: new THREE.Color('#e09442'),
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 3.2;
    ring.rotation.y = Math.PI / 8;
    group.add(ring);

    // Secondary Delicate Sage Ring
    const innerRingGeometry = new THREE.TorusGeometry(1.36, 0.008, 16, 128);
    const innerRingMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#789e71'),
      emissive: new THREE.Color('#789e71'),
      emissiveIntensity: 0.4,
      roughness: 0.3,
      metalness: 0.8,
    });
    const innerRing = new THREE.Mesh(innerRingGeometry, innerRingMaterial);
    innerRing.rotation.x = -Math.PI / 4;
    innerRing.rotation.y = Math.PI / 6;
    group.add(innerRing);

    // 4. Mouse Interaction Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 5. Scroll Fade Tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
      if (containerRef.current) {
        // Smoothly fade out the 3D element as user scrolls down into content
        const fadeRatio = Math.max(0, 1 - scrollY / 650);
        containerRef.current.style.opacity = (fadeRatio * 0.95).toString();
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 6. Responsive Placement (Smooth desktop framing for all screens >= 768px)
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      camera.aspect = currentWidth / currentHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentWidth, currentHeight);

      if (currentWidth < 768) {
        group.position.set(0.1, -0.88, -0.2);
        group.scale.set(0.52, 0.52, 0.52);
        if (containerRef.current) containerRef.current.style.opacity = '0.65';
      } else {
        group.position.set(1.55, 0.05, 0.2);
        group.scale.set(1.0, 1.0, 1.0);
        if (containerRef.current) containerRef.current.style.opacity = '0.95';
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const currentWidth = window.innerWidth;

      // Smooth mouse easing (Lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Group floating physics: Full desktop right-anchor for screens >= 768px
      const basePosX = currentWidth >= 768 ? 1.55 : 0.1;
      const basePosY = currentWidth >= 768 ? 0.05 : -0.88;

      group.position.x = basePosX + mouse.x * 0.25;
      group.position.y = basePosY + mouse.y * 0.2 + Math.sin(elapsedTime * 0.8) * 0.06;

      // Slow elegant rotations
      sphere.rotation.y = elapsedTime * 0.15 + mouse.x * 0.3;
      sphere.rotation.x = mouse.y * 0.2 + Math.cos(elapsedTime * 0.5) * 0.05;

      ring.rotation.z = elapsedTime * 0.18;
      ring.rotation.y = Math.PI / 8 + mouse.x * 0.15;

      innerRing.rotation.z = -elapsedTime * 0.14;
      innerRing.rotation.x = -Math.PI / 4 + mouse.y * 0.15;

      // Point light tracks mouse for glints
      pointLight.position.x = basePosX + mouse.x * 1.5;
      pointLight.position.y = basePosY + 1.2 + mouse.y * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      innerRingGeometry.dispose();
      innerRingMaterial.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-300"
      style={{ opacity: 0.95 }}
    />
  );
};
