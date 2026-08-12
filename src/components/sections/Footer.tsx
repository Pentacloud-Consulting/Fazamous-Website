"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Send, ShieldCheck, Activity, Phone, Mail } from "lucide-react";
import { industryData } from "@/data/industryData";

// Mini canvas for footer background mesh
function FooterMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.parentElement?.clientWidth || window.innerWidth;
      h = canvas.parentElement?.clientHeight || 450;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const dots: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    for (let i = 0; i < 15; i++) {
      dots.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      for (const dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > w) dot.vx *= -1;
        if (dot.y < 0 || dot.y > h) dot.vy *= -1;
      }

      // Interconnecting telemetry lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 280) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${(1 - dist / 280) * 0.05})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 229, 255, 0.2)";
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#020203] border-t border-white/[0.08] overflow-hidden pt-20 pb-10">
      {/* Background Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <FooterMesh />
      </div>
      
      {/* Ambient Radial Bloom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-t from-[#00e5ff]/[0.03] via-[#8B5CF6]/[0.02] to-transparent blur-[160px] pointer-events-none" />

      {/* Massive Background Watermark Typography */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[11rem] md:text-[16rem] font-black tracking-tighter text-white/[0.015] select-none pointer-events-none uppercase font-mono whitespace-nowrap">
        FAZAMOUS
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12" ref={ref}>
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">
          
          {/* Brand Column + Newsletter */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00e5ff] via-[#3B82F6] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-transform duration-500 group-hover:scale-110">
                <span className="text-black font-black text-base">F</span>
              </div>
              <span className="text-white font-bold text-xl tracking-wider font-mono">FAZAMOUS</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm font-light"
            >
              Building the future of Enterprise Intelligence. Autonomous systems, decision platforms, and AI agents for the world&apos;s most ambitious organizations.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="flex flex-col gap-3 mb-8"
            >
              <div className="flex items-center gap-3 text-white/60 text-[13px] font-mono">
                <Phone size={14} className="text-[#00e5ff]" />
                <a href="tel:+919103239586" className="hover:text-white transition-colors">+91 9103239586</a>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-[13px] font-mono">
                <Mail size={14} className="text-[#00e5ff]" />
                <a href="mailto:founder@fazamous.com" className="hover:text-white transition-colors">founder@fazamous.com</a>
              </div>
            </motion.div>

            {/* Live System Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>SYSTEM STATUS: 100% OPERATIONAL</span>
            </motion.div>

            {/* Newsletter Input Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[10px] text-[#00e5ff] uppercase tracking-[0.2em] font-mono font-medium mb-3 flex items-center gap-2">
                <Activity size={12} />
                Intelligence Briefing
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00e5ff]/50 focus:bg-white/[0.05] transition-all font-mono"
                  />
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit" 
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#8B5CF6] text-black font-mono font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  {subscribed ? "Subscribed!" : "Subscribe"}
                  <Send size={12} />
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industries",
                links: industryData.slice(0, 5).map(ind => ({
                  name: ind.name,
                  href: `/services/${ind.slug}`,
                  tag: ind.isNew ? "NEW" : undefined
                })),
              },
              {
                title: "\u00A0",
                links: industryData.slice(5, 10).map(ind => ({
                  name: ind.name,
                  href: `/services/${ind.slug}`,
                  tag: ind.isNew ? "NEW" : undefined
                })),
              },
              {
                title: "Company",
                links: [
                  { name: "About", href: "/about" },
                  { name: "Industries", href: "/services" },
                  { name: "Contact", href: "/contact" },
                  { name: "Careers", tag: "HIRING", href: "/about" },
                ],
              },
            ].map((group, gIdx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + gIdx * 0.1 }}
              >
                <h4 className="text-[#00e5ff] text-[11px] font-mono uppercase tracking-[0.2em] mb-5 font-semibold flex items-center gap-1.5 h-4">
                  {group.title !== "\u00A0" && <span className="w-1 h-1 rounded-full bg-[#00e5ff]" />}
                  {group.title}
                </h4>
                
                <ul className="space-y-3">
                  {group.links.map((link: { name: string; tag?: string; href?: string }) => (
                    <li key={link.name}>
                      <Link
                        href={link.href || "#"}
                        className="group flex items-center justify-between text-white/50 text-sm hover:text-white transition-all duration-300 font-light"
                      >
                        <motion.span 
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-1.5"
                        >
                          {link.name}
                        </motion.span>

                        {link.tag && (
                          <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30">
                            {link.tag}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono"
        >
          <div className="text-white/40 flex items-center gap-2">
            <span>© {new Date().getFullYear()} FAZAMOUS Technologies Inc.</span>
            <span className="text-white/20">•</span>
            <span className="text-white/30">San Francisco & Zurich</span>
          </div>

          {/* Social Icons & Legal Links */}
          <div className="flex flex-wrap items-center gap-6 text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>

            <div className="flex items-center gap-2 pl-4 border-l border-white/10">
              {[
                { name: "X", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }
              ].map((s) => (
                <motion.a 
                  key={s.name} 
                  href="#" 
                  whileHover={{ scale: 1.2, color: "#00e5ff" }}
                  className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/50 transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
