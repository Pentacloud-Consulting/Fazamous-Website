// ─── Design Tokens ───────────────────────────────────────────────
// Single source of truth for all colors, fonts, and motion config.
// Import this in every page and shared component — never hardcode.

export const colors = {
  ink: "#0A0B0F",
  panel: "#12141C",
  panelRaised: "#181B26",
  signalIndigo: "#6366F1",
  signalCyan: "#22D3EE",
  signalAmber: "#F59E0B",
  white: "#FFFFFF",
  white90: "rgba(255,255,255,0.9)",
  white60: "rgba(255,255,255,0.6)",
  white40: "rgba(255,255,255,0.4)",
  white20: "rgba(255,255,255,0.2)",
  white10: "rgba(255,255,255,0.1)",
  white06: "rgba(255,255,255,0.06)",
  white03: "rgba(255,255,255,0.03)",
} as const;

export const fonts = {
  display: "var(--font-display)",   // Space Grotesk
  body: "var(--font-body)",         // IBM Plex Sans
  mono: "var(--font-mono)",         // IBM Plex Mono
} as const;

// ─── Framer Motion presets ───────────────────────────────────────

export const ease = {
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
  out: [0, 0, 0.2, 1] as [number, number, number, number],
};

/** Standard card hover — lift 2-4px, 150ms ease-out */
export const hoverLift = {
  whileHover: { y: -3, transition: { duration: 0.15, ease: ease.out } },
};

/** Border glow on hover — signal-cyan */
export const hoverGlow = {
  whileHover: {
    boxShadow: `0 0 0 1px ${colors.signalCyan}40, 0 8px 32px rgba(0,0,0,0.5)`,
    borderColor: `${colors.signalCyan}60`,
    y: -3,
    transition: { duration: 0.15, ease: ease.out },
  },
};

/** whileInView stagger config for card grids — 60-80ms per card */
export const stagger = {
  parent: {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.07 } },
    },
  },
  child: {
    variants: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: ease.smooth },
      },
    },
  },
};

/** Reduced-motion–aware helper — returns true when user prefers reduced motion */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Rail slide-in animation (plays first on page load) */
export const railEnter = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.7, ease: ease.smooth },
};

/** Hero content animation (plays AFTER rail) */
export const heroEnter = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.4, ease: ease.smooth },
};
