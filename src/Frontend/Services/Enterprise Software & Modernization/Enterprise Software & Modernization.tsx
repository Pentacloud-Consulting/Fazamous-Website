"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Terminal, ArrowRightLeft, Blocks, 
  Workflow, CheckCircle, Database, Server, 
  Cpu, Rocket, GitPullRequest, CloudCog, ShieldAlert, LineChart
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import CTA from '@/Frontend/Home/CTA';

// Section 1: Hero (Abstract Code Matrix)
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 bg-[#030105]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[#8b5cf6]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#6d28d9]/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Abstract Falling Code / Data Streams */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none flex">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 1, 0] }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear" 
            }}
            className="flex-1 text-[8px] font-mono text-[#8b5cf6] flex flex-col items-center justify-start gap-1"
            style={{ width: `${100/30}%` }}
          >
            {[...Array(10)].map((_, j) => (
              <span key={j} style={{ opacity: 1 - (j * 0.1) }}>{Math.random() > 0.5 ? '1' : '0'}</span>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mt-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-xs font-bold text-[#8b5cf6] uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        >
          <Code2 className="w-4 h-4 animate-pulse" />
          CodeMorph AI
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[85px] font-bold leading-[1.1] mb-8 tracking-tight text-white"
        >
          Automated Legacy.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#e879f9]">Instant Modernization.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Autonomously parse and rewrite monolithic SAS codebases into optimized, distributed PySpark microservices. Eliminate human error and accelerate digital transformation by 85%.
        </motion.p>
      </div>
    </section>
  );
};

// Section 2: Dev Metrics Ticker
const MetricsTickerSection = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-[#030105] via-[#120524] to-[#030105] border-y border-[#8b5cf6]/10 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 px-8 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-3"><Rocket className="w-6 h-6 text-[#8b5cf6]" /><span className="text-2xl font-black text-white">85% FASTER DEV CYCLES</span></div>
              <div className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-[#a855f7]" /><span className="text-2xl font-black text-white">100% LOGIC PRESERVATION</span></div>
              <div className="flex items-center gap-3"><CloudCog className="w-6 h-6 text-[#e879f9]" /><span className="text-2xl font-black text-white">CLOUD-NATIVE SCALABILITY</span></div>
              <div className="flex items-center gap-3"><GitPullRequest className="w-6 h-6 text-purple-400" /><span className="text-2xl font-black text-white">ZERO DOWNTIME MIGRATIONS</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: SAS to PySpark Translation (Animated Diagram)
const TranslationEngineSection = () => {
  return (
    <section className="py-24 relative bg-[#05020a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">CodeMorph <span className="text-[#8b5cf6]">AI Engine</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Watch legacy monolithic code be instantly ingested, analyzed, and refactored into highly scalable PySpark pipelines.</p>
        </div>

        <div className="relative w-full py-16 px-8 bg-[#0a0414] rounded-3xl border border-[#8b5cf6]/10 flex flex-col md:flex-row items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Legacy Input */}
          <div className="w-full md:w-1/4 flex flex-col gap-4 z-10">
            <div className="text-center mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-mono uppercase tracking-widest">
                <Database className="w-3 h-3" /> Legacy Monolith
              </div>
            </div>
            
            <div className="bg-[#12071f] border border-white/5 p-4 rounded-xl font-mono text-[10px] text-gray-500 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#12071f]" />
               <p className="text-red-400 mb-1">PROC SQL;</p>
               <p>  CREATE TABLE WORK.summary AS</p>
               <p>  SELECT client_id,</p>
               <p>         SUM(amount) AS total</p>
               <p>  FROM raw_transactions</p>
               <p>  GROUP BY client_id;</p>
               <p className="text-red-400 mt-1">QUIT;</p>
            </div>
          </div>

          {/* Connection Lines (Left to Center) */}
          <div className="hidden md:block w-32 h-1 relative z-0">
             <motion.div animate={{ x: [0, 100], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute h-[2px] bg-red-500 w-16 top-1/2 -translate-y-1/2 rounded-full" />
             <div className="h-[1px] w-full bg-white/5 absolute top-1/2 -translate-y-1/2 border-t border-dashed border-white/10" />
          </div>

          {/* Central CodeMorph AI */}
          <div className="relative z-10 w-full md:w-1/3 my-12 md:my-0 flex justify-center perspective-1000">
            <motion.div 
              animate={{ rotateY: [0, 15, 0, -15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-br from-[#1b0b30] to-[#0a0414] border border-[#8b5cf6]/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(139,92,246,0.3)] flex flex-col items-center text-center w-full max-w-[280px]"
            >
              <Cpu className="w-12 h-12 text-[#8b5cf6] mb-4" />
              <div className="text-white font-bold text-lg mb-1">AST Parser & Refactor</div>
              <div className="text-xs text-[#8b5cf6] font-mono mb-4">Semantic Code Mapping</div>
              
              <div className="w-full flex items-center gap-2 text-[10px] font-mono text-gray-400">
                 <ArrowRightLeft className="w-4 h-4 text-gray-500" />
                 Translating logic...
              </div>
            </motion.div>
          </div>

          {/* Connection Lines (Center to Right) */}
          <div className="hidden md:block w-32 h-1 relative z-0">
             <motion.div animate={{ x: [0, 100], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.7 }} className="absolute h-[2px] bg-emerald-500 w-16 top-1/2 -translate-y-1/2 rounded-full" />
             <div className="h-[1px] w-full bg-white/5 absolute top-1/2 -translate-y-1/2 border-t border-dashed border-white/10" />
          </div>

          {/* Modern Output */}
          <div className="w-full md:w-1/4 flex flex-col gap-4 z-10">
            <div className="text-center mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-widest">
                <CloudCog className="w-3 h-3" /> PySpark Microservice
              </div>
            </div>
            
            <div className="bg-[#04120a] border border-emerald-500/20 p-4 rounded-xl font-mono text-[10px] text-gray-300 relative shadow-[0_0_20px_rgba(16,185,129,0.1)]">
               <p className="text-emerald-400 mb-1">from pyspark.sql import functions as F</p>
               <p className="mt-2 text-gray-500"># Auto-generated distributed pipeline</p>
               <p>summary_df = raw_transactions \</p>
               <p className="ml-4">.groupBy("client_id") \</p>
               <p className="ml-4">.agg(F.sum("amount").alias("total"))</p>
               <p className="mt-2">summary_df.write.parquet("s3://...")</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Section 4: Modernization Capabilities Grid
const CapabilitiesSection = () => {
  const cases = [
    { title: "SAS to PySpark Automation", desc: "Autonomously parse and rewrite monolithic SAS codebases into optimized, distributed PySpark pipelines without human error.", icon: ArrowRightLeft, delay: 0 },
    { title: "Legacy System Modernization", desc: "Accelerate digital transformation by mapping and refactoring outdated architectures into modern, cloud-native microservices.", icon: Server, delay: 0.1 },
    { title: "Enterprise Software Dev", desc: "Provide AI-assisted coding and automated test generation to dramatically reduce sprint cycles and technical debt.", icon: Code2, delay: 0.2 },
    { title: "Intelligent CI/CD Automation", desc: "Deploy self-maintaining pipelines that autonomously detect, test, and revert breaking changes before they hit production.", icon: GitPullRequest, delay: 0.3 }
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Modernization <span className="text-gray-500">Suite</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((card, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: card.delay }}
            className={`group relative bg-[#080310] border border-white/5 p-8 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:bg-[#8b5cf6]/5 hover:border-[#8b5cf6]/30 hover:-translate-y-1 shadow-lg`}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 rounded-xl bg-[#0e051a] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#8b5cf6]/20 group-hover:border-[#8b5cf6]/40 shadow-inner`}>
                <card.icon className={`w-7 h-7 text-gray-500 group-hover:text-[#a855f7] transition-colors duration-500`} />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#a855f7] transition-colors">
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

// Section 5: AI IDE Mockup (Typing Animation)
const IDETranslationSection = () => {
  const [showPySpark, setShowPySpark] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPySpark(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#05020a] to-[#0a0414] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">AI-Assisted <br/><span className="text-[#8b5cf6]">Refactoring</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Don't waste years rewriting legacy code manually. CodeMorph AI understands context, business logic, and dependencies, translating monolithic scripts into modern Python frameworks flawlessly.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0414] border border-[#8b5cf6]/20">
              <Terminal className="w-6 h-6 text-[#a855f7] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Context-Aware Translation</h4>
                <p className="text-sm text-gray-400">Maintains exact business logic and mathematical precision.</p>
              </div>
            </div>
          </div>
        </div>

        {/* IDE UI Mockup */}
        <div className="lg:w-1/2 w-full perspective-1000">
          <motion.div 
            initial={{ rotateY: -10, rotateX: 5 }}
            animate={{ rotateY: [-10, -5, -10], rotateX: [5, 2, 5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-[#0d071a] border border-[#8b5cf6]/20 rounded-2xl shadow-[0_20px_60px_rgba(139,92,246,0.2)] overflow-hidden flex flex-col font-mono text-[11px] md:text-xs"
          >
            {/* Header */}
            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#080410]">
              <div className="flex gap-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              
              <div className={`px-3 py-1 rounded-t-md border-t border-x border-white/10 transition-colors ${!showPySpark ? 'bg-[#120724] text-white' : 'bg-transparent text-gray-500'}`}>
                legacy_pipeline.sas
              </div>
              <div className={`px-3 py-1 rounded-t-md border-t border-x border-white/10 transition-colors ${showPySpark ? 'bg-[#120724] text-[#a855f7]' : 'bg-transparent text-gray-500'}`}>
                modern_pipeline.py
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6 h-[250px] relative">
              <AnimatePresence mode="wait">
                {!showPySpark ? (
                  <motion.div 
                    key="sas"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-400"
                  >
                    <p className="text-red-400">DATA</p>
                    <p className="ml-4">combined_dataset;</p>
                    <p className="text-red-400 mt-2">MERGE</p>
                    <p className="ml-4">customers(IN=a)</p>
                    <p className="ml-4">transactions(IN=b);</p>
                    <p className="text-red-400 mt-2">BY</p>
                    <p className="ml-4">customer_id;</p>
                    <p className="text-red-400 mt-2">IF</p>
                    <p className="ml-4">a AND b;</p>
                    <p className="text-red-400 mt-2">RUN;</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="pyspark"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-300"
                  >
                    <p className="text-emerald-400"># Auto-translated by CodeMorph AI</p>
                    <p className="text-[#a855f7] mt-2">combined_dataset <span className="text-white">=</span> customers.join(</p>
                    <p className="ml-4">transactions,</p>
                    <p className="ml-4 text-[#e879f9]">on<span className="text-white">=</span><span className="text-yellow-300">"customer_id"</span>,</p>
                    <p className="ml-4 text-[#e879f9]">how<span className="text-white">=</span><span className="text-yellow-300">"inner"</span></p>
                    <p>)</p>
                    <p className="mt-4 text-emerald-400"># Optimization applied: inner join replaces conditional merge</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Status Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#080410] border-t border-white/5 flex items-center px-4 justify-between text-[10px]">
                 <span className="text-emerald-400 flex items-center gap-2"><CheckCircle className="w-3 h-3"/> Translation Complete</span>
                 <span className="text-gray-500">UTF-8</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Section 6: Monolith to Microservices Animation
const MicroservicesSection = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6 overflow-hidden">
      <div className="bg-[#030105] border border-white/5 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden flex flex-col items-center">
        
        <div className="relative z-10 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 mb-6 uppercase tracking-widest">
            <Blocks className="w-3 h-3 text-[#e879f9]" />
            Architecture Modernization
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Break the <span className="text-[#e879f9]">Monolith.</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Automatically map rigid, interdependent legacy architectures and gracefully refactor them into decoupled, cloud-native microservices that scale infinitely.
          </p>
        </div>

        {/* Visual Animation */}
        <div className="relative w-full max-w-2xl h-80 flex items-center justify-center mt-4">
          
          {/* Background Pulse */}
          <div className="absolute inset-0 bg-[#e879f9]/5 blur-[80px] rounded-full pointer-events-none" />

          {/* Central Monolith (Fading out conceptually) */}
          <motion.div 
            animate={{ opacity: [1, 0.2, 1], scale: [1, 0.95, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-40 bg-[#120524] border-2 border-dashed border-red-500/40 rounded-xl flex items-center justify-center z-10"
          >
            <span className="text-xs font-bold text-red-500 uppercase">Monolith</span>
          </motion.div>

          {/* Orbiting Microservices */}
          {[
            { angle: 0, label: "Auth API", icon: ShieldAlert },
            { angle: 72, label: "Data Service", icon: Database },
            { angle: 144, label: "Payment API", icon: Cpu },
            { angle: 216, label: "User Svc", icon: CheckCircle },
            { angle: 288, label: "Analytics", icon: LineChart }
          ].map((node, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 bg-[#0a0414] border border-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.3)] rounded-xl flex flex-col items-center justify-center z-20"
              animate={{ 
                x: [0, Math.cos((node.angle * Math.PI) / 180) * 140],
                y: [0, Math.sin((node.angle * Math.PI) / 180) * 140],
                opacity: [0, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut",
                delay: 0.5 
              }}
            >
              <node.icon className="w-5 h-5 text-[#e879f9] mb-1" />
              <span className="text-[7px] text-white font-mono uppercase tracking-wider">{node.label}</span>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default function EnterpriseModernization() {
  return (
    <div className="min-h-screen bg-[#030105] text-white font-sans selection:bg-[#8b5cf6]/30">
      <Navbar />
      
      <HeroSection />
      <MetricsTickerSection />
      <TranslationEngineSection />
      <CapabilitiesSection />
      <IDETranslationSection />
      <MicroservicesSection />
      <CTA />

      <Footer />
    </div>
  );
}
