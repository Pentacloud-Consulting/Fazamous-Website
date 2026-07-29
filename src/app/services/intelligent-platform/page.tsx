import React from "react";
import Link from "next/link";
import { ArrowRight, BrainCircuit } from "lucide-react";
import { colors, fonts } from "@/styles/tokens";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { industryData } from "@/data/industryData";

export default function IntelligentPlatformPage() {
  return (
    <main className="relative bg-[#050505] min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none opacity-30"
          style={{ backgroundColor: '#4EA8FF' }}
        />
        
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-pill mb-8 border-glow">
            <span className="text-white/80 uppercase tracking-widest text-[11px] font-mono font-semibold" style={{ color: '#4EA8FF' }}>
              Flagship Platform
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8 pb-2 text-white" style={{ fontFamily: fonts.display }}>
            The Intelligence Layer <br/> <span className="text-white/40">Behind Every Industry.</span>
          </h1>

          <p className="text-white/50 text-[18px] md:text-[20px] leading-[1.6] font-light max-w-3xl mx-auto mb-16" style={{ fontFamily: fonts.body }}>
            Insights acts as the central nervous system for your enterprise. It ingests petabytes of multi-modal data in real-time to generate root cause analyses, predictive intelligence, and actionable recommendations.
          </p>

          <div className="flex justify-center mb-24">
            <div className="w-24 h-24 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(78,168,255,0.2)]">
               <BrainCircuit size={48} style={{ color: '#4EA8FF' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Grid Section */}
      <section className="py-24 relative border-t border-white/[0.02]">
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: fonts.display }}>
              See it in action.
            </h2>
            <p className="text-white/40 text-[16px] font-light max-w-xl mx-auto">
              Explore how the Insights platform adapts to solve domain-specific challenges across 10 critical industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryData.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link key={industry.slug} href={`/services/${industry.slug}`}>
                  <div className="group glass-card relative overflow-hidden rounded-[24px] p-8 border border-white/[0.08] hover:border-white/20 transition-all duration-500 h-full flex flex-col cursor-pointer">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 90% 10%, ${industry.color}, transparent 65%)` }}
                    />
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.02] border border-white/5 transition-transform duration-500 group-hover:scale-110"
                      >
                        <Icon size={20} style={{ color: industry.color }} />
                      </div>
                      <h3 className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-white/40 text-[13px] font-light leading-relaxed mb-6 flex-1">
                      {industry.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[12px] font-semibold text-white/50 group-hover:text-white transition-colors">
                      <span style={{ color: industry.color }}>Explore Applications</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" style={{ color: industry.color }} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-[#050505] border-t border-white/[0.02]">
        <div className="w-full max-w-[800px] mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: fonts.display }}>
            Deploy Intelligence <br/>
            <span style={{ color: '#4EA8FF' }}>At Enterprise Scale.</span>
          </h2>
          <p className="text-white/50 text-[16px] mb-12">
            Schedule a technical deep dive with our engineering team to architect your deployment of the Insights platform.
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
