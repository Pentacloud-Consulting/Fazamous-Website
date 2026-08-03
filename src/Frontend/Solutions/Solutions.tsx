"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Contact } from "@/components/sections/Contact";

import { colors, fonts, heroEnter, stagger, hoverGlow, ease } from "@/styles/tokens";
import { industries, products } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Solutions() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, margin: "-80px" });

  return (
    <main className="relative" style={{ backgroundColor: colors.ink }}>
      <Navbar />

      <div>
        {/* ─── Hero ─── */}
        <section ref={heroRef} className="pt-36 pb-20 px-6 md:px-12 max-w-[1100px] mx-auto">
          <motion.div {...heroEnter}>
            <div className="mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: colors.signalCyan }} />
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold" style={{ fontFamily: fonts.mono, color: colors.signalCyan }}>
                Industry Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6" style={{ fontFamily: fonts.display }}>
              Intelligence Across<br />
              <span style={{ color: colors.signalIndigo }}>Every Sector.</span>
            </h1>

            <p className="text-white/50 max-w-xl text-[16px] leading-relaxed" style={{ fontFamily: fonts.body }}>
              Ten industries. Eleven purpose-built platforms. One architecture
              engineered to solve high-stakes challenges wherever they emerge.
            </p>
          </motion.div>
        </section>

        {/* ─── Industry Grid ─── */}
        <section ref={gridRef} className="px-6 md:px-12 pb-24 max-w-[1100px] mx-auto">
          <motion.div
            {...stagger.parent}
            animate={gridInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {industries.map((ind, idx) => (
              <motion.div
                key={ind.name}
                ref={(el) => { if(el) {} }}
                variants={stagger.child.variants}
                {...hoverGlow}
                className="rounded-[20px] border border-white/[0.08] p-7 transition-all duration-300 group relative overflow-hidden"
                style={{ backgroundColor: colors.panel }}
              >
                {/* New badge for Supply Chain */}
                {ind.isNew && (
                  <span
                    className="absolute top-4 right-4 text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded"
                    style={{
                      fontFamily: fonts.mono,
                      color: colors.signalAmber,
                      backgroundColor: `${colors.signalAmber}15`,
                      border: `1px solid ${colors.signalAmber}40`,
                    }}
                  >
                    New
                  </span>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: ind.color }}
                  />
                  <h3
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: fonts.display }}
                  >
                    {ind.name}
                  </h3>
                </div>

                <p
                  className="text-white/45 text-[13px] leading-relaxed"
                  style={{ fontFamily: fonts.body }}
                >
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── Product ↔ Industry Mapping ─── */}
        <section
          ref={mapRef}
          className="px-6 md:px-12 py-24 border-t border-white/[0.06]"
          style={{ backgroundColor: colors.panelRaised }}
        >
          <div className="max-w-[1100px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={mapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: ease.smooth }}
              className="mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: fonts.display }}>
                Product ↔ Industry Map
              </h2>
              <p className="text-white/40 text-[15px] max-w-lg" style={{ fontFamily: fonts.body }}>
                Each product is engineered for specific industry challenges. Here is
                how our platform suite maps across sectors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-3">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mapInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.04, ease: ease.smooth }}
                  className="rounded-xl border border-white/[0.06] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-white/[0.15] transition-all duration-300"
                  style={{ backgroundColor: colors.panel }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[11px] font-semibold text-white/20"
                      style={{ fontFamily: fonts.mono }}
                    >
                      {product.id}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-semibold text-white" style={{ fontFamily: fonts.display }}>
                          {product.title}
                        </span>
                        {product.isComingSoon && (
                          <span
                            className="text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded"
                            style={{
                              fontFamily: fonts.mono,
                              color: colors.signalAmber,
                              backgroundColor: `${colors.signalAmber}15`,
                              border: `1px solid ${colors.signalAmber}40`,
                            }}
                          >
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-white/30" style={{ fontFamily: fonts.mono }}>
                        {product.desc}
                      </span>
                    </div>
                  </div>

                  <span
                    className="text-[11px] uppercase tracking-wider text-white/40 shrink-0"
                    style={{ fontFamily: fonts.mono }}
                  >
                    {product.subtitle}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="px-6 md:px-12 py-24 text-center" style={{ backgroundColor: colors.ink }}>
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: fonts.display }}>
              See your industry in action
            </h2>
            <p className="text-white/40 text-[15px] mb-8" style={{ fontFamily: fonts.body }}>
              Explore how Fazamous platforms are deployed in your sector.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
              style={{ fontFamily: fonts.display, backgroundColor: colors.signalIndigo, color: colors.white }}
            >
              Talk to Sales
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Contact />
        <Footer />
      </div>

    </main>
  );
}
