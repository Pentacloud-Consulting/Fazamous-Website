"use client";

import React from 'react';
import { 
  ArrowRight, Activity, Shield, Settings, TrendingUp, Plus,
  Network, Users, Wrench, AlertTriangle, MessageSquare, 
  ChevronLeft, ChevronRight, CheckCircle2,
  Phone, Globe, Zap, Cpu, Database
} from 'lucide-react';
import { Navbar } from '@/components/Top-bottom/Navbar';
import { Footer } from '@/components/Top-bottom/Footer';
import CTA from '@/Frontend/Home/Contact';
import { motion } from 'framer-motion';
export default function Telecommunications() {
  return (
    <div className="min-h-screen bg-[#03050a] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-8 lg:pt-28 lg:pb-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              TELECOMMUNICATIONS SOLUTIONS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.1] mb-4 sm:mb-6 tracking-tight">
              Intelligent AI Solutions <br className="hidden lg:block"/>
              For the Future of <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Telecommunications.</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-lg mb-6 sm:mb-10 max-w-xl leading-relaxed">
              We empower telecom companies to deliver exceptional connectivity, 
              enhance customer experience, optimize operations, and unlock 
              new revenue streams with AI.
            </p>


          </div>

          {/* Hero Visuals (Stats Cards) */}
          <div className="relative h-[320px] sm:h-[450px] lg:h-[600px] w-full flex items-center justify-center lg:mt-0 mt-8 overflow-visible">
            {/* Background Image with smooth radial fade to remove sharp edges */}
            <div 
              className="absolute inset-0 bg-[url('/Samples/telecom-bg.png')] bg-cover bg-center bg-no-repeat opacity-60 pointer-events-none"
              style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }}
            ></div>
            
            {/* Background glowing orb */}
            <div className="absolute inset-0 bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
            
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-12 sm:gap-y-16 w-full relative z-10 max-w-2xl mx-auto px-2 sm:px-0">
               <div className="bg-[#05050a]/60 backdrop-blur-md border border-white/10 p-3 sm:p-5 rounded-xl sm:rounded-2xl transform lg:-translate-y-12 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="text-[7.5px] sm:text-[10px] text-gray-300 font-medium mb-0.5 sm:mb-1">Network Performance</div>
                    <div className="text-xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">98.6%</div>
                    <div className="text-[7.5px] sm:text-[10px] text-gray-200 font-medium drop-shadow-md">Uptime Achieved</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-10 sm:h-16 pointer-events-none">
                     <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                       <defs>
                         <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                           <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                         </linearGradient>
                       </defs>
                       <motion.path 
                         animate={{ d: [
                           "M0,35 C10,35 10,20 20,20 C30,20 30,35 40,35 C50,35 50,25 60,25 C70,25 70,10 80,10 C90,10 90,20 100,20 L100,40 L0,40 Z",
                           "M0,35 C10,35 10,12 20,12 C30,12 30,28 40,28 C50,28 50,15 60,15 C70,15 70,5 80,5 C90,5 90,25 100,25 L100,40 L0,40 Z",
                           "M0,35 C10,35 10,20 20,20 C30,20 30,35 40,35 C50,35 50,25 60,25 C70,25 70,10 80,10 C90,10 90,20 100,20 L100,40 L0,40 Z"
                         ] }}
                         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                         fill="url(#grad1)" 
                       />
                       <motion.path 
                         animate={{ d: [
                           "M0,35 C10,35 10,20 20,20 C30,20 30,35 40,35 C50,35 50,25 60,25 C70,25 70,10 80,10 C90,10 90,20 100,20",
                           "M0,35 C10,35 10,12 20,12 C30,12 30,28 40,28 C50,28 50,15 60,15 C70,15 70,5 80,5 C90,5 90,25 100,25",
                           "M0,35 C10,35 10,20 20,20 C30,20 30,35 40,35 C50,35 50,25 60,25 C70,25 70,10 80,10 C90,10 90,20 100,20"
                         ] }}
                         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                         fill="none" stroke="#c084fc" strokeWidth="1.5" 
                       />
                       <motion.circle cx="20" animate={{ cy: [20, 12, 20] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" className="shadow-[0_0_5px_#fff]" />
                       <motion.circle cx="40" animate={{ cy: [35, 28, 35] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" className="shadow-[0_0_5px_#fff]" />
                       <motion.circle cx="60" animate={{ cy: [25, 15, 25] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" className="shadow-[0_0_5px_#fff]" />
                       <motion.circle cx="80" animate={{ cy: [10, 5, 10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" className="shadow-[0_0_5px_#fff]" />
                     </svg>
                  </div>
               </div>

               <div className="bg-[#05050a]/60 backdrop-blur-md border border-white/10 p-3 sm:p-5 rounded-xl sm:rounded-2xl transform lg:-translate-y-4 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="text-[7.5px] sm:text-[10px] text-gray-300 font-medium mb-0.5 sm:mb-1">Operational Efficiency</div>
                    <div className="text-xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">-35%</div>
                    <div className="text-[7.5px] sm:text-[10px] text-gray-200 font-medium drop-shadow-md">Cost Reduction</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-10 sm:h-16 pointer-events-none">
                     <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                       <defs>
                         <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                           <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                         </linearGradient>
                       </defs>
                       <motion.path 
                         animate={{ d: [
                           "M0,15 C12,15 12,25 25,25 C37,25 37,35 50,35 C62,35 62,20 75,20 C87,20 87,25 100,25 L100,40 L0,40 Z",
                           "M0,25 C12,25 12,35 25,35 C37,35 37,15 50,15 C62,15 62,30 75,30 C87,30 87,15 100,15 L100,40 L0,40 Z",
                           "M0,15 C12,15 12,25 25,25 C37,25 37,35 50,35 C62,35 62,20 75,20 C87,20 87,25 100,25 L100,40 L0,40 Z"
                         ] }}
                         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                         fill="url(#grad2)" 
                       />
                       <motion.path 
                         animate={{ d: [
                           "M0,15 C12,15 12,25 25,25 C37,25 37,35 50,35 C62,35 62,20 75,20 C87,20 87,25 100,25",
                           "M0,25 C12,25 12,35 25,35 C37,35 37,15 50,15 C62,15 62,30 75,30 C87,30 87,15 100,15",
                           "M0,15 C12,15 12,25 25,25 C37,25 37,35 50,35 C62,35 62,20 75,20 C87,20 87,25 100,25"
                         ] }}
                         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                         fill="none" stroke="#93c5fd" strokeWidth="1.5" 
                       />
                       <motion.circle cx="25" animate={{ cy: [25, 35, 25] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" />
                       <motion.circle cx="50" animate={{ cy: [35, 15, 35] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" />
                       <motion.circle cx="75" animate={{ cy: [20, 30, 20] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" />
                     </svg>
                  </div>
               </div>

               <div className="bg-[#05050a]/60 backdrop-blur-md border border-white/10 p-3 sm:p-5 rounded-xl sm:rounded-2xl transform lg:translate-y-6 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="text-[7.5px] sm:text-[10px] text-gray-300 font-medium mb-0.5 sm:mb-1">Customer Satisfaction</div>
                    <div className="text-xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">90%</div>
                    <div className="text-[7.5px] sm:text-[10px] text-gray-200 font-medium drop-shadow-md">CSAT Score</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-10 sm:h-16 pointer-events-none">
                     <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                       <defs>
                         <linearGradient id="grad3" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
                           <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
                         </linearGradient>
                       </defs>
                       <motion.path 
                         animate={{ d: [
                           "M0,25 C12,25 12,35 25,35 C37,35 37,15 50,15 C62,15 62,30 75,30 C87,30 87,20 100,20 L100,40 L0,40 Z",
                           "M0,30 C12,30 12,20 25,20 C37,20 37,25 50,25 C62,25 62,15 75,15 C87,15 87,25 100,25 L100,40 L0,40 Z",
                           "M0,25 C12,25 12,35 25,35 C37,35 37,15 50,15 C62,15 62,30 75,30 C87,30 87,20 100,20 L100,40 L0,40 Z"
                         ] }}
                         transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                         fill="url(#grad3)" 
                       />
                       <motion.path 
                         animate={{ d: [
                           "M0,25 C12,25 12,35 25,35 C37,35 37,15 50,15 C62,15 62,30 75,30 C87,30 87,20 100,20",
                           "M0,30 C12,30 12,20 25,20 C37,20 37,25 50,25 C62,25 62,15 75,15 C87,15 87,25 100,25",
                           "M0,25 C12,25 12,35 25,35 C37,35 37,15 50,15 C62,15 62,30 75,30 C87,30 87,20 100,20"
                         ] }}
                         transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                         fill="none" stroke="#e879f9" strokeWidth="1.5" 
                       />
                       <motion.circle cx="25" animate={{ cy: [35, 20, 35] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" />
                       <motion.circle cx="50" animate={{ cy: [15, 25, 15] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" />
                       <motion.circle cx="75" animate={{ cy: [30, 15, 30] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" />
                     </svg>
                  </div>
               </div>

               <div className="bg-[#05050a]/60 backdrop-blur-md border border-white/10 p-3 sm:p-5 rounded-xl sm:rounded-2xl transform lg:translate-y-16 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="text-[7.5px] sm:text-[10px] text-gray-300 font-medium mb-0.5 sm:mb-1">AI Driven Insights</div>
                    <div className="text-xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">24/7</div>
                    <div className="text-[7.5px] sm:text-[10px] text-gray-200 font-medium drop-shadow-md">Real-time Monitoring</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-10 sm:h-16 pointer-events-none">
                     <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                       <defs>
                         <linearGradient id="grad4" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                           <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                         </linearGradient>
                       </defs>
                       <motion.path 
                         animate={{ d: [
                           "M0,25 C10,25 10,15 20,15 C35,15 35,35 50,35 C65,35 65,20 80,20 C90,20 90,30 100,30 L100,40 L0,40 Z",
                           "M0,15 C10,15 10,25 20,25 C35,25 35,20 50,20 C65,20 65,30 80,30 C90,30 90,15 100,15 L100,40 L0,40 Z",
                           "M0,25 C10,25 10,15 20,15 C35,15 35,35 50,35 C65,35 65,20 80,20 C90,20 90,30 100,30 L100,40 L0,40 Z"
                         ] }}
                         transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                         fill="url(#grad4)" 
                       />
                       <motion.path 
                         animate={{ d: [
                           "M0,25 C10,25 10,15 20,15 C35,15 35,35 50,35 C65,35 65,20 80,20 C90,20 90,30 100,30",
                           "M0,15 C10,15 10,25 20,25 C35,25 35,20 50,20 C65,20 65,30 80,30 C90,30 90,15 100,15",
                           "M0,25 C10,25 10,15 20,15 C35,15 35,35 50,35 C65,35 65,20 80,20 C90,20 90,30 100,30"
                         ] }}
                         transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                         fill="none" stroke="#93c5fd" strokeWidth="1.5" 
                       />
                       <motion.circle cx="20" animate={{ cy: [15, 25, 15] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" />
                       <motion.circle cx="50" animate={{ cy: [35, 20, 35] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" />
                       <motion.circle cx="80" animate={{ cy: [20, 30, 20] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} r="1.5" fill="#fff" />
                     </svg>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>



      {/* 3. Our Solutions Section */}
      <section className="pt-8 pb-12 sm:pb-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 sm:mb-16 gap-4 sm:gap-8 text-left">
          <div>
            <div className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-2 sm:mb-4">Our Solutions</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              AI Solutions Built For <br/> <span className="text-blue-500">Telecom</span> Businesses
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-[12px] sm:text-sm">
            From network optimization to customer experience, we build intelligent solutions tailored to the unique challenges of the telecom industry.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-6">
          {[
            {
              icon: Network,
              title: "Network Optimization",
              points: ["AI-powered network planning", "Predictive maintenance", "Traffic forecasting", "Performance optimization"]
            },
            {
              icon: Users,
              title: "Customer Experience",
              points: ["AI chatbots & voice bots", "Personalized recommendations", "Churn prediction", "Customer sentiment analysis"]
            },
            {
              icon: Shield,
              title: "Fraud Detection",
              points: ["Real-time fraud monitoring", "Anomaly detection", "SIM box & identity fraud", "Revenue assurance"]
            },
            {
              icon: Settings,
              title: "Process Automation",
              points: ["Automated provisioning", "Ticket classification", "Workflow automation", "Reduced manual efforts"]
            },
            {
              icon: TrendingUp,
              title: "Revenue Growth",
              points: ["AI-powered upsell & cross-sell", "Dynamic pricing", "Offer optimization", "New revenue opportunities"]
            }
          ].map((sol, i) => (
            <div key={i} className="group relative rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] overflow-hidden cursor-pointer h-full p-[1px]">
              
              {/* Default Border (1px border simulation) */}
              <div className="absolute inset-0 bg-white/5 transition-opacity duration-500 group-hover:opacity-0"></div>

              {/* Spinning Border Beam (Hidden by default, shown on hover) */}
              <div className="absolute inset-[-100%] z-0 bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#3b82f6_100%)] opacity-0 group-hover:opacity-100 animate-[spin_4s_linear_infinite] transition-opacity duration-500"></div>
              
              {/* Inner Content Card (Masks the center so only border is seen) */}
              <div className="relative z-10 bg-[#060810] h-full w-full rounded-[15px] p-3 sm:p-6 flex flex-col overflow-hidden">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Decorative Crosshair */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-500 opacity-20 group-hover:opacity-60 group-hover:rotate-90 transition-all duration-500 pointer-events-none">
                  <Plus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#0a0f1c] border border-white/5 flex items-center justify-center mb-2.5 sm:mb-5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500 shadow-inner shadow-white/5">
                    <sol.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-[11px] sm:text-[15px] font-bold mb-2 sm:mb-4 text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">{sol.title}</h3>
                  <ul className="space-y-1.5 sm:space-y-3 mb-3 sm:mb-6 flex-1">
                    {sol.points.map((pt, j) => (
                      <li key={j} className="text-gray-400 text-[8px] sm:text-[12px] flex items-start gap-1.5 sm:gap-2.5 leading-snug sm:leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-gray-600 mt-[4px] sm:mt-[7px] flex-shrink-0 group-hover:bg-blue-400 transition-colors duration-300"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex justify-end">
                    <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Industry Challenges Section */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-transparent to-blue-950/10 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="flex flex-col justify-center h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] sm:text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4 sm:mb-6 w-fit">
                Industry Challenges
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6">
                Solving Real Challenges In <br/> <span className="text-blue-500">Telecommunications.</span>
              </h2>
              <p className="text-gray-400 text-[11px] sm:text-sm leading-relaxed max-w-md border-l-2 border-blue-500/30 pl-4 sm:pl-5 py-1.5 sm:py-2 mb-6">
                The telecommunications industry faces unprecedented demands. Legacy infrastructure struggles to handle surging data volumes, while security threats and operational bottlenecks drive up costs and impact customer satisfaction.
              </p>
              
              {/* Animated Network Diagram */}
              <div className="relative w-full h-[150px] sm:h-[200px] bg-[#05050a]/50 rounded-2xl sm:rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center group shadow-2xl shadow-black/50">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)]"></div>
                
                {/* SVG Network Loop */}
                <svg viewBox="0 0 400 300" className="w-full h-full relative z-10">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="alertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>

                  {/* Paths */}
                  <path d="M 200 150 L 130 90" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 200 150 L 320 80" stroke="url(#alertGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 200 150 L 70 210" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 200 150 L 300 240" stroke="url(#alertGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 200 150 L 180 50" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 200 150 L 220 260" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />

                  {/* Cross connections */}
                  <path d="M 130 90 L 180 50" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                  <path d="M 320 80 L 300 240" stroke="rgba(239,68,68,0.2)" strokeWidth="1" />
                  <path d="M 70 210 L 220 260" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />

                  {/* Animated Data Packets */}
                  <circle r="3" fill="#60a5fa" filter="drop-shadow(0 0 4px #60a5fa)">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 200 150 L 130 90" />
                  </circle>
                  <circle r="3" fill="#ef4444" filter="drop-shadow(0 0 4px #ef4444)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 200 150 L 320 80" />
                  </circle>
                  <circle r="3" fill="#60a5fa">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 200 150 L 70 210" />
                  </circle>
                  <circle r="3" fill="#ef4444" filter="drop-shadow(0 0 4px #ef4444)">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M 300 240 L 200 150" />
                  </circle>
                  <circle r="3" fill="#60a5fa">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 180 50 L 200 150" />
                  </circle>
                  <circle r="3" fill="#60a5fa">
                    <animateMotion dur="4.5s" repeatCount="indefinite" path="M 200 150 L 220 260" />
                  </circle>

                  {/* Central Node */}
                  <circle cx="200" cy="150" r="18" fill="#05050a" stroke="#3b82f6" strokeWidth="2" className="animate-[pulse_3s_ease-in-out_infinite]" />
                  <circle cx="200" cy="150" r="8" fill="#3b82f6" />
                  
                  {/* Peripheral Nodes */}
                  <circle cx="130" cy="90" r="10" fill="#05050a" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="130" cy="90" r="4" fill="#60a5fa" />
                  
                  {/* Alert Nodes */}
                  <circle cx="320" cy="80" r="12" fill="#05050a" stroke="#ef4444" strokeWidth="2" className="animate-[pulse_1s_ease-in-out_infinite]" />
                  <circle cx="320" cy="80" r="4" fill="#ef4444" />
                  
                  <circle cx="70" cy="210" r="10" fill="#05050a" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="70" cy="210" r="4" fill="#60a5fa" />

                  {/* Alert Node 2 */}
                  <circle cx="300" cy="240" r="12" fill="#05050a" stroke="#ef4444" strokeWidth="2" className="animate-[pulse_1.5s_ease-in-out_infinite]" />
                  <circle cx="300" cy="240" r="4" fill="#ef4444" />

                  <circle cx="180" cy="50" r="8" fill="#05050a" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="180" cy="50" r="3" fill="#60a5fa" />

                  <circle cx="220" cy="260" r="8" fill="#05050a" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="220" cy="260" r="3" fill="#60a5fa" />
                </svg>

                {/* Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#03050a_100%)] pointer-events-none"></div>
                <div className="absolute top-5 left-5 flex flex-col gap-3">
                  <div className="flex items-center gap-2 bg-[#05050a]/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 shadow-lg w-fit">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">System Online</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#05050a]/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 shadow-lg w-fit">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">2 Threats</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { 
                  icon: Network, title: "Network Congestion", desc: "Handling massive data traffic and ensuring uninterrupted connectivity.",
                  hoverText: "group-hover:text-blue-400", hoverBorder: "group-hover:border-blue-500/30", hoverBg: "group-hover:bg-blue-500/10", gradient: "via-blue-500/5 to-purple-500/5"
                },
                { 
                  icon: TrendingUp, title: "High Churn Rate", desc: "Losing customers due to poor experience and lack of personalization.",
                  hoverText: "group-hover:text-red-400", hoverBorder: "group-hover:border-red-500/30", hoverBg: "group-hover:bg-red-500/10", gradient: "via-red-500/5 to-orange-500/5"
                },
                { 
                  icon: Settings, title: "Operational Complexity", desc: "Managing multiple systems, processes and large-scale operations.",
                  hoverText: "group-hover:text-amber-400", hoverBorder: "group-hover:border-amber-500/30", hoverBg: "group-hover:bg-amber-500/10", gradient: "via-amber-500/5 to-yellow-500/5"
                },
                { 
                  icon: Shield, title: "Fraud & Security Threats", desc: "Rising frauds, SIM swaps and security breaches impacting revenue.",
                  hoverText: "group-hover:text-purple-400", hoverBorder: "group-hover:border-purple-500/30", hoverBg: "group-hover:bg-purple-500/10", gradient: "via-purple-500/5 to-pink-500/5"
                },
                { 
                  icon: Activity, title: "Cost Pressures", desc: "High operational costs with margin optimization challenges.",
                  hoverText: "group-hover:text-emerald-400", hoverBorder: "group-hover:border-emerald-500/30", hoverBg: "group-hover:bg-emerald-500/10", gradient: "via-emerald-500/5 to-teal-500/5"
                },
                { 
                  icon: Database, title: "Data Overload", desc: "Huge volumes of data but limited actionable insights.",
                  hoverText: "group-hover:text-cyan-400", hoverBorder: "group-hover:border-cyan-500/30", hoverBg: "group-hover:bg-cyan-500/10", gradient: "via-cyan-500/5 to-blue-500/5"
                },
              ].map((challenge, i) => (
                <div key={i} className="group relative bg-[#0a0f1c]/30 backdrop-blur-sm border border-white/5 p-3 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row gap-2 sm:gap-5 items-start cursor-pointer hover:-translate-y-1 hover:shadow-xl">
                  {/* Subtle animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-transparent ${challenge.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                  
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#0a0f1c] to-[#03050a] border border-white/5 flex items-center justify-center flex-shrink-0 relative z-10 shadow-inner shadow-white/5 ${challenge.hoverBorder} ${challenge.hoverBg} transition-all duration-500`}>
                    <challenge.icon className={`w-3.5 h-3.5 sm:w-5 sm:h-5 text-gray-500 ${challenge.hoverText} group-hover:scale-110 transition-all duration-500`} />
                  </div>
                  <div className="relative z-10 mt-0 sm:mt-0.5">
                    <h4 className={`text-white text-[10px] sm:text-[15px] leading-tight font-bold mb-1 sm:mb-1.5 ${challenge.hoverText} transition-colors duration-300`}>{challenge.title}</h4>
                    <p className="text-gray-400 text-[8px] sm:text-[13px] leading-snug sm:leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{challenge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Benefits Section */}
      <section className="py-10 sm:py-20 border-y border-white/5 bg-[#03050a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-6 sm:gap-12 items-center">
            <div className="pr-0 sm:pr-8 lg:border-r border-white/5 h-full flex flex-col justify-center">
              <div className="text-blue-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-2 sm:mb-4">Key Benefits</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-6">
                Measurable Impact For <span className="text-blue-500">Telecom.</span>
              </h2>
              <p className="text-gray-400 text-[11px] sm:text-sm leading-relaxed border-l-2 border-white/10 pl-4 sm:pl-5">
                Our solutions deliver tangible results, driving efficiency, maximizing uptime, and unlocking new revenue growth across your entire network infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-x-2 sm:gap-x-6 sm:gap-y-12 pl-0 lg:pl-8">
              {[
                { val: "35%", label: "Reduced Op Costs", icon: Activity },
                { val: "50%", label: "Improved Retention", icon: Users },
                { val: "98%", label: "Network Availability", icon: Network },
                { val: "30%+", label: "Increase in Revenue", icon: TrendingUp },
              ].map((stat, i) => (
                <div key={i} className="relative group pl-2 sm:pl-5 lg:pl-6">
                  {/* Vertical Animated Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/5 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0 bg-blue-500 group-hover:h-full transition-all duration-700 ease-in-out"></div>
                  </div>
                  
                  <stat.icon className="w-3 h-3 sm:w-5 sm:h-5 text-gray-500 mb-1.5 sm:mb-5 group-hover:text-blue-400 transition-colors duration-500 group-hover:translate-x-1 transition-transform" />
                  
                  <div className="text-sm sm:text-4xl lg:text-[40px] font-black text-white tracking-tighter mb-0.5 sm:mb-2 group-hover:text-blue-400 transition-colors duration-500 group-hover:translate-x-1 transition-transform">
                    {stat.val}
                  </div>
                  <div className="text-gray-400 text-[6.5px] sm:text-[13px] font-medium leading-tight sm:leading-relaxed group-hover:text-gray-300 transition-colors duration-500 group-hover:translate-x-1 transition-transform whitespace-normal">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Use Cases Bento Grid */}
      <section className="py-10 sm:py-16 bg-[#03050a] relative overflow-hidden border-y border-white/5">
        {/* Cool background glowing effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6 sm:mb-10 text-left">
            <div className="text-blue-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-pulse"></span> Use Cases
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Real-World Use Cases <br/> That Drive <span className="text-blue-500">Results</span>
            </h2>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:auto-rows-[200px]">
            {/* Item 1: AI Customer Assistant (Wide) */}
            <div className="col-span-2 md:row-span-1 group relative bg-[#0a0f1c]/80 backdrop-blur-md border border-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 overflow-hidden hover:border-blue-500/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-colors duration-700 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[7px] sm:text-[9px] font-bold text-blue-300 tracking-wider uppercase">
                    Impact: 40% Cost Reduction
                  </div>
                </div>
                <h3 className="text-[13px] sm:text-xl font-bold text-white mb-1.5 sm:mb-2">AI Customer Assistant</h3>
                <p className="text-gray-400 text-[10px] sm:text-[13px] max-w-md leading-snug sm:leading-relaxed">24/7 AI assistants resolving complex customer queries across voice, chat and messaging with human-like accuracy.</p>
              </div>
            </div>

            {/* Item 2: Predictive Maintenance (Normal) */}
            <div className="col-span-1 md:row-span-1 group relative bg-[#0a0f1c]/80 backdrop-blur-md border border-white/5 rounded-2xl sm:rounded-3xl p-3 sm:p-5 overflow-hidden hover:border-purple-500/40 transition-all duration-500 flex flex-col">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full group-hover:bg-purple-500/20 transition-colors pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-2.5 sm:mb-3">
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-[13px] sm:text-base font-bold text-white mb-1.5 sm:mb-2">Predictive Maintenance</h3>
                <p className="text-gray-400 text-[10px] sm:text-[12px] mb-2 sm:mb-3 flex-1 leading-snug sm:leading-relaxed">AI predicts network failures before they happen to ensure uptime.</p>
                <div className="text-purple-400 text-[7px] sm:text-[9px] font-bold tracking-widest uppercase mt-auto">
                  60% fewer downtimes
                </div>
              </div>
            </div>

            {/* Item 3: Churn Prediction (Tall) */}
            <div className="col-span-1 row-span-2 group relative bg-gradient-to-b from-[#0a0f1c] to-[#03050a] border border-white/5 rounded-2xl sm:rounded-3xl p-3 sm:p-5 overflow-hidden hover:border-emerald-500/40 transition-all duration-500 flex flex-col">
              <div className="absolute bottom-0 right-0 w-full h-2/3 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-[13px] sm:text-lg font-bold text-white mb-2 sm:mb-3">Churn Prediction Engine</h3>
                <p className="text-gray-400 text-[10px] sm:text-[13px] mb-3 sm:mb-4 flex-1 leading-snug sm:leading-relaxed">Identify at-risk customers early by analyzing behavior patterns and take proactive, personalized retention actions automatically.</p>
                
                <div className="bg-[#05050a]/80 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 mt-auto text-center group-hover:border-emerald-500/30 transition-colors">
                  <div className="text-emerald-400 text-xl sm:text-2xl font-black mb-0.5 sm:mb-1">30%</div>
                  <div className="text-[7px] sm:text-[9px] text-gray-400 font-bold uppercase tracking-widest">Better Retention</div>
                </div>
              </div>
            </div>

            {/* Item 4: Fraud Detection (Normal) */}
            <div className="col-span-1 md:row-span-1 group relative bg-[#0a0f1c]/80 backdrop-blur-md border border-white/5 rounded-2xl sm:rounded-3xl p-3 sm:p-5 overflow-hidden hover:border-red-500/40 transition-all duration-500 flex flex-col">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-500/10 blur-2xl rounded-full group-hover:bg-red-500/20 transition-colors pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-2.5 sm:mb-3">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-[13px] sm:text-base font-bold text-white mb-1.5 sm:mb-2">Fraud Detection</h3>
                <p className="text-gray-400 text-[10px] sm:text-[12px] mb-2 sm:mb-3 flex-1 leading-snug sm:leading-relaxed">Real-time detection of SIM boxing and revenue leakages.</p>
                <div className="text-red-400 text-[7px] sm:text-[9px] font-bold tracking-widest uppercase mt-auto">
                  $10M+ saved
                </div>
              </div>
            </div>

            {/* Item 5: Network Capacity (Wide) */}
            <div className="col-span-2 md:row-span-1 group relative bg-[#0a0f1c]/80 backdrop-blur-md border border-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 overflow-hidden hover:border-blue-500/40 transition-all duration-500 flex justify-between items-center">
              <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-colors duration-700 pointer-events-none"></div>
              <div className="relative z-10 max-w-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 sm:mb-4">
                  <Network className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-all" />
                </div>
                <h3 className="text-[13px] sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Network Capacity Planning</h3>
                <p className="text-gray-400 text-[10px] sm:text-[13px] leading-snug sm:leading-relaxed">AI accurately forecasts traffic demand spikes to optimize network capacity planning and resource allocation.</p>
              </div>
              
              <div className="relative z-10 hidden sm:flex flex-col items-center justify-center px-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 sm:border-4 border-blue-500/20 border-t-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:rotate-12 transition-transform duration-700">
                  <span className="text-sm sm:text-xl font-black text-white group-hover:-rotate-12 transition-transform duration-700">25%</span>
                </div>
                <div className="text-[7px] sm:text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-2 sm:mt-3 text-center">
                  Better<br/>Efficiency
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <CTA />      
      <Footer />
    </div>
  );
}
