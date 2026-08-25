'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeAnimation() {

  const containerRef = useRef<HTMLDivElement>(null);

  const mousePositionRef = useRef({
    x: 0,
    y: 0
  });

  const smoothMouseRef = useRef({
    x: 0,
    y: 0
  });

  const arrowKeysRef = useRef({
    up: false,
    down: false,
    left: false,
    right: false
  });


  useEffect(() => {

    if (!containerRef.current) return;

    const container = containerRef.current;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    let renderer: THREE.WebGLRenderer;
    let canvas: HTMLCanvasElement;
    try {
      canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'default',
        failIfMajorPerformanceCaveat: false,
      });
    } catch {
      return; // WebGL not available / context loss blocked — fail gracefully
    }

    if (!renderer) return;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Stop the animation loop if the GPU reclaims the context
    let contextLost = false;
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      contextLost = true;
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost);



    const engineGroup = new THREE.Group();

    scene.add(engineGroup);



    const accentColor = 0xBDFE00;



    // Core

    const coreGeometry =
      new THREE.IcosahedronGeometry(1.2, 1);


    const coreMaterial =
      new THREE.MeshPhongMaterial({
        color: accentColor,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
        emissive: accentColor,
        emissiveIntensity: 0.2,
        shininess: 100
      });


    const core = new THREE.Mesh(
      coreGeometry,
      coreMaterial
    );


    engineGroup.add(core);



    // Inner core

    const innerGeometry =
      new THREE.IcosahedronGeometry(0.5, 2);


    const innerMaterial =
      new THREE.MeshBasicMaterial({
        color: accentColor,
        transparent: true,
        opacity: 0.8
      });


    const innerCore =
      new THREE.Mesh(
        innerGeometry,
        innerMaterial
      );


    engineGroup.add(innerCore);



    // Rings

    const ringMaterial =
      new THREE.MeshPhongMaterial({
        color: accentColor,
        transparent: true,
        opacity: 0.6,
        emissive: accentColor,
        emissiveIntensity: 0.5
      });


    const rings: {
      mesh: THREE.Mesh;
      speed: number;
    }[] = [];


    const ringParams = [
      {
        radius: 2,
        tube: 0.01,
        rotation: [1,0,0],
        speed:0.01
      },
      {
        radius: 2.2,
        tube:0.008,
        rotation:[0,1,0],
        speed:0.015
      },
      {
        radius:2.4,
        tube:0.005,
        rotation:[0.5,0.5,1],
        speed:0.008
      },
      {
        radius:2.6,
        tube:0.012,
        rotation:[1,1,0],
        speed:0.02
      }
    ];


    ringParams.forEach((p)=>{

      const geo =
        new THREE.TorusGeometry(
          p.radius,
          p.tube,
          16,
          100
        );


      const ring =
        new THREE.Mesh(
          geo,
          ringMaterial
        );


      ring.rotation.set(
        p.rotation[0],
        p.rotation[1],
        p.rotation[2]
      );


      engineGroup.add(ring);


      rings.push({
        mesh:ring,
        speed:p.speed
      });

    });




    // Particles

    const particleCount = 130;


    const particleGeometry =
      new THREE.BufferGeometry();


    const positions =
      new Float32Array(
        particleCount * 3
      );


    for(let i=0;i<particleCount*3;i++){

      positions[i] =
        (Math.random()-0.5)*10;

    }


    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(
        positions,
        3
      )
    );


    const particleMaterial =
      new THREE.PointsMaterial({
        color:accentColor,
        size:0.05,
        transparent:true,
        opacity:0.5
      });


    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial
      );


    scene.add(particles);




    // Lights

    scene.add(
      new THREE.AmbientLight(
        0x404040
      )
    );


    const light1 =
      new THREE.PointLight(
        accentColor,
        2,
        20
      );


    light1.position.set(5,5,5);

    scene.add(light1);



    const light2 =
      new THREE.PointLight(
        accentColor,
        1,
        20
      );


    light2.position.set(-5,-5,5);

    scene.add(light2);



    camera.position.z = 6;




    // Mouse

    const handleMouseMove = (
      event: MouseEvent
    ) => {


      const x =
        (event.clientX / window.innerWidth) * 2 - 1;


      const y =
        -(event.clientY / window.innerHeight) * 2 + 1;


      mousePositionRef.current = {
        x,
        y
      };

    };




    // Keyboard

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {

      if(event.key === "ArrowUp")
        arrowKeysRef.current.up = true;

      if(event.key === "ArrowDown")
        arrowKeysRef.current.down = true;

      if(event.key === "ArrowLeft")
        arrowKeysRef.current.left = true;

      if(event.key === "ArrowRight")
        arrowKeysRef.current.right = true;

    };



    const handleKeyUp = (
      event: KeyboardEvent
    ) => {

      if(event.key === "ArrowUp")
        arrowKeysRef.current.up = false;

      if(event.key === "ArrowDown")
        arrowKeysRef.current.down = false;

      if(event.key === "ArrowLeft")
        arrowKeysRef.current.left = false;

      if(event.key === "ArrowRight")
        arrowKeysRef.current.right = false;

    };



    window.addEventListener(
      'mousemove',
      handleMouseMove
    );


    window.addEventListener(
      'keydown',
      handleKeyDown
    );


    window.addEventListener(
      'keyup',
      handleKeyUp
    );


    let animFrameId: number;

    function animate() {
      if (contextLost) return;

      animFrameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Smooth mouse
      smoothMouseRef.current.x = THREE.MathUtils.lerp(
        smoothMouseRef.current.x,
        mousePositionRef.current.x,
        0.08
      );
      smoothMouseRef.current.y = THREE.MathUtils.lerp(
        smoothMouseRef.current.y,
        mousePositionRef.current.y,
        0.08
      );

      // Mouse influence
      const mouseInfluenceX = smoothMouseRef.current.x * 0.008;
      const mouseInfluenceY = smoothMouseRef.current.y * 0.006;

      engineGroup.rotation.y += 0.005 + mouseInfluenceX;
      engineGroup.rotation.x += 0.002 + mouseInfluenceY;

      // Floating
      engineGroup.position.y = THREE.MathUtils.lerp(
        engineGroup.position.y,
        Math.sin(time) * 0.15,
        0.05
      );
      engineGroup.position.x = THREE.MathUtils.lerp(
        engineGroup.position.x,
        0,
        0.05
      );

      innerCore.scale.setScalar(1 + Math.sin(time * 3) * 0.1);
      innerMaterial.opacity = 0.5 + Math.sin(time * 3) * 0.3;

      rings.forEach((r) => {
        r.mesh.rotation.z += r.speed;
        r.mesh.rotation.y += r.speed * 0.5;
      });

      particles.rotation.y += 0.001;
      particles.rotation.z += 0.0005;

      renderer.render(scene, camera);
    }

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      // Cancel the pending animation frame first
      cancelAnimationFrame(animFrameId);

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);

      // Dispose all GPU resources
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringMaterial.dispose();
      rings.forEach((r) => r.mesh.geometry.dispose());
      particleGeometry.dispose();
      particleMaterial.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };


  }, []);




  return (

    <div
      ref={containerRef}
      className="
        absolute
        inset-0
        w-full
        h-full
        bg-transparent
      "
    />

  );

}