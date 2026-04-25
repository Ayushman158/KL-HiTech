import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GlassCard = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const nx = state.pointer.x;
    const ny = state.pointer.y;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, ny * 0.5, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, nx * 0.5, 0.1);
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1} speed={2}>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 2.53, 0.1]} />
        <MeshTransmissionMaterial 
          backside
          backsideThickness={1}
          thickness={0.5}
          roughness={0.15}
          transmission={1}
          ior={1.3}
          chromaticAberration={0.06}
          anisotropy={0.3}
          color="#f0f9ff"
        />
        
        {/* EMV Chip proxy */}
        <mesh position={[-1.4, 0.6, 0.05]}>
          <boxGeometry args={[0.6, 0.45, 0.02]} />
          <meshStandardMaterial color="#ca8a04" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Abstract network pattern on card */}
        <mesh position={[1, -0.6, 0.05]}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial color="#00A3E0" opacity={0.5} transparent />
        </mesh>
      </mesh>
    </Float>
  );
};

const Particles = ({ count = 150 }) => {
  const points = useRef();
  const particlesPosition = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 20;
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if(points.current) {
       points.current.rotation.y = t * 0.05;
       points.current.rotation.z = t * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00A3E0" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
};

const WebGLScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="w-full h-full pointer-events-none" dpr={[1, 2]}>
      <color attach="background" args={['#F8FAFC']} />
      
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#00A3E0" />
      <spotLight position={[0, 10, 10]} intensity={1.5} angle={0.2} penumbra={1} castShadow color="#012169" />

      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.2, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        <GlassCard />
      </PresentationControls>

      <Particles count={250} />

      <Environment preset="city" />
      <ContactShadows position={[0, -2.5, 0]} scale={20} blur={2} far={4} opacity={0.4} color="#012169" />
    </Canvas>
  );
};

const HeroWebGL = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F8FAFC] overflow-hidden flex flex-col justify-between pt-24 md:pt-32">
      
      {/* Absolute 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
         <WebGLScene />
      </div>

      {/* Asymmetrical Typography Layers (Z-20) */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 lg:px-16 flex-1 flex flex-col pointer-events-none">
        
        {/* TOP LEFT BLOCK */}
        <div className="w-full md:w-1/2 pt-10 md:pt-20 flex flex-col items-start pointer-events-auto">
          <div className="font-sans font-[400] text-navy text-[clamp(44px,5vw,70px)] leading-[1.05] tracking-tight opacity-90 mix-blend-multiply">
            Forging the<br/>architecture of
          </div>
          
          <p className="font-sans text-steel font-medium text-[16px] md:text-[18px] leading-[1.7] max-w-sm mt-8 opacity-90 border-l border-electric/30 pl-4 mix-blend-multiply text-pretty">
            India's premier partner for governments and financial institutions since 1988. Delivering unbreakable authentication mechanics across the globe.
          </p>
          
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center justify-center bg-navy text-white px-8 py-3.5 rounded-full font-sans font-[600] text-[15px] hover:bg-electric transition-colors duration-300 shadow-[0_15px_30px_rgba(1,33,105,0.2)] outline-none">
              Initiate Secure Link
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 mt-[1px]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        {/* BOTTOM RIGHT BLOCK */}
        <div className="w-full md:w-1/2 self-end mt-auto pb-16 md:pb-32 pt-32 md:pt-10 flex justify-end pointer-events-auto">
          <div className="text-right">
            <h1 className="font-sans font-[900] text-[clamp(60px,8vw,140px)] leading-[0.9] tracking-tighter mix-blend-multiply">
              <span className="block text-navy mix-blend-multiply">Absolute</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-navy via-electric to-navy bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                Trust.
              </span>
            </h1>
          </div>
        </div>

      </div>

      {/* The Minimal/Clinical Stats Footer (Z-20) */}
      <div className="relative z-20 w-full bg-white/60 backdrop-blur-2xl border-t border-navy/10 py-10 px-6 lg:px-16 shadow-[0_-10px_40px_rgba(1,33,105,0.02)]">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 md:divide-x divide-navy/10">
            
            <div className="flex flex-col justify-center px-0 md:pr-8">
              <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-steel font-medium text-pretty mix-blend-multiply">
                Keep your authentication channels flawless and secure with KL Hi-Tech's proprietary ISO-certified manufacturing infrastructure.
              </p>
            </div>
            
            <div className="flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start px-0 md:px-8 border-t border-navy/10 md:border-t-0 pt-4 md:pt-0 mix-blend-multiply">
              <div className="font-sans text-[13px] md:text-[14px] text-steel font-medium md:mb-2 max-w-[120px]">Cards manufactured annually</div>
              <div className="font-mono text-3xl md:text-5xl font-bold text-navy tracking-tighter">80<span className="text-electric">M+</span></div>
            </div>
            
            <div className="flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start px-0 md:px-8 border-t border-navy/10 md:border-t-0 pt-4 md:pt-0 mix-blend-multiply">
              <div className="font-sans text-[13px] md:text-[14px] text-steel font-medium md:mb-2 max-w-[120px]">Global export destinations</div>
              <div className="font-mono text-3xl md:text-5xl font-bold text-navy tracking-tighter">52<span className="text-electric">+</span></div>
            </div>
            
            <div className="flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start px-0 md:px-8 border-t border-navy/10 md:border-t-0 pt-4 md:pt-0 mix-blend-multiply">
              <div className="font-sans text-[13px] md:text-[14px] text-steel font-medium md:mb-2 max-w-[120px]">Active clients worldwide</div>
              <div className="font-mono text-3xl md:text-5xl font-bold text-navy tracking-tighter">500<span className="text-electric">+</span></div>
            </div>
            
         </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroWebGL;
