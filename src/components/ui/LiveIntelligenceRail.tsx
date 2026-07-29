"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { colors, fonts, railEnter } from "@/styles/tokens";

export interface RailItem {
  label: string;
  value: string;
  status?: "live" | "ready" | "pending";
}

interface LiveIntelligenceRailProps {
  items: RailItem[];
  /** Optional title shown at top of rail */
  title?: string;
}

const statusColors: Record<string, string> = {
  live: colors.signalCyan,
  ready: "#10B981",
  pending: colors.signalAmber,
};

export function LiveIntelligenceRail({
  items,
  title = "LIVE INTELLIGENCE",
}: LiveIntelligenceRailProps) {
  return (
    <>
      {/* Desktop: vertical rail on right side */}
      <motion.aside
        {...railEnter}
        className="hidden lg:flex flex-col rail-panel fixed right-0 top-0 bottom-0 w-[280px] z-50 pt-24 pb-8 px-5 overflow-y-auto"
        style={{ fontFamily: fonts.mono }}
      >
        {/* Rail header */}
        <div className="mb-6 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping"
              style={{ backgroundColor: colors.signalCyan }}
            />
            <span
              className="text-[9px] uppercase tracking-[0.25em] font-semibold"
              style={{ color: colors.signalCyan }}
            >
              {title}
            </span>
          </div>
          <div className="text-[10px] text-white/20 uppercase tracking-widest">
            Real-time telemetry feed
          </div>
        </div>

        {/* Rail items */}
        <div className="flex flex-col gap-3 flex-1">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                key={`${item.label}-${item.value}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-lg border border-white/[0.06] p-3"
                style={{ backgroundColor: colors.panelRaised }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                    {item.label}
                  </span>
                  {item.status && (
                    <span
                      className="text-[8px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded"
                      style={{
                        color: statusColors[item.status],
                        backgroundColor: `${statusColors[item.status]}15`,
                        border: `1px solid ${statusColors[item.status]}30`,
                      }}
                    >
                      {item.status}
                    </span>
                  )}
                </div>
                <div className="text-[12px] text-white/70 leading-relaxed break-words">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Rail footer */}
        <div className="mt-auto pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 text-[9px] text-white/20">
            <span
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: colors.signalCyan }}
            />
            <span className="uppercase tracking-widest">
              FAZAMOUS INTELLIGENCE CORE
            </span>
          </div>
        </div>
      </motion.aside>

      {/* Mobile: horizontal ticker bar */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 rail-ticker flex items-center gap-6 px-4 py-2.5 overflow-x-auto"
        style={{ fontFamily: fonts.mono }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0 animate-ping"
          style={{ backgroundColor: colors.signalCyan }}
        />
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.span
              key={`${item.label}-${item.value}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="shrink-0 flex items-center gap-2"
            >
              <span className="text-white/30 uppercase tracking-wider">
                {item.label}:
              </span>
              <span className="text-white/60">{item.value}</span>
              {item.status && (
                <span
                  className="text-[8px] uppercase tracking-wider font-semibold px-1 py-0.5 rounded"
                  style={{
                    color: statusColors[item.status],
                    border: `1px solid ${statusColors[item.status]}30`,
                  }}
                >
                  {item.status}
                </span>
              )}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
