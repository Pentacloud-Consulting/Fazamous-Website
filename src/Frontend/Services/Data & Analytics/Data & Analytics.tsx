"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Activity, ShieldCheck, Share2, 
  BarChart4, Network, AlertTriangle, Layers, 
  Cpu, Lock, SearchCode
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import CTA from '@/Frontend/Home/CTA';

// Section 1: Hero (Abstract Data Core)
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#040201]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#f59e0b]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#fbbf24]/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Information */}
        <div className="lg:w-1/2 w-full text-left">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-bold text-[#f59e0b] uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <Database className="w-4 h-4 animate-pulse" />
            DataPulse Platform
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-[70px] font-bold leading-[1.1] mb-8 tracking-tight text-white"
          >
            Perfect Data.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#fcd34d]">Absolute Observability.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            Act as the guardian of your data warehouse. Continuously validate schema integrity, map end-to-end lineage, and resolve structural pipeline failures before downstream analytics are ever affected.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white font-bold text-sm hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(245,158,11,0.3)]">
              Start Free Trial
            </button>
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-colors backdrop-blur-md">
              View Architecture
            </button>
          </motion.div>
        </div>

        {/* Right Side: Global Data Map */}
        <div className="lg:w-1/2 w-full relative z-10 perspective-1000">
           <motion.div 
             initial={{ rotateY: 15, rotateX: 5 }}
             animate={{ rotateY: [15, 5, 15], rotateX: [5, 2, 5] }}
             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
             className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center"
           >
             {/* Map Background */}
             <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-20 grayscale invert mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,#000_40%,transparent_80%)]" />
             
             {/* Grid / Tech background */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

             {/* Spinning Data Rings */}
             <motion.div 
               animate={{ rotateZ: 360, scale: [1, 1.05, 1] }}
               transition={{ rotateZ: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
               className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -ml-[175px] -mt-[175px] rounded-full border border-dashed border-[#f59e0b]/30 pointer-events-none"
             />
             <motion.div 
               animate={{ rotateZ: -360, scale: [1, 1.1, 1] }}
               transition={{ rotateZ: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
               className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -ml-[225px] -mt-[225px] rounded-full border border-[#f59e0b]/10 pointer-events-none bg-[conic-gradient(from_0deg,transparent_80%,rgba(245,158,11,0.1)_100%)]"
             />

             {/* Map Data Nodes */}
             {[
               { top: '35%', left: '25%', label: 'US-East' },
               { top: '45%', left: '55%', label: 'EU-Central' },
               { top: '65%', left: '45%', label: 'AF-South' },
               { top: '40%', left: '80%', label: 'AP-East' }
             ].map((node, i) => (
               <div key={i} className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ top: node.top, left: node.left }}>
                 <motion.div 
                   animate={{ scale: [1, 4], opacity: [0.8, 0] }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                   className="absolute w-4 h-4 rounded-full bg-[#f59e0b]"
                 />
                 <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24] shadow-[0_0_15px_rgba(251,191,36,1)] z-10" />
                 <div className="absolute top-4 w-max px-2 py-0.5 bg-[#0a0602]/80 border border-[#f59e0b]/30 rounded text-[9px] font-mono text-[#f59e0b] backdrop-blur-sm z-20">
                   {node.label}
                 </div>
               </div>
             ))}
             
             {/* Floating Metric Badges */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-6 left-6 px-4 py-2 bg-[#050201]/90 border border-emerald-500/30 rounded-xl backdrop-blur-md flex flex-col gap-1 shadow-lg"
             >
               <span className="text-[10px] text-gray-400 uppercase tracking-widest">System Health</span>
               <span className="text-emerald-400 font-bold font-mono text-sm flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> 100.00%</span>
             </motion.div>

             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-6 right-6 px-4 py-2 bg-[#050201]/90 border border-[#f59e0b]/30 rounded-xl backdrop-blur-md flex flex-col gap-1 shadow-lg"
             >
               <span className="text-[10px] text-gray-400 uppercase tracking-widest">Active Nodes</span>
               <span className="text-[#f59e0b] font-bold font-mono text-sm flex items-center gap-1"><Network className="w-3 h-3"/> 8,492</span>
             </motion.div>

           </motion.div>
        </div>

      </div>
    </section>
  );
};

// Section 2: Data Metrics Ticker
const MetricsTickerSection = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-[#040201] via-[#1a0f02] to-[#040201] border-y border-[#f59e0b]/10 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 px-8 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-[#f59e0b]" /><span className="text-2xl font-black text-white">ZERO DATA LOSS</span></div>
              <div className="flex items-center gap-3"><SearchCode className="w-6 h-6 text-[#fbbf24]" /><span className="text-2xl font-black text-white">100% SCHEMA VALIDATION</span></div>
              <div className="flex items-center gap-3"><Layers className="w-6 h-6 text-[#fcd34d]" /><span className="text-2xl font-black text-white">PETABYTE SCALE</span></div>
              <div className="flex items-center gap-3"><Activity className="w-6 h-6 text-orange-500" /><span className="text-2xl font-black text-white">&lt;1ms DRIFT DETECTION</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: Data Pipeline Observability (Animated Diagram)
const PipelineArchitectureSection = () => {
  return (
    <section className="py-16 md:py-20 relative bg-[#040201] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[9px] font-mono text-[#f59e0b] mb-4 uppercase tracking-widest">
            <Activity className="w-3 h-3" />
            Pipeline Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fcd34d]">Observability.</span></h2>
        </div>

        <div className="relative flex flex-col items-center w-full">
          
          {/* Layer 1: INGESTION */}
          <div className="w-full relative z-10 text-center">
             <div className="text-[#f59e0b] text-[9px] font-mono uppercase tracking-widest mb-4">1. Ingestion Layer</div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "PostgreSQL", icon: Database },
                  { label: "Kafka Stream", icon: Share2 },
                  { label: "REST APIs", icon: Network }
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -3 }} className="bg-[#0a0602]/80 backdrop-blur-md border border-[#f59e0b]/20 rounded-2xl p-4 flex flex-col items-center text-center shadow-[0_0_20px_rgba(245,158,11,0.05)] relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-b from-[#f59e0b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     <item.icon className="w-6 h-6 text-[#f59e0b] mb-3 relative z-10" />
                     <div className="text-white text-sm font-bold relative z-10">{item.label}</div>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Connecting Line 1 */}
          <div className="w-[2px] h-12 bg-gradient-to-b from-[#f59e0b]/40 to-[#f59e0b]/10 relative overflow-hidden my-4">
             <motion.div animate={{ top: ['-100%', '200%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 bg-white" />
          </div>

          {/* Layer 2: DATAPULSE AI (The Core) */}
          <div className="w-full max-w-2xl relative z-10 text-center">
             <div className="text-[#f59e0b] text-[9px] font-mono uppercase tracking-widest mb-4">2. AI Validation Core</div>
             <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-[#f59e0b]/50 via-white/20 to-[#f59e0b]/50 shadow-[0_0_50px_rgba(245,158,11,0.1)] text-left">
               <div className="absolute inset-0 bg-[#f59e0b]/10 blur-xl rounded-3xl" />
               <div className="bg-[#050201]/95 backdrop-blur-2xl rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-white/10 relative overflow-hidden">
                 
                 {/* Laser scan */}
                 <motion.div animate={{ left: ['-10%', '110%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#f59e0b] to-transparent shadow-[0_0_15px_#f59e0b] z-0 opacity-50" />

                 <div className="shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-[#1a1005] border border-[#f59e0b]/30 flex items-center justify-center relative z-10">
                      <Cpu className="w-6 h-6 text-[#f59e0b]" />
                    </div>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute -inset-3 border border-dashed border-[#f59e0b]/40 rounded-full" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute -inset-6 border border-[#f59e0b]/10 rounded-full" />
                 </div>

                 <div className="flex-1 w-full text-center md:text-left relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">DataPulse Engine</h3>
                    <p className="text-gray-400 text-xs mb-4">Real-time schema validation and anomaly detection before data hits your warehouse.</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {['Schema Integrity', 'Data Drift', 'Null Rates', 'Volume Spikes'].map((task, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 text-[10px] text-gray-300 font-mono">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse shrink-0" />
                           <span className="truncate">{task}</span>
                        </div>
                      ))}
                    </div>
                 </div>

               </div>
             </div>
          </div>

          {/* Connecting Line 2 */}
          <div className="w-[2px] h-12 bg-gradient-to-b from-[#f59e0b]/10 to-[#10b981]/40 relative overflow-hidden my-4">
             <motion.div animate={{ top: ['-100%', '200%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.75 }} className="absolute inset-0 bg-white" />
          </div>

          {/* Layer 3: DESTINATIONS */}
          <div className="w-full relative z-10 text-center">
             <div className="text-[#10b981] text-[9px] font-mono uppercase tracking-widest mb-4">3. Destination Layer</div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
                {[
                  { label: "Snowflake DWH", icon: Layers },
                  { label: "Executive BI", icon: BarChart4 }
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -3 }} className="bg-[#0a0602]/80 backdrop-blur-md border border-[#10b981]/20 rounded-2xl p-4 flex flex-col items-center text-center shadow-[0_0_20px_rgba(16,185,129,0.05)] relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     <item.icon className="w-6 h-6 text-[#10b981] mb-3 relative z-10" />
                     <div className="text-white text-sm font-bold relative z-10">{item.label}</div>
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Section 4: Use Cases Grid (Bento Layout with Magic Borders)
const UseCasesSection = () => {
  const cases = [
    { title: "Data Observability", desc: "Act as the guardian of your data warehouse by providing end-to-end lineage and alerting on structural pipeline failures. Identify issues before they impact downstream analytics.", icon: Network, delay: 0 },
    { title: "Quality Monitoring", desc: "Continuously validate schema integrity and detect subtle data drift.", icon: SearchCode, delay: 0.1 },
    { title: "Pipeline Intelligence", desc: "Autonomously identify and resolve data engineering bottlenecks.", icon: Activity, delay: 0.2 },
    { title: "Enterprise Analytics", desc: "Empower business units with flawlessly verified datasets.", icon: BarChart4, delay: 0.3 },
    { title: "Platform Monitoring", desc: "Maintain zero downtime across distributed data lakes.", icon: Database, delay: 0.4 },
  ];

  return (
    <section className="py-16 md:py-20 max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[9px] font-mono text-[#f59e0b] mb-4 uppercase tracking-widest">
          <Layers className="w-3 h-3" />
          Platform Capabilities
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Unified <span className="text-[#f59e0b]">Intelligence</span></h2>
        <p className="text-gray-400 max-w-xl text-sm md:text-base">Everything you need to ensure pristine data quality and unbreakable pipelines in one unified platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4">
        {cases.map((card, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: card.delay }}
            className={`group relative rounded-2xl overflow-hidden bg-white/5 ${
              i === 0 ? "md:col-span-2" : "col-span-1"
            }`}
          >
            {/* Spinning Magic Border (Hover) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#f59e0b_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            />
            
            {/* Inner Content Card */}
            <div className="absolute inset-[1.5px] rounded-[calc(1rem-1.5px)] bg-[#080402] z-10 flex flex-col p-5 md:p-6 transition-colors duration-500 overflow-hidden">
               
               {/* Subtle background grid on hover */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[linear-gradient(rgba(245,158,11,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.2)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
               
               {/* Visual Element for the Large Card */}
               {i === 0 && (
                 <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:flex items-center justify-end pr-6 pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity duration-700">
                   <svg width="200" height="120" viewBox="0 0 200 120" className="text-[#f59e0b]">
                     <path d="M0,60 C50,60 70,15 100,15 C130,15 150,105 200,105" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                     <motion.circle cx="100" cy="15" r="3" fill="currentColor" filter="drop-shadow(0 0 6px #f59e0b)" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                     <motion.circle cx="200" cy="105" r="3" fill="currentColor" filter="drop-shadow(0 0 6px #f59e0b)" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                   </svg>
                 </div>
               )}

               {/* Icon */}
               <div className="w-10 h-10 rounded-lg bg-[#150a04] border border-white/5 flex items-center justify-center mb-auto relative z-20 group-hover:bg-[#f59e0b]/20 group-hover:border-[#f59e0b]/40 transition-colors duration-500">
                 <card.icon className="w-5 h-5 text-gray-500 group-hover:text-[#f59e0b] transition-colors duration-500" />
               </div>
               
               {/* Text Content */}
               <div className="relative z-20 w-full md:w-3/4">
                 <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#f59e0b] transition-colors duration-500">
                   {card.title}
                 </h3>
                 <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                   {card.desc}
                 </p>
               </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Section 5: Data Drift Dashboard Mockup
const DashboardMockupSection = () => {
  return (
    <section className="py-24 relative bg-[#040201] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f59e0b]/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/4" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* Left Side: Copy & Features */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-mono text-red-500 mb-6 uppercase tracking-widest">
            <AlertTriangle className="w-3.5 h-3.5" />
            Proactive Alerting
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Automated <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#f59e0b]">Drift Detection</span></h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Stop silent data failures before they reach your stakeholders. DataPulse AI autonomously profiles your datasets, learns historical distributions, and alerts engineering teams the exact moment anomalous patterns occur.
          </p>
          
          <div className="flex flex-col gap-4 max-w-lg">
            {[
              { title: "Statistical Profiling", desc: "Machine learning models learn the exact shape, variance, and null-rates of your data.", icon: Activity },
              { title: "Schema Evolution", desc: "Track dropped columns, type changes, or unexpected structural shifts instantly.", icon: Network }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}
                className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 transition-colors cursor-default group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a0a05] border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: High-Fidelity UI Mockup */}
        <div className="relative w-full perspective-1000">
          
          {/* Floating Alert Badge */}
          <motion.div 
             initial={{ opacity: 0, y: 20, rotate: -5 }}
             animate={{ opacity: 1, y: 0, rotate: -5 }}
             transition={{ duration: 0.8, delay: 1 }}
             className="absolute -top-6 -left-6 z-30 bg-[#150a05]/90 backdrop-blur-md border border-red-500/30 px-4 py-2 rounded-xl shadow-[0_10px_30px_rgba(239,68,68,0.2)] flex items-center gap-3"
          >
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
             <span className="text-xs font-bold text-white uppercase tracking-widest">Anomaly Detected</span>
          </motion.div>

          {/* Main Dashboard Window */}
          <motion.div 
            initial={{ rotateY: 15, rotateX: 5 }}
            animate={{ rotateY: [15, 5, 15], rotateX: [5, 2, 5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full relative rounded-2xl shadow-[0_20px_80px_rgba(239,68,68,0.2)] overflow-hidden p-[1.5px]"
          >
            {/* Spinning Alert Border */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#ef4444_360deg)] pointer-events-none z-0"
            />

            <div className="bg-[#050201]/95 backdrop-blur-2xl rounded-[calc(1rem-1.5px)] overflow-hidden flex flex-col relative z-10 border border-white/5">
              
              {/* MacOS-style Header */}
              <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-[10px] text-gray-500 font-mono tracking-widest">DATAPULSE / DRIFT_ANALYSIS</div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 relative">
                
                {/* Background scanning laser */}
                <motion.div 
                  animate={{ top: ['0%', '100%'] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} 
                  className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent shadow-[0_0_10px_rgba(239,68,68,0.5)] z-0" 
                />

                <div className="flex justify-between items-end mb-6 relative z-10">
                  <div>
                    <div className="text-[10px] text-red-500 font-mono uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <SearchCode className="w-3 h-3" />
                      Metric: Null Rate Spike
                    </div>
                    <div className="text-white text-lg font-bold font-mono">Column: 'session_id'</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-gray-500 mb-1 uppercase tracking-widest">Deviation</div>
                    <div className="text-red-500 text-xl font-bold font-mono">+42.5%</div>
                  </div>
                </div>

                {/* Animated Chart Grid */}
                <div className="h-40 bg-[#0a0502] border border-white/5 rounded-xl p-4 flex items-end justify-between gap-1.5 relative mt-2 overflow-hidden">
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_20px]" />
                  <div className="absolute top-[60%] left-0 right-0 h-[1px] border-t border-dashed border-red-500/30" />
                  <div className="absolute top-3 left-4 text-[9px] text-gray-500 font-mono">Expected &lt; 2%</div>
                  
                  {/* Chart Bars */}
                  {[...Array(16)].map((_, i) => {
                    const isAnomaly = i > 12;
                    // Generate a consistent but pseudo-random height for normal bars so they don't all look identical
                    const normalHeight = 15 + (i % 3) * 5; 
                    return (
                      <motion.div 
                        key={i}
                        className={`w-full rounded-t-sm relative z-10 ${isAnomaly ? 'bg-gradient-to-t from-red-600 to-red-400 shadow-[0_0_15px_rgba(239,68,68,0.6)]' : 'bg-white/10'}`}
                        animate={{ 
                          height: isAnomaly 
                            ? ["75%", "90%", "80%", "85%", "75%"] 
                            : ["10%", `${normalHeight}%`, "10%"] 
                        }}
                        transition={{ 
                          duration: isAnomaly ? 2 : 3 + (i % 2), 
                          repeat: Infinity, 
                          ease: "easeInOut", 
                          delay: i * 0.1 
                        }}
                      />
                    );
                  })}
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Section 6: Data Lineage Mapping
const LineageSection = () => {
  return (
    <section className="py-16 md:py-20 max-w-5xl mx-auto px-6 overflow-hidden">
      <div className="relative rounded-3xl bg-[#040201] border border-white/5 overflow-hidden shadow-2xl group">
        
        {/* Interactive Background Atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,#f59e0b_0%,transparent_60%)] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 pointer-events-none" />
        
        <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
          
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[9px] font-mono text-[#f59e0b] mb-4 uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Share2 className="w-3 h-3" />
            End-to-End Visibility
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">Trace Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-yellow-400">Transformation.</span></h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-12">
            Visually trace exactly where a metric originated, what transformations were applied, and which downstream dashboards are affected if a pipeline breaks. Instantly perform Root Cause and Impact Analysis.
          </p>

          {/* Interactive Lineage Graph (Desktop) */}
          <div className="relative w-full max-w-4xl h-[300px] hidden md:flex items-center justify-center">
            
            {/* SVG Connecting Lines with flowing animation */}
            <svg viewBox="0 0 900 300" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Path 1: Source to Transform 1 */}
              <motion.path 
                 d="M 150 150 C 300 150, 300 75, 450 75" 
                 fill="none" stroke="rgba(245,158,11,0.3)" strokeWidth="2" strokeDasharray="8 8"
                 animate={{ strokeDashoffset: [200, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              {/* Path 2: Source to Transform 2 */}
              <motion.path 
                 d="M 150 150 C 300 150, 300 225, 450 225" 
                 fill="none" stroke="rgba(245,158,11,0.3)" strokeWidth="2" strokeDasharray="8 8"
                 animate={{ strokeDashoffset: [200, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              {/* Path 3: Transform 1 to Destination */}
              <motion.path 
                 d="M 450 75 C 600 75, 600 150, 750 150" 
                 fill="none" stroke="rgba(245,158,11,0.3)" strokeWidth="2" strokeDasharray="8 8"
                 animate={{ strokeDashoffset: [200, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              {/* Path 4: Transform 2 to Destination */}
              <motion.path 
                 d="M 450 225 C 600 225, 600 150, 750 150" 
                 fill="none" stroke="rgba(245,158,11,0.3)" strokeWidth="2" strokeDasharray="8 8"
                 animate={{ strokeDashoffset: [200, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </svg>

            {/* Floating Nodes */}
            <div className="absolute inset-0 flex items-center justify-between px-8 z-10">
               
               {/* 1. Root Source Node */}
               <div className="flex flex-col">
                 <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-32 p-4 bg-[#0a0502]/80 backdrop-blur-xl border border-[#f59e0b]/40 rounded-xl flex flex-col items-center text-center cursor-default group hover:bg-[#f59e0b]/10 transition-colors shadow-[0_0_30px_rgba(245,158,11,0.15)] relative">
                    <Database className="w-6 h-6 text-[#f59e0b] mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-white">Data Lake</span>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Root Source</span>
                 </motion.div>
               </div>

               {/* 2. Transformation Layer */}
               <div className="flex flex-col gap-8">
                 <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="w-36 p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl flex flex-col items-center text-center cursor-default group hover:bg-white/[0.08] hover:border-white/30 transition-all relative">
                    <Share2 className="w-4 h-4 text-gray-400 mb-1 group-hover:text-white transition-colors" />
                    <span className="text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors">dbt Transform</span>
                    <span className="text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">Staging Models</span>
                 </motion.div>
                 
                 <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="w-36 p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl flex flex-col items-center text-center cursor-default group hover:bg-white/[0.08] hover:border-white/30 transition-all relative">
                    <Activity className="w-4 h-4 text-gray-400 mb-1 group-hover:text-white transition-colors" />
                    <span className="text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors">Column Lineage</span>
                    <span className="text-[8px] text-gray-500 uppercase tracking-widest mt-0.5">Dependency Map</span>
                 </motion.div>
               </div>

               {/* 3. Destination Node */}
               <div className="flex flex-col">
                 <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="w-32 p-4 bg-[#050a07]/80 backdrop-blur-xl border border-[#10b981]/40 rounded-xl flex flex-col items-center text-center cursor-default group hover:bg-[#10b981]/10 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
                    <BarChart4 className="w-6 h-6 text-[#10b981] mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-white">BI Dashboard</span>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Executive View</span>
                 </motion.div>
               </div>
               
            </div>
          </div>

          {/* Mobile Fallback Feature List */}
          <div className="md:hidden flex flex-wrap justify-center gap-2 mt-8">
            {['Column-level Lineage', 'Impact Analysis', 'Root Cause Identification', 'dbt Integration'].map((item, i) => (
               <div key={i} className="px-3 py-1.5 rounded-lg bg-[#120a05] border border-[#f59e0b]/20 text-[10px] text-gray-300 font-semibold flex items-center gap-1.5">
                 <div className="w-1 h-1 rounded-full bg-[#f59e0b]" />
                 {item}
               </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default function DataAnalytics() {
  return (
    <div className="min-h-screen bg-[#040201] text-white font-sans selection:bg-[#f59e0b]/30">
      <Navbar />
      
      <HeroSection />
      <MetricsTickerSection />
      <PipelineArchitectureSection />
      <UseCasesSection />
      <DashboardMockupSection />
      <LineageSection />
      <CTA />

      <Footer />
    </div>
  );
}
