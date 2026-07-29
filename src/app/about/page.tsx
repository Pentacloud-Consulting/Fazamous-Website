"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

import { colors, fonts, heroEnter, stagger, hoverGlow, ease } from "@/styles/tokens";
import { ArrowRight } from "lucide-react";

// TODO: confirm real figure before shipping
const companyFacts = [
  { label: "Founded", value: "2019", note: "// TODO: confirm real founding year" },
  { label: "Team Size", value: "120+", note: "// TODO: confirm real team size" },
  { label: "HQ", value: "San Francisco", note: "// TODO: confirm real HQ location" },
  { label: "Engineering Office", value: "Zurich", note: "// TODO: confirm real office" },
  { label: "Industries Served", value: "10" },
  { label: "Active Products", value: "11" },
  { label: "Enterprise Clients", value: "50+", note: "// TODO: confirm real client count" },
];

const values = [
  {
    title: "Multi-Industry Architecture",
    desc: "We don't build one product and force-fit it across domains. Every module — from TriageAI in telecom to MedVision in healthcare — is engineered with domain-specific data models, compliance requirements, and operational workflows baked in from day one.",
    accent: colors.signalIndigo,
  },
  {
    title: "Autonomous by Default",
    desc: "Our platforms don't just surface insights for humans to act on — they execute. From Aegis neutralising fraud in sub-millisecond response windows to CodeMorph autonomously rewriting legacy codebases, autonomy is the baseline, not a roadmap item.",
    accent: colors.signalCyan,
  },
  {
    title: "Enterprise-Scale Reliability",
    desc: "Every platform operates at the throughput and uptime demands of Fortune 500 infrastructure. DataPulse processes 50GB/sec of pipeline telemetry. SignalIQ monitors 2M+ network edge nodes. These aren't demo numbers — they're production guarantees.",
    accent: "#10B981",
  },
  {
    title: "Measurable Outcomes, Not Promises",
    desc: "We tie every engagement to quantifiable business metrics: MTTR reduction, fraud dollars stopped, cost-per-conversion lift. If a deployment doesn't produce measurable ROI, we don't ship it.",
    accent: "#F59E0B",
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const factsRef = useRef(null);
  const factsInView = useInView(factsRef, { once: true, margin: "-80px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });



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
                About Fazamous
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6" style={{ fontFamily: fonts.display }}>
              We build autonomous<br />
              <span style={{ color: colors.signalIndigo }}>enterprise intelligence.</span>
            </h1>

            <p className="text-white/50 max-w-2xl text-[16px] leading-relaxed" style={{ fontFamily: fonts.body }}>
              Fazamous exists to close the gap between what enterprise data knows
              and what enterprise teams can act on — by deploying AI systems that
              reason, decide, and execute at machine speed.
            </p>
          </motion.div>
        </section>

        {/* ─── Company Snapshot ─── */}
        <section ref={factsRef} className="px-6 md:px-12 pb-24 max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={factsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: ease.smooth }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2" style={{ fontFamily: fonts.display }}>
              Company Snapshot
            </h2>
            <p className="text-white/30 text-[12px]" style={{ fontFamily: fonts.mono }}>
              ⚠️ Items marked pending require confirmation before shipping.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companyFacts.map((fact, idx) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={factsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: ease.smooth }}
                className="rounded-xl border border-white/[0.06] p-5 relative"
                style={{ backgroundColor: colors.panel }}
              >
                {/* TODO flag */}
                {fact.note && (
                  <span
                    className="absolute top-2 right-2 text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded"
                    style={{
                      fontFamily: fonts.mono,
                      color: colors.signalAmber,
                      backgroundColor: `${colors.signalAmber}15`,
                      border: `1px solid ${colors.signalAmber}40`,
                    }}
                  >
                    TODO
                  </span>
                )}

                {/* {fact.note} */}
                <div
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: fonts.display }}
                >
                  {fact.value}
                </div>
                <div
                  className="text-[10px] uppercase tracking-[0.15em] text-white/30"
                  style={{ fontFamily: fonts.mono }}
                >
                  {fact.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── Values / Principles ─── */}
        <section
          ref={valuesRef}
          className="px-6 md:px-12 py-24 border-t border-white/[0.06]"
          style={{ backgroundColor: colors.panelRaised }}
        >
          <div className="max-w-[1100px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: ease.smooth }}
              className="mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: fonts.display }}>
                What We Stand On
              </h2>
              <p className="text-white/40 text-[15px] max-w-lg" style={{ fontFamily: fonts.body }}>
                Not platitudes — demonstrable engineering principles visible in
                every product we ship.
              </p>
            </motion.div>

            <motion.div
              {...stagger.parent}
              animate={valuesInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {values.map((val) => (
                <motion.div
                  key={val.title}
                  variants={stagger.child.variants}
                  {...hoverGlow}
                  className="rounded-[20px] border border-white/[0.08] p-8 transition-all duration-300"
                  style={{ backgroundColor: colors.panel }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: val.accent }} />
                    <h3 className="text-lg font-semibold text-white" style={{ fontFamily: fonts.display }}>
                      {val.title}
                    </h3>
                  </div>
                  <p className="text-white/45 text-[14px] leading-relaxed" style={{ fontFamily: fonts.body }}>
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="px-6 md:px-12 py-24 text-center" style={{ backgroundColor: colors.ink }}>
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: fonts.display }}>
              Let&apos;s build something real
            </h2>
            <p className="text-white/40 text-[15px] mb-8" style={{ fontFamily: fonts.body }}>
              We work with teams who have real problems, real data, and real urgency.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
              style={{ fontFamily: fonts.display, backgroundColor: colors.signalIndigo, color: colors.white }}
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>


    </main>
  );
}
