import { industryData } from "@/data/industryData";
import { IndustryServiceTemplate } from "@/components/templates/IndustryServiceTemplate";
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

  return <IndustryServiceTemplate slug={industry.slug} />;
}
