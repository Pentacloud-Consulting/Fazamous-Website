"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, LineChart, Globe, Zap, 
  Workflow, CheckSquare, BarChart3, Target, 
  Lightbulb, ShieldAlert, Cpu
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import CTA from '@/Frontend/Home/CTA';

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

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mt-12">
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
          className="text-5xl md:text-7xl lg:text-[85px] font-bold leading-[1.1] mb-8 tracking-tight text-white"
        >
          Decision Intelligence.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#c7d2fe]">God-Eye Visibility.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Act as the central nervous system for your enterprise. Turn petabytes of multi-modal data into zero-friction executive reporting, root cause analysis, and AI-prescribed actions.
        </motion.p>
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

        <div className="relative w-full h-[550px] bg-[#050510] rounded-3xl border border-white/5 p-8 flex items-center justify-center overflow-hidden shadow-2xl">
          
          {/* Data Sources (Left) */}
          <div className="absolute left-8 md:left-16 flex flex-col gap-12 z-10">
            {[
              { label: "Finance", icon: BarChart3 },
              { label: "Supply Chain", icon: Workflow },
              { label: "HR Data", icon: Globe }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-xl bg-[#0a0a1a] border border-[#6366f1]/30 flex items-center justify-center shadow-lg relative">
                  <item.icon className="w-6 h-6 text-[#6366f1]" />
                  {/* Glowing connector point */}
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#6366f1]" />
                </div>
                <span className="text-xs font-semibold text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Connective SVG Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Top to Center */}
            <motion.path d="M 120 120 C 300 120, 350 275, 500 275" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
            <motion.circle cx="0" cy="0" r="4" fill="#6366f1">
              <animateMotion path="M 120 120 C 300 120, 350 275, 500 275" dur="2s" repeatCount="indefinite" />
            </motion.circle>
            
            {/* Mid to Center */}
            <motion.path d="M 120 275 C 300 275, 350 275, 500 275" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
            <motion.circle cx="0" cy="0" r="4" fill="#6366f1">
              <animateMotion path="M 120 275 C 300 275, 350 275, 500 275" dur="2.5s" repeatCount="indefinite" />
            </motion.circle>

            {/* Bottom to Center */}
            <motion.path d="M 120 430 C 300 430, 350 275, 500 275" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
            <motion.circle cx="0" cy="0" r="4" fill="#6366f1">
              <animateMotion path="M 120 430 C 300 430, 350 275, 500 275" dur="3s" repeatCount="indefinite" />
            </motion.circle>
            
            {/* Center to Right (Outputs) */}
            <motion.path d="M 500 275 C 650 275, 700 160, 880 160" fill="none" stroke="rgba(129,140,248,0.3)" strokeWidth="2" strokeDasharray="5,5" />
            <motion.circle cx="0" cy="0" r="4" fill="#818cf8">
              <animateMotion path="M 500 275 C 650 275, 700 160, 880 160" dur="2s" repeatCount="indefinite" />
            </motion.circle>

            <motion.path d="M 500 275 C 650 275, 700 390, 880 390" fill="none" stroke="rgba(129,140,248,0.3)" strokeWidth="2" strokeDasharray="5,5" />
            <motion.circle cx="0" cy="0" r="4" fill="#818cf8">
              <animateMotion path="M 500 275 C 650 275, 700 390, 880 390" dur="2.2s" repeatCount="indefinite" />
            </motion.circle>
          </svg>

          {/* Central Insights Platform Brain */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-30px] border-2 border-dashed border-[#6366f1]/30 rounded-full"
            />
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#1e1b4b] to-[#0a0a1a] border border-[#6366f1]/50 shadow-[0_0_50px_rgba(99,102,241,0.3)] flex flex-col items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[#6366f1]/10 blur-xl animate-pulse" />
               <BrainCircuit className="w-12 h-12 text-[#818cf8] mb-2 relative z-10" />
               <span className="text-[10px] font-bold text-white uppercase tracking-widest relative z-10">Insights Platform</span>
            </div>
          </div>

          {/* Outputs (Right) */}
          <div className="absolute right-8 md:right-16 flex flex-col gap-24 z-10">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-48 p-4 rounded-xl bg-[#0a0a1a] border border-[#818cf8]/40 shadow-[0_0_20px_rgba(129,140,248,0.15)] flex flex-col items-center gap-2"
            >
               <LineChart className="w-6 h-6 text-[#818cf8]" />
               <div className="text-center">
                 <div className="text-sm text-white font-bold">Executive Dashboards</div>
                 <div className="text-[10px] text-gray-400">Boardroom-ready ROI</div>
               </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-48 p-4 rounded-xl bg-[#0a0a1a] border border-[#c7d2fe]/40 shadow-[0_0_20px_rgba(199,210,254,0.15)] flex flex-col items-center gap-2"
            >
               <Lightbulb className="w-6 h-6 text-[#c7d2fe]" />
               <div className="text-center">
                 <div className="text-sm text-white font-bold">AI Recommendations</div>
                 <div className="text-[10px] text-gray-400">Prescribed Actions</div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Section 4: Capabilities Grid
const CapabilitiesSection = () => {
  const cases = [
    { title: "Decision Intelligence", desc: "Act as the central nervous system for your enterprise, turning petabytes of multi-modal data into strategic advantage.", icon: BrainCircuit, delay: 0 },
    { title: "Predictive Intelligence", desc: "Forecast market shifts and internal operational demands before they materialize.", icon: LineChart, delay: 0.1 },
    { title: "Executive Reporting", desc: "Generate zero-friction, boardroom-ready dashboards that update in real-time with flawless accuracy.", icon: BarChart3, delay: 0.2 },
    { title: "AI Recommendations", desc: "Prescribe exact operational actions to maximize efficiency across supply chain, finance, and HR.", icon: CheckSquare, delay: 0.3 },
    { title: "Root Cause Analysis", desc: "Instantly drill down from high-level KPI drops to the exact underlying technical or operational failure.", icon: ShieldAlert, delay: 0.4 },
    { title: "Enterprise Monitoring", desc: "Maintain a holistic, God-eye view of every critical system across the entire global organization.", icon: Globe, delay: 0.5 },
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
            className={`group relative bg-[#06060c] border border-white/5 p-8 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:bg-[#6366f1]/5 hover:border-[#6366f1]/30 hover:-translate-y-1`}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#6366f1]/10 to-transparent pointer-events-none" />
            
            <div className={`w-14 h-14 rounded-xl bg-[#0a0a15] border border-white/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#6366f1]/20 group-hover:border-[#6366f1]/40 shadow-inner`}>
              <card.icon className={`w-7 h-7 text-gray-500 group-hover:text-[#818cf8] transition-colors duration-500`} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
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
        <div className="lg:w-1/2 w-full perspective-1000">
          <motion.div 
            initial={{ rotateY: -15, rotateX: 5 }}
            animate={{ rotateY: [-15, -5, -15], rotateX: [5, 2, 5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-[#070712] border border-[#6366f1]/20 rounded-2xl shadow-[0_20px_60px_rgba(99,102,241,0.15)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="h-14 border-b border-white/10 flex items-center px-6 gap-4 bg-[#0a0a1a]">
              <div className="w-8 h-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center">
                 <Globe className="w-5 h-5 text-[#818cf8]" />
              </div>
              <div>
                <div className="text-sm text-white font-bold leading-none mb-1">Global HQ Overview</div>
                <div className="text-[10px] text-emerald-400 font-mono tracking-widest">LIVE SYNC ACTIVE</div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#05050a] border border-white/5 rounded-xl p-4">
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-1">Global Revenue</span>
                  <div className="flex items-end gap-2">
                    <span className="text-white text-2xl font-bold font-mono">$142.5M</span>
                    <span className="text-emerald-400 text-xs mb-1">+4.2%</span>
                  </div>
                </div>
                <div className="bg-[#05050a] border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)] rounded-xl p-4">
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-1">Supply Chain Eff.</span>
                  <div className="flex items-end gap-2">
                    <span className="text-red-400 text-2xl font-bold font-mono">82%</span>
                    <span className="text-red-500 text-xs mb-1">-2.1%</span>
                  </div>
                </div>
              </div>

              {/* AI Recommendation Box */}
              <div className="bg-gradient-to-r from-[#6366f1]/15 to-[#05050a] border border-[#6366f1]/30 rounded-xl p-5 relative overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-1 bg-[#6366f1]" />
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-[#a5b4fc] animate-pulse" />
                  <span className="text-[#a5b4fc] text-xs font-bold uppercase tracking-widest">AI Prescription</span>
                </div>
                <p className="text-white text-sm mb-4">
                  Logistics bottleneck detected in Port of Rotterdam. Reroute via Antwerp to save <span className="font-mono text-emerald-400 font-bold">$1.2M</span> and prevent 48hr delay.
                </p>
                <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors border border-white/10">
                  Execute Reroute
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
      <div className="bg-[#05050a] border border-white/5 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden flex flex-col items-center">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 mb-6 uppercase tracking-widest">
            <Globe className="w-3 h-3 text-[#818cf8]" />
            Holistic Monitoring
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The <span className="text-[#818cf8]">God-Eye</span> View.</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Maintain total oversight. Our Insights Platform continually scans your entire global organization's infrastructure, finance, and operations to predict anomalies before they happen.
          </p>
        </div>

        {/* Radar Animation */}
        <div className="relative w-64 h-64 border border-[#6366f1]/20 rounded-full flex items-center justify-center mt-4">
          <div className="absolute inset-4 border border-[#6366f1]/10 rounded-full" />
          <div className="absolute inset-12 border border-[#6366f1]/10 rounded-full" />
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(99,102,241,0.4)_360deg)]"
          />
          
          <div className="w-4 h-4 bg-[#6366f1] rounded-full shadow-[0_0_20px_#6366f1]" />
          
          {/* Blips */}
          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute top-10 left-16 w-2 h-2 bg-emerald-400 rounded-full" />
          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 2.5 }} className="absolute bottom-16 right-20 w-2 h-2 bg-emerald-400 rounded-full" />
          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 3.2 }} className="absolute top-20 right-10 w-2 h-2 bg-[#6366f1] rounded-full" />
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
