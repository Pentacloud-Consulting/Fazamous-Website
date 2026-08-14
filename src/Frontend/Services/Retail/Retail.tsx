"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, Target, Sparkles, MapPin, 
  BarChart, CreditCard, Box, Users, Search, 
  TrendingUp, ArrowUpRight
} from 'lucide-react';
import { Navbar } from '@/components/Top-bottom/Navbar';
import { Footer } from '@/components/Top-bottom/Footer';
import CTA from '@/Frontend/Home/Contact';

// Section 1: Hero (Abstract Commerce Grid)
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 bg-[#050103]">
      <div className="absolute inset-0 z-0">
        {/* Pink ambient glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ec4899]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#8b5cf6]/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* Floating UI Elements Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: ["-20%", "120%"],
              rotate: [0, 90, 180]
            }}
            transition={{ 
              duration: Math.random() * 15 + 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute p-4 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md"
            style={{ left: `${12 * i + 5}%`, width: `${Math.random() * 80 + 80}px`, height: `${Math.random() * 80 + 80}px` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-4 sm:gap-12 mt-4 sm:mt-12 w-full">
        
        <div className="lg:w-1/2 text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/30 text-[9px] sm:text-xs font-bold text-[#ec4899] uppercase tracking-widest mb-4 sm:mb-8 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
          >
            <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce" />
            Retail Intelligence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[75px] font-bold leading-[1.1] mb-4 sm:mb-8 tracking-tight text-white"
          >
            Hyper-Personalized.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] via-[#d946ef] to-[#8b5cf6]">Zero Friction.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-sm sm:text-lg md:text-xl max-w-xl leading-relaxed mb-6 sm:mb-10"
          >
            Transform fragmented retail data into strategic executive dashboards, 360-degree customer profiles, and real-time recommendation engines that skyrocket conversion rates.
          </motion.p>


        </div>

        {/* Right Side: Animated Diagram */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end perspective-1000">
          <motion.div 
            initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: [-5, 5, -5], rotateX: [5, -5, 5], scale: 1 }}
            transition={{ 
               opacity: { duration: 1 },
               scale: { duration: 1 },
               rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
               rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-full max-w-md aspect-square bg-gradient-to-br from-[#0a0205] to-[#120308] rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(236,72,153,0.15)] flex items-center justify-center overflow-hidden transform scale-[0.75] sm:scale-100 origin-center -mt-8 sm:mt-0"
          >
            {/* Background Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[150%] h-[150%] border-[1px] border-dashed border-[#ec4899]/20 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[100%] h-[100%] border-[1px] border-dotted border-[#8b5cf6]/30 rounded-full" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-[60%] h-[60%] border border-[#d946ef]/20 rounded-full bg-[#d946ef]/5" />
            </div>

            {/* Central Hologram Item */}
            <div className="relative z-10 flex flex-col items-center">
               <motion.div 
                 animate={{ y: [-10, 10, -10] }} 
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="w-32 h-32 bg-[#050103] border border-[#ec4899]/50 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.3)] relative overflow-hidden group"
               >
                 <ShoppingBag className="w-12 h-12 text-[#ec4899]" />
                 {/* Scanning Laser */}
                 <motion.div 
                   animate={{ top: ['-10%', '110%', '-10%'] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="absolute left-0 right-0 h-[2px] bg-[#ec4899] shadow-[0_0_10px_rgba(236,72,153,1)]" 
                 />
               </motion.div>
            </div>

            {/* Orbiting Data Nodes */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {[
                { icon: Users, color: "text-[#ec4899]", delay: 0, transform: "translateY(-140px)" },
                { icon: BarChart, color: "text-[#8b5cf6]", delay: -4, transform: "translateY(-140px)" },
                { icon: Target, color: "text-[#d946ef]", delay: -8, transform: "translateY(-140px)" }
              ].map((Node, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: Node.delay }}
                >
                  <div className={`w-12 h-12 bg-[#0a0205] border border-white/10 rounded-xl flex items-center justify-center shadow-lg ${Node.color}`} style={{ transform: Node.transform }}>
                    <Node.icon className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute top-12 right-6 px-3 py-1.5 rounded-lg bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 backdrop-blur-md flex items-center gap-2 z-20"
            >
              <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
              <span className="text-[#8b5cf6] text-xs font-bold font-mono">MATCH 99%</span>
            </motion.div>

            <motion.div 
              animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-16 left-6 px-3 py-1.5 rounded-lg bg-[#ec4899]/20 border border-[#ec4899]/40 backdrop-blur-md flex items-center gap-2 z-20"
            >
              <TrendingUp className="w-3 h-3 text-[#ec4899]" />
              <span className="text-[#ec4899] text-xs font-bold font-mono">+45% LTV</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Section 2: Retail Metrics Ticker
const MetricsTickerSection = () => {
  return (
    <section className="py-4 sm:py-10 bg-gradient-to-r from-[#050103] via-[#100308] to-[#050103] border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 sm:gap-16 px-4 sm:px-8 items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-2 sm:gap-3"><TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-[#ec4899]" /><span className="text-sm sm:text-2xl font-black text-white">3.4x CONVERSION LIFT</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><Target className="w-4 h-4 sm:w-6 sm:h-6 text-[#8b5cf6]" /><span className="text-sm sm:text-2xl font-black text-white">99% RECOMMENDATION ACCURACY</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><Box className="w-4 h-4 sm:w-6 sm:h-6 text-[#d946ef]" /><span className="text-sm sm:text-2xl font-black text-white">ZERO INVENTORY BLIND SPOTS</span></div>
              <div className="flex items-center gap-2 sm:gap-3"><CreditCard className="w-4 h-4 sm:w-6 sm:h-6 text-[#f43f5e]" /><span className="text-sm sm:text-2xl font-black text-white">&lt;5ms FRAUD DETECTION</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: AI Recommendation Engine (Animated Node Graph)
const RecommendationEngineSection = () => {
  return (
    <section className="py-12 sm:py-24 relative bg-[#030102] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">Collaborative <span className="text-[#ec4899]">Filtering</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto text-[13px] sm:text-sm md:text-base">Serve the perfect product to the right user in real-time through deep neural networks and behavioral analysis.</p>
        </div>

        <div className="relative w-full h-[220px] sm:h-[400px] bg-[#080205] rounded-xl sm:rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="relative w-[800px] h-[400px] flex-shrink-0 transform scale-[0.5] sm:scale-100 origin-center flex items-center justify-center">
          
          {/* Central User Profile */}
          <div className="absolute left-[12%] flex flex-col items-center z-10">
            <motion.div 
              animate={{ boxShadow: ["0 0 20px rgba(236,72,153,0.2)", "0 0 60px rgba(236,72,153,0.6)", "0 0 20px rgba(236,72,153,0.2)"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] p-1 flex items-center justify-center"
            >
              <div className="w-full h-full bg-[#050103] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-[#ec4899]" />
              </div>
            </motion.div>
            <div className="mt-4 text-center">
              <div className="text-white font-bold text-sm">User Profile</div>
              <div className="text-[10px] text-[#ec4899] font-mono mt-1">ID: 8492-AX</div>
            </div>
          </div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-[800px] h-[400px] pointer-events-none">
            {/* Line 1 */}
            <motion.path d="M 180 200 C 350 200, 400 80, 620 80" fill="none" stroke="rgba(236,72,153,0.2)" strokeWidth="2" />
            <motion.circle cx="0" cy="0" r="4" fill="#ec4899">
              <animateMotion path="M 180 200 C 350 200, 400 80, 620 80" dur="2s" repeatCount="indefinite" />
            </motion.circle>
            
            {/* Line 2 */}
            <motion.path d="M 180 200 C 350 200, 400 200, 620 200" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="2" />
            <motion.circle cx="0" cy="0" r="4" fill="#8b5cf6">
              <animateMotion path="M 180 200 C 350 200, 400 200, 620 200" dur="2.5s" repeatCount="indefinite" />
            </motion.circle>

            {/* Line 3 */}
            <motion.path d="M 180 200 C 350 200, 400 320, 620 320" fill="none" stroke="rgba(217,70,239,0.2)" strokeWidth="2" />
            <motion.circle cx="0" cy="0" r="4" fill="#d946ef">
              <animateMotion path="M 180 200 C 350 200, 400 320, 620 320" dur="3s" repeatCount="indefinite" />
            </motion.circle>
          </svg>

          {/* Suggested Products */}
          <div className="absolute right-[12%] flex flex-col gap-8 z-10">
            {[
              { title: "Trending Fashion", match: "98%", color: "text-[#ec4899]", border: "border-[#ec4899]/30" },
              { title: "Premium Electronics", match: "85%", color: "text-[#8b5cf6]", border: "border-[#8b5cf6]/30" },
              { title: "Lifestyle Accessories", match: "92%", color: "text-[#d946ef]", border: "border-[#d946ef]/30" }
            ].map((prod, i) => (
              <motion.div 
                key={i}
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
                className={`w-48 p-3 rounded-xl border ${prod.border} bg-[#0a0205] backdrop-blur-sm shadow-xl flex items-center justify-between`}
              >
                <div>
                  <div className="text-white text-xs font-bold mb-1">{prod.title}</div>
                  <div className={`text-[10px] font-mono ${prod.color}`}>Match: {prod.match}</div>
                </div>
                <div className={`w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center ${prod.color}`}>
                  <Sparkles className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 4: Use Cases Grid
const UseCasesSection = () => {
  const cases = [
    { title: "Customer Intelligence", desc: "Build unified 360-degree profiles of customer behavior to drive hyper-personalized marketing and engagement.", icon: Users, color: "text-[#ec4899]", hexColor: "#ec4899" },
    { title: "Recommendation Systems", desc: "Deploy advanced algorithms that serve the right product to the right user in real-time, boosting cart sizes.", icon: Target, color: "text-[#8b5cf6]", hexColor: "#8b5cf6" },
    { title: "Anomaly Detection", desc: "Monitor POS transactions to immediately flag fraudulent purchases or supply chain bottlenecks.", icon: Search, color: "text-[#d946ef]", hexColor: "#d946ef" },
    { title: "Business Analytics", desc: "Turn fragmented retail data into strategic executive dashboards that optimize pricing, promotions, and margins.", icon: BarChart, color: "text-[#f43f5e]", hexColor: "#f43f5e" },
  ];

  return (
    <section className="py-12 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="mb-8 sm:mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">Retail <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-400">Applications</span></h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6">
        {cases.map((card, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden p-[1px] transition-all duration-500 hover:-translate-y-1">
            
            {/* Spinning Border Container (Hidden by default, visible on hover) */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
              <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]"
                   style={{
                     background: `conic-gradient(from 0deg, transparent 70%, ${card.hexColor} 100%)`
                   }}
              />
            </div>

            {/* Inner Content Container */}
            <div className="relative z-10 h-full bg-[#070103] border border-white/5 p-4 sm:p-8 rounded-[15px] transition-all duration-500 cursor-pointer flex flex-col group-hover:bg-[#070103]/90 backdrop-blur-md">
                
                {/* Ambient glow behind icon */}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-8 h-8 sm:w-14 sm:h-14 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" style={{ backgroundColor: card.hexColor }} />
                
                <div className="flex items-start justify-between mb-3 sm:mb-6 relative z-10">
                  <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#0a0205] border border-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                    <card.icon className={`w-4 h-4 sm:w-7 sm:h-7 ${card.color}`} />
                  </div>
                  <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowUpRight className={`w-2 h-2 sm:w-4 sm:h-4 ${card.color}`} />
                  </div>
                </div>
                
                <h3 className="text-[11px] sm:text-2xl font-bold mb-1.5 sm:mb-3 leading-tight relative z-10">
                  <span className="absolute left-0 top-0 text-transparent bg-clip-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #ffffff, ${card.hexColor})` }}>{card.title}</span>
                  <span className="text-white group-hover:opacity-0 transition-opacity duration-300 relative">{card.title}</span>
                </h3>
                
                <p className="text-gray-400 text-[9px] sm:text-sm leading-tight sm:leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                  {card.desc}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Section 5: Customer 360 Dashboard Mockup
const DashboardMockupSection = () => {
  return (
    <section className="py-12 sm:py-24 relative bg-[#030102] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-6 sm:gap-16 relative z-10">
        
        {/* Animated Dashboard UI */}
        <div className="lg:w-1/2 w-full perspective-1000 order-2 lg:order-1 relative transform scale-[0.85] sm:scale-100 origin-center -mt-6 sm:mt-0">
          {/* Dashboard Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#ec4899]/10 to-[#8b5cf6]/10 blur-[100px] pointer-events-none" />

          <motion.div 
            initial={{ rotateY: -15, rotateX: 5 }}
            animate={{ rotateY: [-15, -5, -15], rotateX: [5, 2, 5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-[#050103]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(139,92,246,0.15)] overflow-hidden flex flex-col relative group"
          >
            {/* Header */}
            <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] p-[2px] shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                   <img src="https://i.pravatar.cc/100?img=47" alt="Customer" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <div className="text-sm text-white font-bold leading-none mb-1">Sarah Jenkins</div>
                  <div className="text-[10px] text-[#8b5cf6] font-mono tracking-widest">LTV: $12,450.00</div>
                </div>
              </div>
              
              {/* Window Controls */}
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6 flex flex-col gap-4 relative">
              <div className="flex gap-4">
                <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-4 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 blur-xl rounded-full" />
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-1">Churn Risk</span>
                  <span className="text-emerald-400 text-2xl font-bold font-mono">1.2%</span>
                </div>
                <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-4 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 blur-xl rounded-full" />
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-1">Sentiment</span>
                  <span className="text-white text-xl font-bold mt-1 block">Positive</span>
                </div>
              </div>

              {/* Next Best Action UI */}
              <div className="bg-gradient-to-r from-[#ec4899]/10 to-transparent border border-[#ec4899]/30 rounded-xl p-5 relative overflow-hidden mt-2 shadow-[0_0_20px_rgba(236,72,153,0.1)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ec4899]/20 blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#ec4899]" />
                  <span className="text-[#ec4899] text-xs font-bold uppercase tracking-widest">Next Best Action</span>
                </div>
                <p className="text-white text-sm mb-5 leading-relaxed">Send personalized <span className="font-bold text-[#ec4899]">15% discount code</span> for Premium Fall Collection via Email.</p>
                <div className="flex gap-2">
                  <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-1.5 flex-1 bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></motion.div>
                  <div className="h-1.5 flex-1 bg-white/10 rounded-full"></div>
                  <div className="h-1.5 flex-1 bg-white/10 rounded-full"></div>
                </div>
                {/* Scanning line animation */}
                <motion.div 
                   animate={{ left: ['0%', '100%', '0%'] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="absolute top-0 bottom-0 w-[1px] bg-[#ec4899]/50 shadow-[0_0_10px_rgba(236,72,153,1)] z-10" 
                />
              </div>

            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2 w-full">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[9px] sm:text-[10px] font-mono text-[#8b5cf6] mb-4 sm:mb-6 uppercase tracking-widest">
            <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            360° Profiles
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">Unified <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]">Customer 360.</span></h2>
          <p className="text-gray-400 text-[13px] sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
            Fuse online browsing behavior, in-store point-of-sale transactions, and customer service interactions into a single, cohesive intelligence profile.
          </p>
          
          <div className="space-y-2 sm:space-y-3">
            {[
              { title: 'Predictive Lifetime Value', desc: 'Forecast exact customer spend over the next 5 years.', icon: TrendingUp },
              { title: 'Automated Retention', desc: 'Trigger hyper-personalized campaigns before a user churns.', icon: Target },
              { title: 'Omnichannel Sync', desc: 'Real-time synchronization across web, app, and physical stores.', icon: Box }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 sm:gap-4 p-2.5 sm:p-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group cursor-default">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center shrink-0 border border-[#8b5cf6]/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#8b5cf6]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[11px] sm:text-sm mb-0.5 sm:mb-1 group-hover:text-[#8b5cf6] transition-colors">{item.title}</h4>
                  <p className="text-[9px] sm:text-sm text-gray-500 leading-tight sm:leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Section 6: Supply Chain Anomaly Tracking
const SupplyChainSection = () => {
  return (
    <section className="py-12 sm:py-24 relative overflow-hidden bg-[#030102]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#050103] border border-white/5 rounded-[23px] sm:rounded-3xl p-5 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-10 md:gap-16 relative overflow-hidden shadow-2xl">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d946ef]/10 blur-[120px] pointer-events-none" />

          {/* Left Side: Information */}
          <div className="lg:w-1/2 relative z-10 text-left w-full">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#d946ef]/10 border border-[#d946ef]/30 text-[9px] sm:text-[10px] font-mono text-[#d946ef] mb-4 sm:mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(217,70,239,0.2)]">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Global Monitoring
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              Zero Inventory <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#ec4899]">Blind Spots.</span>
            </h2>
            
            <p className="text-gray-400 text-[13px] sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Monitor millions of SKUs across global warehouses in real-time. Our AI automatically detects supply chain anomalies, predicts stockouts, and flags fraudulent POS transactions instantly.
            </p>

            <ul className="space-y-2.5 sm:space-y-4">
              {[
                { label: 'Real-Time Tracking', val: '< 10ms Latency' },
                { label: 'Anomaly Detection', val: '99.9% Accuracy' },
                { label: 'Global Coverage', val: '150+ Regions' }
              ].map((stat, idx) => (
                 <li key={idx} className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
                   <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#d946ef] animate-pulse shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
                   <span className="text-white text-[11px] sm:text-sm font-bold flex-1">{stat.label}</span>
                   <span className="text-[#d946ef] font-mono text-[9px] sm:text-xs font-bold">{stat.val}</span>
                 </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Map Animations */}
          <div className="lg:w-1/2 w-full relative z-10 perspective-1000 transform scale-[0.85] sm:scale-100 origin-center -mt-4 sm:mt-0">
            <motion.div 
               initial={{ rotateY: 10, rotateX: 5 }}
               animate={{ rotateY: [10, 0, 10], rotateX: [5, -2, 5] }}
               transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
               className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#070103] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(217,70,239,0.15)] overflow-hidden"
            >
              {/* Map Background */}
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-[0.15] grayscale invert mix-blend-screen"></div>
              
              {/* Animated Map Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

              {/* Scanning Radar Effect */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -ml-[100%] -mt-[100%] rounded-full border-t border-[#d946ef]/30 bg-[conic-gradient(from_0deg,transparent_70%,rgba(217,70,239,0.1)_100%)] pointer-events-none"
              />

              {/* Ping Nodes */}
              {[
                { top: '35%', left: '25%', delay: 0 },
                { top: '45%', left: '75%', delay: 1.2 },
                { top: '65%', left: '45%', delay: 2.4 },
                { top: '25%', left: '80%', delay: 0.6 },
                { top: '75%', left: '30%', delay: 1.8 }
              ].map((node, i) => (
                <div key={i} className="absolute w-3 h-3" style={{ top: node.top, left: node.left }}>
                  {/* Ping Ring */}
                  <motion.div 
                    animate={{ scale: [1, 5], opacity: [1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: node.delay, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border border-[#d946ef]"
                  />
                  {/* Solid Dot */}
                  <div className="absolute inset-1 rounded-full bg-[#d946ef] shadow-[0_0_15px_rgba(217,70,239,1)]" />
                  
                  {/* Connecting Lines (some nodes only) */}
                  {i < 3 && (
                    <svg className="absolute top-1.5 left-1.5 w-64 h-64 pointer-events-none overflow-visible">
                      <motion.line 
                         x1="0" y1="0" x2={i === 0 ? 120 : i === 1 ? -100 : 80} y2={i === 0 ? 60 : i === 1 ? -40 : -80}
                         stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4"
                         animate={{ strokeDashoffset: [0, 20] }}
                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(217,70,239,0.8)" />
                          <stop offset="100%" stopColor="rgba(217,70,239,0)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Retail() {
  return (
    <div className="min-h-screen bg-[#030102] text-white font-sans selection:bg-[#ec4899]/30">
      <Navbar />
      
      <HeroSection />
      <MetricsTickerSection />
      <RecommendationEngineSection />
      <UseCasesSection />
      <DashboardMockupSection />
      <SupplyChainSection />
      <CTA />

      <Footer />
    </div>
  );
}
