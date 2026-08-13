"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { ArrowRight, Sparkles, Database, Globe2, ShieldCheck } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   WORD-BY-WORD REVEAL
   ═══════════════════════════════════════════════════════════ */
function RevealWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em] leading-tight">
          <motion.span
            className="inline-block"
            initial={{ y: "115%", rotateX: 30 }}
            animate={inView ? { y: "0%", rotateX: 0 } : {}}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}



function ParticleSwarm({ count, radius, spread, color, size, rotSpeed }: { count: number; radius: number; spread: number; color: string; size: number; rotSpeed: number }) {
  const ref = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius + Math.random() * spread;
      const theta = Math.random() * 2 * Math.PI;
      const y = (Math.random() - 0.5) * spread * 0.8;
      pos[i * 3] = r * Math.cos(theta);
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = r * Math.sin(theta);
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * rotSpeed;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent opacity={0.85} blending={THREE.AdditiveBlending} sizeAttenuation />
    </points>
  );
}

function AuroraRing({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
    }
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.012, 16, 120]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={4} transparent opacity={0.65} />
    </mesh>
  );
}

function AICore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Layer 1: Core Liquid Metal */}
      <Sphere args={[1.0, 32, 32]}>
        <MeshDistortMaterial
          color="#050814"
          envMapIntensity={3}
          clearcoat={1}
          clearcoatRoughness={0.05}
          metalness={1}
          roughness={0.05}
          distort={0.45}
          speed={0.8}
        />
      </Sphere>

      {/* Layer 2: Iridescent Shell */}
      <Sphere args={[1.18, 32, 32]}>
        <MeshDistortMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={1.2}
          metalness={0.9}
          roughness={0.1}
          distort={0.4}
          speed={1.0}
          transparent
          opacity={0.45}
        />
      </Sphere>

      {/* Layer 3: Cyan Wireframe Shell */}
      <Sphere args={[1.38, 16, 16]}>
        <MeshDistortMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={3}
          wireframe
          distort={0.55}
          speed={1.2}
          transparent
          opacity={0.35}
        />
      </Sphere>

      {/* Layer 4: Violet Outer Shell */}
      <Sphere args={[1.58, 16, 16]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={2.5}
          wireframe
          distort={0.6}
          speed={0.7}
          transparent
          opacity={0.2}
        />
      </Sphere>

      {/* Aurora Rings */}
      <AuroraRing radius={1.85} color="#00e5ff" speed={0.35} tilt={[1.2, 0.3, 0]} />
      <AuroraRing radius={2.25} color="#8b5cf6" speed={-0.25} tilt={[-0.8, 0.5, 0.4]} />
      <AuroraRing radius={2.65} color="#00e5ff" speed={0.2} tilt={[0.4, -0.6, 0.8]} />

      {/* High Intensity Swarms */}
      <ParticleSwarm count={1000} radius={1.8} spread={2.5} color="#00e5ff" size={0.015} rotSpeed={0.05} />
      <ParticleSwarm count={750} radius={2.5} spread={1.8} color="#8b5cf6" size={0.012} rotSpeed={-0.03} />
      <ParticleSwarm count={500} radius={3.2} spread={1.2} color="#ffffff" size={0.01} rotSpeed={0.02} />

      {/* Dynamic Lighting */}
      <pointLight color="#00e5ff" intensity={25} distance={7} />
      <pointLight color="#8b5cf6" intensity={15} distance={7} position={[0, 0, 2]} />
    </group>
  );
}

function Premium3DScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.4 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#8b5cf6" />
        <spotLight position={[5, 5, 5]} angle={0.4} penumbra={1} intensity={4} color="#00e5ff" />
        <Float speed={0.6} rotationIntensity={0.1} floatIntensity={0.5}>
          <AICore />
        </Float>
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ORBITAL RING WITH NEON BADGES
   ═══════════════════════════════════════════════════════════ */
function OrbitalRing() {
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);
  const requestRef = useRef<number>(0);
  
  const animate = useCallback((time: number) => {
    setRotation((time * 0.005) % 360);
    requestRef.current = requestAnimationFrame(animate);
  }, []);
  
  useEffect(() => {
    setMounted(true);
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  const labels = [
    "Enterprise Intelligence",
    "AI Agents",
    "Autonomous Systems",
    "Data Platform",
    "Insights",
    "Decision Platform"
  ];

  return (
    <div className="absolute inset-[-10%] z-20 pointer-events-none flex items-center justify-center">
      {/* Outer SVG Orbit Track */}
      <svg className="absolute w-full h-full overflow-visible -rotate-[135deg]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0, 229, 255, 0.15)" strokeWidth="0.3" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="49" fill="none" stroke="url(#arcGlow)" strokeWidth="0.8" strokeDasharray="308" strokeDashoffset="240" strokeLinecap="round" />
        <defs>
          <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Orbiting Labels */}
      {mounted && labels.map((label, i) => {
        const angleOffset = (i * 360) / labels.length;
        const currentGlobalAngle = (rotation + angleOffset) % 360;
        
        let dist = Math.abs(currentGlobalAngle - 225);
        if (dist > 180) dist = 360 - dist;
        
        const isHighlighted = dist < 30;
        const blurAmount = isHighlighted ? 0 : Math.min(dist * 0.04, 2);
        const opacity = isHighlighted ? 1 : Math.max(1 - dist * 0.012, 0.25);
        const scale = isHighlighted ? 1.08 : 0.92;
        
        const rad = (currentGlobalAngle * Math.PI) / 180;
        
        return (
          <div 
            key={label}
            className="absolute"
            style={{
              left: `${50 + Math.cos(rad) * 48}%`,
              top: `${50 + Math.sin(rad) * 48}%`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              filter: `blur(${blurAmount}px)`,
              transition: 'filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
            }}
          >
            {/* Glowing Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={`w-2.5 h-2.5 rounded-full ${isHighlighted ? 'bg-[#00e5ff] shadow-[0_0_15px_6px_rgba(0,229,255,0.8)]' : 'bg-white/70 shadow-[0_0_6px_rgba(255,255,255,0.4)]'}`} />
              {isHighlighted && (
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping opacity-50" />
              )}
            </div>
            
            {/* Text Label Badge */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap"
              style={{
                left: Math.cos(rad) >= -0.1 ? '22px' : 'auto',
                right: Math.cos(rad) < -0.1 ? '22px' : 'auto',
                textAlign: Math.cos(rad) >= -0.1 ? 'left' : 'right',
              }}
            >
              <span 
                className={`hidden sm:inline text-[11px] md:text-[13px] font-mono tracking-wider px-2.5 md:px-3 py-0.5 md:py-1 rounded-full border transition-all duration-300 ${
                  isHighlighted 
                    ? 'text-white font-bold bg-[#03050c]/90 border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.5)]' 
                    : 'text-white/40 font-light bg-black/40 border-white/10'
                }`}
              >
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */
export function Hero() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center overflow-hidden pt-24 md:pt-36 pb-10 md:pb-16 bg-[#020203]">
      
      {/* ═══ CUSTOM IMAGE BACKGROUND ═══ */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/hero-bg-custom.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-8 items-center">

          {/* ═══ LEFT COLUMN: Copy & CTAs ═══ */}
          <div className="flex flex-col max-w-xl">
            
            {/* Overline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5"
            >
              <span className="glass-pill px-4 py-1.5 inline-flex items-center gap-2.5 border-glow text-[#00e5ff] text-[11px] uppercase tracking-[0.2em] font-mono font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]" />
                </span>
                Enterprise Intelligence Stack
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[clamp(1.8rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[1.08] mb-4 md:mb-6 text-white">
              <span className="whitespace-nowrap"><RevealWords text="Building Enterprise" delay={0.2} /></span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00e5ff] to-[#8B5CF6]">
                <RevealWords text="Intelligence." delay={0.45} />
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/50 text-[13px] md:text-[16px] leading-relaxed mb-5 md:mb-8 max-w-md font-light"
            >
              The next generation of intelligent platforms, decision systems, and autonomous agents — engineered for the world&apos;s most ambitious enterprises.
            </motion.p>

            {/* Glowing CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center gap-3 mb-7 md:mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0, 229, 255, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-3 md:px-9 md:py-4 rounded-full bg-white text-black font-mono font-bold text-[11px] md:text-[12px] tracking-wider uppercase shadow-[0_0_25px_rgba(0,229,255,0.4)] flex items-center gap-2.5 transition-all cursor-pointer hover:bg-white"
              >
                <span>Talk To An Expert</span>
                <ArrowRight size={14} className="text-black" />
              </motion.a>

              <motion.a
                href="#solutions"
                whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="px-5 py-3 md:px-8 md:py-4 rounded-full bg-white/[0.03] border border-white/15 text-white font-mono font-medium text-[11px] md:text-[12px] tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
              >
                Explore Ecosystem
              </motion.a>
            </motion.div>

            {/* Enterprise Glass Metric Cards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-3 gap-2 md:gap-4 max-w-lg"
            >
              {[
                { value: "25+", label: "AI Products", icon: Sparkles, color: "#00e5ff" },
                { value: "100M+", label: "Data Events", icon: Database, color: "#8B5CF6" },
                { value: "Global", label: "Enterprise Scale", icon: Globe2, color: "#10B981" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="glass-card p-2.5 md:p-4 rounded-xl md:rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1.5 md:mb-2">
                      <Icon size={12} style={{ color: stat.color }} />
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stat.color }} />
                    </div>
                    <div>
                      <div className="font-mono font-bold text-base md:text-xl text-white tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-white/40 text-[8px] md:text-[10px] uppercase font-mono tracking-wider mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ═══ RIGHT COLUMN: 3D Visualization Core ═══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-square max-w-[260px] sm:max-w-[380px] md:max-w-[500px] mx-auto lg:mx-0 lg:ml-auto flex items-center justify-center"
          >
            {/* R3F Canvas 3D Core */}
            <Premium3DScene className="absolute inset-0 z-10" />

            {/* Interactive Orbital Ring */}
            <OrbitalRing />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   TRUST STRIP
   ═══════════════════════════════════════════════════════════ */
export function TrustStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-10 md:py-16 relative overflow-hidden bg-[#020203] border-y border-white/[0.06]">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <p className="text-white/30 text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] font-mono px-4">
            Engineered for High-Stakes Enterprise Architecture
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 sm:gap-8 md:gap-14 flex-wrap"
        >
          {["Healthcare", "Finance", "Manufacturing", "Telecom", "Energy", "Defense"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-2 sm:gap-2.5 opacity-40 md:opacity-30 hover:opacity-80 transition-opacity duration-500 cursor-default group"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#00e5ff]/50 transition-colors">
                <ShieldCheck size={11} className="text-[#00e5ff]" />
              </div>
              <span className="text-white text-[10px] sm:text-[12px] font-mono tracking-wider uppercase">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
