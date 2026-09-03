"use client";

import { SplashScreen } from "@/Frontend/Animations/SplashScreen";
import { Navbar } from "@/components/Top-bottom/Navbar";
import { Hero, TrustStrip } from "@/Frontend/Home/Hero";
import { InsightsPlatform } from "@/Frontend/Home/InsightsPlatform";
import { Ecosystem } from "@/Frontend/Home/Ecosystem";
import { IntelligentProducts } from "@/Frontend/Home/IntelligentProducts";
import { AutonomousSystems } from "@/Frontend/Home/AutonomousSystems";
import { AIAgents } from "@/Frontend/Home/AIAgents";
import { ProprietaryAIStack } from "@/Frontend/Home/Proprietary AI Stack";
import { Industries } from "@/Frontend/Home/Industries";
import { UseCases } from "@/Frontend/Home/UseCases";
import { About } from "@/Frontend/Home/About";
import CTA from "@/Frontend/Home/Contact";
import { Footer } from "@/components/Top-bottom/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#050505] overflow-x-hidden w-full">
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

      {/* Separator */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider" />
      </div>

      <ProprietaryAIStack />

      {/* Separator */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="section-divider" />
      </div>

      <About />
      <CTA />
      <Footer />
    </main>
  );
}
