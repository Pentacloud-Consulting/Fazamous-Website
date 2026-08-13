"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, Map, AlertTriangle, Route, 
  Workflow, Network, Ship, Truck, 
  Cpu, Activity, Database, CheckCircle2, Search
} from 'lucide-react';
import { Navbar } from '@/components/Top-bottom/Navbar';
import { Footer } from '@/components/Top-bottom/Footer';
import CTA from '@/Frontend/Home/Contact';

// Section 1: Hero (Global Logistics Mesh)
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-[#0a0a0c]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#f59e0b]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#d97706]/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Side: Information */}
        <div className="text-left">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-bold text-[#f59e0b] uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <Box className="w-4 h-4 animate-pulse" />
            SupplySync AI
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-[70px] font-bold leading-[1.1] mb-6 tracking-tight text-white"
          >
            Unified Intelligence.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#fcd34d]">Zero Disruptions.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-8"
          >
            Synchronize independent software and hardware systems across the entire global supply chain into a single pane of glass. Detect bottlenecks and dynamically reroute resources in real-time.
          </motion.p>
        </div>

        {/* Right Side: Animated Diagram */}
        <div className="relative w-full hidden lg:block">
          {/* Main Diagram Container */}
          <div className="w-full aspect-[4/3] bg-[#0c0c10] border border-white/5 rounded-3xl relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f59e0b]/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] pointer-events-none" />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(245,158,11,0.5))' }}>
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                d="M 20% 25% L 50% 65% L 80% 35%"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              <path 
                d="M 20% 25% L 50% 65% L 80% 35%"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2"
              />
            </svg>

            {/* Animated Data Packet */}
            <motion.div 
               animate={{ 
                 left: ["20%", "50%", "80%"], 
                 top: ["25%", "65%", "35%"],
                 opacity: [0, 1, 1, 1, 0]
               }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] -ml-1.5 -mt-1.5 z-10"
            />

            {/* Node 1: Manufacturer */}
            <div className="absolute top-[15%] left-[5%] bg-[#121217]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-44 shadow-xl z-20">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Database className="w-4 h-4 text-blue-400" />
                 </div>
                 <span className="text-white font-bold text-sm">Global Supplier</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500 font-mono">STATUS</span>
                <span className="text-blue-400 font-mono">ACTIVE</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
                 <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-blue-500 rounded-full" />
              </div>
            </div>

            {/* Node 2: Transit Hub */}
            <div className="absolute top-[55%] left-[30%] bg-[#121217]/90 backdrop-blur-md border border-[#f59e0b]/40 p-4 rounded-2xl w-48 shadow-[0_0_30px_rgba(245,158,11,0.15)] z-20">
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#f59e0b] animate-ping" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-[#f59e0b]" />
                 </div>
                 <span className="text-white font-bold text-sm">Transit Hub</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500 font-mono">ANOMALY</span>
                <span className="text-[#f59e0b] font-mono">DETECTED</span>
              </div>
              <div className="text-[10px] text-gray-400 mt-1">Rerouting shipment...</div>
            </div>

            {/* Node 3: Warehouse */}
            <div className="absolute top-[25%] left-[60%] bg-[#121217]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-44 shadow-xl z-20">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Box className="w-4 h-4 text-emerald-400" />
                 </div>
                 <span className="text-white font-bold text-sm">Fulfillment</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500 font-mono">ETA</span>
                <span className="text-emerald-400 font-mono">ON TIME</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
                 <motion.div animate={{ width: ["40%", "70%", "40%"] }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-emerald-500 rounded-full" />
              </div>
            </div>

            {/* Scanning Laser Effect */}
            <motion.div 
               animate={{ top: ["-20%", "120%", "-20%"] }}
               transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#f59e0b]/10 to-transparent pointer-events-none z-30"
            />
            
            {/* Center Core representation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#0a0a0c]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-20 shadow-xl">
              <Cpu className="w-4 h-4 text-[#f59e0b] animate-pulse" />
              <span className="text-xs font-bold text-white tracking-wider">FAZAMOUS AI CORE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Section 2: Supply Chain Metrics Ticker
const MetricsTickerSection = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-[#0a0a0c] via-[#1a1405] to-[#0a0a0c] border-y border-[#f59e0b]/10 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 px-8 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-3"><Route className="w-6 h-6 text-[#f59e0b]" /><span className="text-2xl font-black text-white">DYNAMIC REROUTING</span></div>
              <div className="flex items-center gap-3"><AlertTriangle className="w-6 h-6 text-[#fbbf24]" /><span className="text-2xl font-black text-white">PREDICTIVE FAILURE ALERTS</span></div>
              <div className="flex items-center gap-3"><Cpu className="w-6 h-6 text-[#fcd34d]" /><span className="text-2xl font-black text-white">100% HARDWARE SYNC</span></div>
              <div className="flex items-center gap-3"><Activity className="w-6 h-6 text-orange-500" /><span className="text-2xl font-black text-white">ZERO DISRUPTIONS</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: Ecosystem Synchronization (Animated Diagram)
const SynchronizationDiagramSection = () => {
  return (
    <section className="py-16 md:py-20 relative bg-[#0d0d12] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Hardware + Software <span className="text-[#f59e0b]">Fusion</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">SupplySync AI breaks down silos by instantly translating telemetry from physical sensors and joining it with enterprise ERP data through a centralized intelligence layer.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative p-6 md:p-8 bg-[#0c0c10] border border-white/5 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          
          {/* Absolute Background connecting lines (Desktop Only) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
             <svg className="w-full h-full opacity-60">
                {/* Left to Center (Physical to Core) */}
                <motion.path 
                  d="M 25% 25% C 35% 25%, 40% 50%, 50% 50%" 
                  stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [32, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.path 
                  d="M 25% 50% L 50% 50%" 
                  stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [32, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.path 
                  d="M 25% 75% C 35% 75%, 40% 50%, 50% 50%" 
                  stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [32, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center to Right (Core to Enterprise) */}
                <motion.path 
                  d="M 50% 50% C 60% 50%, 65% 25%, 75% 25%" 
                  stroke="#10b981" strokeWidth="3" fill="none" strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [32, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.path 
                  d="M 50% 50% L 75% 50%" 
                  stroke="#10b981" strokeWidth="3" fill="none" strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [32, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.path 
                  d="M 50% 50% C 60% 50%, 65% 75%, 75% 75%" 
                  stroke="#10b981" strokeWidth="3" fill="none" strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [32, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
             </svg>
          </div>

          {/* Left Column: Physical Layer */}
          <div className="flex flex-col justify-center gap-4 z-10">
            <div className="flex items-center justify-center gap-2 mb-2">
               <div className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
               <h3 className="text-[#f59e0b] text-xs font-bold uppercase tracking-widest text-center">Physical Edge Layer</h3>
            </div>
            {[
              { label: "Fleet Telemetry", icon: Truck },
              { label: "Port Sensors", icon: Ship },
              { label: "Warehouse IoT", icon: Cpu }
            ].map((item, i) => (
              <div key={i} className="bg-[#121217] border border-[#f59e0b]/20 p-3 md:p-4 rounded-2xl flex items-center justify-between relative group hover:border-[#f59e0b]/60 transition-colors shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center border border-[#f59e0b]/20">
                    <item.icon className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  <span className="text-white font-bold text-sm md:text-base">{item.label}</span>
                </div>
                <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} className="w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_12px_#f59e0b]" />
              </div>
            ))}
          </div>

          {/* Center Column: FAZAMOUS AI */}
          <div className="flex items-center justify-center z-10 relative py-8 lg:py-0">
             <motion.div 
                animate={{ scale: [1, 1.02, 1] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-b from-[#1a1a24] to-[#0c0c10] border border-white/10 shadow-[0_0_60px_rgba(245,158,11,0.15)] flex flex-col items-center justify-center relative overflow-hidden group"
             >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f59e0b]/10 to-[#10b981]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Inner rotating rings */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-6 border-2 border-dashed border-[#f59e0b]/30 rounded-full" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute inset-10 border border-emerald-500/30 rounded-full" />
                
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#f59e0b] to-orange-600 flex items-center justify-center shadow-2xl mb-3 relative z-10 border border-white/20">
                   <Network className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <span className="text-white font-bold text-xl md:text-2xl relative z-10">Fazamous Core</span>
                <div className="flex items-center gap-2 mt-2 bg-black/50 px-3 py-1 rounded-full border border-white/5 relative z-10">
                   <Activity className="w-3 h-3 text-emerald-400" />
                   <span className="text-gray-300 text-[9px] md:text-[10px] font-mono tracking-widest uppercase">Intelligence Sync</span>
                </div>
             </motion.div>
          </div>

          {/* Right Column: Enterprise Layer */}
          <div className="flex flex-col justify-center gap-4 z-10">
            <div className="flex items-center justify-center gap-2 mb-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <h3 className="text-emerald-500 text-xs font-bold uppercase tracking-widest text-center">Enterprise Logic Layer</h3>
            </div>
            {[
              { label: "Global ERP System", icon: Database },
              { label: "WMS Dashboard", icon: Workflow },
              { label: "Supplier Portals", icon: Network }
            ].map((item, i) => (
              <div key={i} className="bg-[#121217] border border-emerald-500/20 p-3 md:p-4 rounded-2xl flex items-center justify-between flex-row-reverse relative group hover:border-emerald-500/60 transition-colors shadow-lg">
                <div className="flex items-center gap-3 flex-row-reverse">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <item.icon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <span className="text-white font-bold text-sm md:text-base">{item.label}</span>
                </div>
                <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: (i * 0.3) + 0.7 }} className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// Section 4: Capabilities Grid
const CapabilitiesSection = () => {
  const cases = [
    { 
      title: "Unified Intelligence Platform", 
      desc: "Synchronize independent software and hardware systems across the entire global supply chain into a single pane of glass.", 
      delay: 0,
      diagram: (
        <div className="w-full h-full relative flex items-center justify-center">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-2.5 border border-dashed border-[#f59e0b]/40 rounded-full" />
          <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2.5 h-2.5 bg-[#f59e0b] rounded-full shadow-[0_0_12px_#f59e0b] z-10" />
        </div>
      )
    },
    { 
      title: "Anomaly Detection", 
      desc: "Detect localized bottlenecks and issue predictive failure warnings hours before physical shipments are delayed.", 
      delay: 0.1,
      diagram: (
        <div className="w-full h-full relative flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-[#f59e0b] relative z-10" />
          <motion.div animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 m-auto w-4 h-4 bg-[#f59e0b]/40 rounded-full" />
        </div>
      )
    },
    { 
      title: "Root Cause Analysis", 
      desc: "Autonomously trace delivery delays back to specific vendor failures, weather patterns, or macro-economic events.", 
      delay: 0.2,
      diagram: (
        <div className="w-full h-full relative flex items-center justify-center">
           <Search className="w-5 h-5 text-[#f59e0b] z-10" />
           <motion.svg className="absolute inset-0 w-full h-full" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <circle cx="28" cy="28" r="20" fill="none" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" strokeDasharray="6 6" />
           </motion.svg>
        </div>
      )
    },
    { 
      title: "Centralized Monitoring", 
      desc: "Dynamically reroute resources and keep all stakeholders informed to mitigate operational risks in real-time.", 
      delay: 0.3,
      diagram: (
         <div className="w-full h-full relative flex items-center justify-center gap-1.5 items-end pb-3.5">
            {[1, 2, 3].map((bar) => (
              <motion.div 
                 key={bar}
                 animate={{ height: ["20%", "80%", "20%"] }}
                 transition={{ duration: 1.5, repeat: Infinity, delay: bar * 0.2, ease: "easeInOut" }}
                 className="w-1.5 bg-[#f59e0b] rounded-t-sm"
              />
            ))}
         </div>
      )
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Operational <span className="text-gray-500">Excellence</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((card, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: card.delay }}
            className="group relative rounded-2xl p-[1px] overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer"
          >
            {/* Rotating Shine Border (visible only on hover) */}
            <div className="absolute inset-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_280deg,#f59e0b_360deg)]"
              />
            </div>

            {/* Inner Card Background */}
            <div className="relative bg-[#121217] w-full h-full rounded-2xl p-6 xl:p-8 flex flex-col z-10 border border-white/5 group-hover:border-transparent transition-colors duration-500">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#f59e0b]/10 to-transparent blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="flex items-center justify-between mb-6 relative z-20">
                 <div className="w-14 h-14 rounded-xl bg-[#1a1a24] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#f59e0b]/10 group-hover:border-[#f59e0b]/30 shadow-inner overflow-hidden">
                   {card.diagram}
                 </div>
               </div>
               
               <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#f59e0b] transition-colors relative z-20">
                 {card.title}
               </h3>
               
               <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors relative z-20">
                 {card.desc}
               </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Section 5: Real-time Anomaly Rerouting (Interactive Dashboard Mockup)
const AnomalyReroutingSection = () => {
  const [anomalyActive, setAnomalyActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnomalyActive(prev => !prev);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative bg-[#0a0a0c] overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_right,rgba(245,158,11,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side: Information */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Dynamic <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-orange-500">Risk Mitigation</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            When weather anomalies or port congestions strike, SupplySync AI doesn't just alert you. It autonomously calculates the most cost-effective alternative route and dispatches updates to logistics partners instantly.
          </p>
          
          <div className="flex flex-col gap-5">
            <div className={`flex items-start gap-5 p-5 rounded-2xl border transition-all duration-500 ${anomalyActive ? 'bg-red-500/5 border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.05)]' : 'bg-[#121217] border-white/5'}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${anomalyActive ? 'bg-red-500/20' : 'bg-white/5'}`}>
                 <AlertTriangle className={`w-6 h-6 transition-colors duration-500 ${anomalyActive ? 'text-red-500' : 'text-gray-500'}`} />
              </div>
              <div>
                <h4 className={`font-bold text-lg mb-1 transition-colors duration-500 ${anomalyActive ? 'text-red-400' : 'text-white'}`}>Instant Bottleneck Detection</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Identifies gridlock at major transit hubs globally using multi-modal data streams.</p>
              </div>
            </div>
            
            <div className={`flex items-start gap-5 p-5 rounded-2xl border transition-all duration-500 ${!anomalyActive ? 'bg-emerald-500/5 border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)]' : 'bg-[#121217] border-white/5'}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${!anomalyActive ? 'bg-emerald-500/20' : 'bg-white/5'}`}>
                 <Route className={`w-6 h-6 transition-colors duration-500 ${!anomalyActive ? 'text-emerald-500' : 'text-gray-500'}`} />
              </div>
              <div>
                <h4 className={`font-bold text-lg mb-1 transition-colors duration-500 ${!anomalyActive ? 'text-emerald-400' : 'text-white'}`}>Autonomous Rerouting</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Prescribes and executes alternative paths preserving strict delivery SLAs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Radar UI Mockup */}
        <div className="lg:w-1/2 w-full relative">
          <div className="w-full aspect-square md:aspect-[4/3] bg-[#0c0c10] border border-white/5 rounded-3xl p-6 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between">
             
             {/* Radar Container */}
             <div className="absolute inset-0 m-auto w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-white/10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-white/10 scale-[0.66]" />
                <div className="absolute inset-0 rounded-full border border-white/10 scale-[0.33]" />
                <div className="w-full h-[1px] bg-white/5 absolute top-1/2 left-0" />
                <div className="h-full w-[1px] bg-white/5 absolute top-0 left-1/2" />
                
                {/* Radar Sweep */}
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(245,158,11,0.2)_360deg)] origin-center pointer-events-none"
                />

                {/* Nodes */}
                <div className="absolute left-[70%] top-[30%] w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
                <div className="absolute left-[30%] top-[75%] w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
                <div className="absolute left-[65%] top-[80%] w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
                
                {/* Anomaly Node */}
                <div className="absolute left-[20%] top-[35%] flex items-center justify-center">
                   <AnimatePresence>
                     {anomalyActive ? (
                       <>
                         <motion.div initial={{ scale: 0 }} animate={{ scale: 3 }} exit={{ scale: 0 }} transition={{ duration: 1, repeat: Infinity }} className="absolute w-4 h-4 bg-red-500/30 rounded-full animate-ping" />
                         <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_red] z-10" />
                       </>
                     ) : (
                       <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
                     )}
                   </AnimatePresence>
                </div>
             </div>

             {/* UI Overlay */}
             <div className="relative z-20 flex justify-between items-start w-full">
                <div className="bg-[#1a1a24] border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg">
                   <div className="relative w-2 h-2">
                     <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} className={`absolute inset-0 rounded-full ${anomalyActive ? 'bg-red-500' : 'bg-[#f59e0b]'}`} />
                   </div>
                   <span className="text-xs font-bold text-white tracking-widest">FAZAMOUS RADAR</span>
                </div>
                <div className="text-[10px] font-mono text-gray-500 bg-[#1a1a24] border border-white/5 px-3 py-1.5 rounded-lg tracking-wider">LIVE SENSOR FEED</div>
             </div>

             {/* Anomaly Readout Panel */}
             <div className="relative z-20 mt-auto w-full bg-[#121217]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                   <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">System Status</span>
                   <span className={`text-xs font-bold font-mono tracking-widest transition-colors duration-300 ${anomalyActive ? 'text-red-500' : 'text-emerald-500'}`}>
                      {anomalyActive ? 'THREAT DETECTED' : 'OPTIMAL'}
                   </span>
                </div>
                <AnimatePresence mode="wait">
                   {anomalyActive ? (
                     <motion.div 
                        key="threat"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-sm"
                     >
                       <div className="text-red-400 font-bold mb-2 flex items-center gap-2">
                         <AlertTriangle className="w-4 h-4" /> Port Congestion: SE Asia
                       </div>
                       <div className="text-red-200/70 font-mono text-xs">Auto-rerouting shipments via alternate hub. SLA preserved. ETA impact mitigated.</div>
                     </motion.div>
                   ) : (
                     <motion.div 
                        key="clear"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-sm"
                     >
                       <div className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                         <CheckCircle2 className="w-4 h-4" /> All Routes Clear
                       </div>
                       <div className="text-emerald-200/70 font-mono text-xs">No active disruptions identified in the network. Fleet operating at 98.4% efficiency.</div>
                     </motion.div>
                   )}
                </AnimatePresence>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default function SupplyChain() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-[#f59e0b]/30">
      <Navbar />
      
      <HeroSection />
      <MetricsTickerSection />
      <SynchronizationDiagramSection />
      <CapabilitiesSection />
      <AnomalyReroutingSection />
      <CTA />

      <Footer />
    </div>
  );
}
