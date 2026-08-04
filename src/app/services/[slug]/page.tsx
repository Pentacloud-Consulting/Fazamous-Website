import { industryData } from "@/data/industryData";
import { IndustryServiceTemplate } from "@/components/templates/IndustryServiceTemplate";
import Telecommunications from "@/Frontend/Services/Telecommunications/Telecommunications";
import FinancialServices from "@/Frontend/Services/Financial Services/Financial Services";
import Healthcare from "@/Frontend/Services/Haelthcare/Healthcare";
import Retail from "@/Frontend/Services/Retail/Retail";
import DataAnalytics from "@/Frontend/Services/Data & Analytics/Data & Analytics";
import EnterpriseIntelligence from "@/Frontend/Services/Enterprise Intelligence/Enterprise Intelligence";
import EnterpriseModernization from "@/Frontend/Services/Enterprise Software & Modernization/Enterprise Software & Modernization";
import MediaAdvertising from "@/Frontend/Services/Media & Advertising (CTV)/Media & Advertising (CTV)";
import GenerativeAI from "@/Frontend/Services/Generative AI & AI Agents/Generative AI & AI Agents";
import SupplyChain from "@/Frontend/Services/Supply Chain Management/Supply Chain Management";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return industryData.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = industryData.find((i) => i.slug === resolvedParams.slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industry.name} | Fazamous`,
    description: industry.desc,
  };
}

export default async function IndustryServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industryData.find((i) => i.slug === resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  if (industry.slug === "telecommunications") {
    return <Telecommunications />;
  }

  if (industry.slug === "financial-services") {
    return <FinancialServices />;
  }

  if (industry.slug === "healthcare") {
    return <Healthcare />;
  }

  if (industry.slug === "retail") {
    return <Retail />;
  }

  if (industry.slug === "data-analytics") {
    return <DataAnalytics />;
  }

  if (industry.slug === "enterprise-intelligence") {
    return <EnterpriseIntelligence />;
  }

  if (industry.slug === "enterprise-modernization") {
    return <EnterpriseModernization />;
  }

  if (industry.slug === "media-advertising") {
    return <MediaAdvertising />;
  }

  if (industry.slug === "generative-ai-agents") {
    return <GenerativeAI />;
  }

  if (industry.slug === "supply-chain") {
    return <SupplyChain />;
  }

  return <IndustryServiceTemplate slug={industry.slug} />;
}
