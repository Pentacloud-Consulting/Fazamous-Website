"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Terminal, ArrowRightLeft, Blocks, 
  Workflow, CheckCircle, Database, Server, 
  Cpu, Rocket, GitPullRequest, CloudCog, ShieldAlert, LineChart, Scan
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import CTA from '@/Frontend/Home/CTA';

// Custom Typewriter Component for Code Blocks
const TypewriterLoop = ({ textLines, className, speed = 30, eraseSpeed = 15, delay = 2000 }: { textLines: string[], className?: string, speed?: number, eraseSpeed?: number, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "erasing">("typing");
  const fullText = textLines.join('\n');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (phase === "typing") {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setPhase("erasing"), delay);
      }
    } else if (phase === "erasing") {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, eraseSpeed);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, phase, fullText, speed, eraseSpeed, delay]);

  return (
    <div className={`whitespace-pre-wrap font-mono ${className}`}>
      {displayedText}
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>|</motion.span>
    </div>
  );
};

// Section 1: Hero (Abstract Code Matrix)
const HeroSection = () => {
  const legacyCode = [
    "DATA source;",
    "SET legacy.master;",
    "IF status = 'ACTIVE' THEN output;",
    "RUN;"
  ];

  const modernCode = [
    'df = spark.read.parquet("s3://data/master")',
    'active_df = df.filter(col("status") == "ACTIVE")',
    'active_df.write.partitionBy("date").save()'
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 bg-[#030105]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[#8b5cf6]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#6d28d9]/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Abstract Falling Code / Data Streams */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none flex">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center gap-16 mt-12">
        
        {/* Left Side: Information */}
        <div className="lg:w-1/2 text-left">
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
            className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 tracking-tight text-white"
          >
            Automated Legacy.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#e879f9]">Instant Modernization.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          >
            Autonomously parse and rewrite monolithic SAS codebases into optimized, distributed PySpark microservices. Eliminate human error and accelerate digital transformation by 85%.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all flex items-center gap-2 group">
              Start Migration <ArrowRightLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              View Case Study
            </button>
          </motion.div>
        </div>

        {/* Right Side: Looping Diagram */}
        <div className="lg:w-1/2 w-full perspective-1000 hidden lg:block">
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-[500px] bg-[#0a0514] border border-[#8b5cf6]/30 rounded-3xl p-6 shadow-[0_30px_100px_rgba(139,92,246,0.15)] flex flex-col justify-between overflow-hidden"
          >
            {/* Background Lines */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Top Row: Legacy SAS */}
            <div className="relative z-10 bg-[#120524]/80 border border-red-500/30 rounded-xl p-4 backdrop-blur-md h-32">
              <div className="flex justify-between items-center mb-3">
                <div className="text-xs font-mono text-red-400 font-bold tracking-widest flex items-center gap-2"><Database className="w-4 h-4" /> LEGACY MONOLITH (SAS)</div>
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              </div>
              <TypewriterLoop textLines={legacyCode} className="text-xs text-gray-400" />
            </div>

            {/* Middle: CodeMorph AI Processing Engine */}
            <div className="relative z-10 flex justify-center py-6">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <motion.div animate={{ height: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity }} className="w-px bg-gradient-to-b from-red-500 via-[#8b5cf6] to-emerald-500 shadow-[0_0_10px_#8b5cf6]" />
              </div>
              <div className="w-24 h-24 bg-[#0a0514] border-2 border-[#8b5cf6] rounded-full flex items-center justify-center relative z-20 shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-[-2px] border border-dashed border-[#a855f7] rounded-full" />
                 <Code2 className="w-10 h-10 text-[#8b5cf6]" />
              </div>
            </div>

            {/* Bottom Row: Modern PySpark */}
            <div className="relative z-10 bg-[#120524]/80 border border-emerald-500/30 rounded-xl p-4 backdrop-blur-md h-32">
              <div className="flex justify-between items-center mb-3">
                <div className="text-xs font-mono text-emerald-400 font-bold tracking-widest flex items-center gap-2"><Server className="w-4 h-4" /> MICROSERVICES (PYSPARK)</div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <TypewriterLoop textLines={modernCode} className="text-xs text-emerald-400" delay={2500} />
            </div>
          </motion.div>
        </div>
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

// Section 4: Modernization Capabilities Grid
const CapabilitiesSection = () => {
  const cases = [
    { 
      title: "SAS to PySpark Automation", 
      desc: "Autonomously parse and rewrite monolithic SAS codebases into optimized, distributed PySpark pipelines without human error.", 
      icon: ArrowRightLeft, 
      delay: 0,
      visual: () => (
        <div className="flex items-center gap-2 justify-center w-full text-gray-500">
           <div className="w-8 h-8 rounded bg-[#120524] border border-red-500/30 flex items-center justify-center">
             <Database className="w-3 h-3 text-red-500" />
           </div>
           <div className="flex-1 h-[2px] bg-white/5 relative overflow-hidden rounded-full max-w-[50px]">
              <motion.div animate={{ x: ["-100%", "300%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent" />
           </div>
           <div className="w-8 h-8 rounded-full bg-[#120524] border border-[#8b5cf6]/50 flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.3)]">
             <Cpu className="w-4 h-4 text-[#8b5cf6]" />
           </div>
           <div className="flex-1 h-[2px] bg-white/5 relative overflow-hidden rounded-full max-w-[50px]">
              <motion.div animate={{ x: ["-100%", "300%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }} className="w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
           </div>
           <div className="w-8 h-8 rounded bg-[#04120a] border border-emerald-500/30 flex items-center justify-center">
             <Server className="w-3 h-3 text-emerald-500" />
           </div>
        </div>
      )
    },
    { 
      title: "Legacy System Modernization", 
      desc: "Accelerate digital transformation by mapping and refactoring outdated architectures into modern, cloud-native microservices.", 
      icon: Server, 
      delay: 0.1,
      visual: () => (
        <div className="flex items-center gap-4 justify-center w-full">
           <motion.div animate={{ opacity: [1, 0.4, 1], scale: [1, 0.9, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-8 h-8 border-2 border-dashed border-gray-600 bg-gray-800/50 rounded flex items-center justify-center relative">
              <Blocks className="w-4 h-4 text-gray-400" />
              <div className="absolute inset-0 bg-red-500/10 rounded" />
           </motion.div>
           <ArrowRightLeft className="w-3 h-3 text-gray-600" />
           <div className="flex gap-2">
             {[...Array(3)].map((_, i) => (
                <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }} className="w-6 h-6 rounded border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                   <Server className="w-3 h-3 text-[#8b5cf6]" />
                </motion.div>
             ))}
           </div>
        </div>
      )
    },
    { 
      title: "Enterprise Software Dev", 
      desc: "Provide AI-assisted coding and automated test generation to dramatically reduce sprint cycles and technical debt.", 
      icon: Code2, 
      delay: 0.2,
      visual: () => (
         <div className="flex flex-col gap-2 justify-center w-full font-mono text-[10px] text-gray-500">
            <div className="w-full bg-[#120524] rounded border border-white/5 p-2 overflow-hidden relative shadow-inner">
               <motion.div animate={{ width: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="whitespace-nowrap overflow-hidden text-emerald-400 border-r-2 border-emerald-400 pr-1">
                  def generate_tests(model):
               </motion.div>
               <div className="absolute bottom-1 right-2 text-[#8b5cf6] text-[8px] flex items-center gap-1">
                  <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" /> AI
               </div>
            </div>
         </div>
      )
    },
    { 
      title: "Intelligent CI/CD Automation", 
      desc: "Deploy self-maintaining pipelines that autonomously detect, test, and revert breaking changes before they hit production.", 
      icon: GitPullRequest, 
      delay: 0.3,
      visual: () => (
         <div className="flex items-center justify-center w-full gap-[2px]">
           {[...Array(4)].map((_, i) => (
             <React.Fragment key={i}>
                <motion.div animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(16,185,129,0.8)", "rgba(255,255,255,0.1)"] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center bg-[#0a0514]">
                   <CheckCircle className="w-3 h-3 text-emerald-500/70" />
                </motion.div>
                {i < 3 && (
                   <div className="w-4 h-[2px] bg-white/5 relative overflow-hidden">
                      <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} className="absolute inset-0 bg-emerald-500/80" />
                   </div>
                )}
             </React.Fragment>
           ))}
         </div>
      )
    }
  ];

  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="mb-12">
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
            className="group relative p-[1px] rounded-2xl cursor-pointer"
          >
            {/* The Magic Rotating White Border */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_70%,rgba(255,255,255,0.8)_100%)] pointer-events-none"
              />
            </div>

            {/* Inner Card Container */}
            <div className="relative z-10 h-full bg-[#080310] border border-white/10 group-hover:border-transparent rounded-2xl p-6 transition-all duration-500 overflow-hidden flex flex-col group-hover:bg-[#120524]/60 shadow-lg">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-[#0e051a] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#8b5cf6]/20 group-hover:border-[#8b5cf6]/40 shadow-inner`}>
                  <card.icon className={`w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-500`} />
                </div>
              </div>

              {/* Dynamic Visual Animation Section */}
              <div className="w-full h-16 flex items-center justify-center mb-4">
                 <card.visual />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                {card.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors mt-auto">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Section 5: AI IDE Mockup (Typing Animation)
const MorphingEditor = () => {
  const [phase, setPhase] = useState<"sas_typing" | "sas_idle" | "sas_erasing" | "py_typing" | "py_idle" | "py_erasing">("sas_typing");
  const [charIndex, setCharIndex] = useState(0);

  const sasCode = `DATA combined_dataset;\nMERGE\n  customers(IN=a)\n  transactions(IN=b);\nBY customer_id;\nIF a AND b;\nRUN;`;
  const pyCode = `# Auto-translated by CodeMorph AI\ncombined_dataset = customers.join(\n  transactions,\n  on="customer_id",\n  how="inner"\n)\n# Optimization applied: inner join`;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const typeSpeed = 20;
    const eraseSpeed = 10;
    
    if (phase === "sas_typing") {
      if (charIndex < sasCode.length) timeout = setTimeout(() => setCharIndex(c => c + 1), typeSpeed);
      else timeout = setTimeout(() => setPhase("sas_idle"), 2000);
    } else if (phase === "sas_idle") {
      timeout = setTimeout(() => setPhase("sas_erasing"), 0);
    } else if (phase === "sas_erasing") {
      if (charIndex > 0) timeout = setTimeout(() => setCharIndex(c => c - 1), eraseSpeed);
      else timeout = setTimeout(() => setPhase("py_typing"), 500);
    } else if (phase === "py_typing") {
      if (charIndex < pyCode.length) timeout = setTimeout(() => setCharIndex(c => c + 1), typeSpeed);
      else timeout = setTimeout(() => setPhase("py_idle"), 3000);
    } else if (phase === "py_idle") {
      timeout = setTimeout(() => setPhase("py_erasing"), 0);
    } else if (phase === "py_erasing") {
      if (charIndex > 0) timeout = setTimeout(() => setCharIndex(c => c - 1), eraseSpeed);
      else timeout = setTimeout(() => setPhase("sas_typing"), 500);
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex, sasCode.length, pyCode.length]);

  const currentCode = (phase.startsWith("sas") ? sasCode : pyCode).slice(0, charIndex);
  
  const renderHighlighted = (text: string) => {
    if (phase.startsWith("sas")) {
       return text
         .replace(/(DATA|MERGE|BY|IF|RUN)/g, '<span class="text-red-400 font-bold">$1</span>')
         .replace(/(IN=.)/g, '<span class="text-yellow-300">$1</span>');
    } else {
       return text
         .replace(/(#.*)/g, '<span class="text-emerald-500/70">$1</span>')
         .replace(/(\.join|on=|how=)/g, '<span class="text-[#e879f9]">$1</span>')
         .replace(/(".*?")/g, '<span class="text-yellow-300">$1</span>');
    }
  };

  return (
    <div className="w-full bg-[#0d071a] border border-[#8b5cf6]/20 rounded-2xl shadow-[0_20px_60px_rgba(139,92,246,0.3)] overflow-hidden flex flex-col font-mono text-[11px] md:text-xs relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/10 blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#080410] relative z-10">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        </div>
        <div className="flex gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
           <span className={phase.startsWith("sas") ? "text-red-400 transition-colors" : ""}>legacy.sas</span>
           <span>→</span>
           <span className={phase.startsWith("py") ? "text-emerald-400 transition-colors" : ""}>modern.py</span>
        </div>
      </div>
      
      {/* Body */}
      <div className="p-6 h-[250px] relative z-10 flex flex-col">
        <div className="text-gray-300 whitespace-pre-wrap leading-loose" dangerouslySetInnerHTML={{ __html: renderHighlighted(currentCode) + '<span class="animate-pulse text-white">|</span>' }} />

        {/* Status Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#080410] border-t border-white/5 flex items-center px-4 justify-between text-[10px]">
           {phase.startsWith("sas") ? (
             <span className="text-red-400 flex items-center gap-2"><Scan className="w-3 h-3 animate-pulse"/> Analyzing Legacy Logic...</span>
           ) : (
             <span className="text-emerald-400 flex items-center gap-2"><CheckCircle className="w-3 h-3"/> Translation Complete</span>
           )}
           <span className="text-gray-500">CodeMorph Engine v2.0</span>
        </div>
      </div>
    </div>
  );
};

const IDETranslationSection = () => {
  return (
    <section className="py-24 relative bg-[#030105] overflow-hidden border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-[#8b5cf6]/5 blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">AI-Assisted <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#e879f9]">Refactoring</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Don't waste years rewriting legacy code manually. CodeMorph AI understands context, business logic, and dependencies, translating monolithic scripts into modern Python frameworks flawlessly.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0a0514] border border-[#8b5cf6]/20 shadow-[0_0_30px_rgba(139,92,246,0.1)] group hover:border-[#8b5cf6]/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#120524] border border-[#8b5cf6]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Terminal className="w-5 h-5 text-[#a855f7]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 group-hover:text-[#a855f7] transition-colors">Context-Aware Translation</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Maintains exact business logic and mathematical precision while adapting to the target framework's best practices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right IDE UI Mockup */}
        <div className="lg:w-1/2 w-full perspective-1000">
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-full"
          >
             <MorphingEditor />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Section 6: Monolith to Microservices Animation
const MicroservicesSection = () => {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6 overflow-hidden">
      <div className="bg-[#030105] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
        
        {/* Left Side: Visual Animation */}
        <div className="relative w-full lg:w-1/2 h-72 flex items-center justify-center">
          
          {/* Background Pulse */}
          <div className="absolute inset-0 bg-[#e879f9]/5 blur-[60px] rounded-full pointer-events-none" />

          {/* Central Monolith (Fading out conceptually) */}
          <motion.div 
            animate={{ opacity: [1, 0.2, 1], scale: [1, 0.95, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-24 h-32 bg-[#120524] border-2 border-dashed border-red-500/40 rounded-xl flex items-center justify-center z-10"
          >
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Monolith</span>
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
              className="absolute w-14 h-14 bg-[#0a0414] border border-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.3)] rounded-xl flex flex-col items-center justify-center z-20"
              animate={{ 
                x: [0, Math.cos((node.angle * Math.PI) / 180) * 110],
                y: [0, Math.sin((node.angle * Math.PI) / 180) * 110],
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
              <node.icon className="w-4 h-4 text-[#e879f9] mb-1" />
              <span className="text-[6px] text-white font-mono uppercase tracking-wider">{node.label}</span>
            </motion.div>
          ))}
          
        </div>

        {/* Right Side: Information */}
        <div className="relative z-10 lg:w-1/2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 mb-6 uppercase tracking-widest">
            <Blocks className="w-3 h-3 text-[#e879f9]" />
            Architecture Modernization
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Break the <span className="text-[#e879f9]">Monolith.</span></h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Automatically map rigid, interdependent legacy architectures and gracefully refactor them into decoupled, cloud-native microservices that scale infinitely.
          </p>
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
      <CapabilitiesSection />
      <IDETranslationSection />
      <MicroservicesSection />
      <CTA />

      <Footer />
    </div>
  );
}
