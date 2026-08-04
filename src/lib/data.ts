// ─── Shared Data ─────────────────────────────────────────────────
// Single source of truth for industries, products, and their mappings.
// Used by the homepage sections AND the new /services, /solutions pages.

export interface Industry {
  name: string;
  desc: string;
  icon: string; // Lucide icon name as a string key
  color: string;
  metric: string;
  tags: string[];
  isNew?: boolean;
}

export const industries: Industry[] = [
  {
    name: "Telecommunications",
    desc: "Automated Incident Triage, NLP-based Ticket Classification, Root Cause Analysis, Enterprise Monitoring, Intelligent Support Automation",
    icon: "Radio",
    color: "#3B82F6",
    metric: "99.999% Uptime",
    tags: [],
  },
  {
    name: "Financial Services",
    desc: "AML & Fraud Detection, Financial Intelligence, AI-powered Enterprise Chatbots, Risk Intelligence, Revenue Intelligence",
    icon: "TrendingUp",
    color: "#10B981",
    metric: "sub-ms Execution",
    tags: [],
  },
  {
    name: "Healthcare",
    desc: "Disease Prediction, Healthcare Predictive Analytics, Medical Risk Prediction, Healthcare Monitoring, Clinical Intelligence",
    icon: "HeartPulse",
    color: "#00e5ff",
    metric: "99.8% Accuracy",
    tags: [],
  },
  {
    name: "Retail",
    desc: "Customer Intelligence, Recommendation Systems, Anomaly Detection, Business Analytics",
    icon: "ShoppingBag",
    color: "#EC4899",
    metric: "3.4x Conversion",
    tags: [],
  },
  {
    name: "Data & Analytics",
    desc: "Data Observability, Data Quality Monitoring, Pipeline Intelligence, Enterprise Analytics, Data Platform Monitoring",
    icon: "Database",
    color: "#F59E0B",
    metric: "Zero Data Loss",
    tags: [],
  },
  {
    name: "Media & Advertising (CTV)",
    desc: "Connected TV Analytics, Audience Intelligence, Campaign Analytics, Data Aggregation & Monitoring",
    icon: "Tv",
    color: "#EAB308",
    metric: "4.2x ROI Lift",
    tags: [],
  },
  {
    name: "Enterprise Software & Modernization",
    desc: "SAS to PySpark Automation, Legacy System Modernization, Enterprise Software Development, Intelligent Automation",
    icon: "Code2",
    color: "#8B5CF6",
    metric: "85% Faster Dev",
    tags: [],
  },
  {
    name: "Enterprise Intelligence",
    desc: "Decision Intelligence, Predictive Intelligence, Executive Reporting, AI Recommendations, Root Cause Analysis, Enterprise Monitoring (Insights Platform)",
    icon: "BrainCircuit",
    color: "#6366F1",
    metric: "0-Friction Insights",
    tags: [],
  },
  {
    name: "Generative AI & AI Agents",
    desc: "Enterprise AI Assistants, RAG Systems, Autonomous AI Agents, Conversational Intelligence Platforms",
    icon: "Bot",
    color: "#14B8A6",
    metric: "95% Automation",
    tags: [],
  },
  {
    name: "Supply Chain Management (New)",
    desc: "A unified platform syncing hardware and software systems. It provides real-time alerts, anomaly detection, and predictive risk monitoring.",
    icon: "Box",
    color: "#F97316",
    metric: "Zero Disruptions",
    tags: [],
    isNew: true,
  },
];

export interface Product {
  id: string;
  title: string;
  subtitle: string; // industry mapping
  desc: string;
  details: string;
  metrics: { label: string; value: string }[];
  color: string;
  industries: string[]; // industry names this product serves
  isComingSoon?: boolean;
}

export const products: Product[] = [
  {
    id: "01",
    title: "Insights",
    subtitle: "Enterprise Intelligence (Flagship Platform)",
    desc: "The ultimate command center for predictive intelligence and executive decision-making.",
    details:
      "Insights acts as the central nervous system for your enterprise. It ingests petabytes of multi-modal data in real-time to generate root cause analyses, predictive intelligence, and actionable recommendations. Executives gain zero-friction visibility into every operational metric, instantly turning complex data into a strategic advantage.",
    metrics: [
      { label: "Predictive Accuracy", value: "99.8%" },
      { label: "Data Latency", value: "1.2ms" },
      { label: "Integrations", value: "450+" },
    ],
    color: "#4EA8FF",
    industries: ["Enterprise Intelligence"],
  },
  {
    id: "02",
    title: "TriageAI",
    subtitle: "Telecommunications",
    desc: "Automated incident triage and NLP-powered ticket classification at scale.",
    details:
      "TriageAI revolutionizes telecom support by autonomously ingesting, categorizing, and routing network incidents before human agents are even alerted. Using advanced NLP, it correlates disparate support tickets to identify systemic network anomalies, reducing mean-time-to-resolution (MTTR) drastically.",
    metrics: [
      { label: "Triage Speed", value: "0.4s" },
      { label: "Resolution Lift", value: "68%" },
      { label: "Tickets/Min", value: "12K+" },
    ],
    color: "#3B82F6",
    industries: ["Telecommunications"],
  },
  {
    id: "03",
    title: "Aegis",
    subtitle: "Financial Services / Fraud Intelligence",
    desc: "Multi-layered threat defense and autonomous financial risk intelligence.",
    details:
      "Aegis doesn't just detect financial anomalies; it actively neutralizes them. By mapping transaction flows through advanced graph neural networks, it identifies complex anti-money laundering (AML) patterns and zero-day fraud attempts instantly, safeguarding enterprise revenue streams.",
    metrics: [
      { label: "Threats Blocked", value: "99.99%" },
      { label: "Response Time", value: "<1ms" },
      { label: "False Positives", value: "0.01%" },
    ],
    color: "#F43F5E",
    industries: ["Financial Services"],
  },
  {
    id: "04",
    title: "SignalIQ",
    subtitle: "Telecommunications / Enterprise Intelligence",
    desc: "Dynamic telemetry monitoring and autonomous network signaling intelligence.",
    details:
      "SignalIQ provides unparalleled visibility into enterprise network health. It autonomously monitors global edge nodes, predicting bandwidth bottlenecks and dynamically optimizing routing protocols to ensure seamless connectivity and zero-downtime operations.",
    metrics: [
      { label: "Nodes Monitored", value: "2M+" },
      { label: "Network Uptime", value: "99.999%" },
      { label: "Routing Latency", value: "8ms" },
    ],
    color: "#8B5CF6",
    industries: ["Telecommunications", "Enterprise Intelligence"],
  },
  {
    id: "05",
    title: "DataPulse",
    subtitle: "Data & Analytics",
    desc: "End-to-end data observability and intelligent pipeline quality monitoring.",
    details:
      "DataPulse acts as the guardian of your data warehouse. It continuously validates schema integrity, detects data drift, and monitors pipeline health in real-time. By resolving data quality issues autonomously, it ensures that your downstream analytics are always built on flawless foundations.",
    metrics: [
      { label: "Data Checked/sec", value: "50GB" },
      { label: "Anomaly Detection", value: "99.5%" },
      { label: "Pipeline Uptime", value: "100%" },
    ],
    color: "#F59E0B",
    industries: ["Data & Analytics"],
  },
  {
    id: "06",
    title: "CTV Analytics Hub",
    subtitle: "Media & Advertising",
    desc: "Predictive Connected TV analytics and real-time audience aggregation.",
    details:
      "The CTV Analytics Hub empowers media buyers and advertisers with hyper-granular audience intelligence. By aggregating fragmented streaming data, it provides real-time campaign analytics, predictive ad performance modeling, and cross-platform attribution with unmatched precision.",
    metrics: [
      { label: "Ad Impressions", value: "10B+" },
      { label: "Attribution Acc.", value: "98.2%" },
      { label: "ROI Lift", value: "3.4x" },
    ],
    color: "#EAB308",
    industries: ["Media & Advertising (CTV)"],
  },
  {
    id: "07",
    title: "FraudShield AI",
    subtitle: "Financial Services",
    desc: "Next-generation transactional fraud prevention and revenue protection.",
    details:
      "Designed specifically for high-frequency trading and retail banking, FraudShield AI uses deep learning to establish baseline behavioral models for millions of users. It detects subtle deviations indicative of account takeover or synthetic identity fraud in milliseconds.",
    metrics: [
      { label: "Fraud Stopped", value: "$4.2B" },
      { label: "Check Latency", value: "2ms" },
      { label: "User Profiles", value: "150M+" },
    ],
    color: "#10B981",
    industries: ["Financial Services"],
  },
  {
    id: "08",
    title: "MedVision AI",
    subtitle: "Healthcare",
    desc: "Clinical intelligence and autonomous medical risk prediction.",
    details:
      "MedVision AI transforms patient care by ingesting complex medical histories, genomics, and real-time biometric data to predict disease onset and patient risk factors. It empowers clinicians with highly accurate, data-backed second opinions at the point of care.",
    metrics: [
      { label: "Diagnostic Acc.", value: "99.1%" },
      { label: "Risk Flags", value: "14.2M" },
      { label: "Processing Speed", value: "0.8s" },
    ],
    color: "#00e5ff",
    industries: ["Healthcare"],
  },
  {
    id: "09",
    title: "CodeMorph AI",
    subtitle: "Enterprise Software Modernization",
    desc: "Intelligent legacy system modernization and automated SAS to PySpark translation.",
    details:
      "CodeMorph AI accelerates digital transformation by autonomously parsing and rewriting legacy codebases. From converting monolithic SAS architectures into optimized, distributed PySpark pipelines, it reduces modernization timelines from years to weeks while eliminating human error.",
    metrics: [
      { label: "Code Translated", value: "500M+" },
      { label: "Time Saved", value: "85%" },
      { label: "Syntax Accuracy", value: "99.9%" },
    ],
    color: "#6366F1",
    industries: ["Enterprise Software & Modernization"],
  },
  {
    id: "10",
    title: "Conversa Enterprise AI",
    subtitle: "Generative AI & Enterprise Intelligence",
    desc: "High-fidelity autonomous AI agents and conversational RAG systems.",
    details:
      "Conversa deploys secure, enterprise-grade AI assistants that instantly ground their reasoning in your organization's proprietary knowledge base via advanced RAG architecture. It acts as an autonomous agent capable of resolving complex workflows through natural language.",
    metrics: [
      { label: "Query Resolution", value: "94%" },
      { label: "Knowledge Nodes", value: "2B+" },
      { label: "Response Time", value: "0.2s" },
    ],
    color: "#14B8A6",
    industries: ["Generative AI & AI Agents", "Enterprise Intelligence"],
  },
  {
    id: "11",
    title: "SupplySync AI",
    subtitle: "Supply Chain Management",
    desc: "Unified Intelligence Platform synchronizing global supply chain operations.",
    details:
      "SupplySync AI connects independent software and hardware systems across the entire supply chain. It provides real-time failure alerts, detects localized anomalies, performs autonomous root cause analysis, and dynamically reroutes resources to mitigate operational risks before they impact the bottom line.",
    metrics: [
      { label: "Disruptions", value: "0" },
      { label: "Routes Optimized", value: "4.5M" },
      { label: "Cost Reduction", value: "28%" },
    ],
    color: "#F97316",
    industries: ["Supply Chain Management (New)"],
    isComingSoon: true,
  },
];

/** Mapping helper: get products for a given industry name */
export function getProductsForIndustry(industryName: string): Product[] {
  return products.filter((p) => p.industries.includes(industryName));
}

/** Mapping helper: get industries for a given product */
export function getIndustriesForProduct(productTitle: string): Industry[] {
  const product = products.find((p) => p.title === productTitle);
  if (!product) return [];
  return industries.filter((i) => product.industries.includes(i.name));
}
