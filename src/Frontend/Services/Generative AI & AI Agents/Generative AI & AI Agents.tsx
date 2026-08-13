"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, BrainCircuit, Database, Network, 
  MessageSquare, Layers, Cpu, Code, 
  Search, ShieldCheck, CheckCircle2, Zap,
  RefreshCw, UserCheck
} from 'lucide-react';
import { Navbar } from '@/components/Top-bottom/Navbar';
import { Footer } from '@/components/Top-bottom/Footer';
import CTA from '@/Frontend/Home/Contact';

// Section 1: Hero (2-Column Layout with AI Diagram)
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-24 sm:pt-40 lg:pt-32 bg-[#010606]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#14b8a6]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#0d9488]/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 w-full pb-10 sm:pb-20 lg:pb-0">
        
        {/* Left Side: Information */}
        <div className="w-full lg:w-1/2 text-left pt-8 sm:pt-16 lg:pt-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/30 text-[10px] sm:text-xs font-bold text-[#14b8a6] uppercase tracking-widest mb-6 sm:mb-8 shadow-[0_0_20px_rgba(20,184,166,0.2)] mt-4 sm:mt-8 md:mt-0"
          >
            <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
            Conversa Enterprise AI
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6 tracking-tight text-white"
          >
            Autonomous Agents.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] via-[#2dd4bf] to-[#5eead4]">Infinite Reasoning.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-sm sm:text-lg md:text-xl max-w-xl leading-relaxed mb-6 sm:mb-10"
          >
            Deploy secure, deeply integrated copilots capable of multi-step reasoning. Ground AI in your proprietary knowledge base via advanced RAG architectures to achieve 95% workflow automation.
          </motion.p>
        </div>

        {/* Right Side: Responsive Multi-Agent Flow Diagram */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] items-center">
          
          <div className="relative w-full max-w-[500px] aspect-square transform scale-[0.8] sm:scale-100 origin-center">
             
             {/* Connection Lines (SVG) */}
             <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
               {/* User to Orchestrator */}
               <motion.path d="M 12 50 L 25 50" fill="none" stroke="rgba(20,184,166,0.3)" strokeWidth="0.5" strokeDasharray="1,1" />
               <motion.circle cx="0" cy="0" r="0.8" fill="#2dd4bf">
                 <animateMotion path="M 12 50 L 25 50" dur="2s" repeatCount="indefinite" />
               </motion.circle>

               {/* Orchestrator to Planner */}
               <motion.path d="M 50 50 C 60 50, 60 20, 70 20" fill="none" stroke="rgba(20,184,166,0.3)" strokeWidth="0.5" />
               <motion.circle cx="0" cy="0" r="0.8" fill="#2dd4bf">
                 <animateMotion path="M 50 50 C 60 50, 60 20, 70 20" dur="1.5s" repeatCount="indefinite" />
               </motion.circle>

               {/* Orchestrator to Researcher */}
               <motion.path d="M 50 50 L 70 50" fill="none" stroke="rgba(20,184,166,0.3)" strokeWidth="0.5" />
               <motion.circle cx="0" cy="0" r="0.8" fill="#2dd4bf">
                 <animateMotion path="M 50 50 L 70 50" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
               </motion.circle>

               {/* Orchestrator to Coder */}
               <motion.path d="M 50 50 C 60 50, 60 80, 70 80" fill="none" stroke="rgba(20,184,166,0.3)" strokeWidth="0.5" />
               <motion.circle cx="0" cy="0" r="0.8" fill="#2dd4bf">
                 <animateMotion path="M 50 50 C 60 50, 60 80, 70 80" dur="1.5s" repeatCount="indefinite" begin="1s" />
               </motion.circle>
             </svg>

             {/* Nodes (HTML Absolute Positioning) */}
             
             {/* User Node */}
             <div className="absolute top-[50%] left-0 z-10 w-[12%] aspect-square bg-[#040e0e] border border-white/10 rounded-lg flex items-center justify-center shadow-lg transform -translate-y-1/2">
                <MessageSquare className="w-1/2 h-1/2 text-gray-400" />
             </div>

             {/* Main Orchestrator Node */}
             <div className="absolute top-[50%] left-[25%] z-10 w-[25%] aspect-square bg-gradient-to-b from-[#081313] to-[#040e0e] border border-[#14b8a6]/40 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.15)] transform -translate-y-1/2">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-1.5 md:inset-2 border border-dashed border-[#14b8a6]/30 rounded-xl" />
                <BrainCircuit className="w-1/3 h-1/3 text-[#2dd4bf] mb-1 relative z-10" />
                <span className="text-[6px] md:text-[8px] font-bold text-white uppercase tracking-widest text-center relative z-10">Agent<br/>Core</span>
             </div>

             {/* Agent Nodes (Right) */}
             
             {/* Planner */}
             <div className="absolute top-[20%] right-0 z-10 w-[30%] bg-[#040e0e] border border-[#14b8a6]/20 rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-lg transform -translate-y-1/2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#14b8a6]/10 flex items-center justify-center shrink-0">
                   <Network className="w-3 h-3 md:w-4 md:h-4 text-[#2dd4bf]" />
                </div>
                <div className="text-[8px] md:text-xs font-bold text-white leading-tight">Planner Agent</div>
             </div>

             {/* Researcher */}
             <div className="absolute top-[50%] right-0 z-10 w-[30%] bg-[#040e0e] border border-[#14b8a6]/20 rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-lg transform -translate-y-1/2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#14b8a6]/10 flex items-center justify-center shrink-0">
                   <Search className="w-3 h-3 md:w-4 md:h-4 text-[#2dd4bf]" />
                </div>
                <div className="text-[8px] md:text-xs font-bold text-white leading-tight">Researcher Agent</div>
             </div>

             {/* Coder */}
             <div className="absolute top-[80%] right-0 z-10 w-[30%] bg-[#040e0e] border border-[#14b8a6]/20 rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-lg transform -translate-y-1/2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#14b8a6]/10 flex items-center justify-center shrink-0">
                   <Code className="w-3 h-3 md:w-4 md:h-4 text-[#2dd4bf]" />
                </div>
                <div className="text-[8px] md:text-xs font-bold text-white leading-tight">Coder Agent</div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

// Section 2: AI Metrics Ticker
const MetricsTickerSection = () => {
  return (
    <section className="py-4 sm:py-10 bg-gradient-to-r from-[#010606] via-[#041212] to-[#010606] border-y border-[#14b8a6]/10 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 sm:gap-16 px-4 sm:px-8 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-2 sm:gap-3"><Zap className="w-4 h-4 sm:w-6 sm:h-6 text-[#14b8a6]" /><span className="text-sm sm:text-2xl font-black text-white">95% WORKFLOW AUTOMATION</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><Database className="w-4 h-4 sm:w-6 sm:h-6 text-[#2dd4bf]" /><span className="text-sm sm:text-2xl font-black text-white">INFINITE CONTEXT WINDOWS</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[#5eead4]" /><span className="text-sm sm:text-2xl font-black text-white">ZERO HALLUCINATIONS</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><Network className="w-4 h-4 sm:w-6 sm:h-6 text-teal-400" /><span className="text-sm sm:text-2xl font-black text-white">MULTI-STEP REASONING</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: RAG Architecture (Animated Diagram)
const RAGArchitectureSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-[#020909] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">Enterprise <span className="text-[#14b8a6]">RAG Architecture</span></h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">Retrieval-Augmented Generation instantly grounds AI reasoning in your organization's proprietary, secure knowledge base.</p>
        </div>

        <div className="relative w-full h-auto min-h-[500px] sm:min-h-[600px] md:min-h-[400px] md:h-[400px] bg-[#040e0e] rounded-2xl sm:rounded-3xl border border-white/5 p-4 sm:p-6 md:p-8 flex flex-col md:block items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Mobile Layout (Stacked) */}
          <div className="md:hidden flex flex-col items-center gap-4 sm:gap-6 z-10 w-full py-2 sm:py-8 transform scale-[0.85] sm:scale-100 origin-top">
            <div className="flex flex-col items-center gap-2">
               <div className="w-12 h-12 rounded-full bg-[#14b8a6]/20 border border-[#14b8a6]/40 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#2dd4bf]" />
               </div>
               <div className="bg-[#081818] border border-white/10 rounded-lg p-3 text-[10px] text-gray-300 text-center max-w-[250px]">
                 "What is the Q3 onboarding protocol for engineering?"
               </div>
            </div>
            
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#14b8a6]/50 to-transparent" />

            <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-[#0a1f1f] to-[#040e0e] border border-[#14b8a6]/30 flex flex-col items-center justify-center shadow-lg">
               <Layers className="w-6 h-6 text-[#2dd4bf] mb-2" />
               <span className="text-[9px] font-bold text-white uppercase text-center">Embedding<br/>Model</span>
            </div>

            <div className="w-0.5 h-10 bg-gradient-to-b from-[#14b8a6]/50 to-transparent" />

            <div className="w-28 h-28 rounded-full bg-[#040e0e] border-2 border-dashed border-[#2dd4bf]/40 flex flex-col items-center justify-center shadow-lg">
               <Database className="w-6 h-6 text-[#2dd4bf] mb-2" />
               <span className="text-[9px] font-bold text-white uppercase text-center">Vector<br/>Database</span>
            </div>

            <div className="w-0.5 h-10 bg-gradient-to-b from-[#14b8a6]/50 to-transparent" />

            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#14b8a6] to-[#0d9488] p-1 shadow-lg">
                <div className="w-full h-full bg-[#020909] rounded-xl flex items-center justify-center">
                   <BrainCircuit className="w-8 h-8 text-[#5eead4]" />
                </div>
              </div>
              <div className="bg-[#081818] border border-emerald-500/30 rounded-lg p-3 text-[10px] text-emerald-400 text-center max-w-[250px]">
                 "According to the Q3 HR guidelines (Doc 4A), the onboarding protocol is..."
              </div>
            </div>
          </div>

          {/* Desktop Layout (Diagram with SVG) */}
          <div className="hidden md:block w-full h-full relative">
            
            {/* SVG Connections */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* User to Embedding */}
              <motion.path d="M 15 50 L 40 50" fill="none" stroke="rgba(20,184,166,0.3)" strokeWidth="0.3" strokeDasharray="1,1" />
              <motion.circle cx="0" cy="0" r="0.6" fill="#14b8a6">
                <animateMotion path="M 15 50 L 40 50" dur="1s" repeatCount="indefinite" />
              </motion.circle>
              
              {/* Embedding to Vector DB */}
              <motion.path d="M 40 50 C 50 50, 50 25, 65 25" fill="none" stroke="rgba(45,212,191,0.3)" strokeWidth="0.3" strokeDasharray="1,1" />
              <motion.circle cx="0" cy="0" r="0.6" fill="#2dd4bf">
                <animateMotion path="M 40 50 C 50 50, 50 25, 65 25" dur="1.5s" repeatCount="indefinite" />
              </motion.circle>

              {/* Vector DB to LLM */}
              <motion.path d="M 65 25 C 80 25, 80 50, 85 50" fill="none" stroke="rgba(94,234,212,0.3)" strokeWidth="0.3" strokeDasharray="1,1" />
              <motion.circle cx="0" cy="0" r="0.6" fill="#5eead4">
                <animateMotion path="M 65 25 C 80 25, 80 50, 85 50" dur="1.5s" repeatCount="indefinite" />
              </motion.circle>
              
              {/* Direct Query to LLM */}
              <motion.path d="M 40 50 L 85 50" fill="none" stroke="rgba(20,184,166,0.3)" strokeWidth="0.3" />
              <motion.circle cx="0" cy="0" r="0.6" fill="#14b8a6">
                <animateMotion path="M 40 50 L 85 50" dur="2s" repeatCount="indefinite" />
              </motion.circle>
            </svg>

            {/* Nodes */}
            {/* User Query */}
            <div className="absolute top-[50%] left-[15%] z-10 -translate-x-1/2 -translate-y-1/2 flex justify-center">
               <div className="w-12 h-12 rounded-full bg-[#14b8a6]/20 border border-[#14b8a6]/40 flex items-center justify-center shadow-lg relative">
                  <MessageSquare className="w-5 h-5 text-[#2dd4bf]" />
                  
                  {/* Floating Text Box */}
                  <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-48 bg-[#081818] border border-white/10 rounded-lg p-3 text-[10px] text-gray-300 shadow-xl text-center">
                    "What is the Q3 onboarding protocol for engineering?"
                  </div>
               </div>
            </div>

            {/* Embedding Model */}
            <div className="absolute top-[50%] left-[40%] w-32 h-32 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0a1f1f] to-[#040e0e] border border-[#14b8a6]/30 shadow-[0_0_30px_rgba(20,184,166,0.2)] flex flex-col items-center justify-center relative overflow-hidden">
                 <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-[#14b8a6]/5" />
                 <Layers className="w-8 h-8 text-[#2dd4bf] mb-2 relative z-10" />
                 <span className="text-[9px] font-bold text-white uppercase tracking-widest relative z-10 text-center">Embedding<br/>Model</span>
              </div>
            </div>

            {/* Vector Database */}
            <div className="absolute top-[25%] left-[65%] w-32 h-32 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-full h-full rounded-full bg-[#040e0e] border-2 border-dashed border-[#2dd4bf]/40 flex flex-col items-center justify-center relative overflow-hidden">
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-2 border border-[#2dd4bf]/20 rounded-full" />
                 <Database className="w-6 h-6 text-[#2dd4bf] mb-1 relative z-10" />
                 <span className="text-[8px] font-bold text-white uppercase tracking-widest relative z-10 text-center">Vector<br/>Database</span>
              </div>
            </div>

            {/* Final LLM Generation */}
            <div className="absolute top-[50%] left-[85%] z-10 -translate-x-1/2 -translate-y-1/2 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#14b8a6] to-[#0d9488] p-1 shadow-[0_0_40px_rgba(20,184,166,0.4)] relative">
                <div className="w-full h-full bg-[#020909] rounded-xl flex items-center justify-center">
                   <BrainCircuit className="w-8 h-8 text-[#5eead4]" />
                </div>
                
                {/* Floating Text Box */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-48 bg-[#081818] border border-emerald-500/30 rounded-lg p-3 text-[10px] text-emerald-400 shadow-xl text-center"
                >
                   "According to the Q3 HR guidelines (Doc 4A), the onboarding protocol is..."
                </motion.div>
              </div>
            </div>

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
      title: "Enterprise AI Assistants", 
      desc: "Deploy secure, deeply integrated copilots that assist employees with complex internal workflows and data retrieval.", 
      delay: 0,
      Diagram: () => (
        <div className="relative w-full h-12 sm:h-20 bg-gradient-to-b from-[#081818] to-[#040e0e] border border-white/5 rounded-lg sm:rounded-xl overflow-hidden group-hover:border-[#14b8a6]/30 transition-colors mb-2 sm:mb-6 flex items-center justify-center [&>*]:scale-[0.6] sm:[&>*]:scale-100">
           <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-16 h-16 bg-[#14b8a6] rounded-full blur-xl" />
           <Bot className="w-8 h-8 text-gray-500 group-hover:text-white relative z-10 transition-colors" />
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute w-16 h-16 border border-dashed border-[#14b8a6]/30 rounded-full flex items-start justify-center">
             <div className="w-2 h-2 bg-[#2dd4bf] rounded-full -mt-1 shadow-[0_0_10px_#2dd4bf]" />
           </motion.div>
        </div>
      )
    },
    { 
      title: "Proprietary RAG Systems", 
      desc: "Instantly ground AI reasoning in your organization's proprietary knowledge base, preventing hallucinations.", 
      delay: 0.1,
      Diagram: () => (
        <div className="relative w-full h-12 sm:h-20 bg-gradient-to-b from-[#081818] to-[#040e0e] border border-white/5 rounded-lg sm:rounded-xl overflow-hidden group-hover:border-[#14b8a6]/30 transition-colors mb-2 sm:mb-6 flex items-center justify-center [&>*]:scale-[0.6] sm:[&>*]:scale-100">
           <div className="flex items-center gap-4 relative z-10">
             <Database className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
             <div className="w-16 h-0.5 bg-[#14b8a6]/20 relative overflow-hidden rounded-full">
               <motion.div animate={{ x: [-20, 64] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-6 h-full bg-[#2dd4bf] shadow-[0_0_10px_#2dd4bf]" />
             </div>
             <Layers className="w-6 h-6 text-gray-500 group-hover:text-[#2dd4bf] transition-colors" />
           </div>
        </div>
      )
    },
    { 
      title: "Autonomous AI Agents", 
      desc: "Unleash agents capable of multi-step reasoning that can autonomously execute tasks across third-party APIs.", 
      delay: 0.2,
      Diagram: () => (
        <div className="relative w-full h-12 sm:h-20 bg-gradient-to-b from-[#081818] to-[#040e0e] border border-white/5 rounded-lg sm:rounded-xl overflow-hidden group-hover:border-[#14b8a6]/30 transition-colors mb-2 sm:mb-6 flex items-center justify-center [&>*]:scale-[0.6] sm:[&>*]:scale-100">
           <div className="flex gap-4 items-center relative z-10">
             <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-10 h-10 rounded-lg bg-[#040e0e] border border-[#14b8a6]/20 flex items-center justify-center shadow-lg"><Network className="w-5 h-5 text-gray-500 group-hover:text-[#2dd4bf] transition-colors" /></motion.div>
             <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-10 h-10 rounded-lg bg-[#040e0e] border border-[#14b8a6]/20 flex items-center justify-center shadow-lg"><Code className="w-5 h-5 text-gray-500 group-hover:text-[#2dd4bf] transition-colors" /></motion.div>
             <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="w-10 h-10 rounded-lg bg-[#040e0e] border border-[#14b8a6]/20 flex items-center justify-center shadow-lg"><Zap className="w-5 h-5 text-gray-500 group-hover:text-[#2dd4bf] transition-colors" /></motion.div>
           </div>
        </div>
      )
    },
    { 
      title: "Conversational Intelligence", 
      desc: "Transform customer service with voice and text agents that truly understand context, nuance, and sentiment.", 
      delay: 0.3,
      Diagram: () => (
        <div className="relative w-full h-12 sm:h-20 bg-gradient-to-b from-[#081818] to-[#040e0e] border border-white/5 rounded-lg sm:rounded-xl overflow-hidden group-hover:border-[#14b8a6]/30 transition-colors mb-2 sm:mb-6 flex flex-col items-center justify-center gap-3 [&>*]:scale-[0.6] sm:[&>*]:scale-100">
           <MessageSquare className="w-6 h-6 text-gray-500 group-hover:text-white relative z-10 transition-colors" />
           <div className="flex items-center gap-1.5 h-6">
             {[...Array(5)].map((_, i) => (
               <motion.div 
                 key={i}
                 animate={{ height: ["20%", "100%", "20%"] }} 
                 transition={{ duration: 1, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }} 
                 className="w-1 bg-gradient-to-t from-[#14b8a6] to-[#5eead4] rounded-full" 
               />
             ))}
           </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-6 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">Agentic <span className="text-gray-500">Framework</span></h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6">
        {cases.map((card, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: card.delay }}
            className="group relative rounded-xl sm:rounded-2xl overflow-hidden p-[1px] transition-transform duration-500 hover:-translate-y-1 h-full"
          >
            {/* Base Border (Visible when not hovered) */}
            <div className="absolute inset-0 bg-white/5 transition-opacity duration-500 group-hover:opacity-0" />
            
            {/* Rotating Hover Border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_270deg,#14b8a6_360deg)]"
               />
            </div>

            {/* Inner Content Box */}
            <div className="relative w-full h-full bg-[#040e0e] rounded-[15px] p-3 sm:p-5 md:p-6 overflow-hidden z-10 transition-colors duration-500 group-hover:bg-[#061414] flex flex-col shadow-lg">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#14b8a6]/10 to-transparent blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               
               <card.Diagram />
               
               <h3 className="text-[11px] sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-3 group-hover:text-[#2dd4bf] transition-colors leading-tight">
                 {card.title}
               </h3>
               
               <p className="text-[9px] sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mt-auto line-clamp-4">
                 {card.desc}
               </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Section 5: Multi-Agent Reasoning UI Mockup (Bento Grid)
const AgentReasoningSection = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-[#010606] overflow-hidden">
      {/* Top Title Area */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
          Multi-Agent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#5eead4]">Orchestration</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-lg leading-relaxed">
          Move beyond simple chatbots. Our Autonomous AI Agents are capable of breaking down complex, ambiguous prompts into sequential sub-tasks, writing their own API calls, and verifying their own work.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 relative z-10">
        
        {/* The Terminal - Spans 2 Columns */}
        <div className="lg:col-span-2 bg-[#040e0e] border border-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:px-8 md:pt-8 md:pb-6 relative overflow-hidden group shadow-2xl flex flex-col justify-between hover:border-[#14b8a6]/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] transition-all duration-500">
           {/* Background Glow */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#14b8a6]/5 blur-[100px] pointer-events-none group-hover:bg-[#14b8a6]/10 transition-colors duration-500" />
           
           <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
             <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#14b8a6]/10 border border-[#14b8a6]/20 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.15)] shrink-0">
               <Cpu className="w-5 h-5 sm:w-7 sm:h-7 text-[#14b8a6]" />
             </div>
             <div>
               <h3 className="text-white font-bold text-base sm:text-xl">Autonomous Reasoning Core</h3>
               <div className="text-[10px] sm:text-sm text-[#14b8a6] font-mono mt-0.5 sm:mt-1">system.execute(multi_agent_pipeline)</div>
             </div>
           </div>

           {/* Redesigned Terminal UI (Grid based) */}
           <div className="bg-[#081313] border border-white/5 rounded-xl sm:rounded-2xl overflow-hidden font-mono mt-1 sm:mt-2 flex-1 flex flex-col shadow-2xl">
              {/* Header */}
              <div className="h-8 sm:h-10 border-b border-white/5 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 bg-[#020606]">
                 <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                 <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                 <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
              </div>
              
              <div className="p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-4">
                 {/* User Prompt */}
                 <div className="bg-[#102424] border border-[#14b8a6]/20 rounded-lg sm:rounded-xl p-3 md:p-4 text-gray-300 text-[11px] sm:text-sm shadow-inner relative overflow-hidden leading-relaxed">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14b8a6]" />
                   <span className="text-[#14b8a6] font-bold mr-1.5 sm:mr-2">{">"} USER_PROMPT:</span>
                   "Analyze Q2 churn data, summarize root cause, and draft an email to the retention team."
                 </div>

                 {/* Active Agent Nodes in a Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                    <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-500 ${step >= 0 ? 'bg-[#14b8a6]/10 border-[#14b8a6]/30' : 'bg-white/5 border-white/5 opacity-50'}`}>
                       <div className="text-[#2dd4bf] text-[10px] sm:text-xs font-bold mb-1 flex items-center gap-1.5 sm:gap-2"><div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${step === 0 ? 'bg-[#2dd4bf] animate-pulse shadow-[0_0_8px_#2dd4bf]' : 'bg-[#2dd4bf]/50'}`} /> Planner Agent</div>
                       <div className="text-[9px] sm:text-[10px] text-gray-400">Breaking down task into 3 sequential sub-tasks.</div>
                    </div>
                    <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-500 ${step >= 1 ? 'bg-yellow-500/10 border-yellow-500/30' : 'bg-white/5 border-white/5 opacity-50'}`}>
                       <div className="text-yellow-500 text-[10px] sm:text-xs font-bold mb-1 flex items-center gap-1.5 sm:gap-2"><div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${step === 1 ? 'bg-yellow-500 animate-pulse shadow-[0_0_8px_yellow]' : 'bg-yellow-500/50'}`} /> Data Executor</div>
                       <div className="text-[9px] sm:text-[10px] text-gray-400">Querying Postgres SQL via external API for Q2 metrics.</div>
                    </div>
                    <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-500 ${step >= 2 ? 'bg-purple-500/10 border-purple-500/30' : 'bg-white/5 border-white/5 opacity-50'}`}>
                       <div className="text-purple-400 text-[10px] sm:text-xs font-bold mb-1 flex items-center gap-1.5 sm:gap-2"><div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${step === 2 ? 'bg-purple-400 animate-pulse shadow-[0_0_8px_purple]' : 'bg-purple-400/50'}`} /> Drafting Agent</div>
                       <div className="text-[9px] sm:text-[10px] text-gray-400">Synthesizing data into email format using CRM context.</div>
                    </div>
                    <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-500 ${step >= 3 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 border-white/5 opacity-50'}`}>
                       <div className="text-emerald-400 text-[10px] sm:text-xs font-bold mb-1 flex items-center gap-1.5 sm:gap-2"><div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${step === 3 ? 'bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]' : 'bg-emerald-400/50'}`} /> Reviewer Agent</div>
                       <div className="text-[9px] sm:text-[10px] text-gray-400">Task Complete. Draft ready for human approval.</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Feature 1: Tool Calling */}
        <div className="bg-[#040e0e] border border-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 relative overflow-hidden group shadow-xl flex flex-col hover:bg-[#061414] hover:border-[#14b8a6]/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] transition-all duration-500">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#14b8a6]/10 flex items-center justify-center mb-2 sm:mb-3 border border-[#14b8a6]/20 group-hover:scale-110 transition-transform">
            <Database className="w-4 h-4 sm:w-5 sm:h-5 text-[#14b8a6]" />
          </div>
          <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Tool & API Integration</h3>
          <p className="text-gray-400 text-[10px] sm:text-xs">Agents can autonomously read databases, trigger webhooks, and push code.</p>
          
          <div className="mt-3 sm:mt-4 flex-1 border border-white/10 rounded-xl bg-[#010606] p-3 flex items-center justify-center overflow-hidden relative min-h-[80px]">
            <motion.div animate={{ x: [-30, 30, -30] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="flex gap-3 sm:gap-4 transform scale-[0.8] sm:scale-100">
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-lg flex items-center justify-center"><Code className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" /></div>
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14b8a6]/20 border border-[#14b8a6]/40 rounded-lg flex items-center justify-center"><Network className="w-5 h-5 sm:w-6 sm:h-6 text-[#2dd4bf]" /></div>
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-lg flex items-center justify-center"><Database className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" /></div>
            </motion.div>
          </div>
        </div>

        {/* Feature 2: Self Correction */}
        <div className="bg-[#040e0e] border border-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 relative overflow-hidden group shadow-xl flex flex-col hover:bg-[#061414] hover:border-yellow-500/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(234,179,8,0.15)] transition-all duration-500">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-2 sm:mb-3 border border-yellow-500/20 group-hover:scale-110 transition-transform">
            <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
          </div>
          <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Self-Correction</h3>
          <p className="text-gray-400 text-[10px] sm:text-xs">Agents verify their outputs and autonomously rewrite queries if they hit an error.</p>
          
          <div className="mt-3 sm:mt-4 flex-1 border border-white/10 rounded-xl bg-[#010606] flex items-center justify-center relative overflow-hidden py-3 sm:py-4 min-h-[80px]">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="w-16 h-16 sm:w-24 sm:h-24 border-2 border-dashed border-yellow-500/30 rounded-full flex items-center justify-center">
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                  <RefreshCw className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-500/50" />
                </motion.div>
             </motion.div>
          </div>
        </div>

        {/* Feature 3: Human in the loop */}
        <div className="lg:col-span-2 bg-[#040e0e] border border-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:px-8 md:py-6 relative overflow-hidden group shadow-xl flex flex-col md:flex-row items-center gap-4 sm:gap-6 hover:bg-[#061414] hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)] transition-all duration-500">
          <div className="flex-1 text-center md:text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2 sm:mb-3 border border-emerald-500/20 group-hover:scale-110 transition-transform mx-auto md:mx-0">
              <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
            </div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Human-in-the-Loop Integration</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm max-w-sm mx-auto md:mx-0">Maintain full control. Configure agents to pause execution at critical steps, requiring human approval before executing sensitive API calls.</p>
          </div>
          
          <div className="w-full md:w-auto flex-1 border border-white/10 rounded-xl bg-[#010606] p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 shadow-inner">
             <div className="text-[10px] sm:text-xs font-mono text-gray-500 mb-1 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
               <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500 animate-pulse" /> AWAITING_APPROVAL
             </div>
             <div className="text-[11px] sm:text-sm text-gray-300 bg-white/5 p-3 sm:p-4 rounded-lg border border-white/5 shadow-inner">
               Ready to execute: <br/><span className="text-emerald-400 font-mono text-[10px] sm:text-xs mt-1 block">POST /api/v1/refunds</span>
             </div>
             <div className="flex gap-2 sm:gap-3">
               <button className="flex-1 py-1.5 sm:py-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-[11px] sm:text-sm font-bold border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors">APPROVE</button>
               <button className="flex-1 py-1.5 sm:py-2 rounded-lg bg-red-500/20 text-red-400 text-[11px] sm:text-sm font-bold border border-red-500/30 hover:bg-red-500/30 transition-colors">REJECT</button>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};



export default function GenerativeAI() {
  return (
    <div className="min-h-screen bg-[#010606] text-white font-sans selection:bg-[#14b8a6]/30">
      <Navbar />
      
      <HeroSection />
      <MetricsTickerSection />
      <RAGArchitectureSection />
      <CapabilitiesSection />
      <AgentReasoningSection />
      <CTA />

      <Footer />
    </div>
  );
}
