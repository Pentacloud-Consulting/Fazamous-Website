"use client";

import { SplashScreen } from "@/components/sections/SplashScreen";
import { Navbar } from "@/components/sections/Navbar";
import { Hero, TrustStrip } from "@/components/sections/Hero";
import { InsightsPlatform } from "@/components/sections/InsightsPlatform";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { IntelligentProducts } from "@/components/sections/IntelligentProducts";
import { AutonomousSystems } from "@/components/sections/AutonomousSystems";
import { AIAgents } from "@/components/sections/AIAgents";
import { Industries } from "@/components/sections/Industries";
import { UseCases } from "@/components/sections/UseCases";
import { TechnologyVision } from "@/components/sections/TechnologyVision";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#050505]">
      <SplashScreen />
      <Navbar />
      <Hero />
      <TrustStrip />
      
      {/* Separator */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider" />
      </div>

      <InsightsPlatform />
      <Ecosystem />

      {/* Separator */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider" />
      </div>

      <IntelligentProducts />
      <AutonomousSystems />
      <AIAgents />

      {/* Separator */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider" />
      </div>

      <Industries />
      <UseCases />
      <TechnologyVision />

      {/* Separator */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider" />
      </div>

      <About />
      <Contact />
      <Footer />
    </main>
  );
}
