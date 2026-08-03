"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Contact } from "@/components/sections/Contact";
import { fonts } from "@/styles/tokens";
import { ArrowRight, Mail, MessageSquare, AtSign, ChevronDown, ExternalLink, MapPin } from "lucide-react";

const faqData = [
  {
    question: "How quickly can we deploy Fazamous?",
    answer: "Our cloud-hosted solutions can be deployed instantly. For enterprise on-premise deployments or custom integrations, we typically have a 1-2 week onboarding process to ensure everything is perfectly tailored to your systems."
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Yes, we have highly scalable, usage-based pricing models tailored specifically for startups and growing businesses to ensure you get enterprise-grade AI capabilities within your budget."
  },
  {
    question: "What are your engagement models?",
    answer: "We offer flexible models including self-serve API access, dedicated enterprise clusters, and full-service managed integration depending on your specific requirements and scope."
  },
  {
    question: "Do you integrate with existing enterprise tools?",
    answer: "Absolutely. Fazamous is designed to seamlessly integrate with major platforms like Salesforce, HubSpot, and your custom internal data lakes via our secure, low-latency API."
  },
  {
    question: "Do you offer custom AI model training?",
    answer: "Yes, our enterprise plan includes dedicated support for fine-tuning our foundational models on your proprietary data in a secure, entirely isolated environment."
  }
];

const Sparkles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2.5 + 1}px`,
            height: `${Math.random() * 2.5 + 1}px`,
            opacity: Math.random() * 0.6 + 0.1,
            animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 5}s`,
            boxShadow: `0 0 ${Math.random() * 8 + 4}px rgba(255,255,255,0.8)`,
          }}
        />
      ))}
    </div>
  );
};

export default function ContactPage() {
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: true, margin: "-100px" });

  const [submitted, setSubmitted] = useState(false);
  const [agree, setAgree] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return alert("Please agree to be contacted.");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setAgree(false);
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden selection:bg-[#22D3EE]/30 bg-black" ref={pageRef} style={{ fontFamily: fonts.body }}>
      
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.1; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>

      {/* ─── Premium Twinkling Sparkle Background ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Sparkles />
      </div>

      <Navbar />

      {/* Main Split-Screen Container */}
      <div className="relative z-10 pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch relative">
          


          {/* ─── LEFT COLUMN: True Glass Card ─── */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[40px] overflow-hidden p-10 md:p-14 lg:p-16 flex flex-col h-full min-h-[600px]"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(60px)",
              WebkitBackdropFilter: "blur(60px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 0 40px rgba(255,255,255,0.05)"
            }}
          >
            {/* Inner top highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Abstract Decorative Graphic */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%] w-[400px] h-[400px] pointer-events-none hidden md:block">
               {/* 3D Rings */}
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="w-full h-full absolute inset-0 border-[1px] border-white/5 rounded-full" />
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="w-[80%] h-[80%] absolute top-[10%] left-[10%] border-[2px] border-dashed border-[#22D3EE]/20 rounded-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#22D3EE] rounded-full shadow-[0_0_20px_#22D3EE]" />
               </motion.div>
               
               {/* Floating Widgets */}
               <motion.div 
                 animate={{ y: [-20, 20, -20] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 className="absolute top-[20%] right-[20%] w-36 h-24 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-4"
               >
                 <div className="w-8 h-8 rounded-full border border-[#22D3EE]/30 flex items-center justify-center mb-2">
                   <div className="w-2 h-2 rounded-full bg-[#22D3EE] shadow-[0_0_10px_#22D3EE] animate-pulse" />
                 </div>
                 <span className="text-white/80 text-[11px] uppercase tracking-[0.2em] font-mono font-medium">Active</span>
               </motion.div>

               <motion.div 
                 animate={{ y: [20, -20, 20] }}
                 transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-[25%] left-[10%] w-44 h-28 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-center p-4 relative overflow-hidden"
               >
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/10 to-transparent" />
                 <div className="flex flex-col items-center relative z-10">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-bold text-3xl tracking-tight">1.2<span className="text-xl">ms</span></span>
                    <span className="text-[#6366F1] font-mono text-[9px] uppercase tracking-widest mt-1">Avg Latency</span>
                 </div>
               </motion.div>
            </div>

            <div className="relative z-10 max-w-md mb-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] text-[11px] font-mono uppercase tracking-widest mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                  Global Support
                </div>
                <h1 className="text-5xl lg:text-[64px] font-medium tracking-tighter leading-[1.05] mb-6" style={{ fontFamily: fonts.display }}>
                  Start a <br />
                  <span className="relative">
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#818cf8] to-[#c084fc] drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">Conversation.</span>
                  </span>
                </h1>
                <p className="text-white/50 text-[16px] leading-[1.8] font-light mb-10 max-w-sm" style={{ fontFamily: fonts.body }}>
                  Whether you're exploring our platform, need enterprise support, or want to discuss compatibility, our team is ready to help.
                </p>
              </motion.div>
            </div>

            {/* Social / Contact Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative z-10 flex flex-col gap-4 w-fit mt-12"
            >
              {[
                { icon: Mail, text: "contact@fazamous.com", color: "hover:border-[#22D3EE]/50 hover:bg-[#22D3EE]/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]", iconColor: "group-hover:text-[#22D3EE]" },
                { icon: MessageSquare, text: "discord.gg/fazamous", color: "hover:border-[#6366F1]/50 hover:bg-[#6366F1]/5 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]", iconColor: "group-hover:text-[#6366F1]" },
                { icon: AtSign, text: "@fazamous_ai", color: "hover:border-white/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]", iconColor: "group-hover:text-white" }
              ].map((item, i) => (
                <a key={i} href="#" className={`flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 group backdrop-blur-md ${item.color}`}>
                  <div className={`w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/40 transition-colors duration-300 ${item.iconColor}`}>
                    <item.icon size={14} />
                  </div>
                  <span className="text-[14px] font-medium text-white/50 group-hover:text-white transition-colors duration-300">{item.text}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Neon Accented Form ─── */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center py-6 lg:py-0 w-full max-w-[520px] mx-auto lg:ml-auto lg:mr-0 relative"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                    <Mail size={32} className="text-[#22D3EE]" />
                  </div>
                  <h3 className="text-3xl font-semibold mb-3" style={{ fontFamily: fonts.display }}>Message Sent</h3>
                  <p className="text-white/50 text-[16px]">We'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-8 w-full" 
                  style={{ fontFamily: fonts.body }}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
                  }}
                >
                  
                  {/* Name Row */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-mono uppercase tracking-widest text-white/50 pl-1">First Name</label>
                        <input 
                          type="text" placeholder="Jane" required
                          className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-[15px] text-white placeholder:text-white/20 outline-none focus:bg-white/[0.05] focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/50 transition-all shadow-inner focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-mono uppercase tracking-widest text-white/50 pl-1">Last Name</label>
                        <input 
                          type="text" placeholder="Doe" required
                          className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-[15px] text-white placeholder:text-white/20 outline-none focus:bg-white/[0.05] focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/50 transition-all shadow-inner focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-white/50 pl-1">Email Address</label>
                    <input 
                      type="email" placeholder="jane@company.com" required
                      className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-[15px] text-white placeholder:text-white/20 outline-none focus:bg-white/[0.05] focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/50 transition-all shadow-inner focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-white/50 pl-1">Phone Number</label>
                    <div className="flex gap-4">
                      <div className="relative w-[110px] flex-shrink-0">
                        <select className="appearance-none w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-2xl pl-5 pr-10 py-4 text-[15px] text-white outline-none focus:bg-white/[0.05] focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/50 transition-all shadow-inner cursor-pointer">
                          <option className="bg-[#111]">+1</option>
                          <option className="bg-[#111]">+44</option>
                          <option className="bg-[#111]">+91</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                      </div>
                      <input 
                        type="tel" placeholder="(555) 000-0000" required
                        className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-[15px] text-white placeholder:text-white/20 outline-none focus:bg-white/[0.05] focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/50 transition-all shadow-inner focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                      />
                    </div>
                  </motion.div>

                  {/* Topic */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-white/50 pl-1">Topic</label>
                    <div className="relative w-full">
                      <select className="appearance-none w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-2xl pl-5 pr-10 py-4 text-[15px] text-white/80 outline-none focus:bg-white/[0.05] focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/50 transition-all shadow-inner cursor-pointer">
                        <option className="bg-[#111]">General Inquiry</option>
                        <option className="bg-[#111]">Enterprise Pilot</option>
                        <option className="bg-[#111]">Technical Support</option>
                        <option className="bg-[#111]">Partnership</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-white/50 pl-1">Message</label>
                    <textarea 
                      placeholder="Tell us about your project..." rows={4} required
                      className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-[15px] text-white placeholder:text-white/20 outline-none focus:bg-white/[0.05] focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/50 transition-all shadow-inner resize-none focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                    />
                  </motion.div>

                  {/* Checkbox & Submit */}
                  <motion.div 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                  >
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-[6px] border flex items-center justify-center transition-all duration-300 ${agree ? 'bg-[#22D3EE] border-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'bg-transparent border-white/20 group-hover:border-white/40'}`}>
                        {agree && <div className="w-2.5 h-2.5 bg-black rounded-sm" />}
                      </div>
                      <span className="text-[14px] text-white/50 group-hover:text-white/80 transition-colors">
                        I agree to be contacted.
                      </span>
                    </label>

                    <button 
                      type="submit"
                      className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide flex items-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE] to-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10 text-[14px] group-hover:text-white transition-colors duration-500">Send Message</span>
                      <ArrowRight size={16} className="relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                    </button>
                  </motion.div>

                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      {/* ─── Location Section ─── */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pt-12 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Studio Text Card */}
          <div className="relative group rounded-[40px] overflow-hidden aspect-[4/3] md:aspect-[3/2] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#111] to-[#050505] flex items-center justify-center">
            {/* Elegant Text Logo Placeholder */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.3em] text-white/50 select-none transition-transform duration-1000 group-hover:scale-110" style={{ fontFamily: fonts.display }}>
              FAZAMOUS
            </h2>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8">
              <button className="px-6 py-3.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 text-white text-[11px] font-bold tracking-widest uppercase flex items-center gap-3 hover:bg-white hover:text-black transition-all">
                Our Studio <ExternalLink size={14} />
              </button>
            </div>
          </div>

          {/* Map Image Card */}
          <div className="relative group rounded-[40px] overflow-hidden aspect-[4/3] md:aspect-[3/2] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-[#050505]">
            <img src="/map.png" alt="Fazamous Location" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <button className="px-8 py-3.5 rounded-full bg-[#0A0A0A] backdrop-blur-xl border border-white/10 text-white text-[11px] font-bold tracking-widest uppercase flex items-center gap-3 hover:border-white/30 transition-all">
                <MapPin size={14} className="text-[#22D3EE]" /> Open in Google Maps
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── FAQ Section ─── */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 py-24 px-6 md:px-12 max-w-[800px] mx-auto"
      >
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-white/50 text-[10px] font-mono uppercase tracking-widest mb-6 shadow-inner">
            Common Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4" style={{ fontFamily: fonts.display }}>
            Contact Fazamous, <br className="md:hidden" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#6366F1]">Answered Honestly</span>
          </h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="flex flex-col gap-4"
        >
          {faqData.map((faq, index) => {
            const isActive = activeFaq === index;
            return (
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                key={index}
                className={`overflow-hidden transition-all duration-500 rounded-3xl border backdrop-blur-xl cursor-pointer ${isActive ? 'bg-white/[0.04] border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)]' : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.03]'}`}
                onClick={() => setActiveFaq(isActive ? null : index)}
              >
                <div className="px-6 py-6 md:px-8 flex items-center justify-between gap-4">
                  <h3 className={`font-medium text-[15px] md:text-[16px] transition-colors duration-300 ${isActive ? 'text-[#22D3EE]' : 'text-white/80'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive ? 'bg-[#22D3EE]/10 text-[#22D3EE]' : 'bg-white/5 text-white/40'}`}>
                    <ChevronDown size={16} className={`transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`} />
                  </div>
                </div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-8 md:px-8 pt-0 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                        {index === 0 && (
                          <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden relative flex-shrink-0 bg-gradient-to-br from-[#1a1c23] to-[#0A0B0F] border border-white/10">
                             {/* Abstract placeholder image to match our dark theme */}
                             <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #22D3EE, transparent 60%)' }} />
                             <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                                  <div className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                                </div>
                             </div>
                          </div>
                        )}
                        <div className="flex flex-col gap-4">
                          <p className="text-white/50 text-[14px] leading-relaxed font-light" style={{ fontFamily: fonts.body }}>
                            {faq.answer}
                          </p>
                          {index === 0 && (
                            <a href="#" className="text-[#22D3EE] text-[13px] font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit">
                              View more <ArrowRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* ─── CTA Banner ─── */}
      <Contact />

      <Footer />
    </main>
  );
}
