"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  HeartPulse, Activity, Dna, Brain, Shield, 
  FileText, Stethoscope, Microscope, Zap, Database, Lock, CheckCircle2
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import CTA from '@/Frontend/Home/CTA';

// Section 1: Hero (Biometric Grid / DNA Helix)
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#020408] z-0"></div>
      
      {/* Abstract Medical Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(0, 229, 255, 0.15) 0%, transparent 60%), linear-gradient(rgba(0, 229, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 mt-12">
        
        {/* Left Side: Information */}
        <div className="lg:w-1/2 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-xs font-bold text-[#00e5ff] uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            <HeartPulse className="w-4 h-4 animate-pulse" />
            MedVision AI
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] mb-8 tracking-tight text-white"
          >
            Predictive Healthcare.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#4db8ff] to-[#3b82f6]">Unprecedented Accuracy.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          >
            Ingest complex medical histories, genomics, and real-time biometrics to predict disease onset long before clinical symptoms appear. Empower clinicians with AI-driven intelligence.
          </motion.p>
        </div>

        {/* Right Side: Looping Diagram */}
        <div className="lg:w-1/2 w-full relative h-[400px] lg:h-[500px] perspective-1000 flex items-center justify-center mt-12 lg:mt-0">
          
          {/* Glowing Pulse Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.div 
              animate={{ scale: [0.8, 1.8], opacity: [0.4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-[250px] h-[250px] rounded-full border border-[#00e5ff]"
            />
            <motion.div 
              animate={{ scale: [0.8, 1.8], opacity: [0.4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
              className="absolute w-[250px] h-[250px] rounded-full border border-[#00e5ff]"
            />
            <motion.div 
              animate={{ scale: [0.8, 1.8], opacity: [0.4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 2 }}
              className="absolute w-[250px] h-[250px] rounded-full border border-[#00e5ff]"
            />
          </div>

          <motion.div 
            initial={{ rotateY: -15, rotateX: 5 }}
            animate={{ rotateY: [-15, -5, -15], rotateX: [5, 2, 5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[450px] bg-[#050a14]/80 backdrop-blur-md border border-[#00e5ff]/20 rounded-3xl shadow-[0_20px_50px_rgba(0,229,255,0.15)] overflow-hidden flex flex-col relative z-10 font-mono"
          >
             {/* Header */}
             <div className="flex justify-between items-center bg-[#0a1020] px-4 py-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00e5ff]" />
                  <span className="text-[10px] font-bold text-white tracking-widest">LIVE BIOMETRICS</span>
                </div>
                <div className="text-[9px] text-[#00e5ff] px-2 py-1 bg-[#00e5ff]/10 rounded">SYS: ACTIVE</div>
             </div>

             <div className="p-5 flex flex-col gap-4">
                {/* EKG Graph Area */}
                <div className="bg-[#020408] rounded-xl border border-white/5 p-4 relative overflow-hidden h-32 flex flex-col justify-between">
                   <div className="flex justify-between items-start z-10">
                     <span className="text-[10px] text-gray-500">Heart Rate (BPM)</span>
                     <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }} className="text-[#00e5ff] text-xl font-bold">72</motion.span>
                   </div>
                   
                   {/* Grid Background */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />
                   
                   {/* Animated EKG Line */}
                   <svg className="absolute bottom-0 left-0 w-full h-20 pointer-events-none" preserveAspectRatio="none">
                      <motion.path 
                        d="M 0 50 L 40 50 L 50 20 L 60 70 L 70 50 L 140 50 L 150 10 L 160 80 L 170 50 L 240 50 L 250 20 L 260 70 L 270 50 L 340 50 L 350 10 L 360 80 L 370 50 L 400 50" 
                        fill="none" 
                        stroke="#00e5ff" 
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0.5 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                   </svg>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Neural Engine */}
                  <div className="bg-[#020408] rounded-xl border border-white/5 p-4 flex flex-col items-center justify-center relative overflow-hidden h-32 shadow-inner">
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-24 h-24 border border-dashed border-[#00e5ff]/30 rounded-full" />
                     <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-16 h-16 border border-[#00e5ff]/20 rounded-full" />
                     <Brain className="w-8 h-8 text-[#00e5ff] relative z-10 mb-2" />
                     <span className="text-[8px] text-[#00e5ff] relative z-10 bg-[#00e5ff]/10 px-2 py-0.5 rounded">NEURAL MAP</span>
                  </div>

                  {/* Terminal Output */}
                  <div className="bg-[#020408] rounded-xl border border-white/5 p-3 flex flex-col gap-2 h-32 overflow-hidden text-[8px] text-gray-400 relative">
                     <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#020408] to-transparent z-10" />
                     <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#020408] to-transparent z-10" />
                     
                     <motion.div 
                        animate={{ y: [0, -80] }} 
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }} 
                        className="flex flex-col gap-2 pt-4"
                     >
                       <p>&gt; Ingesting EHR data...</p>
                       <p className="text-emerald-400">&gt; Match found (99.8%)</p>
                       <p>&gt; Running predictive models</p>
                       <p>&gt; Cross-referencing genomics</p>
                       <p className="text-[#00e5ff]">&gt; No anomalies detected.</p>
                       <p>&gt; Processing MRI scans...</p>
                       <p>&gt; Status: Optimal</p>
                       <p>&gt; Ingesting EHR data...</p>
                       <p className="text-emerald-400">&gt; Match found (99.8%)</p>
                     </motion.div>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Section 2: Clinical Metrics Ticker
const MetricsTickerSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#020408] via-[#05101a] to-[#020408] border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 px-8 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-3"><Activity className="w-6 h-6 text-[#00e5ff]" /><span className="text-2xl font-black text-white">99.8% DIAGNOSTIC ACCURACY</span></div>
              <div className="flex items-center gap-3"><Database className="w-6 h-6 text-blue-500" /><span className="text-2xl font-black text-white">50M+ PATIENT RECORDS PROCESSED</span></div>
              <div className="flex items-center gap-3"><Zap className="w-6 h-6 text-yellow-500" /><span className="text-2xl font-black text-white">&lt;200ms REAL-TIME INFERENCE</span></div>
              <div className="flex items-center gap-3"><Lock className="w-6 h-6 text-emerald-500" /><span className="text-2xl font-black text-white">HIPAA COMPLIANT</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: Diagnostic Data Pipeline (Interactive Diagram)
const PipelineSection = () => {
  return (
    <section className="py-24 relative bg-[#010204] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Clinical <span className="text-[#00e5ff]">Data Pipeline</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Transforming unstructured EHR data, wearables, and genomics into actionable clinical intelligence.</p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto bg-gradient-to-b from-[#050810] to-[#020408] rounded-3xl border border-white/5 p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-8">
          
          {/* Data Sources */}
          <div className="flex flex-col justify-center gap-4 z-10 w-full md:w-1/3">
            {[
              { icon: FileText, label: "EHR Notes", color: "text-blue-400", border: "border-blue-500/20", glow: "shadow-[0_0_15px_rgba(59,130,246,0.1)]" },
              { icon: Dna, label: "Genomics", color: "text-purple-400", border: "border-purple-500/20", glow: "shadow-[0_0_15px_rgba(168,85,247,0.1)]" },
              { icon: Activity, label: "Wearables", color: "text-emerald-400", border: "border-emerald-500/20", glow: "shadow-[0_0_15px_rgba(16,185,129,0.1)]" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`w-full p-4 rounded-xl border ${item.border} bg-[#0a1020] flex items-center gap-4 ${item.glow} transition-transform cursor-pointer relative group`}
              >
                <div className={`p-2 rounded-lg bg-black/50 ${item.border} border`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{item.label}</span>
                
                {/* Outgoing data pulse (Desktop only) */}
                <motion.div 
                  animate={{ x: [0, 40], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
                  className="absolute -right-4 w-1.5 h-1.5 rounded-full bg-white hidden md:block"
                />
              </motion.div>
            ))}
          </div>

          {/* Central AI Engine */}
          <div className="relative z-10 flex items-center justify-center w-full md:w-1/3 my-6 md:my-0">
             <div className="relative w-40 h-40 rounded-2xl bg-[#0a1020] border border-[#00e5ff]/30 shadow-[0_0_40px_rgba(0,229,255,0.15)] flex flex-col items-center justify-center group overflow-hidden">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-2xl border border-dashed border-[#00e5ff]/30" />
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-20 h-20 bg-[#00e5ff]/20 rounded-full blur-xl" />
                <Brain className="w-10 h-10 text-[#00e5ff] relative z-10 mb-2 drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                <span className="text-[10px] font-bold text-white tracking-widest relative z-10">MEDVISION AI</span>
             </div>
          </div>

          {/* Output Predictions */}
          <div className="flex flex-col justify-center gap-4 z-10 w-full md:w-1/3">
            {[
              { icon: Microscope, label: "Disease Risk", desc: "99% Confidence", color: "text-red-400", border: "border-red-500/30", glow: "shadow-[0_0_15px_rgba(239,68,68,0.1)]" },
              { icon: Stethoscope, label: "Care Plan", desc: "Optimized Route", color: "text-[#00e5ff]", border: "border-[#00e5ff]/30", glow: "shadow-[0_0_15px_rgba(0,229,255,0.1)]" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`w-full p-5 rounded-xl border ${item.border} bg-[#0a1020] ${item.glow} flex flex-col gap-2 transition-transform cursor-pointer relative group`}
              >
                {/* Incoming data pulse (Desktop only) */}
                <motion.div 
                  animate={{ x: [-40, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white hidden md:block"
                />

                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-black/50 ${item.border} border`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{item.label}</span>
                </div>
                <div className="text-xs text-gray-500 font-mono ml-12">{item.desc}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// Section 4: Use Cases Grid (Hover Cards)
const UseCasesSection = () => {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Intelligent <span className="text-gray-500">Applications</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[auto]">
        
        {/* Card 1: Disease Prediction (Spans 2 cols) */}
        <div className="group relative rounded-2xl md:col-span-2 min-h-[220px]">
          <div className="absolute -inset-[2px] rounded-[18px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
             <motion.div className="absolute inset-[-100%]" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(96,165,250,1) 100%)' }} />
          </div>
          <div className="relative w-full h-full bg-[#050810] border border-white/5 group-hover:border-transparent rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#0a1020] border border-blue-500/20 flex items-center justify-center mb-6">
                <Microscope className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Disease Prediction</h3>
              <p className="text-gray-400 text-sm max-w-md">Predict disease onset long before clinical symptoms appear using historical and genomic data.</p>
            </div>
            {/* Decorative visual */}
            <div className="absolute right-0 bottom-0 w-full h-1/2 pointer-events-none overflow-hidden rounded-br-2xl">
              <svg className="absolute right-0 bottom-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity" preserveAspectRatio="none">
                <motion.path d="M 0 100 Q 50 50 100 100 T 200 100 T 300 50 T 400 100" fill="none" stroke="#60a5fa" strokeWidth="1.5" animate={{ x: [-100, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2: Predictive Analytics (Spans 2 rows) */}
        <div className="group relative rounded-2xl md:row-span-2 min-h-[220px]">
          <div className="absolute -inset-[2px] rounded-[18px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
             <motion.div className="absolute inset-[-100%]" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(16,185,129,1) 100%)' }} />
          </div>
          <div className="relative w-full h-full bg-[#050810] border border-white/5 group-hover:border-transparent rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-colors">
             <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10">
               <div className="w-12 h-12 rounded-xl bg-[#0a1020] border border-emerald-500/20 flex items-center justify-center mb-6">
                 <Activity className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Predictive Analytics</h3>
               <p className="text-gray-400 text-sm">Forecast hospital admission volumes and seasonal trends to optimize operations.</p>
             </div>
             {/* Bar chart visual */}
             <div className="relative w-full h-24 flex items-end justify-between gap-1 mt-8 z-10 px-1 opacity-50 group-hover:opacity-100 transition-opacity">
                {[40, 70, 45, 90, 60, 100].map((h, i) => (
                  <motion.div key={i} className="w-full bg-emerald-500/20 rounded-t" animate={{ height: [`${h/2}%`, `${h}%`, `${h/2}%`] }} transition={{ duration: 2 + i*0.2, repeat: Infinity }} />
                ))}
             </div>
          </div>
        </div>

        {/* Card 3: Medical Risk (Standard) */}
        <div className="group relative rounded-2xl min-h-[220px]">
          <div className="absolute -inset-[2px] rounded-[18px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
             <motion.div className="absolute inset-[-100%]" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(168,85,247,1) 100%)' }} />
          </div>
          <div className="relative w-full h-full bg-[#050810] border border-white/5 group-hover:border-transparent rounded-2xl p-6 overflow-hidden transition-colors flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-[#0a1020] border border-purple-500/20 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Medical Risk</h3>
              <p className="text-gray-400 text-sm">Empower clinicians with highly accurate, data-backed second opinions.</p>
            </div>
          </div>
        </div>

        {/* Card 4: Continuous Monitoring (Standard) */}
        <div className="group relative rounded-2xl min-h-[220px]">
          <div className="absolute -inset-[2px] rounded-[18px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
             <motion.div className="absolute inset-[-100%]" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(236,72,153,1) 100%)' }} />
          </div>
          <div className="relative w-full h-full bg-[#050810] border border-white/5 group-hover:border-transparent rounded-2xl p-6 overflow-hidden transition-colors flex flex-col justify-between">
            <div className="absolute right-[-20px] top-[-20px] w-24 h-24 bg-pink-500/10 rounded-full blur-xl group-hover:bg-pink-500/20 transition-colors" />
            <div className="relative z-10 w-12 h-12 rounded-xl bg-[#0a1020] border border-pink-500/20 flex items-center justify-center mb-6">
              <HeartPulse className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Vitals Sync</h3>
              <p className="text-gray-400 text-sm">Analyze streaming data from wearables to detect anomalies instantly.</p>
            </div>
          </div>
        </div>

        {/* Card 5: Clinical Intelligence (Spans 3 cols) */}
        <div className="group relative rounded-2xl md:col-span-3 min-h-[180px]">
          <div className="absolute -inset-[2px] rounded-[18px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
             <motion.div className="absolute inset-[-100%]" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(0,229,255,1) 100%)' }} />
          </div>
          <div className="relative w-full h-full bg-[#050810] border border-white/5 group-hover:border-transparent rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden transition-colors">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.05),transparent)]" />
            <div className="relative z-10 w-full md:w-2/3 mb-6 md:mb-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a1020] border border-[#00e5ff]/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#00e5ff] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white">Clinical Intelligence</h3>
              </div>
              <p className="text-gray-400 text-sm">Extract structured insights from unstructured EHR notes automatically, drastically reducing administrative burden.</p>
            </div>
            <div className="relative z-10 w-full md:w-1/3 flex justify-start md:justify-end">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-24 h-24 border border-dashed border-[#00e5ff]/30 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border border-[#00e5ff]/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#00e5ff]/20 rounded-full animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Section 5: Real-Time Patient Monitoring Dashboard Mockup
const DashboardMockupSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-[#010204] to-[#03060c] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Real-Time <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Anomaly Detection
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Continuous analysis of streaming telemetry data from ICU monitors and wearables allows MedVision AI to identify critical patient deterioration hours before traditional alarms trigger.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-5 p-5 rounded-2xl bg-[#050810] border border-white/5 hover:border-pink-500/30 transition-colors shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover:scale-110 transition-transform"><Activity className="w-6 h-6 text-pink-500"/></div>
              <div>
                <h4 className="text-white font-bold mb-1 text-lg">Sub-second Latency</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Process high-frequency vitals data without delay, enabling instant clinical response and intervention.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-5 rounded-2xl bg-[#050810] border border-white/5 hover:border-[#00e5ff]/30 transition-colors shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.15)] group-hover:scale-110 transition-transform"><Shield className="w-6 h-6 text-[#00e5ff]"/></div>
              <div>
                <h4 className="text-white font-bold mb-1 text-lg">False Alarm Reduction</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Context-aware alerting algorithms successfully reduce hospital alarm fatigue by up to 85%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Dashboard UI */}
        <div className="lg:w-1/2 w-full perspective-1000 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-pink-500/10 blur-[100px] rounded-full" />
          
          <motion.div 
            initial={{ rotateY: 15, rotateX: 5 }}
            animate={{ rotateY: [15, 5, 15], rotateX: [5, 2, 5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full bg-[#050810]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="h-12 border-b border-white/5 flex items-center px-6 gap-4 bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-xs text-gray-500 font-mono tracking-widest ml-auto flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                MED_VISION_ICU_01
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6 flex flex-col gap-6">
              {/* Main Vitals Graph */}
              <div className="bg-[#020408]/50 border border-white/5 rounded-xl p-5 relative overflow-hidden group shadow-inner">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-gray-400 text-[10px] font-mono mb-1 block tracking-widest uppercase">Live Telemetry</span>
                    <span className="text-white text-base font-bold">Heart Rate (BPM)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,1)]" />
                    <span className="text-pink-500 font-mono font-bold text-3xl">112</span>
                  </div>
                </div>
                
                {/* SVG EKG Graph */}
                <div className="relative h-28 w-full overflow-hidden">
                  <svg className="absolute w-[200%] h-full" preserveAspectRatio="none" viewBox="0 0 200 100">
                     <motion.path 
                       d="M 0 50 L 20 50 L 25 40 L 30 60 L 40 20 L 45 90 L 55 30 L 60 50 L 80 50 L 85 40 L 90 60 L 100 20 L 105 90 L 115 30 L 120 50 L 140 50 L 145 40 L 150 60 L 160 20 L 165 90 L 175 30 L 180 50 L 200 50" 
                       fill="none" 
                       stroke="rgba(236,72,153,0.8)" 
                       strokeWidth="2"
                       strokeLinejoin="round"
                       animate={{ x: ['0%', '-50%'] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     />
                  </svg>
                  
                  {/* Scanning Anomaly Laser */}
                  <motion.div 
                    animate={{ left: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-[1px] bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] z-10"
                  >
                    <div className="absolute top-2 -left-12 bg-red-500/20 text-red-400 text-[9px] px-2 py-0.5 rounded font-mono border border-red-500/30 whitespace-nowrap backdrop-blur-sm">
                      ANOMALY
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#020408]/50 border border-white/5 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden group shadow-inner">
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity"><Activity className="w-24 h-24 text-[#00e5ff]" /></div>
                  <span className="text-gray-400 text-xs mb-3 relative z-10 font-medium">SpO2 Level</span>
                  <div className="flex items-end gap-1 relative z-10">
                    <span className="text-[#00e5ff] text-4xl font-bold font-mono leading-none">98</span>
                    <span className="text-[#00e5ff]/50 text-sm mb-1 font-bold">%</span>
                  </div>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-red-500/5 animate-pulse" />
                  <span className="text-gray-400 text-xs mb-3 relative z-10 font-medium">Respiration</span>
                  <div className="flex items-end gap-2 relative z-10">
                    <span className="text-red-500 text-4xl font-bold font-mono leading-none">28</span>
                    <span className="text-red-400/50 text-sm mb-1 font-mono font-bold">/min</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Section 6: Security & Compliance
const ComplianceSection = () => {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6 overflow-hidden">
      <div className="relative rounded-3xl overflow-hidden p-[1px] group shadow-2xl">
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00e5ff]/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        
        {/* Main Card Container */}
        <div className="relative bg-[#050810] rounded-[23px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 overflow-hidden w-full h-full">
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

          {/* Glowing Orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#00e5ff]/20 blur-[120px] rounded-full pointer-events-none" />

          {/* Left: Shield & Lock Visual */}
          <div className="md:w-5/12 flex justify-center relative z-10 perspective-1000">
            <div className="relative w-64 h-64 flex items-center justify-center">
               {/* Concentric rotating rings */}
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-[#00e5ff]/30" />
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-4 rounded-full border border-blue-500/20" />
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-8 rounded-full border-2 border-transparent border-t-[#00e5ff] border-b-blue-500 opacity-70" />
               
               {/* Central Lock glowing */}
               <div className="absolute inset-14 bg-gradient-to-b from-[#0a1520] to-[#050810] border border-white/10 rounded-full shadow-[0_0_50px_rgba(0,229,255,0.15)] flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-[#00e5ff]/10 animate-pulse mix-blend-overlay" />
                 <Lock className="w-16 h-16 text-[#00e5ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]" />
               </div>

               {/* Orbiting Particles */}
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-start justify-center">
                 <div className="w-2.5 h-2.5 bg-[#00e5ff] rounded-full shadow-[0_0_15px_rgba(0,229,255,1)] -mt-[5px]" />
               </motion.div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-7/12 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[10px] font-mono text-[#00e5ff] mb-8 uppercase tracking-widest shadow-[0_0_15px_rgba(0,229,255,0.1)] backdrop-blur-md">
              <Shield className="w-3.5 h-3.5" />
              Enterprise Grade Security
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white leading-tight">
              Uncompromising <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Patient Data Privacy.
              </span>
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Built from the ground up to comply with global healthcare data standards. Your patient data is isolated, strictly encrypted in transit and at rest, and completely auditable.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'HIPAA Compliant', icon: Shield },
                { name: 'SOC 2 Type II', icon: CheckCircle2 },
                { name: 'End-to-End Encryption', icon: Lock },
                { name: 'Zero-Trust Architecture', icon: Activity }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-[#00e5ff]/30 transition-all cursor-default group backdrop-blur-sm">
                  <badge.icon className="w-4 h-4 text-gray-500 group-hover:text-[#00e5ff] transition-colors" />
                  <span className="text-sm text-gray-300 font-semibold group-hover:text-white transition-colors">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-[#010204] text-white font-sans selection:bg-[#00e5ff]/30">
      <Navbar />
      
      <HeroSection />
      <MetricsTickerSection />
      <PipelineSection />
      <UseCasesSection />
      <DashboardMockupSection />
      <ComplianceSection />
      <CTA />

      <Footer />
    </div>
  );
}
