"use client";

import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, ArrowRight, Send, Sparkles, 
  MessageSquare, User, Building, PhoneCall, ChevronDown, Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { id: 'ai-chatbots', label: 'AI Chatbots' },
    { id: 'workflow-automation', label: 'Workflow Automation' },
    { id: 'generative-ai', label: 'Generative AI' },
    { id: 'other', label: 'Other' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log(formData);
    alert("Message sent successfully! (Simulation)");
  };

  return (
    <div className="min-h-screen bg-[#03050a] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden flex flex-col">
      <Navbar />
      
      <style dangerouslySetInnerHTML={{__html: `
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #05070f inset !important;
            -webkit-text-fill-color: white !important;
            transition: background-color 5000s ease-in-out 0s;
        }
      `}} />

      {/* Main Content Area */}
      <main className="flex-grow pt-32 pb-12 relative flex items-center">
        {/* Background ambient glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Contact Info & 2x2 Grid */}
            <div className="flex flex-col gap-10">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span className="text-[9px] font-bold tracking-widest text-gray-300 uppercase">LET'S CONNECT</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Let's Build Something <br/>
                  Amazing <span className="text-blue-500">Together.</span>
                </h1>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Have a project in mind or want to explore how AI can transform your business? We'd love to hear from you.
                </p>
              </div>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email Us */}
                <div className="bg-[#080b12] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5462ff]/10 border border-[#5462ff]/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#5462ff]" />
                    </div>
                    <h4 className="text-white font-bold text-sm">Email Us</h4>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-gray-400">
                    <a href="mailto:hello@fazamous.com" className="hover:text-white transition">hello@fazamous.com</a>
                    <a href="mailto:info@fazamous.com" className="hover:text-white transition">info@fazamous.com</a>
                  </div>
                </div>

                {/* Call Us */}
                <div className="bg-[#080b12] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5462ff]/10 border border-[#5462ff]/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#5462ff]" />
                    </div>
                    <h4 className="text-white font-bold text-sm">Call Us</h4>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-gray-400">
                    <p>+91 98765-43210</p>
                    <p>+1 (703) 567-8902</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-[#080b12] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5462ff]/10 border border-[#5462ff]/20 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5462ff]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <h4 className="text-white font-bold text-sm">Business Hours</h4>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-gray-400">
                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                {/* Quick Support */}
                <div className="bg-[#080b12] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5462ff]/10 border border-[#5462ff]/20 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5462ff]"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                    </div>
                    <h4 className="text-white font-bold text-sm">Quick Support</h4>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-gray-400">
                    <a href="mailto:support@fazamous.com" className="hover:text-white transition">support@fazamous.com</a>
                    <p>Response within 24 hours</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-[#05070f] border border-white/5 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl">
              {/* Form background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] pointer-events-none rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Send Us a Message</h3>
              <p className="text-gray-400 text-xs mb-8 relative z-10">We'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.02] transition-all"
                    required
                  />

                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.02] transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.02] transition-all"
                  />

                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.02] transition-all"
                  />
                </div>

                <div className="relative z-20">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.02] transition-all flex items-center justify-between group"
                  >
                    <span className={formData.service ? "text-white" : "text-gray-500"}>
                      {formData.service ? services.find(s => s.id === formData.service)?.label : "Service Interested In"}
                    </span>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                    </motion.div>
                  </button>

                  {/* Animated Dropdown Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: -10, pointerEvents: 'none' }}
                    animate={{ 
                      opacity: isDropdownOpen ? 1 : 0, 
                      y: isDropdownOpen ? 0 : -10,
                      pointerEvents: isDropdownOpen ? 'auto' : 'none'
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-full mt-2 bg-[#080b12] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    {services.map((service, idx) => (
                      <motion.button
                        key={service.id}
                        type="button"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isDropdownOpen ? 1 : 0, x: isDropdownOpen ? 0 : -10 }}
                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                        onClick={() => {
                          setFormData({ ...formData, service: service.id });
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-xs hover:bg-[#5462ff]/10 transition-colors flex items-center justify-between ${formData.service === service.id ? 'text-[#5462ff] bg-[#5462ff]/5' : 'text-gray-300'}`}
                      >
                        {service.label}
                        {formData.service === service.id && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <Check className="w-4 h-4" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                </div>

                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project *"
                  rows={4}
                  className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.02] transition-all resize-none"
                  required
                ></textarea>

                <div className="flex items-start gap-3 mt-1">
                  <div className="pt-0.5">
                    <input type="checkbox" id="privacy" className="w-3.5 h-3.5 rounded border-white/20 bg-transparent text-blue-500 focus:ring-blue-500/50 cursor-pointer" required />
                  </div>
                  <label htmlFor="privacy" className="text-xs text-gray-400 cursor-pointer select-none">
                    I agree to the <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a>.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="mt-4 bg-[#5462ff] text-white rounded-xl px-6 py-3.5 font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 w-full"
                >
                  Send Message 
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            </div>

          </div>
        </div>
      </main>

      {/* Location Section */}
      <section className="pb-24 pt-4 relative bg-[#03050a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0b0e17] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/5">
            
            {/* Left Content */}
            <div className="p-10 md:p-16 flex-1 flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Our <span className="text-[#5462ff]">Studio</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-12">
                Come visit us at our state-of-the-art facility. We'd love to host you and discuss the future of AI in person.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-auto">
                {/* Action Button */}
                <button className="bg-gradient-to-r from-[#5462ff] to-blue-400 text-white rounded-xl px-8 py-3.5 font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_20px_rgba(84,98,255,0.4)]">
                  Location <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Right Side: Animated Finding Location */}
            <div className="md:w-1/2 min-h-[350px] relative bg-[#05070f] overflow-hidden flex items-center justify-center border-l border-white/5">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #5462ff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              {/* Radar Sweeper */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -mt-[150px] -ml-[150px] rounded-full border border-[#5462ff]/20"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 70%, rgba(84, 98, 255, 0.3) 100%)'
                }}
              />
              
              {/* Pulsing Circles */}
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-24 h-24 border-2 border-[#5462ff] rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                className="absolute w-24 h-24 border-2 border-[#5462ff] rounded-full"
              />

              {/* Center Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-[#5462ff]/20 backdrop-blur-md rounded-xl border border-[#5462ff]/50 flex items-center justify-center shadow-[0_0_30px_rgba(84,98,255,0.4)] mb-4"
                >
                  <MapPin className="w-6 h-6 text-[#5462ff]" />
                </motion.div>
                
                <div className="bg-[#03050a]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5462ff] animate-pulse" />
                  <span className="text-[10px] text-gray-300 font-mono tracking-widest uppercase">Finding Location...</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 opacity-50">
                <div className="h-1 w-12 bg-[#5462ff]/50 rounded-full"></div>
                <div className="text-[9px] font-mono text-[#5462ff]">SYS.LOC.SEARCH</div>
              </div>
              <div className="absolute top-4 left-4 flex gap-1 opacity-50">
                <div className="w-1 h-1 bg-[#5462ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#5462ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#5462ff] rounded-full"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
