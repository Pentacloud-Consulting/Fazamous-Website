"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, BrainCircuit, Database, Network, 
  MessageSquare, Layers, Cpu, Code, 
  Search, ShieldCheck, CheckCircle2, Zap
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import CTA from '@/Frontend/Home/CTA';

// Section 1: Hero (Abstract Neural Mesh)
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 bg-[#010606]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#14b8a6]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#0d9488]/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Abstract Glowing Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border border-[#14b8a6]/20 rounded-[40%] flex items-center justify-center"
        >
          <motion.div 
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] border border-[#0d9488]/30 rounded-[35%] flex items-center justify-center"
          >
             <motion.div 
              animate={{ rotate: 360, scale: [1, 1.3, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-[400px] h-[400px] border border-[#14b8a6]/40 rounded-[30%]"
             />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mt-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/30 text-xs font-bold text-[#14b8a6] uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(20,184,166,0.2)]"
        >
          <Bot className="w-4 h-4 animate-bounce" />
          Conversa Enterprise AI
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[85px] font-bold leading-[1.1] mb-8 tracking-tight text-white"
        >
          Autonomous Agents.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] via-[#2dd4bf] to-[#5eead4]">Infinite Reasoning.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Deploy secure, deeply integrated copilots capable of multi-step reasoning. Ground AI in your proprietary knowledge base via advanced RAG architectures to achieve 95% workflow automation.
        </motion.p>
      </div>
    </section>
  );
};

// Section 2: AI Metrics Ticker
const MetricsTickerSection = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-[#010606] via-[#041212] to-[#010606] border-y border-[#14b8a6]/10 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 px-8 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-3"><Zap className="w-6 h-6 text-[#14b8a6]" /><span className="text-2xl font-black text-white">95% WORKFLOW AUTOMATION</span></div>
              <div className="flex items-center gap-3"><Database className="w-6 h-6 text-[#2dd4bf]" /><span className="text-2xl font-black text-white">INFINITE CONTEXT WINDOWS</span></div>
              <div className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-[#5eead4]" /><span className="text-2xl font-black text-white">ZERO HALLUCINATIONS</span></div>
              <div className="flex items-center gap-3"><Network className="w-6 h-6 text-teal-400" /><span className="text-2xl font-black text-white">MULTI-STEP REASONING</span></div>
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
    <section className="py-24 relative bg-[#020909] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Enterprise <span className="text-[#14b8a6]">RAG Architecture</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Retrieval-Augmented Generation instantly grounds AI reasoning in your organization's proprietary, secure knowledge base.</p>
        </div>

        <div className="relative w-full h-[550px] bg-[#040e0e] rounded-3xl border border-white/5 p-8 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* User Query */}
          <div className="absolute left-4 md:left-12 flex flex-col items-center gap-2 z-10 w-48">
             <div className="w-12 h-12 rounded-full bg-[#14b8a6]/20 border border-[#14b8a6]/40 flex items-center justify-center shadow-lg">
                <MessageSquare className="w-5 h-5 text-[#2dd4bf]" />
             </div>
             <div className="bg-[#081818] border border-white/10 rounded-lg p-3 text-[10px] text-gray-300 shadow-xl">
               "What is the Q3 onboarding protocol for engineering?"
             </div>
          </div>

          {/* Connective Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0">
            {/* Query to Embedding */}
            <motion.path d="M 230 275 L 350 275" fill="none" stroke="rgba(20,184,166,0.2)" strokeWidth="2" />
            <motion.circle cx="0" cy="0" r="4" fill="#14b8a6">
              <animateMotion path="M 230 275 L 350 275" dur="1s" repeatCount="indefinite" />
            </motion.circle>
            
            {/* Embedding to Vector DB */}
            <motion.path d="M 470 275 C 520 275, 520 150, 600 150" fill="none" stroke="rgba(45,212,191,0.2)" strokeWidth="2" strokeDasharray="4,4" />
            <motion.circle cx="0" cy="0" r="4" fill="#2dd4bf">
              <animateMotion path="M 470 275 C 520 275, 520 150, 600 150" dur="1.5s" repeatCount="indefinite" />
            </motion.circle>

            {/* Vector DB to LLM */}
            <motion.path d="M 720 150 C 800 150, 800 275, 880 275" fill="none" stroke="rgba(94,234,212,0.2)" strokeWidth="2" strokeDasharray="4,4" />
            <motion.circle cx="0" cy="0" r="4" fill="#5eead4">
              <animateMotion path="M 720 150 C 800 150, 800 275, 880 275" dur="1.5s" repeatCount="indefinite" />
            </motion.circle>
            
            {/* Direct Query to LLM */}
            <motion.path d="M 470 275 C 600 275, 600 275, 880 275" fill="none" stroke="rgba(20,184,166,0.2)" strokeWidth="2" />
            <motion.circle cx="0" cy="0" r="4" fill="#14b8a6">
              <animateMotion path="M 470 275 C 600 275, 600 275, 880 275" dur="2s" repeatCount="indefinite" />
            </motion.circle>
          </svg>

          {/* Central Embedding Model */}
          <div className="absolute left-[35%] md:left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-[#0a1f1f] to-[#040e0e] border border-[#14b8a6]/30 shadow-[0_0_30px_rgba(20,184,166,0.2)] flex flex-col items-center justify-center relative overflow-hidden">
               <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-[#14b8a6]/5" />
               <Layers className="w-8 h-8 text-[#2dd4bf] mb-2 relative z-10" />
               <span className="text-[9px] font-bold text-white uppercase tracking-widest relative z-10 text-center">Embedding<br/>Model</span>
            </div>
          </div>

          {/* Vector DB (Top Right) */}
          <div className="absolute right-[30%] md:right-[25%] top-[25%] -translate-y-1/2 z-20">
            <div className="w-32 h-32 rounded-full bg-[#040e0e] border-2 border-dashed border-[#2dd4bf]/40 flex flex-col items-center justify-center relative overflow-hidden">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-2 border border-[#2dd4bf]/20 rounded-full" />
               <Database className="w-6 h-6 text-[#2dd4bf] mb-1 relative z-10" />
               <span className="text-[8px] font-bold text-white uppercase tracking-widest relative z-10 text-center">Vector<br/>Database</span>
            </div>
          </div>

          {/* Final LLM Generation */}
          <div className="absolute right-4 md:right-12 flex flex-col items-center gap-4 z-10 w-48">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#14b8a6] to-[#0d9488] p-1 shadow-[0_0_40px_rgba(20,184,166,0.4)]">
              <div className="w-full h-full bg-[#020909] rounded-xl flex items-center justify-center">
                 <BrainCircuit className="w-8 h-8 text-[#5eead4]" />
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#081818] border border-emerald-500/30 rounded-lg p-3 text-[10px] text-emerald-400 shadow-xl"
            >
               "According to the Q3 HR guidelines (Doc 4A), the onboarding protocol is..."
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
    { title: "Enterprise AI Assistants", desc: "Deploy secure, deeply integrated copilots that assist employees with complex internal workflows and data retrieval.", icon: Bot, delay: 0 },
    { title: "Proprietary RAG Systems", desc: "Instantly ground AI reasoning in your organization's proprietary knowledge base, preventing hallucinations.", icon: Database, delay: 0.1 },
    { title: "Autonomous AI Agents", desc: "Unleash agents capable of multi-step reasoning that can autonomously execute tasks across third-party APIs.", icon: Network, delay: 0.2 },
    { title: "Conversational Intelligence", desc: "Transform customer service with voice and text agents that truly understand context, nuance, and sentiment.", icon: MessageSquare, delay: 0.3 }
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Agentic <span className="text-gray-500">Framework</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((card, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: card.delay }}
            className={`group relative bg-[#040e0e] border border-white/5 p-8 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:bg-[#14b8a6]/5 hover:border-[#14b8a6]/30 hover:-translate-y-1`}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#14b8a6]/20 to-transparent blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 rounded-xl bg-[#081818] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#14b8a6]/20 group-hover:border-[#14b8a6]/40 shadow-inner`}>
                <card.icon className={`w-7 h-7 text-gray-500 group-hover:text-[#2dd4bf] transition-colors duration-500`} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2dd4bf] transition-colors">
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

// Section 5: Multi-Agent Reasoning UI Mockup
const AgentReasoningSection = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#010606] to-[#040e0e] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Animated UI Mockup */}
        <div className="lg:w-1/2 w-full perspective-1000 order-2 lg:order-1">
          <motion.div 
            initial={{ rotateY: -10, rotateX: 5 }}
            animate={{ rotateY: [-10, -5, -10], rotateX: [5, 2, 5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-[#081313] border border-[#14b8a6]/20 rounded-2xl shadow-[0_20px_60px_rgba(20,184,166,0.15)] overflow-hidden flex flex-col font-mono"
          >
            {/* Header */}
            <div className="h-12 border-b border-white/10 flex items-center px-4 gap-3 bg-[#040e0e]">
              <Cpu className="w-5 h-5 text-[#2dd4bf]" />
              <div className="text-sm text-white font-bold tracking-wide">Multi-Agent Orchestrator</div>
            </div>
            
            <div className="p-5 flex flex-col gap-4 text-xs">
              {/* User Prompt */}
              <div className="bg-[#102424] border border-white/5 rounded-lg p-3 text-gray-300">
                <span className="text-[#14b8a6] font-bold mr-2">User:</span>
                "Analyze Q2 churn data, summarize the root cause, and draft an email to the retention team."
              </div>

              {/* Agent Reasoning Steps */}
              <div className="relative pl-6 space-y-4 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                
                <div className={`relative transition-opacity duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-[2px] ${step > 0 ? 'bg-[#14b8a6] border-[#14b8a6]' : 'bg-[#081313] border-[#14b8a6]'}`} />
                  <div className="text-[#2dd4bf] font-bold mb-1">Planner Agent</div>
                  <div className="text-gray-400">Breaking down task into 3 distinct sub-tasks.</div>
                </div>

                <div className={`relative transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-[2px] ${step > 1 ? 'bg-yellow-500 border-yellow-500' : step === 1 ? 'bg-[#081313] border-yellow-500' : 'bg-[#081313] border-white/20'}`} />
                  <div className="text-yellow-500 font-bold mb-1">Data Executor</div>
                  <div className="text-gray-400">Querying Postgres SQL via external API for Q2 churn metrics...</div>
                  {step === 1 && <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="text-yellow-500/50 mt-1">Executing SELECT * FROM churn_q2...</motion.div>}
                </div>

                <div className={`relative transition-opacity duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-[2px] ${step > 2 ? 'bg-purple-500 border-purple-500' : step === 2 ? 'bg-[#081313] border-purple-500' : 'bg-[#081313] border-white/20'}`} />
                  <div className="text-purple-400 font-bold mb-1">Drafting Agent</div>
                  <div className="text-gray-400">Synthesizing data into email format using CRM context.</div>
                </div>

                <div className={`relative transition-opacity duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-[2px] ${step >= 3 ? 'bg-emerald-500 border-emerald-500' : 'bg-[#081313] border-white/20'}`} />
                  <div className="text-emerald-400 font-bold mb-1">Reviewer Agent</div>
                  <div className="text-gray-400">Task Complete. Draft ready for human approval.</div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Multi-Step <br/><span className="text-[#14b8a6]">Autonomous Reasoning</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Move beyond simple chatbots. Our Autonomous AI Agents are capable of breaking down complex, ambiguous prompts into sequential sub-tasks, writing their own API calls, and verifying their own work.
          </p>
          <ul className="space-y-5">
            {[
              { title: 'Tool Calling & API Integration', desc: 'Agents can read databases, trigger webhooks, and push code.' },
              { title: 'Self-Correction Mechanisms', desc: 'Agents verify their outputs and rewrite queries if they hit an error.' },
              { title: 'Human-in-the-Loop Integration', desc: 'Pause execution at critical steps for human approval.' }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#14b8a6]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#14b8a6]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

// Section 6: Conversational Intelligence Analysis
const ConversationalUISection = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6 overflow-hidden">
      <div className="bg-[#040e0e] border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14b8a6]/10 blur-[100px] pointer-events-none" />

        <div className="md:w-1/2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 mb-6 uppercase tracking-widest">
            <MessageSquare className="w-3 h-3 text-[#2dd4bf]" />
            Conversational Intelligence
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Understand <br/><span className="text-[#2dd4bf]">Every Nuance.</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Transform customer service with voice and text agents that read between the lines. Our models actively track user sentiment, adjusting their tone and escalation protocols in real-time.
          </p>
        </div>

        {/* Chat UI Animation */}
        <div className="md:w-1/2 w-full relative z-10">
          <div className="w-full bg-[#081313] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-4">
            
            {/* User message */}
            <div className="self-end w-[80%]">
              <div className="bg-[#102424] rounded-2xl rounded-tr-none p-3 text-sm text-white">
                My shipment is 3 days late and no one is helping me! This is unacceptable.
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-[9px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">SENTIMENT: FRUSTRATED (89%)</span>
              </div>
            </div>

            {/* AI Response processing */}
            <div className="self-start w-[80%]">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                className="bg-[#040e0e] border border-[#14b8a6]/30 rounded-2xl rounded-tl-none p-3 text-sm text-gray-300 shadow-[0_0_15px_rgba(20,184,166,0.1)]"
              >
                I sincerely apologize for the delay. I can see how frustrating that is. Let me instantly refund your shipping cost and connect you directly to our priority logistics team.
              </motion.div>
              <div className="flex justify-start mt-1">
                <span className="text-[9px] font-mono text-[#14b8a6] bg-[#14b8a6]/10 px-2 py-0.5 rounded">ACTION: DE-ESCALATE & REFUND</span>
              </div>
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
      <ConversationalUISection />
      <CTA />

      <Footer />
    </div>
  );
}
