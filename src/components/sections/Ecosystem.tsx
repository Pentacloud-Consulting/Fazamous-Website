import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ecosystemNodes = [
  { id: "agents", label: "AI Agents", desc: "Autonomous multi-agent orchestration that reasons, plans, and executes across enterprise domains.", color: "#00e5ff" },
  { id: "decision", label: "Decision Intelligence", desc: "Real-time decision engines synthesizing complex data into strategic action.", color: "#00e5ff" },
  { id: "enterprise", label: "Enterprise Intelligence", desc: "Organization-wide knowledge platforms that learn and evolve continuously.", color: "#00e5ff" },
  { id: "autonomous", label: "Autonomous Systems", desc: "Self-governing operational systems exceeding human-level consistency.", color: "#00e5ff" },
  { id: "data", label: "Data Platform", desc: "Unified data fabric connecting every source into a living knowledge graph.", color: "#00e5ff" },
  { id: "future", label: "Future Technologies", desc: "Research-driven innovations shaping the next decade of enterprise.", color: "#00e5ff" },
];

function CyberOrb() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center mx-auto" style={{ perspective: "1000px" }}>
      
      {/* Deep ambient background bloom */}
      <div className="absolute inset-0 rounded-full bg-[#00e5ff] opacity-[0.02] blur-[40px]" />

      {/* Seamless Conic Aura - Smooth, colorful, spinning */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[15%] rounded-full opacity-70 mix-blend-screen"
        style={{
          background: 'conic-gradient(from 0deg, #00e5ff, #8b5cf6, #ff4d4d, #ff8c00, #00e5ff)',
          filter: 'blur(30px)'
        }}
      />

      {/* Gyroscope Ring 1 */}
      <motion.div 
        animate={{ rotateZ: 360, rotateX: 75, rotateY: 25 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[5%] rounded-full border border-[#00e5ff]/30 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#00e5ff] rounded-full blur-[1px] shadow-[0_0_10px_#00e5ff]" style={{ transform: "translate(-50%, -50%) translateZ(2px)" }} />
        <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-[#00e5ff]/50 rounded-full blur-[1px]" style={{ transform: "translate(-50%, 50%) translateZ(-2px)" }} />
      </motion.div>

      {/* Gyroscope Ring 2 */}
      <motion.div 
        animate={{ rotateZ: -360, rotateX: 45, rotateY: 65 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[12%] rounded-full border border-[#ff4d4d]/30 shadow-[0_0_20px_rgba(255,77,77,0.15)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute top-1/2 left-0 w-2.5 h-2.5 bg-[#ff4d4d] rounded-full blur-[1px] shadow-[0_0_10px_#ff4d4d]" style={{ transform: "translate(-50%, -50%) translateZ(2px)" }} />
      </motion.div>

      {/* Gyroscope Ring 3 */}
      <motion.div 
        animate={{ rotateZ: 360, rotateX: 60, rotateY: -30 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[18%] rounded-full border border-[#8b5cf6]/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute top-1/2 right-0 w-2 h-2 bg-[#8b5cf6] rounded-full blur-[1px] shadow-[0_0_10px_#8b5cf6]" style={{ transform: "translate(50%, -50%) translateZ(2px)" }} />
      </motion.div>

      {/* Inner dark void to mask the aura's center */}
      <div className="absolute inset-[25%] rounded-full bg-[#050505] shadow-[inset_0_0_50px_rgba(0,0,0,1)]" />

      {/* Central Pulsing Core Shield */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 30px rgba(0,229,255,0.1)", "0 0 60px rgba(0,229,255,0.3)", "0 0 30px rgba(0,229,255,0.1)"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[130px] h-[130px] md:w-[160px] md:h-[160px] rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/20 backdrop-blur-xl flex items-center justify-center"
      >
        {/* Core Engine (Dashed rotating ring) */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[10%] rounded-full border-2 border-dashed border-white/20"
        />
        
        {/* The Hub */}
        <div className="w-[85px] h-[85px] md:w-[110px] md:h-[110px] rounded-full bg-gradient-to-tr from-[#020202] to-[#1a1a1a] flex items-center justify-center shadow-[inset_0_-4px_20px_rgba(255,255,255,0.1),inset_0_2px_10px_rgba(0,0,0,0.8)] border border-white/5 relative z-10">
           {/* Pulsing Logo */}
           <motion.span 
             animate={{ opacity: [0.6, 1, 0.6], textShadow: ["0 0 10px rgba(255,255,255,0.2)", "0 0 25px rgba(255,255,255,0.8)", "0 0 10px rgba(255,255,255,0.2)"] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="text-white font-black text-4xl md:text-5xl tracking-tighter"
           >
             F
           </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

export function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leftNodes = ecosystemNodes.slice(0, 3);
  const rightNodes = ecosystemNodes.slice(3, 6);

  return (
    <section id="solutions" className="pt-0 pb-24 relative overflow-hidden bg-[#020202] z-10">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="text-center mb-24 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-5 flex justify-center"
          >
            <span className="text-[#00e5ff] uppercase tracking-[0.2em] text-[11px] font-mono font-medium">
              Ecosystem <span className="text-white/40 ml-2">Architecture</span>
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-6 pb-2 text-white"
          >
            Fazamous's Methodology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto text-[15px] leading-relaxed font-mono"
          >
            We've developed a unified intelligence stack to take you all the way to autonomous operational superiority.
          </motion.p>
        </div>

        {/* Main Layout */}
        <div className="relative w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center max-w-[1300px] mx-auto">
            
            {/* Left Column */}
            <div className="flex flex-col gap-12 lg:gap-24 relative z-20">
              {leftNodes.map((node, idx) => (
                <motion.div 
                  key={node.id} 
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  whileHover={{ scale: 1.05, x: -10 }}
                  transition={{ duration: 0.7, delay: isInView ? 0.4 + (idx * 0.15) : 0, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start lg:justify-end gap-5 group text-left lg:text-right cursor-default"
                >
                  <div className="order-2 lg:order-1 flex-1 max-w-[280px] lg:ml-auto">
                    <h3 className="text-xl font-bold text-white/90 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00e5ff] transition-all duration-300">{node.label}</h3>
                    <p className="text-[14px] text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">{node.desc}</p>
                  </div>
                  <div className="order-1 lg:order-2 text-3xl font-mono font-bold text-[#00e5ff] pt-0.5 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all duration-300">
                    0{idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Orb */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center my-10 lg:my-0 relative z-10 pointer-events-none"
            >
              <CyberOrb />
            </motion.div>

            {/* Right Column */}
            <div className="flex flex-col gap-12 lg:gap-24 relative z-20">
              {rightNodes.map((node, idx) => (
                <motion.div 
                  key={node.id} 
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.7, delay: isInView ? 0.4 + (idx * 0.15) : 0, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-5 group text-left cursor-default"
                >
                  <div className="text-3xl font-mono font-bold text-[#00e5ff] pt-0.5 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all duration-300">
                    0{idx + 4}
                  </div>
                  <div className="flex-1 max-w-[280px]">
                    <h3 className="text-xl font-bold text-white/90 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-white group-hover:to-[#00e5ff] transition-all duration-300">{node.label}</h3>
                    <p className="text-[14px] text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">{node.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
