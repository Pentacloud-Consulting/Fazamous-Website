"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, LineChart, Globe, Zap, 
  Workflow, CheckSquare, BarChart3, Target, 
  Lightbulb, ShieldAlert, Cpu
} from 'lucide-react';
import { Navbar } from '@/components/Top-bottom/Navbar';
import { Footer } from '@/components/Top-bottom/Footer';
import CTA from '@/Frontend/Home/CTA';
import { ArrowRight } from 'lucide-react';

// Section 1: Hero (Central Nervous System)
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 bg-[#020205]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#6366f1]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#4f46e5]/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Neural Network Abstract Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 bg-[#6366f1] rounded-full shadow-[0_0_10px_#6366f1]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 mt-12 w-full">
        {/* Left Side: Information */}
        <div className="lg:w-1/2 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/30 text-xs font-bold text-[#6366f1] uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
          >
            <BrainCircuit className="w-4 h-4 animate-pulse" />
            The Insights Platform
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[70px] font-bold leading-[1.1] mb-6 tracking-tight text-white"
          >
            Decision Intelligence.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#c7d2fe]">God-Eye Visibility.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Act as the central nervous system for your enterprise. Turn petabytes of multi-modal data into zero-friction executive reporting, root cause analysis, and AI-prescribed actions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#818cf8] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center gap-2 group">
              Explore Platform <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Book Demo
            </button>
          </motion.div>
        </div>

        {/* Right Side: Animated Diagram */}
        <div className="lg:w-1/2 w-full hidden lg:flex justify-center items-center relative h-[500px]">
           <div className="relative w-full h-full flex items-center justify-center">
              {/* Outer Orbit */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[450px] h-[450px] rounded-full border border-white/5" />
              {/* Middle Orbit */}
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-[#6366f1]/30" />
              
              {/* Central Core */}
              <div className="w-32 h-32 rounded-full bg-[#0a0a1a] border border-[#6366f1]/50 shadow-[0_0_40px_rgba(99,102,241,0.4)] flex items-center justify-center relative z-20">
                 <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-full bg-[#6366f1]/20 blur-md" />
                 <BrainCircuit className="w-12 h-12 text-[#818cf8] relative z-10" />
              </div>

              {/* Orbiting Elements */}
              {/* Inner Node */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] z-10 pointer-events-none">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#050510] border border-[#6366f1]/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] pointer-events-auto">
                    <LineChart className="w-5 h-5 text-[#818cf8]" />
                 </div>
              </motion.div>

              {/* Outer Node 1 */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[450px] h-[450px] z-10 pointer-events-none">
                 <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#050510] border border-emerald-500/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] pointer-events-auto">
                    <Globe className="w-5 h-5 text-emerald-400" />
                 </div>
              </motion.div>

              {/* Outer Node 2 */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 10 }} className="absolute w-[450px] h-[450px] z-10 pointer-events-none">
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#050510] border border-pink-500/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.2)] pointer-events-auto">
                    <Target className="w-5 h-5 text-pink-400" />
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

// Section 2: Metrics Ticker
const MetricsTickerSection = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-[#020205] via-[#090914] to-[#020205] border-y border-[#6366f1]/10 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 px-8 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-3"><Zap className="w-6 h-6 text-[#6366f1]" /><span className="text-2xl font-black text-white">0-FRICTION INSIGHTS</span></div>
              <div className="flex items-center gap-3"><Globe className="w-6 h-6 text-[#818cf8]" /><span className="text-2xl font-black text-white">360° VISIBILITY</span></div>
              <div className="flex items-center gap-3"><Target className="w-6 h-6 text-[#a5b4fc]" /><span className="text-2xl font-black text-white">PREDICTIVE AI</span></div>
              <div className="flex items-center gap-3"><Cpu className="w-6 h-6 text-[#c7d2fe]" /><span className="text-2xl font-black text-white">SUB-SECOND QUERIES</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: Central Nervous System Architecture (Animated Diagram)
const ArchitectureSection = () => {
  return (
    <section className="py-24 relative bg-[#030308] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Enterprise <span className="text-[#6366f1]">Architecture</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Unifying siloed organizational data into a single, highly intelligent decision engine.</p>
        </div>

        <div className="relative w-full h-[420px] bg-[#050510] rounded-3xl border border-white/5 flex items-center justify-center overflow-x-auto overflow-y-hidden shadow-2xl hide-scrollbar">
          <div className="relative w-[1000px] min-w-[1000px] h-[420px]">
            
            {/* Connective SVG Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Left 1 to Center */}
              <motion.path d="M 152 80 C 300 80, 300 210, 420 210" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
              <motion.circle cx="0" cy="0" r="4" fill="#6366f1">
                <animateMotion path="M 152 80 C 300 80, 300 210, 420 210" dur="2s" repeatCount="indefinite" />
              </motion.circle>
              
              {/* Left 2 to Center */}
              <motion.path d="M 152 210 L 420 210" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
              <motion.circle cx="0" cy="0" r="4" fill="#6366f1">
                <animateMotion path="M 152 210 L 420 210" dur="2.5s" repeatCount="indefinite" />
              </motion.circle>

              {/* Left 3 to Center */}
              <motion.path d="M 152 340 C 300 340, 300 210, 420 210" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
              <motion.circle cx="0" cy="0" r="4" fill="#6366f1">
                <animateMotion path="M 152 340 C 300 340, 300 210, 420 210" dur="3s" repeatCount="indefinite" />
              </motion.circle>
              
              {/* Center to Right 1 */}
              <motion.path d="M 580 210 C 650 210, 650 120, 750 120" fill="none" stroke="rgba(129,140,248,0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <motion.circle cx="0" cy="0" r="4" fill="#818cf8">
                <animateMotion path="M 580 210 C 650 210, 650 120, 750 120" dur="2s" repeatCount="indefinite" />
              </motion.circle>

              {/* Center to Right 2 */}
              <motion.path d="M 580 210 C 650 210, 650 300, 750 300" fill="none" stroke="rgba(129,140,248,0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <motion.circle cx="0" cy="0" r="4" fill="#818cf8">
                <animateMotion path="M 580 210 C 650 210, 650 300, 750 300" dur="2.2s" repeatCount="indefinite" />
              </motion.circle>
            </svg>

            {/* Data Sources (Left) */}
            {[
              { label: "Finance", icon: BarChart3, y: 80 },
              { label: "Supply Chain", icon: Workflow, y: 210 },
              { label: "HR Data", icon: Globe, y: 340 }
            ].map((item, i) => (
              <div key={i} className="absolute flex flex-col items-center gap-2 z-10" style={{ left: '120px', top: `${item.y}px`, transform: 'translate(-50%, -50%)' }}>
                <div className="w-14 h-14 rounded-xl bg-[#0a0a1a] border border-[#6366f1]/30 flex items-center justify-center shadow-lg relative">
                  <item.icon className="w-6 h-6 text-[#6366f1]" />
                  {/* Glowing connector point */}
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#6366f1]" />
                </div>
                <span className="text-xs font-semibold text-gray-400 whitespace-nowrap">{item.label}</span>
              </div>
            ))}

            {/* Central Insights Platform Brain */}
            <div className="absolute left-[500px] top-[210px] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-30px] border-2 border-dashed border-[#6366f1]/30 rounded-full"
              />
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#1e1b4b] to-[#0a0a1a] border border-[#6366f1]/50 shadow-[0_0_50px_rgba(99,102,241,0.3)] flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[#6366f1]/10 blur-xl animate-pulse" />
                 <BrainCircuit className="w-12 h-12 text-[#818cf8] mb-2 relative z-10" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest relative z-10 text-center px-2">Insights Platform</span>
              </div>
            </div>

            {/* Outputs (Right) */}
            {[
              { title: "Executive Dashboards", desc: "Boardroom-ready ROI", icon: LineChart, color: "#818cf8", y: 120, delay: 0 },
              { title: "AI Recommendations", desc: "Prescribed Actions", icon: Lightbulb, color: "#c7d2fe", y: 300, delay: 1 }
            ].map((item, i) => (
              <div 
                key={i}
                className="absolute z-10 w-48"
                style={{ left: '850px', top: `${item.y}px`, transform: 'translate(-50%, -50%)' }}
              >
                 {/* Connection dot (STATIC) */}
                 <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-20" style={{ backgroundColor: item.color }} />
                 
                 {/* Floating Box */}
                 <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
                  className="w-full p-4 rounded-xl bg-[#0a0a1a] border shadow-[0_0_20px_rgba(129,140,248,0.15)] flex flex-col items-center gap-2 relative z-10"
                  style={{ borderColor: `${item.color}40` }}
                >
                   <item.icon className="w-6 h-6" style={{ color: item.color }} />
                   <div className="text-center">
                     <div className="text-sm text-white font-bold">{item.title}</div>
                     <div className="text-[10px] text-gray-400">{item.desc}</div>
                   </div>
                </motion.div>
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
      title: "Decision Intelligence", 
      desc: "Act as the central nervous system for your enterprise, turning petabytes of multi-modal data into strategic advantage.", 
      icon: BrainCircuit, 
      delay: 0,
      visual: () => (
        <div className="relative flex items-center justify-center w-full h-full">
           <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute w-12 h-12 rounded-full bg-[#6366f1] blur-xl" />
           <BrainCircuit className="w-6 h-6 text-[#818cf8] relative z-10" />
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute w-16 h-16 border border-dashed border-[#6366f1]/40 rounded-full" />
        </div>
      )
    },
    { 
      title: "Predictive Intelligence", 
      desc: "Forecast market shifts and internal operational demands before they materialize.", 
      icon: LineChart, 
      delay: 0.1,
      visual: () => (
        <div className="flex items-end justify-center w-full gap-1.5 h-10">
           {[40, 70, 45, 90, 60, 30].map((h, i) => (
             <motion.div 
               key={i} 
               animate={{ height: [`${h}%`, `${Math.random() * 60 + 20}%`, `${h}%`] }} 
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} 
               className="w-2 bg-gradient-to-t from-[#6366f1]/20 to-[#818cf8] rounded-t-sm" 
             />
           ))}
        </div>
      )
    },
    { 
      title: "Executive Reporting", 
      desc: "Generate zero-friction, boardroom-ready dashboards that update in real-time with flawless accuracy.", 
      icon: BarChart3, 
      delay: 0.2,
      visual: () => (
        <div className="flex flex-col gap-2 w-full max-w-[120px]">
          {[1, 2, 3].map((_, i) => (
             <div key={i} className="w-full h-1.5 bg-white/5 rounded overflow-hidden relative">
               <motion.div 
                 initial={{ x: "-100%" }} animate={{ x: "300%" }} 
                 transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: "linear" }} 
                 className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#818cf8] to-transparent shadow-[0_0_10px_#818cf8]" 
               />
             </div>
          ))}
        </div>
      )
    },
    { 
      title: "AI Recommendations", 
      desc: "Prescribe exact operational actions to maximize efficiency across supply chain, finance, and HR.", 
      icon: CheckSquare, 
      delay: 0.3,
      visual: () => (
        <div className="flex items-center justify-center w-full gap-3">
           <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center"><CheckSquare className="w-4 h-4 text-gray-500" /></div>
           <div className="w-8 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-full bg-[#6366f1]" />
           </div>
           <motion.div animate={{ scale: [1, 1.1, 1], borderColor: ['rgba(99,102,241,0.2)', 'rgba(99,102,241,0.8)', 'rgba(99,102,241,0.2)'] }} transition={{ duration: 2, repeat: Infinity }} className="w-8 h-8 rounded bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
             <Zap className="w-4 h-4 text-[#818cf8]" />
           </motion.div>
        </div>
      )
    },
    { 
      title: "Root Cause Analysis", 
      desc: "Instantly drill down from high-level KPI drops to the exact underlying technical or operational failure.", 
      icon: ShieldAlert, 
      delay: 0.4,
      visual: () => (
        <div className="flex items-center justify-center w-full relative">
           <motion.div animate={{ rotate: [0, -10, 10, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} className="relative z-10">
              <ShieldAlert className="w-8 h-8 text-red-400" />
           </motion.div>
           <motion.div animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-8 h-8 rounded-full border border-red-500/50" />
           <motion.div animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute w-8 h-8 rounded-full border border-red-500/30" />
        </div>
      )
    },
    { 
      title: "Enterprise Monitoring", 
      desc: "Maintain a holistic, God-eye view of every critical system across the entire global organization.", 
      icon: Globe, 
      delay: 0.5,
      visual: () => (
        <div className="flex items-center justify-center w-full relative">
           <Globe className="w-6 h-6 text-[#6366f1] relative z-10" />
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute w-14 h-14 border-2 border-transparent border-t-[#818cf8] border-r-[#818cf8] rounded-full" />
           <motion.div animate={{ rotate: -360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute w-20 h-20 border border-dashed border-[#6366f1]/30 rounded-full" />
        </div>
      )
    },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Platform <span className="text-gray-500">Capabilities</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((card, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: card.delay }}
            className="group relative p-[1px] rounded-2xl cursor-pointer"
          >
            {/* The Magic Rotating Hover Border */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_70%,rgba(99,102,241,0.8)_100%)] pointer-events-none"
              />
            </div>

            {/* Inner Card Container */}
            <div className="relative z-10 h-full bg-[#06060c] border border-white/5 group-hover:border-transparent rounded-2xl p-5 md:p-6 transition-all duration-500 overflow-hidden flex flex-col group-hover:bg-[#0a0a1a]/80 shadow-lg">
              {/* Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#6366f1]/10 to-transparent pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-[#0a0a15] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:bg-[#6366f1]/20 group-hover:border-[#6366f1]/40 shadow-inner`}>
                  <card.icon className={`w-5 h-5 text-gray-500 group-hover:text-[#818cf8] transition-colors duration-500`} />
                </div>
              </div>
              
              {/* Dynamic Visual Animation Section */}
              <div className="w-full h-20 bg-[#020205]/50 border border-white/5 rounded-xl flex items-center justify-center mb-4 overflow-hidden relative shadow-inner opacity-80 group-hover:opacity-100 transition-opacity">
                 <card.visual />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {card.title}
              </h3>
              
              <p className="text-[13px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mt-auto">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Section 5: Executive Dashboard Mockup
const DashboardMockupSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-[#030308] to-[#050510] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Boardroom-Ready <br/><span className="text-[#818cf8]">Executive Reporting</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Instantly drill down from top-level corporate KPIs to the exact underlying root causes. Receive AI-prescribed recommendations that maximize operational efficiency.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a15] border border-[#6366f1]/20">
              <Lightbulb className="w-6 h-6 text-[#c7d2fe] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Prescriptive Recommendations</h4>
                <p className="text-sm text-gray-400">AI suggests exact supply chain reroutes to save $2M/week.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a15] border border-white/5">
              <Target className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Root Cause Analysis</h4>
                <p className="text-sm text-gray-400">Instantly identify why Q3 margins dropped by 1.2% in EMEA.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated UI Mockup */}
        <div className="lg:w-1/2 w-full">
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-[#070712] border border-[#6366f1]/20 rounded-2xl shadow-[0_20px_60px_rgba(99,102,241,0.15)] overflow-hidden flex flex-col relative"
          >
            {/* Header */}
            <div className="h-14 border-b border-white/10 flex items-center px-6 gap-4 bg-[#0a0a1a]">
              <div className="w-8 h-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center relative overflow-hidden">
                 <Globe className="w-5 h-5 text-[#818cf8] relative z-10" />
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-[-50%] border-[2px] border-transparent border-t-[#6366f1]/50 rounded-full" />
              </div>
              <div>
                <div className="text-sm text-white font-bold leading-none mb-1">Global HQ Overview</div>
                <div className="text-[10px] text-emerald-400 font-mono tracking-widest flex items-center gap-2">
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  LIVE SYNC ACTIVE
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#05050a] border border-white/5 rounded-xl p-4 relative overflow-hidden">
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-1">Global Revenue</span>
                  <div className="flex items-end gap-2 relative z-10">
                    <span className="text-white text-2xl font-bold font-mono">$142.5M</span>
                    <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-emerald-400 text-xs mb-1">+4.2%</motion.span>
                  </div>
                  {/* Looping Graph Background */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end gap-1 opacity-20 px-2 pb-1 pointer-events-none">
                     {[40, 70, 50, 90, 60, 100, 80].map((h, i) => (
                       <motion.div key={i} animate={{ height: [`${h}%`, `${Math.random() * 50 + 20}%`, `${h}%`] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }} className="flex-1 bg-emerald-400 rounded-t-sm" />
                     ))}
                  </div>
                </div>
                <div className="bg-[#05050a] border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)] rounded-xl p-4 relative overflow-hidden">
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-1">Supply Chain Eff.</span>
                  <div className="flex items-end gap-2 relative z-10">
                    <span className="text-red-400 text-2xl font-bold font-mono">82%</span>
                    <motion.span animate={{ x: [0, -2, 2, -2, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }} className="text-red-500 text-xs mb-1">-2.1%</motion.span>
                  </div>
                  {/* Warning pulse overlay */}
                  <motion.div animate={{ opacity: [0, 0.1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 bg-red-500 pointer-events-none" />
                </div>
              </div>

              {/* AI Recommendation Box */}
              <div className="bg-gradient-to-r from-[#6366f1]/15 to-[#05050a] border border-[#6366f1]/30 rounded-xl p-5 relative overflow-hidden group cursor-pointer shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                <div className="absolute right-0 top-0 h-full w-1 bg-[#6366f1]" />
                {/* Scanning line */}
                <motion.div animate={{ y: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-[#6366f1]/20 to-transparent pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-3 relative z-10">
                  <Lightbulb className="w-4 h-4 text-[#a5b4fc] animate-pulse" />
                  <span className="text-[#a5b4fc] text-xs font-bold uppercase tracking-widest">AI Prescription</span>
                </div>
                <p className="text-white text-sm mb-4 relative z-10">
                  Logistics bottleneck detected in Port of Rotterdam. Reroute via Antwerp to save <span className="font-mono text-emerald-400 font-bold bg-emerald-400/10 px-1 rounded">$1.2M</span> and prevent 48hr delay.
                </p>
                <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors border border-white/10 relative overflow-hidden">
                  <span className="relative z-10">Execute Reroute</span>
                  {/* Button shine sweep */}
                  <motion.div animate={{ x: ["-200%", "300%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Section 6: God-Eye Monitoring
const GodEyeSection = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6 overflow-hidden">
      <div className="bg-[#05050a] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
        
        {/* Text Content (Left) */}
        <div className="relative z-10 w-full md:w-1/2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 mb-6 uppercase tracking-widest">
            <Globe className="w-3 h-3 text-[#818cf8]" />
            Holistic Monitoring
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The <span className="text-[#818cf8]">God-Eye</span> View.</h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
            Maintain total oversight. Our Insights Platform continually scans your entire global organization's infrastructure, finance, and operations to predict anomalies before they happen.
          </p>
        </div>

        {/* Radar Diagram (Right) */}
        <div className="relative w-full md:w-1/2 flex justify-center lg:justify-end pr-0 lg:pr-12">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#6366f1]/10 blur-[80px] pointer-events-none" />
          
          <div className="relative w-56 h-56 md:w-64 md:h-64 border border-[#6366f1]/20 rounded-full flex items-center justify-center">
            <div className="absolute inset-4 border border-[#6366f1]/10 rounded-full" />
            <div className="absolute inset-12 border border-[#6366f1]/10 rounded-full" />
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(99,102,241,0.4)_360deg)]"
            />
            
            <div className="w-4 h-4 bg-[#6366f1] rounded-full shadow-[0_0_20px_#6366f1] relative z-10" />
            
            {/* Blips */}
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute top-10 left-16 w-2 h-2 bg-emerald-400 rounded-full" />
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 2.5 }} className="absolute bottom-16 right-20 w-2 h-2 bg-emerald-400 rounded-full" />
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 3.2 }} className="absolute top-20 right-10 w-2 h-2 bg-[#6366f1] rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default function EnterpriseIntelligence() {
  return (
    <div className="min-h-screen bg-[#020205] text-white font-sans selection:bg-[#6366f1]/30">
      <Navbar />
      
      <HeroSection />
      <MetricsTickerSection />
      <ArchitectureSection />
      <CapabilitiesSection />
      <DashboardMockupSection />
      <GodEyeSection />
      <CTA />

      <Footer />
    </div>
  );
}
