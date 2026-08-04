"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, Map, AlertTriangle, Route, 
  Workflow, Network, Ship, Truck, 
  Cpu, Activity, Database, CheckCircle2, Search
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import CTA from '@/Frontend/Home/CTA';

// Section 1: Hero (Global Logistics Mesh)
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 bg-[#0a0a0c]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#f59e0b]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#d97706]/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Abstract Logistics Network Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated pulsing nodes across the grid */}
          {[...Array(15)].map((_, i) => (
             <motion.circle 
               key={i}
               cx={`${Math.random() * 100}%`} 
               cy={`${Math.random() * 100}%`} 
               r="2" 
               fill="#f59e0b"
               animate={{ scale: [1, 3, 1], opacity: [0.2, 1, 0.2] }}
               transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
             />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mt-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-bold text-[#f59e0b] uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
        >
          <Box className="w-4 h-4 animate-pulse" />
          NexusFlow AI
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[85px] font-bold leading-[1.1] mb-8 tracking-tight text-white"
        >
          Unified Intelligence.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#fcd34d]">Zero Disruptions.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Synchronize independent software and hardware systems across the entire global supply chain into a single pane of glass. Detect bottlenecks and dynamically reroute resources in real-time.
        </motion.p>
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
    <section className="py-24 relative bg-[#0d0d12] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Hardware + Software <span className="text-[#f59e0b]">Fusion</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">NexusFlow AI breaks down silos by instantly translating telemetry from physical sensors and joining it with enterprise ERP data.</p>
        </div>

        <div className="relative w-full py-16 px-8 bg-[#121217] rounded-3xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between">
          
          {/* Physical Hardware Layer */}
          <div className="flex flex-col gap-6 z-10 w-full md:w-1/4">
            <h3 className="text-white/40 text-xs font-mono uppercase tracking-widest text-center mb-2">Physical Layer</h3>
            {[
              { label: "Fleet Telemetry", icon: Truck },
              { label: "Port Sensors", icon: Ship },
              { label: "Warehouse IoT", icon: Cpu }
            ].map((item, i) => (
              <div key={i} className="bg-[#1a1a24] border border-orange-500/30 p-4 rounded-xl flex items-center gap-4 relative">
                <item.icon className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-300 font-semibold">{item.label}</span>
                {/* Outgoing data packets */}
                <motion.div 
                  animate={{ x: [0, 80], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
                  className="absolute right-[-10px] w-2 h-2 rounded-full bg-orange-500 hidden md:block"
                />
              </div>
            ))}
          </div>

          {/* Central AI Processor */}
          <div className="relative z-10 w-full md:w-1/3 my-12 md:my-0 flex justify-center perspective-1000">
            <motion.div 
              animate={{ rotateY: [0, 10, 0, -10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-br from-[#2a1b08] to-[#120d04] border-2 border-[#f59e0b]/40 rounded-full p-8 shadow-[0_0_40px_rgba(245,158,11,0.3)] flex flex-col items-center text-center w-56 h-56 justify-center relative overflow-hidden"
            >
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-2 border border-dashed border-[#f59e0b]/30 rounded-full" />
              <Network className="w-12 h-12 text-[#f59e0b] mb-2" />
              <div className="text-white font-bold text-lg leading-tight mb-1">NexusFlow<br/>Core</div>
            </motion.div>
          </div>

          {/* Enterprise Software Layer */}
          <div className="flex flex-col gap-6 z-10 w-full md:w-1/4">
            <h3 className="text-white/40 text-xs font-mono uppercase tracking-widest text-center mb-2">Enterprise Layer</h3>
            {[
              { label: "Global ERP System", icon: Database },
              { label: "WMS Dashboard", icon: Workflow },
              { label: "Supplier Portals", icon: Network }
            ].map((item, i) => (
              <div key={i} className="bg-[#1a1a24] border border-[#f59e0b]/30 p-4 rounded-xl flex items-center justify-between relative shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                {/* Incoming data packets */}
                <motion.div 
                  animate={{ x: [-80, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                  className="absolute left-[-10px] w-2 h-2 rounded-full bg-[#f59e0b] hidden md:block"
                />
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-[#f59e0b]" />
                  <span className="text-sm text-gray-300 font-semibold">{item.label}</span>
                </div>
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
    { title: "Unified Intelligence Platform", desc: "Synchronize independent software and hardware systems across the entire global supply chain into a single pane of glass.", icon: Box, delay: 0 },
    { title: "Anomaly Detection", desc: "Detect localized bottlenecks and issue predictive failure warnings hours before physical shipments are delayed.", icon: AlertTriangle, delay: 0.1 },
    { title: "Root Cause Analysis", desc: "Autonomously trace delivery delays back to specific vendor failures, weather patterns, or macro-economic events.", icon: Search, delay: 0.2 },
    { title: "Centralized Monitoring", desc: "Dynamically reroute resources and keep all stakeholders informed to mitigate operational risks in real-time.", icon: Map, delay: 0.3 }
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Operational <span className="text-gray-500">Excellence</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((card, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: card.delay }}
            className={`group relative bg-[#121217] border border-white/5 p-8 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:bg-[#f59e0b]/5 hover:border-[#f59e0b]/30 hover:-translate-y-1`}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#f59e0b]/10 to-transparent blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 rounded-xl bg-[#1a1a24] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#f59e0b]/20 group-hover:border-[#f59e0b]/40 shadow-inner`}>
                <card.icon className={`w-7 h-7 text-gray-500 group-hover:text-[#f59e0b] transition-colors duration-500`} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#f59e0b] transition-colors">
              {card.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              {card.desc}
            </p>
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
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#0a0a0c] to-[#0d0d12] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Dynamic <br/><span className="text-[#f59e0b]">Risk Mitigation</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            When weather anomalies or port congestions strike, NexusFlow AI doesn't just alert you. It autonomously calculates the most cost-effective alternative route and dispatches updates to logistics partners instantly.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121217] border border-white/5">
              <AlertTriangle className={`w-6 h-6 shrink-0 mt-0.5 transition-colors duration-500 ${anomalyActive ? 'text-red-500' : 'text-gray-600'}`} />
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Instant Bottleneck Detection</h4>
                <p className="text-sm text-gray-400">Identifies gridlock at major transit hubs globally.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121217] border border-white/5">
              <Route className={`w-6 h-6 shrink-0 mt-0.5 transition-colors duration-500 ${anomalyActive ? 'text-emerald-500' : 'text-gray-600'}`} />
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Autonomous Rerouting</h4>
                <p className="text-sm text-gray-400">Prescribes alternative paths preserving strict delivery SLAs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated UI Mockup */}
        <div className="lg:w-1/2 w-full perspective-1000">
          <motion.div 
            initial={{ rotateY: 15, rotateX: 5 }}
            animate={{ rotateY: [15, 5, 15], rotateX: [5, 2, 5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-[#15151e] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(245,158,11,0.15)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="h-12 border-b border-white/10 flex items-center px-4 gap-3 bg-[#101016]">
              <Map className="w-5 h-5 text-[#f59e0b]" />
              <div className="text-sm text-white font-bold tracking-wide">Logistics Map View</div>
              <div className="ml-auto text-[10px] font-mono bg-white/5 px-2 py-1 rounded text-gray-400">SHIPMENT_ID: 884-X</div>
            </div>
            
            <div className="p-5 flex flex-col gap-4">
              {/* Map Area */}
              <div className="h-48 bg-[#0a0a0e] rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
                 
                 {/* Nodes */}
                 <div className="absolute left-[10%] top-[40%] w-3 h-3 bg-white rounded-full z-10" />
                 <div className="absolute left-[50%] top-[60%] w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center z-10">
                    <AnimatePresence>
                      {anomalyActive && (
                        <motion.div 
                          initial={{ scale: 0 }} 
                          animate={{ scale: 1 }} 
                          exit={{ scale: 0 }} 
                          className="absolute inset-[-10px] bg-red-500/20 rounded-full animate-ping" 
                        />
                      )}
                    </AnimatePresence>
                 </div>
                 <div className="absolute right-[10%] top-[30%] w-3 h-3 bg-emerald-500 rounded-full z-10" />

                 {/* Original Route */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none">
                   <motion.path 
                     d="M 10% 40% L 50% 60% L 90% 30%" 
                     fill="none" 
                     stroke={anomalyActive ? "rgba(255,255,255,0.2)" : "rgba(245,158,11,0.8)"} 
                     strokeWidth="2" 
                     className="transition-colors duration-500"
                   />
                 </svg>

                 {/* New Alternative Route */}
                 <AnimatePresence>
                   {anomalyActive && (
                     <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                       <motion.path 
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 1, ease: "easeInOut" }}
                         d="M 10% 40% Q 40% 10% 90% 30%" 
                         fill="none" 
                         stroke="#10b981" 
                         strokeWidth="2"
                         strokeDasharray="4,4"
                       />
                     </svg>
                   )}
                 </AnimatePresence>

                 {/* Status Overlay */}
                 <AnimatePresence>
                    {anomalyActive && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-4 left-4 bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] font-mono px-3 py-1 rounded backdrop-blur-sm"
                      >
                        ALERT: PORT CONGESTION (EST. +14 HRS)
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              {/* Action Board */}
              <div className="bg-[#121217] rounded-lg p-3 text-xs flex items-center justify-between">
                 <div>
                   <span className="text-gray-400 block mb-1">Status</span>
                   <span className={`font-bold font-mono transition-colors duration-500 ${anomalyActive ? 'text-emerald-400' : 'text-[#f59e0b]'}`}>
                     {anomalyActive ? 'REROUTED (+2 HRS)' : 'ON SCHEDULE'}
                   </span>
                 </div>
                 {anomalyActive && (
                   <motion.button 
                     initial={{ scale: 0.9, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded flex items-center gap-1 font-bold shadow-inner"
                   >
                     <CheckCircle2 className="w-3 h-3" /> Approve Alternative
                   </motion.button>
                 )}
              </div>
            </div>
          </motion.div>
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
