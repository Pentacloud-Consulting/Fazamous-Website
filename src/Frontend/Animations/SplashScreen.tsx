"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

function SplashCanvas({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const frameRef = useRef(0);
  const phaseRef = useRef<"expand" | "converge" | "logo">("expand");
  const startTimeRef = useRef(Date.now());

  const initNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    const cx = width / 2;
    const cy = height / 2;

    // Start with one node at center
    nodes.push({
      x: cx, y: cy,
      vx: 0, vy: 0,
      radius: 3,
      opacity: 1,
      pulse: 0,
      pulseSpeed: 0.02 + Math.random() * 0.02,
    });

    // Add more nodes expanding outward (fewer on mobile for performance)
    const isMobile = width < 768;
    const nodeCount = isMobile ? 30 : 60;
    const spreadFactor = isMobile ? 0.25 : 0.35;
    for (let i = 0; i < nodeCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 20 + Math.random() * Math.min(width, height) * spreadFactor;
      nodes.push({
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: isMobile ? 1 + Math.random() * 1.5 : 1.5 + Math.random() * 2,
        opacity: 0,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02,
      });
    }
    return nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    nodesRef.current = initNodes(window.innerWidth, window.innerHeight);

    let animId: number;
    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const elapsed = (Date.now() - startTimeRef.current) / 1000;

      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;

      // Phase management
      if (elapsed < 1.2) {
        phaseRef.current = "expand";
      } else if (elapsed < 2.0) {
        phaseRef.current = "converge";
      } else {
        phaseRef.current = "logo";
      }

      // Fade nodes in during expand phase
      if (phaseRef.current === "expand") {
        const progress = Math.min(elapsed / 1.2, 1);
        const visibleCount = Math.floor(progress * nodes.length);
        for (let i = 0; i < nodes.length; i++) {
          if (i < visibleCount) {
            nodes[i].opacity = Math.min(nodes[i].opacity + 0.05, 1);
          }
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = phaseRef.current === "converge" ? 200 : 150;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15 * Math.min(nodes[i].opacity, nodes[j].opacity);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (const node of nodes) {
        node.pulse += node.pulseSpeed;
        const pulseScale = 1 + Math.sin(node.pulse) * 0.3;

        // Move nodes
        if (phaseRef.current === "converge") {
          const cx = w / 2;
          const cy = h / 2;
          node.vx += (cx - node.x) * 0.001;
          node.vy += (cy - node.y) * 0.001;
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.99;
        node.vy *= 0.99;

        // Draw node
        if (node.opacity > 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * pulseScale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(78, 168, 255, ${node.opacity * 0.8})`;
          ctx.fill();

          // Glow
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * pulseScale * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(78, 168, 255, ${node.opacity * 0.05})`;
          ctx.fill();
        }
      }

      if (elapsed >= 2.4) {
        onComplete();
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initNodes, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

export function SplashScreen() {
  const [phase, setPhase] = useState<"canvas" | "logo" | "done">("canvas");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleCanvasComplete = useCallback(() => {
    if (phase === "canvas") {
      setPhase("logo");
      setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
      }, 1500);
    }
  }, [phase]);

  const handleSkip = () => {
    setPhase("done");
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center"
        >
          {/* Canvas network animation */}
          <SplashCanvas onComplete={handleCanvasComplete} />

          {/* Logo reveal */}
          <AnimatePresence>
            {phase === "logo" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="flex items-center gap-3 sm:gap-5 mb-6 sm:mb-8">
                  <motion.div 
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#4EA8FF] to-[#8b5cf6] flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.3)] sm:shadow-[0_0_60px_rgba(139,92,246,0.3)]"
                  >
                    <span className="text-black font-bold text-base sm:text-2xl">F</span>
                  </motion.div>
                  <span className="text-white text-2xl sm:text-4xl font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                    FAZAMOUS
                  </span>
                </div>
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                  className="text-white/30 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-mono px-4 text-center"
                >
                  Building Enterprise Intelligence
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 text-[10px] sm:text-xs text-white/30 hover:text-white/70 transition-colors uppercase tracking-widest font-mono z-20"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
