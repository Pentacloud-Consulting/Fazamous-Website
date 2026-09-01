"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ShieldAlert, BarChart3, Lock, 
  Landmark, Activity, Wallet, Percent, 
  TrendingUp, Fingerprint, Zap
} from 'lucide-react';
import { Navbar } from '@/components/Top-bottom/Navbar';
import { Footer } from '@/components/Top-bottom/Footer';
import CTA from '@/Frontend/Home/Contact';

// Pre-seeded static values to avoid SSR hydration mismatch
const MATRIX_LINE_DURATIONS = [7.2, 6.8, 9.1, 5.5, 8.3, 7.6, 6.2, 9.8, 5.1, 8.7, 7.0, 6.5, 9.3, 5.8, 8.1, 7.4, 6.0, 9.6, 5.3, 8.9];
const MATRIX_LINE_DELAYS = [2.1, 4.3, 0.8, 3.5, 1.2, 4.8, 2.7, 0.3, 3.9, 1.6, 4.1, 2.4, 0.6, 3.2, 1.9, 4.5, 2.0, 0.9, 3.7, 1.4];
const PARTICLE_POSITIONS = [
  { top: "42%", left: "35%" },
  { top: "68%", left: "55%" },
  { top: "35%", left: "45%" },
  { top: "72%", left: "38%" },
  { top: "28%", left: "62%" },
];

// Section 1: Hero (Data Stream / Money Flow)
const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#020202] z-0"></div>
      
      {/* Financial Matrix Lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ 
              duration: MATRIX_LINE_DURATIONS[i], 
              repeat: Infinity, 
              ease: "linear",
              delay: MATRIX_LINE_DELAYS[i]
            }}
            className="absolute top-0 w-[1px] h-[30%] bg-gradient-to-b from-transparent via-green-500 to-transparent"
            style={{ left: `${(i / 20) * 100}%` }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-4 sm:mt-12 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] sm:text-xs font-bold text-green-400 uppercase tracking-widest mb-4 sm:mb-8"
          >
            <Landmark className="w-4 h-4" />
            Banking & Finance
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 sm:mb-8 tracking-tight text-white"
          >
            Intelligent Finance.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-500">Uncompromised Security.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-[13px] sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4 sm:mb-12"
          >
            Deploy military-grade AI to detect fraud in milliseconds, automate compliance, and deliver hyper-personalized banking experiences.
          </motion.p>
        </div>

        {/* Right Side: Looping Diagram */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center transform scale-[0.65] sm:scale-100 origin-center -mt-10 sm:mt-0">
            {/* Core Center */}
            <div className="absolute w-28 h-28 bg-[#050505] rounded-full border border-green-500/50 shadow-[0_0_50px_rgba(34,197,94,0.3)] z-20 flex items-center justify-center">
                <Landmark className="w-10 h-10 text-green-400" />
            </div>

            {/* Orbiting Rings */}
            {[1, 2, 3].map((ring, i) => (
                <motion.div 
                   key={i}
                   animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                   transition={{ duration: 25 + i * 10, repeat: Infinity, ease: "linear" }}
                   className="absolute rounded-full border border-white/5 border-t-green-500/30 border-b-teal-500/30 z-10"
                   style={{ width: `${220 + i * 100}px`, height: `${220 + i * 100}px` }}
                >
                   {/* Nodes on rings */}
                   {i === 0 && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center shadow-lg">
                         <Wallet className="w-4 h-4 text-gray-300" />
                      </div>
                   )}
                   {i === 1 && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-[#0a0a0a] border border-blue-500/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                         <Lock className="w-4 h-4 text-blue-400" />
                      </div>
                   )}
                   {i === 2 && (
                      <>
                        <div className="absolute top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0a0a0a] border border-green-500/40 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                           <ShieldAlert className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="absolute bottom-[15%] right-[15%] translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#0a0a0a] border border-teal-500/40 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                           <Activity className="w-5 h-5 text-teal-400" />
                        </div>
                      </>
                   )}
                </motion.div>
            ))}

            {/* Glowing Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
              {PARTICLE_POSITIONS.map((pos, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -30, 0], 
                    x: [0, i % 2 === 0 ? 20 : -20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]"
                  style={{
                    top: pos.top,
                    left: pos.left,
                  }}
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

// Section 2: Real-time Threat Detection (Interactive Diagram)
const ThreatDetectionSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 relative bg-[#030408] border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">Real-Time <span className="text-green-500">Threat Mitigation</span></h2>
          <p className="text-gray-400 text-[13px] sm:text-base max-w-xl mx-auto">See how our AI processes transactions, identifies anomalies, and neutralizes threats before they happen.</p>
        </div>

        {/* Threat Architecture Diagram */}
        <div className="relative w-full h-[380px] bg-[#050505] rounded-3xl border border-white/10 flex items-center justify-center p-8 overflow-hidden shadow-2xl hidden md:flex">
           
           {/* Incoming Transaction Node */}
           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute left-[10%] w-24 h-24 bg-[#0a0a0a] border border-white/10 rounded-2xl flex flex-col items-center justify-center z-10"
           >
             <Wallet className="w-6 h-6 text-blue-400 mb-2" />
             <span className="text-[9px] text-gray-400 uppercase tracking-widest text-center">Incoming Tx</span>
           </motion.div>

           {/* Animated Particles flowing to center */}
           <div className="absolute left-[20%] w-[30%] h-[2px] top-1/2 -translate-y-1/2 bg-white/5 overflow-hidden">
              <motion.div 
                 animate={{ x: ["-100%", "300%"] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                 className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
           </div>

           {/* Central AI Brain Node with Shield Radar */}
           <div className="relative w-40 h-40 rounded-full flex items-center justify-center z-10">
              {/* Radar Sweeps */}
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 rounded-full border border-green-500/20 border-t-green-500"
              />
              <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-2 rounded-full border border-teal-500/20 border-b-teal-500"
              />
              <div className="w-28 h-28 bg-[#0a0a0a] border border-green-500/50 rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                <ShieldAlert className="w-8 h-8 text-green-400 mb-1" />
                <span className="text-[9px] text-green-400 font-bold tracking-widest">AI CORE</span>
              </div>
           </div>

           {/* Outgoing Allowed */}
           <div className="absolute left-1/2 top-1/2 w-[36%] h-[2px] bg-white/5 overflow-hidden origin-left rotate-[-14deg]">
              <motion.div 
                 animate={{ x: ["-100%", "300%"] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                 className="w-1/3 h-full bg-gradient-to-r from-transparent via-green-500 to-transparent"
              />
           </div>
           
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute right-[10%] top-[10%] w-24 h-24 bg-[#0a0a0a] border border-green-500/30 rounded-2xl flex flex-col items-center justify-center z-10"
           >
             <Lock className="w-6 h-6 text-green-400 mb-2" />
             <span className="text-[9px] text-green-400 uppercase tracking-widest">Approved</span>
           </motion.div>

           {/* Outgoing Rejected */}
           <div className="absolute left-1/2 top-1/2 w-[36%] h-[2px] bg-white/5 overflow-hidden origin-left rotate-[14deg]">
              <motion.div 
                 animate={{ x: ["-100%", "300%"] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1 }}
                 className="w-1/3 h-full bg-gradient-to-r from-transparent via-red-500 to-transparent"
              />
           </div>

           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute right-[10%] bottom-[10%] w-24 h-24 bg-[#0a0a0a] border border-red-500/30 rounded-2xl flex flex-col items-center justify-center z-10 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
           >
             <ShieldAlert className="w-6 h-6 text-red-500 mb-2" />
             <span className="text-[9px] text-red-500 uppercase tracking-widest">Blocked</span>
           </motion.div>

        </div>
        
        {/* Mobile fallback for diagram */}
        <div className="md:hidden flex flex-col gap-3 sm:gap-6 items-center">
            <div className="w-full p-3 sm:p-6 bg-[#0a0a0a] border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 sm:gap-4">
               <Wallet className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
               <span className="text-[11px] sm:text-sm text-gray-300 font-medium">Incoming Transaction</span>
            </div>
            <div className="w-[2px] h-6 sm:h-12 bg-gradient-to-b from-blue-500 to-green-500"></div>
            <div className="w-full p-4 sm:p-8 bg-[#0a0a0a] border border-green-500/50 rounded-3xl sm:rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.15)] sm:shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                <ShieldAlert className="w-5 h-5 sm:w-8 sm:h-8 text-green-400 mb-1" />
                <span className="text-[9px] sm:text-xs text-green-400 font-bold tracking-widest text-center">AI CORE ANALYSIS</span>
            </div>
            <div className="w-[2px] h-6 sm:h-12 bg-gradient-to-b from-green-500 to-red-500"></div>
            <div className="flex gap-2 sm:gap-4 w-full">
               <div className="flex-1 p-3 sm:p-6 bg-[#0a0a0a] border border-green-500/30 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-center">
                 <Lock className="w-4 h-4 sm:w-6 sm:h-6 text-green-400 mb-1 sm:mb-2" />
                 <span className="text-[8px] sm:text-[10px] text-green-400 uppercase tracking-widest font-bold">Approved</span>
               </div>
               <div className="flex-1 p-3 sm:p-6 bg-[#0a0a0a] border border-red-500/30 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(239,68,68,0.1)] sm:shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                 <ShieldAlert className="w-4 h-4 sm:w-6 sm:h-6 text-red-500 mb-1 sm:mb-2" />
                 <span className="text-[8px] sm:text-[10px] text-red-500 uppercase tracking-widest font-bold">Blocked</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// Section 3: Financial Solutions (Flip Cards)
const SolutionsSection = () => {
  const cards = [
    { title: "Algorithmic Trading", desc: "Execute hyper-fast trades based on sentiment analysis and market trends.", icon: TrendingUp, color: "text-blue-400", border: "group-hover:border-blue-500/50", beamColor: "#60a5fa" },
    { title: "Risk Management", desc: "Evaluate portfolio risks instantly utilizing vast historical datasets.", icon: Activity, color: "text-purple-400", border: "group-hover:border-purple-500/50", beamColor: "#c084fc" },
    { title: "KYC & Identity", desc: "Automate biometric identity verification to comply with regulations.", icon: Fingerprint, color: "text-teal-400", border: "group-hover:border-teal-500/50", beamColor: "#2dd4bf" },
    { title: "Credit Scoring", desc: "Issue loans faster with AI-driven alternative data credit scoring.", icon: Percent, color: "text-green-400", border: "group-hover:border-green-500/50", beamColor: "#4ade80" },
  ];

  return (
    <section className="py-12 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-8 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">Financial <span className="text-gray-500">Intelligence</span></h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {cards.map((card, i) => (
          <div key={i} className="group perspective-1000 w-full h-[160px] sm:h-[300px]">
            {/* Flip Card Inner */}
            <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
              
              {/* Front Side */}
              <div className={`absolute inset-0 bg-[#060810] border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-8 flex flex-col items-center justify-center text-center backface-hidden ${card.border} transition-colors`}>
                <div className={`w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white/5 flex items-center justify-center mb-2 sm:mb-6`}>
                  <card.icon className={`w-5 h-5 sm:w-8 sm:h-8 ${card.color}`} />
                </div>
                <h3 className="text-[11px] sm:text-xl font-bold text-white leading-tight">{card.title}</h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl p-[1px] overflow-hidden backface-hidden rotate-y-180 shadow-[0_0_15px_rgba(255,255,255,0.02)] sm:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                {/* Rotating Beam (visible when flipped) */}
                <div 
                  className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300" 
                  style={{ backgroundImage: `conic-gradient(from 90deg, transparent 0 70%, ${card.beamColor} 100%)` }} 
                />
                
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-[#0a0a0a] to-[#111] rounded-[11px] sm:rounded-[15px] p-4 sm:p-8 flex flex-col items-center justify-center text-center">
                  <p className="text-gray-300 text-[9px] sm:text-sm leading-relaxed mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">{card.desc}</p>
                  <button className={`text-[8px] sm:text-xs font-bold uppercase tracking-widest ${card.color} flex items-center gap-1.5 sm:gap-2 group/btn`}>
                    View Details <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Section 4: Live Market Stats (Ticker)
const TickerSection = () => {
  return (
    <section className="py-6 sm:py-16 bg-gradient-to-r from-[#020202] via-[#050a14] to-[#020202] border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 sm:gap-16 px-4 sm:px-8 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-1.5 sm:gap-3"><BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-green-500" /><span className="text-sm sm:text-2xl font-black text-white">99.9% ACCURACY</span></div>
              <div className="flex items-center gap-1.5 sm:gap-3"><Zap className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500" /><span className="text-sm sm:text-2xl font-black text-white">&lt;10ms LATENCY</span></div>
              <div className="flex items-center gap-1.5 sm:gap-3"><ShieldAlert className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500" /><span className="text-sm sm:text-2xl font-black text-white">$2B+ FRAUD PREVENTED</span></div>
              <div className="flex items-center gap-1.5 sm:gap-3"><Lock className="w-4 h-4 sm:w-6 sm:h-6 text-purple-500" /><span className="text-sm sm:text-2xl font-black text-white">SOC2 COMPLIANT</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 5: Security Architecture (Layered Cards)
const SecuritySection = () => {
  return (
    <section className="py-12 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
        <div>
           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-6 text-white">Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">Compliance.</span></h2>
           <p className="text-gray-400 text-[13px] sm:text-lg leading-relaxed mb-4 sm:mb-8">
             We understand the rigid regulatory requirements of the financial sector. Our AI models are entirely explainable, locally deployable, and inherently secure.
           </p>
           <ul className="space-y-2 sm:space-y-4">
             {['End-to-End Encryption', 'On-Premise Deployment Options', 'Full Audit Logs & Explainability', 'GDPR, CCPA, & HIPAA Ready'].map((item, i) => (
               <li key={i} className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-semibold text-gray-300">
                 <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
                 </div>
                 {item}
               </li>
             ))}
           </ul>
        </div>
        
        {/* Layered Security Cards */}
        <div className="relative h-[280px] sm:h-[400px] flex items-center justify-center perspective-1000 group transform scale-[0.8] sm:scale-100 origin-center mt-4 sm:mt-0">
           <motion.div 
             initial={{ rotateX: 20, rotateY: -20, z: -100 }}
             whileInView={{ rotateX: 20, rotateY: -20, z: -100 }}
             className="absolute w-64 h-80 bg-[#0a0a0a] border border-white/5 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:translate-x-12 group-hover:translate-y-12"
           />
           <motion.div 
             initial={{ rotateX: 20, rotateY: -20, z: 0 }}
             whileInView={{ rotateX: 20, rotateY: -20, z: 0 }}
             className="absolute w-64 h-80 bg-[#0d1222] border border-blue-500/20 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 backdrop-blur-sm"
           />
           <motion.div 
             initial={{ rotateX: 20, rotateY: -20, z: 100 }}
             whileInView={{ rotateX: 20, rotateY: -20, z: 100 }}
             className="absolute w-64 h-80 bg-gradient-to-br from-[#060810] to-[#0a1510] border border-green-500/30 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:-translate-x-12 group-hover:-translate-y-12 p-6 flex flex-col"
           >
             <ShieldAlert className="w-12 h-12 text-green-400 mb-auto" />
             <div>
               <div className="text-white font-bold mb-1">Layer 3: Fortified</div>
               <div className="text-xs text-gray-400">Total data isolation and encryption.</div>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};



export default function FinancialServices() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-green-500/30 font-sans">
      <Navbar />
      <HeroSection />
      <TickerSection />
      <ThreatDetectionSection />
      <SolutionsSection />
      <SecuritySection />
      <CTA />
      <Footer />
      
      {/* 3D Transform Utilities + Scanner Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
