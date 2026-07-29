"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, BarChart, ShieldAlert } from "lucide-react";
import { colors, fonts } from "@/styles/tokens";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

import { industryData } from "@/data/industryData";
import { notFound } from "next/navigation";

export function IndustryServiceTemplate({ slug }: { slug: string }) {
  const industry = industryData.find(i => i.slug === slug);
  const [expandedId, setExpandedId] = useState<number | null>(0);
  
  if (!industry) return notFound();
  
  const Icon = industry.icon;

  return (
    <main className="relative bg-[#050505] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Background ambient glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-20"
          style={{ backgroundColor: industry.color }}
        />
        
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-pill mb-8 border-glow">
            <span className="text-white/80 uppercase tracking-widest text-[11px] font-mono font-semibold" style={{ color: industry.color }}>
              Industry Application
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-white" style={{ fontFamily: fonts.display }}>
            {industry.name}
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5">
              <Icon size={20} style={{ color: industry.color }} />
              <span className="text-white/60 text-[14px]">Primary Metric:</span>
              <span className="text-white font-mono font-medium">{industry.metric}</span>
            </div>
          </div>

          <p className="text-white/50 text-[18px] md:text-[20px] leading-[1.6] font-light max-w-3xl mx-auto mb-16" style={{ fontFamily: fonts.body }}>
            {industry.desc}
          </p>
        </div>
      </section>

      {/* Use Cases Breakdown */}
      <section className="py-20 relative border-t border-white/[0.02]">
        <div className="w-full max-w-[900px] mx-auto px-6 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: fonts.display }}>
              Core Capabilities
            </h2>
            <p className="text-white/40 text-[15px] font-light">
              Explore how our intelligence platforms solve specific operational challenges in {industry.name}.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {industry.useCases.map((useCase, idx) => {
              const isExpanded = expandedId === idx;
              return (
                <div 
                  key={idx}
                  className={`
                    glass-card rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer
                    ${isExpanded ? 'border-white/20 bg-white/[0.04]' : 'border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.02]'}
                  `}
                  onClick={() => setExpandedId(isExpanded ? null : idx)}
                >
                  <div className="p-6 md:p-8 flex items-center justify-between gap-6">
                    <h3 className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${isExpanded ? 'text-white' : 'text-white/70'}`} style={{ fontFamily: fonts.display }}>
                      {useCase.title}
                    </h3>
                    <div 
                      className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-500 ${isExpanded ? 'rotate-180 bg-white text-black border-white' : 'border-white/10 text-white/50'}`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-white/50 text-[15px] leading-relaxed font-light">
                          {useCase.elaboration}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Product Spotlight */}
      <section className="py-24 relative bg-[#080808]">
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: fonts.display }}>
                Powered by Intelligent Platforms
              </h2>
              <p className="text-white/50 text-[15px] leading-relaxed mb-8">
                {industry.name} solutions are built on our flagship platforms, engineered to ingest complex data and deliver autonomous insights at scale.
              </p>
              
              <div className="flex flex-col gap-4">
                {industry.products.map(product => (
                  <div key={product} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: industry.color }} />
                    <span className="text-white/80 font-medium">{product}</span>
                  </div>
                ))}
              </div>

              <Link href="/services/intelligent-platform">
                <button className="mt-10 flex items-center gap-3 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-full text-white text-[13px] font-semibold transition-colors group">
                  Explore Platforms
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            
            <div className="relative rounded-[32px] border border-white/10 bg-[#0A0B0F] p-10 overflow-hidden min-h-[300px] flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
               <div 
                 className="absolute -right-20 -bottom-20 w-[300px] h-[300px] blur-[80px] opacity-20 pointer-events-none"
                 style={{ backgroundColor: industry.color }}
               />
               <Icon size={120} strokeWidth={0.5} style={{ color: industry.color }} className="opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Case Study Placeholder */}
      <section className="py-24 relative border-t border-white/[0.02]">
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          {/* TODO: Add real case study content here once provided */}
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] mb-8 text-[11px] font-mono text-white/40 uppercase tracking-widest">
            Case Study Placeholder
          </div>
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: fonts.display }}>
            Proven Impact in {industry.name}
          </h2>
          <p className="text-white/40 text-[16px] max-w-2xl mx-auto mb-12">
            Detailed performance metrics and client success stories are currently being compiled.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             <div className="glass-card p-8 rounded-2xl border border-white/5 opacity-50">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center mb-6 mx-auto">
                   <BarChart size={20} className="text-white/30" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Metric 1</div>
                <div className="text-white/30 text-[12px] uppercase tracking-wider font-mono">Coming Soon</div>
             </div>
             <div className="glass-card p-8 rounded-2xl border border-white/5 opacity-50">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center mb-6 mx-auto">
                   <ShieldAlert size={20} className="text-white/30" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Metric 2</div>
                <div className="text-white/30 text-[12px] uppercase tracking-wider font-mono">Coming Soon</div>
             </div>
             <div className="glass-card p-8 rounded-2xl border border-white/5 opacity-50">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center mb-6 mx-auto">
                   <Icon size={20} className="text-white/30" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Metric 3</div>
                <div className="text-white/30 text-[12px] uppercase tracking-wider font-mono">Coming Soon</div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative bg-[#050505] border-t border-white/[0.02]">
        <div className="w-full max-w-[800px] mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: fonts.display }}>
            Ready to transform <br/>
            <span style={{ color: industry.color }}>{industry.name}</span>?
          </h2>
          <p className="text-white/50 text-[16px] mb-12">
            Schedule a technical deep dive with our engineering team to see how our platforms can solve your specific operational challenges.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-[14px] hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
              Talk to our team
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
