"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Navbar } from "@/components/Top-bottom/Navbar";
import { Footer } from "@/components/Top-bottom/Footer";
import Contact from "@/Frontend/Home/Contact";

// We can just use the products array from before.
const products = [
  {
    id: "01",
    title: "Insights",
    subtitle: "Enterprise Intelligence (Flagship Platform)",
    desc: "The ultimate command center for predictive intelligence and executive decision-making.",
    details: "Insights acts as the central nervous system for your enterprise. It ingests petabytes of multi-modal data in real-time to generate root cause analyses, predictive intelligence, and actionable recommendations. Executives gain zero-friction visibility into every operational metric, instantly turning complex data into a strategic advantage.",
    metrics: [
      { label: "Predictive Accuracy", value: "99.8%" },
      { label: "Data Latency", value: "1.2ms" },
      { label: "Integrations", value: "450+" },
    ],
    color: "#4EA8FF",
  },
  {
    id: "02",
    title: "TriageAI",
    subtitle: "Telecommunications",
    desc: "Automated incident triage and NLP-powered ticket classification at scale.",
    details: "TriageAI revolutionizes telecom support by autonomously ingesting, categorizing, and routing network incidents before human agents are even alerted. Using advanced NLP, it correlates disparate support tickets to identify systemic network anomalies, reducing mean-time-to-resolution (MTTR) drastically.",
    metrics: [
      { label: "Triage Speed", value: "0.4s" },
      { label: "Resolution Lift", value: "68%" },
      { label: "Tickets/Min", value: "12K+" },
    ],
    color: "#3B82F6",
  },
  {
    id: "03",
    title: "Aegis",
    subtitle: "Financial Services / Fraud Intelligence",
    desc: "Multi-layered threat defense and autonomous financial risk intelligence.",
    details: "Aegis doesn't just detect financial anomalies; it actively neutralizes them. By mapping transaction flows through advanced graph neural networks, it identifies complex anti-money laundering (AML) patterns and zero-day fraud attempts instantly, safeguarding enterprise revenue streams.",
    metrics: [
      { label: "Threats Blocked", value: "99.99%" },
      { label: "Response Time", value: "<1ms" },
      { label: "False Positives", value: "0.01%" },
    ],
    color: "#F43F5E",
  },
  {
    id: "04",
    title: "SignalIQ",
    subtitle: "Telecommunications / Enterprise Intelligence",
    desc: "Dynamic telemetry monitoring and autonomous network signaling intelligence.",
    details: "SignalIQ provides unparalleled visibility into enterprise network health. It autonomously monitors global edge nodes, predicting bandwidth bottlenecks and dynamically optimizing routing protocols to ensure seamless connectivity and zero-downtime operations.",
    metrics: [
      { label: "Nodes Monitored", value: "2M+" },
      { label: "Network Uptime", value: "99.999%" },
      { label: "Routing Latency", value: "8ms" },
    ],
    color: "#8B5CF6",
  },
  {
    id: "05",
    title: "DataPulse",
    subtitle: "Data & Analytics",
    desc: "End-to-end data observability and intelligent pipeline quality monitoring.",
    details: "DataPulse acts as the guardian of your data warehouse. It continuously validates schema integrity, detects data drift, and monitors pipeline health in real-time. By resolving data quality issues autonomously, it ensures that your downstream analytics are always built on flawless foundations.",
    metrics: [
      { label: "Data Checked/sec", value: "50GB" },
      { label: "Anomaly Detection", value: "99.5%" },
      { label: "Pipeline Uptime", value: "100%" },
    ],
    color: "#F59E0B",
  },
  {
    id: "06",
    title: "CTV Analytics Hub",
    subtitle: "Media & Advertising",
    desc: "Predictive Connected TV analytics and real-time audience aggregation.",
    details: "The CTV Analytics Hub empowers media buyers and advertisers with hyper-granular audience intelligence. By aggregating fragmented streaming data, it provides real-time campaign analytics, predictive ad performance modeling, and cross-platform attribution with unmatched precision.",
    metrics: [
      { label: "Ad Impressions", value: "10B+" },
      { label: "Attribution Acc.", value: "98.2%" },
      { label: "ROI Lift", value: "3.4x" },
    ],
    color: "#EAB308",
  },
  {
    id: "07",
    title: "FraudShield AI",
    subtitle: "Financial Services",
    desc: "Next-generation transactional fraud prevention and revenue protection.",
    details: "Designed specifically for high-frequency trading and retail banking, FraudShield AI uses deep learning to establish baseline behavioral models for millions of users. It detects subtle deviations indicative of account takeover or synthetic identity fraud in milliseconds.",
    metrics: [
      { label: "Fraud Stopped", value: "$4.2B" },
      { label: "Check Latency", value: "2ms" },
      { label: "User Profiles", value: "150M+" },
    ],
    color: "#10B981",
  },
  {
    id: "08",
    title: "MedVision AI",
    subtitle: "Healthcare",
    desc: "Clinical intelligence and autonomous medical risk prediction.",
    details: "MedVision AI transforms patient care by ingesting complex medical histories, genomics, and real-time biometric data to predict disease onset and patient risk factors. It empowers clinicians with highly accurate, data-backed second opinions at the point of care.",
    metrics: [
      { label: "Diagnostic Acc.", value: "99.1%" },
      { label: "Risk Flags", value: "14.2M" },
      { label: "Processing Speed", value: "0.8s" },
    ],
    color: "#00e5ff",
  },
  {
    id: "09",
    title: "CodeMorph AI",
    subtitle: "Enterprise Software Modernization",
    desc: "Intelligent legacy system modernization and automated SAS to PySpark translation.",
    details: "CodeMorph AI accelerates digital transformation by autonomously parsing and rewriting legacy codebases. From converting monolithic SAS architectures into optimized, distributed PySpark pipelines, it reduces modernization timelines from years to weeks while eliminating human error.",
    metrics: [
      { label: "Code Translated", value: "500M+" },
      { label: "Time Saved", value: "85%" },
      { label: "Syntax Accuracy", value: "99.9%" },
    ],
    color: "#6366F1",
  },
  {
    id: "10",
    title: "Conversa Enterprise AI",
    subtitle: "Generative AI & Enterprise Intelligence",
    desc: "High-fidelity autonomous AI agents and conversational RAG systems.",
    details: "Conversa deploys secure, enterprise-grade AI assistants that instantly ground their reasoning in your organization's proprietary knowledge base via advanced RAG architecture. It acts as an autonomous agent capable of resolving complex workflows through natural language.",
    metrics: [
      { label: "Query Resolution", value: "94%" },
      { label: "Knowledge Nodes", value: "2B+" },
      { label: "Response Time", value: "0.2s" },
    ],
    color: "#14B8A6",
  },
  {
    id: "11",
    title: "SupplySync AI",
    subtitle: "Supply Chain Management",
    desc: "Unified Intelligence Platform synchronizing global supply chain operations.",
    details: "SupplySync AI connects independent software and hardware systems across the entire supply chain. It provides real-time failure alerts, detects localized anomalies, performs autonomous root cause analysis, and dynamically reroutes resources to mitigate operational risks before they impact the bottom line.",
    metrics: [
      { label: "Disruptions", value: "0" },
      { label: "Routes Optimized", value: "4.5M" },
      { label: "Cost Reduction", value: "28%" },
    ],
    color: "#F97316",
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(products[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="relative bg-[#050505]">
      <Navbar />

      <section className="pt-36 pb-24 relative">
        {/* Background ambient glow */}
        <div className="absolute top-[20%] left-0 w-[800px] h-[800px] rounded-full bg-[#4EA8FF]/[0.02] blur-[150px] pointer-events-none" />
        
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12" ref={ref}>
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-6 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 glass-pill border-glow"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#4EA8FF] shadow-[0_0_8px_#4EA8FF] animate-pulse" />
              <span className="text-white/30 uppercase tracking-widest text-[10px] font-mono">Platform Suite</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.05]"
            >
              Intelligent<br />
              <span className="text-gradient">Products.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 text-[16px] leading-[1.8] font-light max-w-2xl"
            >
              Explore our comprehensive suite of autonomous intelligence platforms. Each module is engineered for a specific operational domain, ensuring seamless integration and measurable ROI.
            </motion.p>
          </div>

          {/* Product Cards (Accordion Style) */}
          <div className="flex flex-col gap-5">
            {products.map((product, idx) => {
              const isExpanded = expandedId === product.id;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    layout
                    onClick={() => setExpandedId(isExpanded ? null : product.id)}
                    className={`
                      glass-card hover:border-white/15 hover:bg-white/[0.03] relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 group hover:scale-[1.01]
                      ${isExpanded
                        ? "border-glow shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        : ""
                      }
                    `}
                  >
                    {/* Subtle Top Glow for expanded state */}
                    {isExpanded && (
                      <motion.div 
                        layoutId={`glow-${product.id}`}
                        className="absolute top-0 left-1/4 right-1/4 h-[1px]" 
                        style={{ background: `linear-gradient(90deg, transparent, ${product.color}60, transparent)` }} 
                      />
                    )}

                    {/* Ambient background glow when expanded */}
                    {isExpanded && (
                      <div 
                        className="absolute top-0 right-0 w-[500px] h-[300px] blur-[120px] pointer-events-none opacity-20"
                        style={{ backgroundColor: product.color }}
                      />
                    )}

                    {/* Light sweep */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl light-sweep" />

                    <div className="p-8 md:p-10 lg:p-12 relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-start gap-6 md:gap-8 flex-1">
                          <span className="text-white/20 font-mono text-[11px] pt-2 shrink-0">{product.id}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <h3 className={`text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight transition-colors duration-500 ${isExpanded ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
                                {product.title}
                              </h3>
                              <span 
                                className={`hidden md:inline text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded border transition-colors duration-500`}
                                style={{
                                  borderColor: isExpanded ? `${product.color}40` : 'rgba(255,255,255,0.08)',
                                  backgroundColor: isExpanded ? `${product.color}10` : 'transparent',
                                  color: isExpanded ? product.color : 'rgba(255,255,255,0.4)'
                                }}
                              >
                                {product.subtitle}
                              </span>
                            </div>
                            
                            <motion.p 
                              layout
                              className={`text-[15px] transition-colors duration-500 font-light ${isExpanded ? "text-white/70" : "text-white/40"}`}
                            >
                              {product.desc}
                            </motion.p>
                          </div>
                        </div>

                        {/* Toggle Icon */}
                        <div className={`
                          w-12 h-12 rounded-full border flex items-center justify-center shrink-0
                          transition-all duration-700
                          ${isExpanded
                            ? "bg-white border-white text-black rotate-45"
                            : "border-white/[0.1] bg-white/[0.02] text-white/50 group-hover:border-white/[0.2] group-hover:text-white"
                          }
                        `}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </div>
                      </div>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-8 md:pt-10 mt-8 md:mt-10 border-t border-white/[0.06]">
                              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                                 <div className="lg:col-span-6">
                                    <p className="text-white/60 leading-[1.8] text-[15px] font-light">
                                      {product.details}
                                    </p>
                                    
                                    <motion.button
                                      whileHover={{ x: 5 }}
                                      className="mt-8 flex items-center gap-3 text-white text-[13px] font-medium group/btn"
                                    >
                                      <span style={{ color: product.color }}>View Platform Specs</span>
                                      <span className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: `${product.color}20` }}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                        </svg>
                                      </span>
                                    </motion.button>
                                 </div>
                                 
                                 <div className="lg:col-span-6">
                                   {/* Metrics Grid */}
                                   <div className="grid grid-cols-3 gap-4 md:gap-6">
                                     {product.metrics.map((metric, mi) => (
                                       <div key={mi} className="flex flex-col p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                                         <div className="text-2xl md:text-3xl font-medium text-white font-mono mb-2 tracking-tight">
                                           {metric.value}
                                         </div>
                                         <div className="text-[10px] text-white/30 uppercase tracking-[0.1em] font-mono leading-tight">
                                           {metric.label}
                                         </div>
                                       </div>
                                     ))}
                                   </div>
                                 </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
