"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Contact } from "@/components/sections/Contact";
import { Globe, Layers, Shield, Zap, Database, Cpu, Network, Activity, BarChart, Server, Wallet, Lock, ShieldAlert } from "lucide-react";
import { industries, products } from "@/lib/data";

// 1. Hero Section
const HeroSection = () => {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#020202] z-0"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest mb-8"
          >
            <Globe className="w-4 h-4" />
            Global Enterprise Solutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-white"
          >
            Intelligence Across<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Every Sector.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12"
          >
            Ten industries. Eleven purpose-built platforms. One unified architecture engineered to solve high-stakes challenges wherever they emerge.
          </motion.p>
        </div>

        {/* Right Side: Animated Data Core */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
           {/* Central Server */}
           <motion.div 
             animate={{ y: [-10, 10, -10] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-20 w-32 h-32 bg-[#050505] border border-blue-500/50 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.3)] flex flex-col items-center justify-center"
           >
             <Server className="w-10 h-10 text-blue-400 mb-2" />
             <span className="text-[10px] text-blue-400 font-bold tracking-widest text-center mt-2">FAZAMOUS<br/>CORE</span>
           </motion.div>

           {/* Orbital Rings */}
           {[...Array(3)].map((_, i) => (
             <motion.div
               key={i}
               animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
               transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
               className="absolute rounded-full border border-white/5 border-t-blue-500/30 border-b-indigo-500/30 z-10"
               style={{ width: `${220 + i * 80}px`, height: `${220 + i * 80}px` }}
             >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_#60a5fa]" />
             </motion.div>
           ))}
           
           {/* Glowing Particles */}
           <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -30, 0], 
                    x: [0, i % 2 === 0 ? 20 : -20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"
                  style={{
                    top: `${Math.random() * 60 + 20}%`,
                    left: `${Math.random() * 60 + 20}%`,
                  }}
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

// 2. Ticker Section
const TickerSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#020202] via-[#0a0f1c] to-[#020202] border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 px-10 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-4"><Database className="w-6 h-6 text-gray-500" /><span className="text-xl font-bold text-gray-400">PETABYTE SCALE</span></div>
              <div className="flex items-center gap-4"><Shield className="w-6 h-6 text-gray-500" /><span className="text-xl font-bold text-gray-400">MILITARY-GRADE SECURITY</span></div>
              <div className="flex items-center gap-4"><Zap className="w-6 h-6 text-gray-500" /><span className="text-xl font-bold text-gray-400">ULTRA-LOW LATENCY</span></div>
              <div className="flex items-center gap-4"><Globe className="w-6 h-6 text-gray-500" /><span className="text-xl font-bold text-gray-400">GLOBAL EDGE NETWORK</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 3. Architecture Flow
const ArchitectureSection = () => {
  return (
    <section className="py-24 bg-[#030408] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Architecture</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">One cohesive platform powering bespoke solutions across all industries.</p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
           {/* Line connecting them */}
           <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block">
              <motion.div 
                 animate={{ x: ["-100%", "300%"] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
           </div>

           {[
             { title: "Data Ingestion", icon: Database, desc: "Seamlessly aggregate multi-modal data from across the enterprise." },
             { title: "AI Processing", icon: Cpu, desc: "Real-time inference and fine-tuned predictive modeling." },
             { title: "Action & APIs", icon: Network, desc: "Deploy automated workflows and scalable integrations globally." }
           ].map((step, i) => (
             <div key={i} className="relative z-10 w-full md:w-72 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group hover:border-blue-500/50 transition-colors my-4 md:my-0 shadow-xl">
               <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                 <step.icon className="w-8 h-8 text-blue-400 icon-draw-animation" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

// 4. Bento Grid (Platform Features)
const PlatformFeaturesSection = () => {
  return (
    <section className="py-24 bg-[#020202] max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Platform <span className="text-blue-500">Capabilities</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[200px]">
        {/* Box 1: Elastic Scaling */}
        <div className="relative rounded-3xl p-[1px] overflow-hidden group md:col-span-2">
           <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{ backgroundImage: `conic-gradient(from 90deg, transparent 0 70%, #60a5fa 100%)` }} />
           <div className="relative z-10 w-full h-full bg-[#050505] rounded-[23px] p-6 flex flex-col justify-between overflow-hidden">
              {/* Diagram */}
              <div className="absolute top-6 right-6 w-36 h-20 flex flex-col gap-2 opacity-60">
                 {[1,2,3,4].map(i => (
                    <motion.div 
                       key={i}
                       animate={{ width: ["40%", "100%", "40%"], opacity: [0.3, 1, 0.3] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                       className="h-3 bg-blue-500/20 rounded-full border border-blue-500/40 relative overflow-hidden"
                    >
                       <motion.div animate={{ x: ["-100%", "300%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.2 }} className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
                    </motion.div>
                 ))}
              </div>
              
              <div className="mt-auto z-10 w-4/5 md:w-3/5">
                 <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]"><Layers className="w-4 h-4 text-blue-400" /></div>
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Elastic Scaling</h3>
                 <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Auto-scales compute instantly to handle millions of requests without degradation.</p>
              </div>
           </div>
        </div>

        {/* Box 2: Zero-Trust */}
        <div className="relative rounded-3xl p-[1px] overflow-hidden group md:col-span-1">
           <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{ backgroundImage: `conic-gradient(from 90deg, transparent 0 70%, #c084fc 100%)` }} />
           <div className="relative z-10 w-full h-full bg-[#050505] rounded-[23px] p-6 flex flex-col justify-between overflow-hidden">
              {/* Diagram */}
              <div className="absolute top-1/2 right-6 -translate-y-1/2 w-24 h-24 flex items-center justify-center opacity-70">
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-purple-500/30" />
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-3 rounded-full border border-purple-500/20 border-t-purple-500/80" />
                 <Shield className="w-6 h-6 text-purple-400 z-10 relative" />
              </div>

              <div className="mt-auto z-10 w-3/4">
                 <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3 border border-purple-500/20 shadow-[0_0_15px_rgba(192,132,252,0.15)]"><ShieldAlert className="w-4 h-4 text-purple-400" /></div>
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Zero-Trust</h3>
                 <p className="text-gray-500 text-xs md:text-sm leading-relaxed">End-to-end robust encryption at every layer.</p>
              </div>
           </div>
        </div>

        {/* Box 3: Edge Deployment */}
        <div className="relative rounded-3xl p-[1px] overflow-hidden group md:col-span-1">
           <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{ backgroundImage: `conic-gradient(from 90deg, transparent 0 70%, #34d399 100%)` }} />
           <div className="relative z-10 w-full h-full bg-[#050505] rounded-[23px] p-6 flex flex-col justify-between overflow-hidden">
              {/* Diagram */}
              <div className="absolute top-6 right-6 w-24 h-24 opacity-60">
                 {[...Array(6)].map((_, i) => (
                   <motion.div 
                     key={i}
                     animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                     transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                     className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"
                     style={{ top: `${20 + Math.random()*60}%`, left: `${20 + Math.random()*60}%` }}
                   />
                 ))}
                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <motion.path d="M 20 50 L 50 20 L 80 50 L 50 80 Z" fill="none" stroke="#34d399" strokeWidth="0.5" strokeDasharray="150" animate={{ strokeDashoffset: [150, 0, 150] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} opacity="0.4" />
                    <motion.path d="M 10 30 L 90 70" fill="none" stroke="#34d399" strokeWidth="0.5" strokeDasharray="150" animate={{ strokeDashoffset: [150, 0, 150] }} transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }} opacity="0.3" />
                 </svg>
              </div>

              <div className="mt-auto z-10 w-3/4">
                 <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 border border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.15)]"><Globe className="w-4 h-4 text-emerald-400" /></div>
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Edge Node</h3>
                 <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Deploy AI models anywhere globally.</p>
              </div>
           </div>
        </div>

        {/* Box 4: Advanced Analytics */}
        <div className="relative rounded-3xl p-[1px] overflow-hidden group md:col-span-2">
           <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{ backgroundImage: `conic-gradient(from 90deg, transparent 0 70%, #facc15 100%)` }} />
           <div className="relative z-10 w-full h-full bg-[#050505] rounded-[23px] p-6 flex flex-col justify-between overflow-hidden">
              {/* Diagram */}
              <div className="absolute top-8 right-8 w-44 h-20 flex items-end gap-2 opacity-60">
                 {[40, 70, 30, 90, 50, 100, 60, 80].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${height}%`, `${Math.random()*100 + 20}%`, `${height}%`] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      className="flex-1 bg-yellow-500/20 border border-yellow-500/40 rounded-t-sm relative overflow-hidden"
                    >
                       <motion.div animate={{ y: ["100%", "-100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.3 }} className="absolute inset-0 h-1/2 bg-gradient-to-t from-transparent via-yellow-400 to-transparent opacity-60" />
                    </motion.div>
                 ))}
              </div>

              <div className="mt-auto z-10 w-4/5 md:w-3/5">
                 <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-3 border border-yellow-500/20 shadow-[0_0_15px_rgba(250,204,21,0.15)]"><BarChart className="w-4 h-4 text-yellow-400" /></div>
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Deep Analytics</h3>
                 <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Real-time deep insights and comprehensive visual data pipelines.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// 5. Industry Grid
const IndustryGridSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#030408] border-y border-white/5 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
       
       <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: The Animated Diagram */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[350px] md:h-[450px]">
             {/* Central Hub */}
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border border-white/5" />
             <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-white/10 border-dashed" />
             
             <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-[#050505] rounded-full flex flex-col items-center justify-center border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] z-20">
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-400 mb-1" />
                <span className="text-[6px] md:text-[8px] text-blue-400 font-bold tracking-widest uppercase">Global</span>
             </div>

             {/* Connection Line */}
             {industries.map((ind, idx) => {
                if(activeIndex !== idx) return null;
                const angle = (idx / industries.length) * 360;
                return (
                   <motion.div 
                      key={`line-${idx}`}
                      initial={{ width: 0 }}
                      animate={{ width: typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 130 }} 
                      className="absolute left-1/2 top-1/2 h-[2px] -translate-y-1/2 origin-left z-10 hidden md:block"
                      style={{ 
                         backgroundColor: ind.color, 
                         transform: `rotate(${angle}deg)`,
                         boxShadow: `0 0 10px ${ind.color}`
                      }}
                   />
                );
             })}

              {/* Orbital Industry Nodes */}
             {industries.map((ind, idx) => {
                const angle = (idx / industries.length) * 360;
                const radiusMobile = 120;
                const radiusDesktop = 150;
                const isActive = activeIndex === idx;

                return (
                   <div 
                      key={idx} 
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center ${isActive ? 'z-50' : 'z-20'}`}
                   >
                      <style>{`
                         @media (min-width: 768px) {
                           .node-${idx} { transform: rotate(${angle}deg) translateX(${radiusDesktop}px) rotate(-${angle}deg); }
                         }
                         @media (max-width: 767px) {
                           .node-${idx} { transform: rotate(${angle}deg) translateX(${radiusMobile}px) rotate(-${angle}deg); }
                         }
                      `}</style>
                      <div 
                         className={`node-${idx} relative cursor-pointer transition-all duration-300 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border ${isActive ? 'bg-[#0a0a0a] scale-125 shadow-2xl' : 'bg-[#050505] hover:scale-110'}`} 
                         style={{ borderColor: isActive ? ind.color : 'rgba(255,255,255,0.1)', boxShadow: isActive ? `0 0 25px ${ind.color}50, inset 0 0 10px ${ind.color}30` : 'none' }}
                         onClick={() => setActiveIndex(idx)}
                      >
                         <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full transition-colors" style={{ backgroundColor: isActive ? ind.color : 'rgba(255,255,255,0.2)', boxShadow: isActive ? `0 0 15px ${ind.color}` : 'none' }} />
                         
                         {/* Name Tag (Desktop only on hover/active) */}
                         <div className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 text-center transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'} pointer-events-none hidden md:block w-max whitespace-nowrap bg-[#050505] border border-white/20 rounded-md py-1.5 px-3 shadow-xl`}>
                            <span className="text-[9px] font-bold text-white uppercase tracking-wider leading-tight">{ind.name}</span>
                         </div>
                      </div>
                   </div>
                );
             })}
          </div>

          {/* Right Side: Information Panel */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
             <div className="mb-10 text-center lg:text-left">
               <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Tailored by <span className="text-blue-500">Industry</span></h2>
               <p className="text-gray-400 text-lg">Select an industry node on the global map to view bespoke solutions and capabilities.</p>
             </div>

             <div className="relative min-h-[250px] md:min-h-[280px] flex items-center w-full">
               <AnimatePresence mode="wait">
                  <motion.div 
                     key={activeIndex}
                     initial={{ opacity: 0, scale: 0.95, y: 10 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 0.95, y: -10 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="w-full relative rounded-3xl p-[1px] overflow-hidden shadow-2xl"
                  >
                     {/* Rotating border gradient */}
                     <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] opacity-60 z-0" style={{ backgroundImage: `conic-gradient(from 90deg, transparent 0 70%, ${industries[activeIndex].color} 100%)` }} />
                     
                     <div className="w-full relative z-10 bg-[#0a0a0a] rounded-[23px] p-8 md:p-12 flex flex-col justify-center">
                         {/* Background Glow */}
                         <div className="absolute top-0 right-0 w-64 h-64 -translate-y-1/2 translate-x-1/2 blur-[100px] opacity-20 pointer-events-none" style={{ backgroundColor: industries[activeIndex].color }} />

                         {industries[activeIndex].isNew && (
                            <span className="absolute top-6 right-6 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full text-amber-500 bg-amber-500/10 border border-amber-500/30">New</span>
                         )}
                         <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 relative z-10">
                           <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border" style={{ backgroundColor: `${industries[activeIndex].color}15`, borderColor: `${industries[activeIndex].color}40`, boxShadow: `0 0 20px ${industries[activeIndex].color}20` }}>
                              <Activity className="w-6 h-6" style={{ color: industries[activeIndex].color }} />
                           </div>
                           <h3 className="text-2xl md:text-3xl font-bold text-white">{industries[activeIndex].name}</h3>
                         </div>
                         <p className="text-gray-400 text-base md:text-lg leading-relaxed relative z-10">{industries[activeIndex].desc}</p>
                     </div>
                  </motion.div>
               </AnimatePresence>
             </div>
          </div>
       </div>
    </section>
  );
};

// 6. Product Map
const ProductMapSection = () => {
  return (
    <section className="py-24 max-w-[1400px] mx-auto px-6 relative">
       <div className="text-center mb-16 relative z-10">
         <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Product <span className="text-indigo-500">Matrix</span></h2>
         <p className="text-gray-400 max-w-xl mx-auto text-lg">Every Fazamous platform is engineered to integrate natively across multiple industries.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[270px] lg:auto-rows-[250px] relative z-10">
          {products.map((product, idx) => {
             // Dynamic Masonry Layout Mapping
             let spanClasses = "col-span-1 row-span-1";
             if (idx === 0 || idx === 4) {
                spanClasses = "md:col-span-2 md:row-span-2";
             } else if (idx === 3 || idx === 9 || idx === 10) {
                spanClasses = "md:col-span-2 md:row-span-1";
             }

             return (
                <div key={product.id} className={`relative bg-[#050505] rounded-3xl border border-white/5 p-5 lg:p-6 overflow-hidden group hover:border-white/20 transition-all duration-500 ${spanClasses}`}>
                   {/* Background Glow Overlay */}
                   <div className="absolute top-0 right-0 w-48 h-48 -translate-y-1/2 translate-x-1/2 blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundColor: product.color }} />
                   
                   <div className="flex flex-col h-full relative z-10">
                      
                      {/* Diagram for Box 1 (Insights) */}
                      {idx === 0 && (
                         <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.25] pointer-events-none flex items-center justify-center z-0">
                            <motion.div animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-10 rounded-full border border-blue-500" />
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30 border-t-blue-400/80" />
                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-12 rounded-full border border-blue-400/40" />
                            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center shadow-[0_0_30px_#3b82f6]">
                               <Network className="w-8 h-8 text-blue-400" />
                            </div>
                         </div>
                      )}

                      {/* Diagram for Box 5 (DataPulse) */}
                      {idx === 4 && (
                         <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-40 opacity-[0.25] pointer-events-none flex flex-col justify-between z-0">
                            {[0, 1, 2, 3].map((i) => (
                               <div key={i} className="w-full h-1 bg-amber-500/20 rounded-full overflow-hidden relative">
                                  <motion.div 
                                     initial={{ x: "-100%" }}
                                     animate={{ x: "500%" }}
                                     transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                                     className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_10px_#f59e0b]" 
                                  />
                               </div>
                            ))}
                            <div className="absolute inset-0 flex items-center justify-center">
                               <div className="w-20 h-20 rounded-xl border border-amber-500/30 bg-[#050505] flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                                  <Database className="w-10 h-10 text-amber-500" />
                               </div>
                            </div>
                         </div>
                      )}
                      <div className="flex justify-between items-start mb-3">
                         <span className="text-2xl lg:text-3xl font-black opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: product.color }}>{product.id}</span>
                         {product.isComingSoon && (
                            <span className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-500">Soon</span>
                         )}
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 lg:mb-2">{product.title}</h3>
                      <p className="text-[9px] lg:text-[10px] uppercase tracking-wider font-bold mb-3 lg:mb-4" style={{ color: product.color }}>{product.subtitle}</p>
                      
                      <p className={`text-gray-400 text-xs lg:text-sm leading-relaxed ${spanClasses.includes('row-span-2') ? 'mb-6 lg:mb-8' : 'mb-3 lg:mb-4'}`}>
                         {spanClasses.includes('row-span-2') ? product.details : product.desc}
                      </p>
                      
                      <div className="mt-auto grid grid-cols-3 gap-2 border-t border-white/5 pt-3 lg:pt-4">
                         {product.metrics.map(m => (
                            <div key={m.label} className="text-center">
                               <div className="text-white font-bold text-xs lg:text-sm">{m.value}</div>
                               <div className="text-gray-500 text-[8px] lg:text-[9px] uppercase tracking-wider mt-1">{m.label}</div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             )
          })}
       </div>
    </section>
  );
};


export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      <HeroSection />
      <TickerSection />
      <ArchitectureSection />
      <PlatformFeaturesSection />
      <IndustryGridSection />
      <ProductMapSection />
      <Contact />
      <Footer />
      
      {/* 3D and Animation Utilities */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-12 { transform: rotateX(12deg); }
        
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(300px); opacity: 0; }
        }
        
        .icon-draw-animation * {
          stroke-dasharray: 150;
          stroke-dashoffset: 150;
          animation: draw-icon 3s ease-in-out infinite;
        }

        @keyframes draw-icon {
          0% { stroke-dashoffset: 150; opacity: 0; }
          10% { opacity: 1; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          70% { stroke-dashoffset: 0; opacity: 1; }
          90% { stroke-dashoffset: 0; opacity: 0; }
          100% { stroke-dashoffset: 150; opacity: 0; }
        }
      `}} />
    </div>
  );
}
