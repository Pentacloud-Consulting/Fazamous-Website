"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

import { colors, fonts, heroEnter, ease } from "@/styles/tokens";
import { Mail, MapPin, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const formFields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
  { name: "email", label: "Work Email", type: "email", placeholder: "jane@company.com" },
  { name: "company", label: "Company", type: "text", placeholder: "Acme Corp" },
  { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your use case…" },
];

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({});
  };



  return (
    <main className="relative" style={{ backgroundColor: colors.ink }}>
      <Navbar />

      <div>
        {/* ─── Hero ─── */}
        <section ref={heroRef} className="pt-36 pb-16 px-6 md:px-12 max-w-[1100px] mx-auto">
          <motion.div {...heroEnter}>
            <div className="mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: colors.signalCyan }} />
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold" style={{ fontFamily: fonts.mono, color: colors.signalCyan }}>
                Contact
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6" style={{ fontFamily: fonts.display }}>
              Start a<br />
              <span style={{ color: colors.signalIndigo }}>Conversation.</span>
            </h1>

            <p className="text-white/50 max-w-xl text-[16px] leading-relaxed" style={{ fontFamily: fonts.body }}>
              Whether you&apos;re exploring a pilot or ready to deploy at scale,
              we&apos;ll match you with the right team.
            </p>
          </motion.div>
        </section>

        {/* ─── Form + Sidebar ─── */}
        <section ref={formRef} className="px-6 md:px-12 pb-24 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: ease.smooth }}
                    className="rounded-[20px] border border-white/[0.08] p-12 text-center flex flex-col items-center gap-4"
                    style={{ backgroundColor: colors.panel }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    >
                      <CheckCircle2 size={48} style={{ color: colors.signalCyan }} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: fonts.display }}>
                      Message received
                    </h3>
                    <p className="text-white/40 text-[14px]" style={{ fontFamily: fonts.body }}>
                      Our team will respond within 24 hours. Check your inbox.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="rounded-[20px] border border-white/[0.08] p-8 md:p-10"
                    style={{ backgroundColor: colors.panel }}
                  >
                    <div className="flex flex-col gap-6">
                      {formFields.map((field, idx) => (
                        <motion.div
                          key={field.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={formInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.1 + idx * 0.08, ease: ease.smooth }}
                        >
                          <label
                            className="block text-[10px] uppercase tracking-[0.2em] mb-2"
                            style={{ fontFamily: fonts.mono, color: focusedField === field.name ? colors.signalCyan : colors.white40 }}
                          >
                            {field.label}
                          </label>

                          {field.type === "textarea" ? (
                            <textarea
                              name={field.name}
                              placeholder={field.placeholder}
                              rows={4}
                              value={formState[field.name] || ""}
                              onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                              onFocus={() => setFocusedField(field.name)}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 outline-none transition-all duration-150 resize-none"
                              style={{
                                fontFamily: fonts.body,
                                backgroundColor: colors.panelRaised,
                                border: `1px solid ${focusedField === field.name ? `${colors.signalCyan}60` : "rgba(255,255,255,0.08)"}`,
                                boxShadow: focusedField === field.name ? `0 0 0 3px ${colors.signalCyan}15` : "none",
                              }}
                            />
                          ) : (
                            <input
                              type={field.type}
                              name={field.name}
                              placeholder={field.placeholder}
                              value={formState[field.name] || ""}
                              onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                              onFocus={() => setFocusedField(field.name)}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 outline-none transition-all duration-150"
                              style={{
                                fontFamily: fonts.body,
                                backgroundColor: colors.panelRaised,
                                border: `1px solid ${focusedField === field.name ? `${colors.signalCyan}60` : "rgba(255,255,255,0.08)"}`,
                                boxShadow: focusedField === field.name ? `0 0 0 3px ${colors.signalCyan}15` : "none",
                              }}
                            />
                          )}
                        </motion.div>
                      ))}

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-2 w-full py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] cursor-pointer"
                        style={{
                          fontFamily: fonts.display,
                          backgroundColor: colors.signalIndigo,
                          color: colors.white,
                        }}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar — Alternate Paths + Locations + Certifications */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Alternate Paths */}
              <div
                className="rounded-[20px] border border-white/[0.08] p-7"
                style={{ backgroundColor: colors.panel }}
              >
                <h3 className="text-sm font-semibold text-white mb-5" style={{ fontFamily: fonts.display }}>
                  Alternate Channels
                </h3>

                <a
                  href="mailto:contact@fazamous.com"
                  className="flex items-center gap-3 text-[13px] text-white/60 hover:text-white transition-colors mb-4 group"
                  style={{ fontFamily: fonts.body }}
                >
                  <Mail size={14} style={{ color: colors.signalIndigo }} />
                  <span>Request a Demo — contact@fazamous.com</span>
                  <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="mailto:sales@fazamous.com"
                  className="flex items-center gap-3 text-[13px] text-white/60 hover:text-white transition-colors group"
                  style={{ fontFamily: fonts.body }}
                >
                  <Mail size={14} style={{ color: colors.signalCyan }} />
                  <span>Enterprise Sales — sales@fazamous.com</span>
                  <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Locations */}
              {/* // TODO: confirm these are real offices before shipping */}
              <div
                className="rounded-[20px] border border-white/[0.08] p-7"
                style={{ backgroundColor: colors.panel }}
              >
                <h3 className="text-sm font-semibold text-white mb-5" style={{ fontFamily: fonts.display }}>
                  Offices
                  <span
                    className="ml-2 text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded align-middle"
                    style={{ fontFamily: fonts.mono, color: colors.signalAmber, backgroundColor: `${colors.signalAmber}15`, border: `1px solid ${colors.signalAmber}40` }}
                  >
                    TODO
                  </span>
                </h3>

                <div className="flex flex-col gap-3">
                  {/* // TODO: confirm San Francisco is a real office */}
                  <div className="flex items-center gap-3 text-[13px] text-white/50" style={{ fontFamily: fonts.body }}>
                    <MapPin size={14} style={{ color: colors.signalIndigo }} />
                    <span>San Francisco, CA</span>
                  </div>
                  {/* // TODO: confirm Zurich is a real office */}
                  <div className="flex items-center gap-3 text-[13px] text-white/50" style={{ fontFamily: fonts.body }}>
                    <MapPin size={14} style={{ color: colors.signalCyan }} />
                    <span>Zurich, Switzerland</span>
                  </div>
                </div>
              </div>

              {/* Certification Badges */}
              {/* // TODO: confirm actually held before displaying publicly */}
              <div
                className="rounded-[20px] border border-white/[0.08] p-7"
                style={{ backgroundColor: colors.panel }}
              >
                <h3 className="text-sm font-semibold text-white mb-5" style={{ fontFamily: fonts.display }}>
                  Compliance
                  <span
                    className="ml-2 text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded align-middle"
                    style={{ fontFamily: fonts.mono, color: colors.signalAmber, backgroundColor: `${colors.signalAmber}15`, border: `1px solid ${colors.signalAmber}40` }}
                  >
                    TODO: CONFIRM
                  </span>
                </h3>

                <div className="flex flex-wrap gap-3">
                  {/* // TODO: confirm SOC 2 certification is actually held */}
                  {["SOC 2 Type II", "ISO 27001", "GDPR"].map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.06] text-[11px] text-white/50"
                      style={{ fontFamily: fonts.mono, backgroundColor: colors.panelRaised }}
                    >
                      <ShieldCheck size={12} style={{ color: colors.signalCyan }} />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>


    </main>
  );
}
