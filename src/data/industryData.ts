import { 
  Radio, 
  TrendingUp, 
  HeartPulse, 
  ShoppingBag, 
  Database, 
  Tv, 
  Code2, 
  BrainCircuit, 
  Bot, 
  Box
} from "lucide-react";

export const industryData = [
  { 
    id: "01",
    name: "Telecommunications", 
    slug: "telecommunications",
    desc: "Automated Incident Triage, NLP-based Ticket Classification, Root Cause Analysis, Enterprise Monitoring, Intelligent Support Automation",
    icon: Radio,
    color: "#3B82F6",
    metric: "99.999% Uptime",
    products: ["TriageAI", "SignalIQ"],
    isNew: false,
    useCases: [
      { title: "Automated Incident Triage", elaboration: "Autonomously ingest and categorize network incidents before human agents are alerted, dramatically reducing MTTR." },
      { title: "NLP-based Ticket Classification", elaboration: "Leverage advanced natural language processing to understand complex customer reports and route them to the precise resolution team." },
      { title: "Root Cause Analysis", elaboration: "Correlate disparate support tickets and telemetry data to pinpoint systemic network anomalies in real-time." },
      { title: "Enterprise Monitoring", elaboration: "Monitor global edge nodes and infrastructure continuously to predict and prevent bandwidth bottlenecks." },
      { title: "Intelligent Support Automation", elaboration: "Deploy self-healing routines for common network issues, enabling zero-touch resolution at scale." }
    ]
  },
  { 
    id: "02",
    name: "Financial Services", 
    slug: "financial-services",
    desc: "AML & Fraud Detection, Financial Intelligence, AI-powered Enterprise Chatbots, Risk Intelligence, Revenue Intelligence",
    icon: TrendingUp,
    color: "#10B981",
    metric: "sub-ms Execution",
    products: ["Aegis", "FraudShield AI"],
    isNew: false,
    useCases: [
      { title: "AML & Fraud Detection", elaboration: "Map transaction flows through advanced graph neural networks to instantly identify complex money laundering and zero-day fraud attempts." },
      { title: "Financial Intelligence", elaboration: "Aggregate and analyze global market data to uncover hidden alpha and empower algorithmic trading decisions." },
      { title: "AI-powered Enterprise Chatbots", elaboration: "Provide secure, highly capable conversational agents that handle complex account inquiries and transaction routing." },
      { title: "Risk Intelligence", elaboration: "Continuously model portfolio exposure against volatile market conditions using predictive risk assessment." },
      { title: "Revenue Intelligence", elaboration: "Identify cross-sell opportunities and predict customer churn with hyper-personalized financial forecasting." }
    ]
  },
  { 
    id: "03",
    name: "Healthcare", 
    slug: "healthcare",
    desc: "Disease Prediction, Healthcare Predictive Analytics, Medical Risk Prediction, Healthcare Monitoring, Clinical Intelligence",
    icon: HeartPulse,
    color: "#00e5ff",
    metric: "99.8% Accuracy",
    products: ["MedVision AI"],
    isNew: false,
    useCases: [
      { title: "Disease Prediction", elaboration: "Ingest complex medical histories, genomics, and real-time biometrics to predict disease onset long before clinical symptoms appear." },
      { title: "Healthcare Predictive Analytics", elaboration: "Optimize hospital operations and resource allocation by forecasting patient admission volumes and seasonal trends." },
      { title: "Medical Risk Prediction", elaboration: "Empower clinicians with highly accurate, data-backed second opinions and personalized risk stratification at the point of care." },
      { title: "Healthcare Monitoring", elaboration: "Continuously analyze streaming data from wearable devices and ICU monitors to detect critical anomalies instantly." },
      { title: "Clinical Intelligence", elaboration: "Automate the extraction of structured insights from unstructured EHR notes, accelerating clinical decision-making." }
    ]
  },
  { 
    id: "04",
    name: "Retail", 
    slug: "retail",
    desc: "Customer Intelligence, Recommendation Systems, Anomaly Detection, Business Analytics",
    icon: ShoppingBag,
    color: "#EC4899",
    metric: "3.4x Conversion",
    products: ["Insights"],
    isNew: false,
    useCases: [
      { title: "Customer Intelligence", elaboration: "Build unified 360-degree profiles of customer behavior to drive hyper-personalized marketing and engagement." },
      { title: "Recommendation Systems", elaboration: "Deploy advanced collaborative filtering algorithms that serve the right product to the right user in real-time, boosting cart sizes." },
      { title: "Anomaly Detection", elaboration: "Monitor global inventory levels and POS transactions to immediately flag fraudulent purchases or supply chain bottlenecks." },
      { title: "Business Analytics", elaboration: "Turn fragmented retail data into strategic executive dashboards that optimize pricing, promotions, and margin expansion." }
    ]
  },
  { 
    id: "05",
    name: "Data & Analytics", 
    slug: "data-analytics",
    desc: "Data Observability, Data Quality Monitoring, Pipeline Intelligence, Enterprise Analytics, Data Platform Monitoring",
    icon: Database,
    color: "#F59E0B",
    metric: "Zero Data Loss",
    products: ["DataPulse"],
    isNew: false,
    useCases: [
      { title: "Data Observability", elaboration: "Act as the guardian of your data warehouse by providing end-to-end lineage and alerting on structural pipeline failures." },
      { title: "Data Quality Monitoring", elaboration: "Continuously validate schema integrity and detect subtle data drift before it contaminates downstream analytics." },
      { title: "Pipeline Intelligence", elaboration: "Autonomously identify and resolve data engineering bottlenecks to ensure perfect SLA adherence." },
      { title: "Enterprise Analytics", elaboration: "Empower business units with flawlessly verified datasets that form the foundation of executive reporting." },
      { title: "Data Platform Monitoring", elaboration: "Maintain zero downtime across complex, distributed data lakes and processing engines." }
    ]
  },
  { 
    id: "06",
    name: "Media & Advertising (CTV)", 
    slug: "media-advertising",
    desc: "Connected TV Analytics, Audience Intelligence, Campaign Analytics, Data Aggregation & Monitoring",
    icon: Tv,
    color: "#EAB308",
    metric: "4.2x ROI Lift",
    products: ["CTV Analytics Hub"],
    isNew: false,
    useCases: [
      { title: "Connected TV Analytics", elaboration: "Gain hyper-granular visibility into streaming consumption patterns across fragmented CTV platforms." },
      { title: "Audience Intelligence", elaboration: "Dynamically segment viewers based on behavioral data to enable highly targeted, high-yield ad placements." },
      { title: "Campaign Analytics", elaboration: "Provide real-time attribution modeling that proves exact ROI for multi-channel advertising campaigns." },
      { title: "Data Aggregation & Monitoring", elaboration: "Ingest and normalize massive streams of ad-server logs to detect fraud and ensure viewability standards are met." }
    ]
  },
  { 
    id: "07",
    name: "Enterprise Software & Modernization", 
    slug: "enterprise-modernization",
    desc: "SAS to PySpark Automation, Legacy System Modernization, Enterprise Software Development, Intelligent Automation",
    icon: Code2,
    color: "#8B5CF6",
    metric: "85% Faster Dev",
    products: ["CodeMorph AI"],
    isNew: false,
    useCases: [
      { title: "SAS to PySpark Automation", elaboration: "Autonomously parse and rewrite monolithic SAS codebases into optimized, distributed PySpark pipelines without human error." },
      { title: "Legacy System Modernization", elaboration: "Accelerate digital transformation by mapping and refactoring outdated architectures into modern, cloud-native microservices." },
      { title: "Enterprise Software Development", elaboration: "Provide AI-assisted coding and automated test generation to dramatically reduce sprint cycles." },
      { title: "Intelligent Automation", elaboration: "Deploy self-maintaining CI/CD pipelines that autonomously detect and revert breaking changes." }
    ]
  },
  { 
    id: "08",
    name: "Enterprise Intelligence", 
    slug: "enterprise-intelligence",
    desc: "Decision Intelligence, Predictive Intelligence, Executive Reporting, AI Recommendations, Root Cause Analysis, Enterprise Monitoring (Insights Platform)",
    icon: BrainCircuit,
    color: "#6366F1",
    metric: "0-Friction Insights",
    products: ["Insights"],
    isNew: false,
    useCases: [
      { title: "Decision Intelligence", elaboration: "Act as the central nervous system for your enterprise, turning petabytes of multi-modal data into strategic advantage." },
      { title: "Predictive Intelligence", elaboration: "Forecast market shifts and internal operational demands before they materialize." },
      { title: "Executive Reporting", elaboration: "Generate zero-friction, boardroom-ready dashboards that update in real-time with flawless accuracy." },
      { title: "AI Recommendations", elaboration: "Prescribe exact operational actions to maximize efficiency across supply chain, finance, and HR." },
      { title: "Root Cause Analysis", elaboration: "Instantly drill down from high-level KPI drops to the exact underlying technical or operational failure." },
      { title: "Enterprise Monitoring (Insights Platform)", elaboration: "Maintain a holistic, God-eye view of every critical system across the entire global organization." }
    ]
  },
  { 
    id: "09",
    name: "Generative AI & AI Agents", 
    slug: "generative-ai-agents",
    desc: "Enterprise AI Assistants, RAG Systems, Autonomous AI Agents, Conversational Intelligence Platforms",
    icon: Bot,
    color: "#14B8A6",
    metric: "95% Automation",
    products: ["Conversa Enterprise AI"],
    isNew: false,
    useCases: [
      { title: "Enterprise AI Assistants", elaboration: "Deploy secure, deeply integrated copilots that assist employees with complex internal workflows and data retrieval." },
      { title: "RAG Systems", elaboration: "Instantly ground AI reasoning in your organization's proprietary knowledge base via advanced Retrieval-Augmented Generation architectures." },
      { title: "Autonomous AI Agents", elaboration: "Unleash agents capable of multi-step reasoning that can autonomously execute tasks across third-party APIs." },
      { title: "Conversational Intelligence Platforms", elaboration: "Transform customer service with voice and text agents that understand context, nuance, and sentiment." }
    ]
  },
  { 
    id: "10",
    name: "Supply Chain Management", 
    slug: "supply-chain",
    desc: "Unified Supply Chain Intelligence Platform that synchronizes independent software and hardware systems across the supply chain, provides real-time failure/warning alerts, detects anomalies, performs root cause analysis, predicts operational risks, and keeps all stakeholders informed through a centralized intelligence and monitoring platform.",
    icon: Box,
    color: "#F59E0B", // signal-amber
    metric: "Zero Disruptions",
    products: ["SupplySync AI"],
    isNew: true,
    useCases: [
      { title: "Unified Intelligence Platform", elaboration: "Synchronize independent software and hardware systems across the entire global supply chain into a single pane of glass." },
      { title: "Real-time Alerts & Anomaly Detection", elaboration: "Detect localized bottlenecks and issue predictive failure warnings before shipments are delayed." },
      { title: "Root Cause Analysis & Risk Prediction", elaboration: "Autonomously trace delivery delays back to specific vendor failures or macro-economic events." },
      { title: "Centralized Monitoring", elaboration: "Dynamically reroute resources and keep all stakeholders informed to mitigate operational risks in real-time." }
    ]
  },
];
