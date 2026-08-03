"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Globe, Cpu, Users, Target, Shield, 
  ArrowRight, Zap, Bot, BrainCircuit, Activity, Database, MessageSquare, Lightbulb
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import CTA from '@/Frontend/Home/CTA';

// Section 1: Hero
const HeroSection = () => {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 flex items-center justify-center overflow-hidden bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Information */}
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 uppercase tracking-widest mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              About Fazamous
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-white"
            >
              Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Intelligence Layer</span> of Tomorrow.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              We are not just a technology company. We are a collective of researchers, engineers, and visionaries dedicated to democratizing Artificial Intelligence and transforming how the world operates.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow">
                <span className="relative z-10 flex items-center gap-2">
                  Our Vision <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Clean Premium Glass Diagram */}
          <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center perspective-1000">
             
             {/* Background glow to ground the cards */}
             <div className="absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />

             {/* Bottom Card - Infrastructure */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute w-72 h-40 bg-[#050505] border border-white/5 rounded-2xl shadow-2xl p-6 transform rotate-x-[30deg] rotate-y-[-20deg] rotate-z-[5deg] translate-y-20 flex flex-col justify-between"
             >
                <div className="flex justify-between items-start opacity-50">
                  <Database className="w-6 h-6 text-gray-500" />
                  <div className="text-[10px] font-mono text-gray-500">INFRASTRUCTURE</div>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-blue-500/50" />
                </div>
             </motion.div>

             {/* Middle Card - AI Core (Glassmorphic) */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute w-72 h-40 bg-[#0a0f1c]/80 backdrop-blur-md border border-blue-500/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 transform rotate-x-[30deg] rotate-y-[-20deg] rotate-z-[5deg] translate-y-4 flex flex-col justify-between z-10"
             >
                <div className="flex justify-between items-start">
                  <BrainCircuit className="w-6 h-6 text-blue-400" />
                  <div className="text-[10px] font-mono text-blue-400">FAZAMOUS CORE</div>
                </div>
                <div className="flex gap-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="flex-1 h-8 bg-blue-500/10 rounded-md border border-blue-500/20" />
                   ))}
                </div>
             </motion.div>

             {/* Top Card - Output/Interface */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute w-72 h-40 bg-gradient-to-br from-[#101015] to-[#050505] border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.7)] p-6 transform rotate-x-[30deg] rotate-y-[-20deg] rotate-z-[5deg] -translate-y-12 flex flex-col justify-between z-20"
             >
                <div className="flex justify-between items-start">
                  <Activity className="w-6 h-6 text-white" />
                  <div className="text-[10px] font-mono text-white">INTELLIGENCE</div>
                </div>
                <div className="w-full space-y-2">
                   <div className="w-full h-2 bg-white/20 rounded-full" />
                   <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                </div>
             </motion.div>

             {/* Connecting Particle Line */}
             <svg className="absolute w-[300px] h-[400px] pointer-events-none z-30 transform translate-x-12 -translate-y-8">
                <motion.circle 
                  cx="150" cy="50" r="2" fill="#fff"
                  animate={{ cy: [350, 50], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
             </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

// Section 2: Core Philosophy (Interactive Diagram)
const PhilosophySection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030408] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Fazamous <span className="text-blue-500">Architecture</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">How we structure our approach to solving the most complex industry problems.</p>
        </div>

        {/* Custom Animated Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative h-auto md:h-[400px]">
          {/* Node 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-64 h-64 bg-[#0a0f1c] border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center relative group hover:border-blue-500/50 transition-colors z-10 shadow-xl"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Database className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Data Ingestion</h3>
            <p className="text-xs text-gray-500 relative z-10">Unifying fragmented enterprise data into structured intelligence.</p>
          </motion.div>

          {/* Connection Line 1 */}
          <div className="hidden md:flex w-24 h-[2px] bg-gradient-to-r from-blue-500/20 to-purple-500/50 relative overflow-hidden">
             <motion.div 
               animate={{ x: ["-100%", "200%"] }} 
               transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
               className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" 
             />
          </div>

          {/* Node 2 (Center) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-72 h-72 bg-[#05070e] border border-purple-500/30 rounded-full p-8 flex flex-col items-center justify-center text-center relative group hover:border-purple-500 transition-colors z-10 shadow-[0_0_40px_rgba(168,85,247,0.15)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#a855f7_100%)] animate-[spin_4s_linear_infinite] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute inset-[2px] bg-[#05070e] rounded-full z-0"></div>
            
            <div className="relative z-10 w-20 h-20 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <BrainCircuit className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="relative z-10 text-xl font-bold text-white mb-2">AI Processing</h3>
            <p className="relative z-10 text-xs text-gray-400">Our proprietary LLMs and neural nets analyze and strategize.</p>
          </motion.div>

          {/* Connection Line 2 */}
          <div className="hidden md:flex w-24 h-[2px] bg-gradient-to-r from-purple-500/50 to-blue-500/20 relative overflow-hidden">
             <motion.div 
               animate={{ x: ["-100%", "200%"] }} 
               transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }}
               className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" 
             />
          </div>

          {/* Node 3 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-64 h-64 bg-[#0a0f1c] border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center relative group hover:border-blue-500/50 transition-colors z-10 shadow-xl"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Actionable Output</h3>
            <p className="text-xs text-gray-500 relative z-10">Real-time automations, insights, and workflow executions.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Section 3: Core Values (Bento Grid)
const CoreValuesSection = () => {
  return (
    <section className="py-12 md:py-16 max-w-6xl mx-auto px-6">
      <div className="text-left mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">What Drives Us</h2>
        <p className="text-gray-400 text-lg">The principles that dictate every line of code we write.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
        {/* Box 1: Precision Engineering (Large) */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="md:col-span-2 relative rounded-3xl p-[1px] overflow-hidden group flex flex-col justify-end"
        >
          {/* Hover Beam */}
          <div className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0_70%,#3b82f6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          
          <div className="relative z-10 bg-[#060810] h-full w-full rounded-[23px] p-8 overflow-hidden flex flex-col justify-end">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none z-0" />
            
            {/* Animated Diagram */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center pointer-events-none z-0">
               <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="w-40 h-40 border border-blue-500/20 rounded-full flex items-center justify-center">
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="w-28 h-28 border border-blue-500/40 rounded-full border-dashed flex items-center justify-center">
                   <div className="w-16 h-16 border border-blue-500/60 rounded-full" />
                 </motion.div>
               </motion.div>
            </div>

            <Target className="w-10 h-10 text-blue-400 mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Precision Engineering</h3>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed relative z-10">
              AI should not be a black box. We engineer our models to be highly deterministic, accurate, and perfectly tailored to your business rules.
            </p>
          </div>
        </motion.div>

        {/* Box 2: Data Security (Small) */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="relative rounded-3xl p-[1px] overflow-hidden group flex flex-col justify-end"
        >
          {/* Hover Beam */}
          <div className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0_70%,#a855f7_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

          <div className="relative z-10 bg-[#060810] h-full w-full rounded-[23px] p-6 overflow-hidden flex flex-col justify-end">
            {/* Animated Diagram */}
            <div className="absolute top-6 right-6 w-16 h-16 pointer-events-none z-0">
               <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full border-2 border-purple-500/20 rounded-lg flex items-center justify-center relative">
                  <div className="absolute w-full h-[2px] bg-purple-500/50 animate-[scan_2s_ease-in-out_infinite]" />
               </motion.div>
            </div>

            <Shield className="w-8 h-8 text-purple-400 mb-4 relative z-10" />
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Data Security</h3>
            <p className="text-xs text-gray-400 leading-relaxed relative z-10">
              Enterprise-grade encryption and secure infrastructure guarantee that your proprietary data remains yours.
            </p>
          </div>
        </motion.div>

        {/* Box 3: Human Centric (Small) */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="relative rounded-3xl p-[1px] overflow-hidden group flex flex-col justify-end"
        >
          {/* Hover Beam */}
          <div className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0_70%,#3b82f6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

          <div className="relative z-10 bg-[#060810] h-full w-full rounded-[23px] p-6 overflow-hidden flex flex-col justify-end">
            {/* Animated Diagram */}
            <div className="absolute top-6 right-6 w-16 h-16 pointer-events-none z-0 flex gap-1">
               {[1,2,3].map(i => (
                  <motion.div key={i} animate={{ height: ["20%", "100%", "20%"] }} transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-blue-500/20 rounded-full self-end" />
               ))}
            </div>

            <Users className="w-8 h-8 text-blue-400 mb-4 relative z-10" />
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Human Centric</h3>
            <p className="text-xs text-gray-400 leading-relaxed relative z-10">
              We build AI to augment human capabilities, not replace them. Empathy drives our interface design.
            </p>
          </div>
        </motion.div>

        {/* Box 4: Global Scalability (Small) */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="relative rounded-3xl p-[1px] overflow-hidden group flex flex-col justify-end"
        >
          {/* Hover Beam */}
          <div className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0_70%,#ffffff_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

          <div className="relative z-10 bg-[#060810] h-full w-full rounded-[23px] p-6 overflow-hidden flex flex-col justify-end">
            {/* Animated Diagram */}
            <div className="absolute top-6 right-6 w-16 h-16 pointer-events-none z-0">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="w-full h-full rounded-full border border-white/10 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white/20" />
               </motion.div>
            </div>
            
            <Globe className="w-8 h-8 text-white mb-4 relative z-10" />
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Global Scalability</h3>
            <p className="text-xs text-gray-400 leading-relaxed relative z-10">
              Handle millions of requests globally.
            </p>
          </div>
        </motion.div>

        {/* Box 5: Continuous Innovation (Small) */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="relative rounded-3xl p-[1px] overflow-hidden group flex flex-col justify-end"
        >
          {/* Hover Beam */}
          <div className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0_70%,#eab308_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

          <div className="relative z-10 bg-[#060810] h-full w-full rounded-[23px] p-6 overflow-hidden flex flex-col justify-end">
            {/* Animated Diagram */}
            <div className="absolute top-6 right-6 w-16 h-16 pointer-events-none z-0">
               <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full bg-yellow-500/10 rounded-full blur-xl absolute" />
               <Lightbulb className="w-16 h-16 text-yellow-500/20 absolute" />
            </div>

            <Lightbulb className="w-8 h-8 text-yellow-400 mb-4 relative z-10" />
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Continuous Innovation</h3>
            <p className="text-xs text-gray-400 leading-relaxed relative z-10">
              Constantly pushing the boundaries of AI research and generative technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 4: Global Impact / Stats
const ImpactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#020202] to-[#050714] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/5 border-y border-white/5 py-12">
          {[
            { value: "50M+", label: "API Calls Daily" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "12+", label: "Industries Served" },
            { value: "<50ms", label: "Inference Latency" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <h4 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5: The Team / Specialized AI Agents
const TeamSection = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our Specialized Expertise</h2>
        <p className="text-gray-400 text-lg">A synergy of brilliant human minds and fine-tuned AI agents.</p>
      </div>

      <div className="relative overflow-hidden w-full max-w-full">
         <div className="absolute left-0 top-0 w-12 md:w-32 h-full bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
         <div className="absolute right-0 top-0 w-12 md:w-32 h-full bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none" />
         
         <motion.div 
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="flex w-max gap-6 px-6"
         >
           {[
             { role: "NLP Architecture", name: "Language Models", desc: "Crafting human-like text generation.", icon: MessageSquare },
             { role: "Computer Vision", name: "Visual Recognition", desc: "Extracting insights from images & video.", icon: Cpu },
             { role: "Data Science", name: "Predictive Analytics", desc: "Forecasting trends with deep learning.", icon: Activity },
             { role: "Automation", name: "Workflow Agents", desc: "Executing complex multi-step tasks.", icon: Bot },
             { role: "NLP Architecture", name: "Language Models", desc: "Crafting human-like text generation.", icon: MessageSquare },
             { role: "Computer Vision", name: "Visual Recognition", desc: "Extracting insights from images & video.", icon: Cpu },
             { role: "Data Science", name: "Predictive Analytics", desc: "Forecasting trends with deep learning.", icon: Activity },
             { role: "Automation", name: "Workflow Agents", desc: "Executing complex multi-step tasks.", icon: Bot }
           ].map((member, i) => (
             <div key={i} className="w-[280px] flex-shrink-0 bg-[#050505] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center group hover:bg-[#0a0a0a] transition-colors relative overflow-hidden">
                {/* Scanner animation on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/50 -translate-y-[200px] group-hover:animate-[scan_2s_ease-in-out_infinite] shadow-[0_0_10px_#3b82f6]" />
                
                <div className="w-16 h-16 rounded-full bg-[#0a0f1c] border border-white/5 flex items-center justify-center mb-6 group-hover:border-blue-500/30 transition-colors z-10">
                  <member.icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <h4 className="text-white font-bold text-lg mb-1 relative z-10">{member.name}</h4>
                <p className="text-blue-500 text-xs font-semibold uppercase tracking-wider mb-3 relative z-10">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed relative z-10">{member.desc}</p>
             </div>
           ))}
         </motion.div>
      </div>
    </section>
  );
};



export default function About() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <CoreValuesSection />
      <TeamSection />
      <ImpactSection />
      <CTA />
      <Footer />

      {/* Global styles for custom animations used in this page */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(200px); opacity: 0; }
        }
      `}} />
    </div>
  );
}
