"use client";

import React from 'react';
import { 
  ArrowRight, Activity, Shield, Settings, TrendingUp,
  Network, Users, Wrench, AlertTriangle, MessageSquare, 
  ChevronLeft, ChevronRight, CheckCircle2,
  Phone, Globe, Zap, Cpu, Database
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';

export default function Telecommunications() {
  return (
    <div className="min-h-screen bg-[#03050a] text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-gray-400 uppercase mb-6">
              <a href="#" className="hover:text-white transition">Home</a>
              <span className="text-gray-600">&gt;</span>
              <a href="#" className="hover:text-white transition">Industries</a>
              <span className="text-gray-600">&gt;</span>
              <span className="text-blue-400">Telecommunications</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              TELECOMMUNICATIONS SOLUTIONS
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Intelligent AI Solutions <br className="hidden lg:block"/>
              For the Future of <br className="hidden lg:block"/>
              <span className="text-blue-500">Telecommunications.</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
              We empower telecom companies to deliver exceptional connectivity, 
              enhance customer experience, optimize operations, and unlock 
              new revenue streams with AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                Explore Use Cases <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Visuals (Stats Cards) */}
          <div className="relative h-[500px] w-full flex items-center justify-center lg:mt-0 mt-12">
            {/* Background glowing orb/image placeholder */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
            
            <div className="grid grid-cols-2 gap-6 w-full relative z-10 max-w-lg mx-auto">
               <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform lg:-translate-y-8">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Network Performance</div>
                  <div className="text-3xl font-bold text-white mb-1">98.6%</div>
                  <div className="text-[10px] text-gray-500">Uptime Achieved</div>
                  <div className="h-8 mt-4 border-b border-dashed border-gray-700 relative">
                     <svg className="absolute bottom-0 w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
                       <path d="M0,20 Q10,5 20,20 T40,10 T60,25 T80,5 T100,15" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                     </svg>
                  </div>
               </div>

               <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform lg:translate-y-8">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Operational Efficiency</div>
                  <div className="text-3xl font-bold text-white mb-1">-35%</div>
                  <div className="text-[10px] text-gray-500">Cost Reduction</div>
                  <div className="h-8 mt-4 border-b border-dashed border-gray-700 relative">
                     <svg className="absolute bottom-0 w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
                       <path d="M0,5 Q15,25 30,10 T60,20 T100,5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                     </svg>
                  </div>
               </div>

               <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform lg:-translate-y-4">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Customer Satisfaction</div>
                  <div className="text-3xl font-bold text-white mb-1">90%</div>
                  <div className="text-[10px] text-gray-500">CSAT Score</div>
                  <div className="h-8 mt-4 border-b border-dashed border-gray-700 relative">
                     <svg className="absolute bottom-0 w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
                       <path d="M0,25 Q15,5 30,15 T60,5 T100,20" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                     </svg>
                  </div>
               </div>

               <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform lg:translate-y-12">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">AI Driven Insights</div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-[10px] text-gray-500">Real-time Monitoring</div>
                  <div className="h-8 mt-4 border-b border-dashed border-gray-700 relative">
                     <svg className="absolute bottom-0 w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
                       <path d="M0,15 Q15,15 30,5 T60,25 T100,10" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                     </svg>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By Banner */}
      <section className="border-y border-white/10 bg-white/[0.01] py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-8">Trusted By Telecom Leaders Worldwide</p>
          <div className="flex justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap">
            <span className="font-bold text-2xl tracking-tighter">airtel</span>
            <span className="font-bold text-2xl text-blue-500">Jio</span>
            <span className="font-bold text-2xl text-red-500">vodafone</span>
            <span className="font-bold text-2xl italic">verizon</span>
            <span className="font-bold text-2xl tracking-tight text-blue-400">AT&T</span>
            <span className="font-bold text-2xl text-purple-500">stc</span>
            <span className="font-bold text-2xl">BT</span>
            <span className="font-bold text-2xl text-cyan-500">telenor</span>
          </div>
        </div>
      </section>

      {/* 3. Our Solutions Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-4">Our Solutions</div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-md">
              AI Solutions Built For <br/> <span className="text-blue-500">Telecom</span> Businesses
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm">
            From network optimization to customer experience, we build intelligent solutions tailored to the unique challenges of the telecom industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
            <div key={i} className="bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all rounded-3xl p-6 flex flex-col group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <sol.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-6">{sol.title}</h3>
              <ul className="space-y-4 mb-10 flex-1">
                {sol.points.map((pt, j) => (
                  <li key={j} className="text-gray-400 text-xs flex items-start gap-2 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex justify-end">
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Industry Challenges Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-blue-950/10 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
            <div>
              <div className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-4">Industry Challenges</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-12">
                Solving Real Challenges <br/> In <span className="text-blue-500">Telecommunications.</span>
              </h2>
              <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 opacity-40">
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-8 rounded-full border border-blue-500/40 border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-blue-500/20">
                  <Globe className="w-48 h-48" strokeWidth={0.5} />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Network, title: "Network Congestion", desc: "Handling massive data traffic and ensuring uninterrupted connectivity." },
                { icon: TrendingUp, title: "High Churn Rate", desc: "Losing customers due to poor experience and lack of personalization." },
                { icon: Settings, title: "Operational Complexity", desc: "Managing multiple systems, processes and large-scale operations." },
                { icon: Shield, title: "Fraud & Security Threats", desc: "Rising frauds, SIM swaps and security breaches impacting revenue." },
                { icon: Activity, title: "Cost Pressures", desc: "High operational costs with margin optimization challenges." },
                { icon: Database, title: "Data Overload", desc: "Huge volumes of data but limited actionable insights." },
              ].map((challenge, i) => (
                <div key={i} className="bg-[#0a0f1c] border border-white/5 p-6 rounded-2xl hover:border-blue-500/20 transition-colors flex gap-5">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0">
                    <challenge.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-2">{challenge.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{challenge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Benefits Section */}
      <section className="py-20 border-y border-white/5 bg-[#03050a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
            <div>
              <div className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-4">Key Benefits</div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Delivering Measurable Impact <br/> For <span className="text-blue-500">Telecom</span> Enterprises
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "35%", label: "Reduction in\nOperational Costs", icon: Activity },
                { val: "50%", label: "Improvement in\nCustomer Retention", icon: Users },
                { val: "98%", label: "Network Availability\nAchieved", icon: Network },
                { val: "30%+", label: "Increase in\nRevenue Opportunities", icon: TrendingUp },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center mb-4 text-blue-400 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-3">{stat.val}</div>
                  <div className="text-gray-400 text-xs whitespace-pre-line leading-relaxed">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Use Cases Section */}
      <section className="py-24 bg-[#0a0f1c]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-end">
            <div className="lg:w-1/3">
              <div className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-4">Use Cases</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Real-World <br/> Use Cases <br/> That Drive <br/> <span className="text-blue-500">Results</span>
              </h2>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                {
                  icon: MessageSquare,
                  title: "AI Customer Assistant",
                  desc: "24/7 AI assistants resolving customer queries across voice, chat and messaging.",
                  impact: "40% reduction in support costs"
                },
                {
                  icon: Wrench,
                  title: "Predictive Maintenance",
                  desc: "AI predicts network failures before they happen to ensure seamless connectivity.",
                  impact: "60% fewer network downtimes"
                },
                {
                  icon: Users,
                  title: "Churn Prediction",
                  desc: "Identify at-risk customers early and take proactive retention actions.",
                  impact: "30% improvement in customer retention"
                },
                {
                  icon: Shield,
                  title: "Fraud Detection",
                  desc: "Real-time detection of fraud, SIM boxing and revenue leakages.",
                  impact: "$10M+ saved in potential fraud"
                },
                {
                  icon: Network,
                  title: "Network Capacity Planning",
                  desc: "AI forecasts traffic demand and optimizes network capacity planning.",
                  impact: "25% better network efficiency"
                }
              ].map((uc, i) => (
                <div key={i} className="bg-[#03050a] border border-white/5 rounded-2xl p-5 flex flex-col hover:border-blue-500/30 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <uc.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-white text-sm font-bold mb-3">{uc.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-1">{uc.desc}</p>
                  <div className="text-blue-400 text-[10px] font-bold tracking-wide uppercase">
                    Impact: {uc.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Technologies Section */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
            <div>
              <div className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-4">Technology We Use</div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Powered By Leading <br/> <span className="text-blue-500">Technologies</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6 opacity-60">
              {['OpenAI', 'Python', 'TensorFlow', 'AWS', 'Azure', 'Google Cloud', 'BigQuery', 'Snowflake', 'Kubernetes', 'Databricks', 'Splunk', 'Grafana'].map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-3 justify-center text-center group cursor-pointer hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-xs tracking-wide text-gray-300 group-hover:text-white">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Success Stories Carousel */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-4">Success Stories</div>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Transforming Telecom <br/> With <span className="text-blue-500">AI</span>
          </h2>
          <div className="hidden sm:flex gap-4">
             <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronLeft className="w-5 h-5 text-white" />
             </button>
             <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronRight className="w-5 h-5 text-white" />
             </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar scroll-smooth">
          {[
            {
              tag: "Telecom Operator",
              title: "Network Optimization With AI",
              desc: "Improved network performance and reduced downtime.",
              results: "98% uptime | 40% fewer outages"
            },
            {
              tag: "Telecom Operator",
              title: "AI Customer Assistant Implementation",
              desc: "Enhanced customer support experience with AI.",
              results: "45% cost reduction | 90% CSAT"
            },
            {
              tag: "Telecom Operator",
              title: "Fraud Detection & Revenue Assurance",
              desc: "AI-powered fraud detection saved millions in losses.",
              results: "$12M+ saved | 99% accuracy"
            }
          ].map((story, i) => (
            <div key={i} className="min-w-[320px] md:min-w-[420px] h-[300px] rounded-3xl bg-[#0a0f1c] border border-white/10 p-8 flex flex-col snap-start relative overflow-hidden group cursor-pointer hover:border-blue-500/30 transition-colors">
              <div className="absolute right-0 top-0 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-[9px] text-gray-300 uppercase font-bold tracking-widest mb-6 px-3 py-1.5 rounded bg-white/5 inline-block w-max border border-white/10">{story.tag}</div>
              <h3 className="text-xl font-bold text-white mb-3 max-w-[85%] leading-snug">{story.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">{story.desc}</p>
              
              <div className="mt-auto border-t border-white/10 pt-5 flex justify-between items-end relative z-10">
                 <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1.5">Results</div>
                    <div className="text-white text-sm font-bold tracking-wide">{story.results}</div>
                 </div>
                 <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                   <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0a0f1c] to-[#0f172a] rounded-[2rem] p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between border border-blue-500/20 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-blue-500/10 blur-[100px]"></div>
          
          <div className="relative z-10 md:w-2/3 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your <br/> <span className="text-blue-400">Telecom</span> Business with AI?
            </h2>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Let's build intelligent solutions that drive efficiency, delight customers and accelerate your growth.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
             <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-xl">
               Book a Free Consultation <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </section>

    </div>
  );
}
