"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Tv, Eye, BarChart, Users, Target, Shield, 
  Smartphone, Monitor, Radio, TrendingUp, Play,
  Globe, CheckCircle
} from 'lucide-react';
import { Navbar } from '@/components/Top-bottom/Navbar';
import { Footer } from '@/components/Top-bottom/Footer';
import CTA from '@/Frontend/Home/Contact';

// Pre-seeded static values to avoid SSR hydration mismatch
const STREAM_DURATIONS = [22.5, 18.3, 26.1, 20.8, 16.7];
const STREAM_DELAYS = [1.2, 3.8, 0.5, 4.2, 2.1];
const STREAM_SEGMENT_WIDTHS = [
  ["180px","145px","220px","160px","195px","130px","205px","155px","170px","140px"],
  ["110px","240px","175px","120px","215px","150px","195px","135px","185px","160px"],
  ["200px","130px","165px","235px","145px","220px","110px","175px","190px","125px"],
  ["155px","190px","120px","205px","140px","230px","165px","185px","115px","210px"],
  ["225px","150px","185px","115px","240px","135px","200px","170px","125px","195px"],
];
const RED_PARTICLE_TOPS = ["46%", "48%", "52%", "45%", "50%", "47%"];
const GREEN_PARTICLE_TOPS = ["49%", "51%", "50%", "48%", "52%"];

// Section 1: Hero (CTV Abstract Streams)
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-0 bg-[#050401]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#eab308]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#facc15]/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Abstract CTV Streams Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none flex flex-col justify-center gap-8 sm:gap-12">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ 
              duration: STREAM_DURATIONS[i], 
              repeat: Infinity, 
              ease: "linear",
              delay: STREAM_DELAYS[i]
            }}
            className="flex gap-4"
          >
            {[...Array(10)].map((_, j) => (
              <div 
                key={j} 
                className={`h-2 sm:h-4 rounded-full bg-gradient-to-r from-transparent via-[#eab308]/30 to-transparent backdrop-blur-sm`}
                style={{ width: STREAM_SEGMENT_WIDTHS[i][j] }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-12 lg:gap-16">
        
        {/* Left Side: Information */}
        <div className="lg:w-1/2 w-full text-left">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#eab308]/10 border border-[#eab308]/30 text-[9px] sm:text-[10px] md:text-xs font-bold text-[#eab308] uppercase tracking-widest mb-4 sm:mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
          >
            <Tv className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            CTV Analytics Hub
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-[1.1] mb-4 sm:mb-8 tracking-tight text-white"
          >
            Hyper-Targeted.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] via-[#facc15] to-[#fef08a]">Exact ROI Proof.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-[13px] sm:text-lg md:text-xl max-w-lg leading-relaxed mb-4 sm:mb-0"
          >
            Gain hyper-granular visibility into streaming consumption patterns. Dynamically segment audiences and prove exact multi-channel ROI across the fragmented CTV ecosystem.
          </motion.p>
        </div>

        {/* Right Side: Looping Diagram */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] perspective-1000 transform scale-[0.85] sm:scale-100 origin-center -mt-8 sm:mt-0">
           
           {/* Main Floating Dashboard */}
           <motion.div 
             animate={{ y: [-10, 10, -10], rotateY: [-5, 5, -5] }}
             transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
             className="absolute top-[10%] right-[10%] w-[85%] h-[75%] bg-[#0a0802]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(234,179,8,0.15)] flex flex-col overflow-hidden"
           >
              {/* Mockup Header */}
              <div className="h-10 border-b border-white/10 flex items-center px-4 bg-white/[0.02]">
                 <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                 </div>
                 <div className="mx-auto text-[10px] text-gray-500 font-mono tracking-widest">CTV / ATTRIBUTION</div>
              </div>
              
              {/* Mockup Body - Video Player shape */}
              <div className="p-5 flex-1 flex flex-col gap-4 relative">
                 <div className="w-full h-40 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center">
                   <Play className="w-12 h-12 text-[#eab308]/40 mb-2" />
                   <div className="text-[10px] text-gray-500 font-mono">STREAMING AD ASSET</div>
                   {/* Scanning line over video */}
                   <motion.div animate={{ left: ['-100%', '200%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#eab308]/20 to-transparent shadow-[0_0_15px_#eab308]" />
                 </div>
                 
                 {/* Metrics */}
                 <div className="flex gap-4">
                   <div className="flex-1 bg-[#151005] p-3 rounded-lg border border-[#eab308]/20 relative overflow-hidden">
                     <div className="text-[9px] text-gray-500 mb-1 font-bold">VIEW RATE</div>
                     <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-xl font-bold text-white">98.4%</motion.div>
                     <div className="absolute right-0 bottom-0 w-8 h-8 bg-gradient-to-tl from-[#eab308]/20 to-transparent rounded-tl-full" />
                   </div>
                   <div className="flex-1 bg-[#151005] p-3 rounded-lg border border-[#eab308]/20 relative overflow-hidden">
                     <div className="text-[9px] text-gray-500 mb-1 font-bold">ROI LIFT</div>
                     <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }} className="text-xl font-bold text-[#eab308]">4.2x</motion.div>
                   </div>
                 </div>
              </div>
           </motion.div>

           {/* Floating side widget 1 (Mobile) */}
           <motion.div
             animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
             transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
             className="absolute bottom-4 -left-4 bg-[#120e05]/95 backdrop-blur-xl border border-[#eab308]/30 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20"
           >
              <div className="w-10 h-10 rounded-full bg-[#eab308]/10 flex items-center justify-center">
                 <Smartphone className="w-5 h-5 text-[#facc15]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Mobile Sync</div>
                <div className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Match Found
                </div>
              </div>
           </motion.div>

           {/* Floating side widget 2 (Conversion) */}
           <motion.div
             animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
             transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
             className="absolute top-[15%] right-[-5%] sm:right-[0%] bg-[#0a0f0d]/95 backdrop-blur-xl border border-emerald-500/30 p-2 sm:p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2 sm:gap-3 z-20"
           >
              <Target className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />
              <div>
                <div className="text-[10px] sm:text-xs font-bold text-emerald-400 leading-tight">Conversion</div>
                <div className="text-[8px] sm:text-[10px] text-gray-400 leading-tight">Attributed</div>
              </div>
           </motion.div>

        </div>

      </div>
    </section>
  );
};

// Section 2: Advertising Metrics Ticker
const MetricsTickerSection = () => {
  return (
    <section className="py-4 sm:py-10 bg-gradient-to-r from-[#050401] via-[#141005] to-[#050401] border-y border-[#eab308]/10 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 sm:gap-16 px-4 sm:px-8 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-2 sm:gap-3"><TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-[#eab308]" /><span className="text-sm sm:text-2xl font-black text-white">4.2x ROI LIFT</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><Eye className="w-4 h-4 sm:w-6 sm:h-6 text-[#facc15]" /><span className="text-sm sm:text-2xl font-black text-white">100% VIEWABILITY</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><Target className="w-4 h-4 sm:w-6 sm:h-6 text-[#fef08a]" /><span className="text-sm sm:text-2xl font-black text-white">REAL-TIME ATTRIBUTION</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><Shield className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500" /><span className="text-sm sm:text-2xl font-black text-white">ZERO AD FRAUD</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: Multi-Channel Attribution Engine (Animated Diagram)
const AttributionEngineSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-[#0a0802] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">Omnichannel <span className="text-[#eab308]">Attribution</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto text-[13px] sm:text-sm md:text-base">Connect the dots across screens to prove exactly which CTV ad drove the mobile app install or web purchase.</p>
        </div>

        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] bg-[#0c0a03] rounded-2xl md:rounded-3xl border border-white/5 overflow-hidden shadow-2xl flex items-center justify-center">
          
          <div className="absolute w-[900px] md:w-full h-[400px] transform scale-[0.4] sm:scale-[0.6] md:scale-100 origin-center">
          
          {/* Connective Paths */}
          <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none block">
            {/* Top to Center */}
            <motion.path d="M 245 100 C 350 100, 350 200, 500 200" fill="none" stroke="rgba(234,179,8,0.2)" strokeWidth="2" />
            <motion.circle r="4" fill="#eab308">
              <animateMotion path="M 245 100 C 350 100, 350 200, 500 200" dur="2s" repeatCount="indefinite" />
            </motion.circle>
            
            {/* Mid to Center */}
            <motion.path d="M 245 200 L 500 200" fill="none" stroke="rgba(234,179,8,0.2)" strokeWidth="2" />
            <motion.circle r="4" fill="#eab308">
              <animateMotion path="M 245 200 L 500 200" dur="2.5s" repeatCount="indefinite" />
            </motion.circle>

            {/* Bottom to Center */}
            <motion.path d="M 245 300 C 350 300, 350 200, 500 200" fill="none" stroke="rgba(234,179,8,0.2)" strokeWidth="2" />
            <motion.circle r="4" fill="#eab308">
              <animateMotion path="M 245 300 C 350 300, 350 200, 500 200" dur="3s" repeatCount="indefinite" />
            </motion.circle>
            
            {/* Center to Right (Conversion) */}
            <motion.path d="M 500 200 L 770 200" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="3" strokeDasharray="5,5" />
            <motion.circle r="6" fill="#10b981">
              <animateMotion path="M 500 200 L 770 200" dur="1.5s" repeatCount="indefinite" />
            </motion.circle>
          </svg>

          {/* Ad Exposures Header */}
          <h3 className="absolute top-6 left-4 md:left-[5%] text-white/40 text-[10px] font-mono uppercase tracking-widest z-10 block">Ad Exposures</h3>

          {/* Left Blocks */}
          <div className="absolute top-[25%] left-4 md:left-[5%] -translate-y-1/2 bg-[#1a1406] border border-[#eab308]/20 p-3 rounded-xl flex items-center gap-3 shadow-lg z-10 w-48">
             <div className="w-8 h-8 rounded-lg bg-[#eab308]/10 flex items-center justify-center shrink-0">
               <Tv className="w-4 h-4 text-[#eab308]" />
             </div>
             <div>
               <div className="text-xs text-white font-bold">Smart TV Ad</div>
               <div className="text-[9px] text-gray-500">Hulu / Roku</div>
             </div>
          </div>

          <div className="absolute top-[50%] left-4 md:left-[5%] -translate-y-1/2 bg-[#1a1406] border border-[#eab308]/20 p-3 rounded-xl flex items-center gap-3 shadow-lg z-10 w-48">
             <div className="w-8 h-8 rounded-lg bg-[#eab308]/10 flex items-center justify-center shrink-0">
               <Smartphone className="w-4 h-4 text-[#eab308]" />
             </div>
             <div>
               <div className="text-xs text-white font-bold">Mobile Video</div>
               <div className="text-[9px] text-gray-500">iOS / Android</div>
             </div>
          </div>

          <div className="absolute top-[75%] left-4 md:left-[5%] -translate-y-1/2 bg-[#1a1406] border border-[#eab308]/20 p-3 rounded-xl flex items-center gap-3 shadow-lg z-10 w-48">
             <div className="w-8 h-8 rounded-lg bg-[#eab308]/10 flex items-center justify-center shrink-0">
               <Monitor className="w-4 h-4 text-[#eab308]" />
             </div>
             <div>
               <div className="text-xs text-white font-bold">Desktop Display</div>
               <div className="text-[9px] text-gray-500">Web Browsers</div>
             </div>
          </div>

          {/* Central Identity Graph */}
          <div className="absolute left-[35%] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#2a220a] to-[#120f04] border border-[#eab308]/40 shadow-[0_0_50px_rgba(234,179,8,0.2)] flex flex-col items-center justify-center relative overflow-hidden">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-[-10px] border border-dashed border-[#eab308]/30 rounded-full" />
               <Users className="w-8 h-8 md:w-9 md:h-9 text-[#facc15] mb-1 relative z-10" />
               <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-widest relative z-10 text-center">Identity<br/>Graph</span>
            </div>
          </div>

          {/* Conversions (Right) */}
          <div className="absolute right-4 md:right-[5%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10">
            <h3 className="text-white/40 text-[10px] font-mono uppercase tracking-widest text-center mb-1">Verified Conversion</h3>
            
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-44 p-4 rounded-2xl bg-[#0f1a14] border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex flex-col items-center gap-2"
            >
               <Target className="w-6 h-6 text-emerald-400" />
               <div className="text-center">
                 <div className="text-xs text-white font-bold">App Installation</div>
                 <div className="text-[9px] text-emerald-400 mt-1 bg-emerald-500/10 px-2 py-1 rounded">Match Confidence: 99.9%</div>
               </div>
            </motion.div>
          </div>

          </div> {/* End scaled container */}

        </div>
      </div>
    </section>
  );
};

// Section 4: Capabilities Grid
const CapabilitiesSection = () => {
  const cases = [
    { title: "Connected TV Analytics", desc: "Gain hyper-granular visibility into streaming consumption patterns across fragmented CTV platforms. Analyze viewer drop-off rates and engagement metrics in real-time.", icon: Tv, delay: 0 },
    { title: "Audience Intelligence", desc: "Dynamically segment viewers based on behavioral data to enable highly targeted ad placements.", icon: Users, delay: 0.1 },
    { title: "Campaign Analytics", desc: "Provide real-time attribution modeling that proves exact ROI for multi-channel campaigns.", icon: BarChart, delay: 0.2 },
    { title: "Data Aggregation", desc: "Ingest and normalize massive streams of ad-server logs to detect fraud, ensure viewability standards, and maintain brand safety across all media buys.", icon: Shield, delay: 0.3 }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-white">Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#facc15]">Capabilities</span></h2>
          <p className="text-gray-400 text-[13px] sm:text-sm md:text-base max-w-xl">Harness the full power of the CTV ecosystem with our suite of advanced streaming analytics tools.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {cases.map((card, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: card.delay }}
            className={`group relative rounded-[20px] sm:rounded-2xl overflow-hidden p-[1.5px] cursor-pointer ${
              i === 0 || i === 3 ? "col-span-1 md:col-span-2" : "col-span-1"
            }`}
          >
            {/* Spinning Magic Border (Hidden by default, visible on hover) */}
            <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl z-0">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#facc15_360deg)]"
               />
            </div>
            
            {/* Inner Card Content */}
            <div className="relative z-10 bg-[#0a0802] group-hover:bg-[#120f04] transition-colors duration-500 rounded-[calc(20px-1.5px)] sm:rounded-[calc(1rem-1.5px)] h-full p-3 sm:p-5 md:p-6 flex flex-col justify-between border border-white/5">
              
              <div>
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#141005] border border-[#eab308]/20 flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <card.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#eab308]" />
                </div>
                
                <h3 className="text-[11px] sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-[#facc15] transition-colors leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 text-[9px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed group-hover:text-gray-300 transition-colors line-clamp-4 sm:line-clamp-none">
                  {card.desc}
                </p>
              </div>
              
              {/* Decorative micro-visuals for wide cards */}
              {(i === 0 || i === 3) && (
                 <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-white/5 flex gap-2 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity hidden md:flex">
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }} 
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="h-1 w-1/3 bg-gradient-to-r from-transparent via-[#eab308]/50 to-transparent rounded-full" 
                    />
                 </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Section 5: Audience Builder Mockup
const AudienceBuilderSection = () => {
  return (
    <section className="py-12 sm:py-20 md:py-24 relative bg-[#050401] overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#eab308]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#facc15]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8 sm:gap-16 relative z-10">
        
        <div className="lg:w-1/2 w-full text-left">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#eab308]/10 border border-[#eab308]/30 text-[9px] sm:text-[10px] font-mono text-[#eab308] mb-4 sm:mb-6 uppercase tracking-widest">
            <Users className="w-3 h-3" />
            Audience Graph
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">Dynamic <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#facc15]">Segmentation</span></h2>
          <p className="text-gray-400 text-[13px] sm:text-lg leading-relaxed mb-6 sm:mb-8">
            Stop wasting ad spend on broad demographics. Build hyper-targeted audience segments based on real-time streaming behaviors, purchase intent, and cross-screen activity.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="group flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-5 rounded-[14px] sm:rounded-2xl bg-[#0a0802] border border-white/5 hover:border-[#eab308]/30 hover:bg-[#120e05] transition-all duration-300 cursor-pointer">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#eab308]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-[#facc15]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs sm:text-base mb-0.5 sm:mb-1 group-hover:text-[#facc15] transition-colors">Content Affinity Targeting</h4>
                <p className="text-[9px] sm:text-sm text-gray-400">Target users who binge-watched specific genres in the last 7 days.</p>
              </div>
            </div>
            <div className="group flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-5 rounded-[14px] sm:rounded-2xl bg-[#0a0802] border border-white/5 hover:border-[#eab308]/30 hover:bg-[#120e05] transition-all duration-300 cursor-pointer">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#eab308]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-[#facc15]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs sm:text-base mb-0.5 sm:mb-1 group-hover:text-[#facc15] transition-colors">Household Syncing</h4>
                <p className="text-[9px] sm:text-sm text-gray-400">Map connected TVs to mobile devices on the same IP network.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flat High-Fidelity UI Mockup */}
        <div className="lg:w-1/2 w-full transform scale-[0.85] sm:scale-100 origin-center -mt-6 sm:mt-0">
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full rounded-2xl p-[1px] bg-gradient-to-b from-[#eab308]/30 via-white/5 to-transparent shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#eab308]/20 to-transparent blur-2xl -z-10" />

            <div className="w-full bg-[#0a0802] border border-white/5 rounded-2xl overflow-hidden flex flex-col relative z-10">
              
              {/* Header (MacOS Style) */}
              <div className="h-10 sm:h-12 border-b border-white/10 flex items-center px-3 sm:px-4 bg-[#141005] gap-2">
                <div className="flex gap-1.5 mr-1 sm:mr-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-black/40 px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-mono text-gray-400 border border-white/5 mx-auto">
                  <Shield className="w-3 h-3 text-[#facc15]" />
                  builder.ctv-analytics.ai
                </div>
              </div>
              
              <div className="p-4 sm:p-6 md:p-8">
                {/* Filters */}
                <div className="flex flex-nowrap sm:flex-wrap justify-between sm:justify-start gap-1.5 sm:gap-3 mb-6 sm:mb-8 whitespace-nowrap overflow-x-auto sm:overflow-visible">
                  <span className="px-2 py-1 sm:px-4 sm:py-1.5 bg-[#1a1406] border border-white/10 rounded-full text-[8px] sm:text-xs text-gray-300 flex items-center gap-1 sm:gap-2 shadow-inner flex-shrink-0">
                    Geo: <span className="text-white font-bold">North America</span>
                  </span>
                  <span className="px-2 py-1 sm:px-4 sm:py-1.5 bg-[#eab308]/10 border border-[#eab308]/30 rounded-full text-[8px] sm:text-xs text-[#facc15] flex items-center gap-1 sm:gap-2 shadow-[0_0_10px_rgba(234,179,8,0.1)] flex-shrink-0">
                    Genre: <span className="text-white font-bold">Live Sports</span>
                  </span>
                  <span className="px-2 py-1 sm:px-4 sm:py-1.5 bg-[#eab308]/10 border border-[#eab308]/30 rounded-full text-[8px] sm:text-xs text-[#facc15] flex items-center gap-1 sm:gap-2 shadow-[0_0_10px_rgba(234,179,8,0.1)] flex-shrink-0">
                    Recency: <span className="text-white font-bold">Past 7 Days</span>
                  </span>
                </div>

                <div className="bg-[#050401] border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden text-center shadow-inner">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#eab308]/10 blur-[50px] rounded-full pointer-events-none" />
                  
                  <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold block mb-3 relative z-10">Estimated Audience Size</span>
                  
                  <div className="flex items-center justify-center gap-3 relative z-10 mb-8">
                    <motion.span 
                      animate={{ opacity: [1, 0.7, 1] }} 
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#fef08a] text-5xl md:text-6xl font-black font-mono tracking-tighter"
                    >
                      12.4M
                    </motion.span>
                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-2">Households</span>
                  </div>

                  <div className="relative z-10">
                    <div className="h-3 w-full bg-[#1a1406] rounded-full overflow-hidden flex border border-white/5 shadow-inner">
                      <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "45%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400" 
                        title="Mobile" 
                      />
                      <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "35%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#eab308] to-[#facc15]" 
                        title="CTV" 
                      />
                      <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "20%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400" 
                        title="Desktop" 
                      />
                    </div>
                    <div className="flex justify-between mt-3 text-[9px] md:text-[10px] font-bold text-gray-500 font-mono tracking-widest">
                      <span className="text-emerald-500">MOBILE (45%)</span>
                      <span className="text-[#facc15]">CTV (35%)</span>
                      <span className="text-blue-500">DESKTOP (20%)</span>
                    </div>
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

// Section 6: Ad Fraud Detection
const AdFraudSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-[#050401]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3 sm:py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-[9px] sm:text-[10px] font-mono text-red-500 mb-3 sm:mb-4 uppercase tracking-widest shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <Shield className="w-3 h-3" />
            Ad Fraud Prevention
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight">
            Filter the Noise. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Protect Your Spend.</span>
          </h2>
          <p className="text-gray-400 text-[13px] sm:text-sm md:text-base leading-relaxed">
            Our proprietary filtering engine ingests massive ad-server logs in real-time, instantly blocking botnets, spoofed IPs, and invalid traffic before it impacts your ROI.
          </p>
        </div>

        {/* Visualizer */}
        <div className="relative w-full h-[180px] sm:h-[250px] md:h-[300px] bg-[#0a0802] border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/10 blur-[80px] rounded-full" />
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full" />

          {/* Connective Lines */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none block">
            <svg className="w-full h-full" preserveAspectRatio="none">
               <line x1="15%" y1="50%" x2="45%" y2="50%" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
               <line x1="55%" y1="50%" x2="85%" y2="50%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Engine Nodes */}
          <div className="absolute inset-0 flex items-center justify-between px-[5%] md:px-[15%]">
            
            {/* Source Node (Raw Traffic) */}
            <div className="relative flex flex-col items-center">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-[12px] md:rounded-2xl bg-[#141005] border border-white/10 flex items-center justify-center z-10 shadow-lg">
                <Globe className="w-4 h-4 md:w-7 md:h-7 text-gray-500" />
              </div>
              <div className="mt-2 md:mt-3 text-[7px] md:text-[10px] font-mono text-gray-500 text-center uppercase tracking-widest block">Global<br/>Traffic</div>
            </div>

            {/* Shield Node (Filter) */}
            <div className="relative flex flex-col items-center group">
              <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full group-hover:bg-red-500/30 transition-colors" />
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#1a0505] border-2 border-red-500/50 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(239,68,68,0.3)] relative">
                <Shield className="w-5 h-5 md:w-8 md:h-8 text-red-500" />
                {/* Ping animation */}
                <motion.div animate={{ scale: [1, 1.5], opacity: [0.8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 border border-red-500 rounded-full" />
              </div>
              <div className="mt-2 md:mt-3 text-[7px] md:text-[10px] font-mono text-red-500 text-center uppercase tracking-widest font-bold block">Fraud<br/>Engine</div>
            </div>

            {/* Destination Node (Clean) */}
            <div className="relative flex flex-col items-center">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-[12px] md:rounded-2xl bg-[#05140a] border border-emerald-500/20 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <CheckCircle className="w-4 h-4 md:w-7 md:h-7 text-emerald-500" />
              </div>
              <div className="mt-2 md:mt-3 text-[7px] md:text-[10px] font-mono text-emerald-500 text-center uppercase tracking-widest block">Verified<br/>Impressions</div>
            </div>
          </div>

          {/* Animated Particles */}
          {/* Red Particles (Blocked at center) */}
          {[...Array(6)].map((_, i) => (
             <motion.div
               key={`red-${i}`}
               initial={{ left: "15%", top: RED_PARTICLE_TOPS[i], opacity: 0, scale: 0.5 }}
               animate={{ 
                 left: ["15%", "48%", "48%"], 
                 opacity: [0, 1, 0],
                 scale: [0.5, 1, 0]
               }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
               className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] z-20"
             />
          ))}

          {/* Green Particles (Pass through to end) */}
          {[...Array(5)].map((_, i) => (
             <motion.div
               key={`green-${i}`}
               initial={{ left: "15%", top: GREEN_PARTICLE_TOPS[i], opacity: 0 }}
               animate={{ 
                 left: ["15%", "85%"], 
                 opacity: [0, 1, 1, 0],
               }}
               transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
               className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] z-20"
             />
          ))}

        </div>

      </div>
    </section>
  );
};

export default function MediaAdvertising() {
  return (
    <div className="min-h-screen bg-[#050401] text-white font-sans selection:bg-[#eab308]/30">
      <Navbar />
      
      <HeroSection />
      <MetricsTickerSection />
      <AttributionEngineSection />
      <CapabilitiesSection />
      <AudienceBuilderSection />
      <AdFraudSection />
      <CTA />

      <Footer />
    </div>
  );
}
