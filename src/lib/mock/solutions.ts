import { Activity, Brain, FileBarChart, HeartPulse, Layers, Network, TrendingUp, Workflow } from "lucide-react";

export type SolutionMock = {
  slug: string;
  title: string;
  intro: string;
  challenge: string;
  approach: string[];
  integration: string;
  metrics: { value: string; label: string }[];
  insight: string;
  faq: { question: string; answer: string }[];
  highlights: string[];
  icon: typeof TrendingUp;
};

export const solutions: SolutionMock[] = [
  {
    slug: "revenue-optimization",
    icon: TrendingUp,
    title: "Revenue Optimization",
    intro: "Unlock durable margin across service lines, payer mix, and contract structures.",
    challenge: "Health systems lose 4-9% of net revenue to fragmented contracts, coding leakage, and undermanaged service line economics.",
    approach: [
      "Diagnose margin leakage at contract and encounter level",
      "Model yield by payer, service, and site",
      "Build governance for sustained recovery",
    ],
    integration: "Claims, remittance, EHR utilization, and contract data flow into a unified yield model maintained by the OATHSPAN platform.",
    metrics: [
      { value: "+18%", label: "Avg. margin uplift" },
      { value: "$42M", label: "Recovered annually (median)" },
      { value: "<90d", label: "Time to first impact" },
    ],
    insight: "Revenue is a system property, not a department. Real recovery starts when finance, RCM, and clinical operations share one truth.",
    faq: [
      {
        question: "How long until we see impact?",
        answer: "Most systems realize first-wave impact within 90 days, with sustained programs maturing over 12-18 months.",
      },
      {
        question: "Do you replace our RCM vendor?",
        answer: "No. We make your existing stack measurably more effective.",
      },
    ],
    highlights: ["Margin diagnostics", "Yield modeling", "Contract optimization"],
  },
  {
    slug: "value-based-care",
    icon: Network,
    title: "Value-Based Care Strategy",
    intro: "Activate durable economics across every risk arrangement.",
    challenge: "Most VBC contracts underperform because risk strategy, operations, and intelligence are not coordinated.",
    approach: ["Assess risk readiness", "Design portfolio strategy", "Operationalize performance management"],
    integration: "Quality measures, attribution, total cost of care, and contract terms connect into a unified VBC operating view.",
    metrics: [
      { value: "3.4x", label: "Shared savings improvement" },
      { value: "95%", label: "Quality measure attainment" },
      { value: "$120M", label: "Largest annual program" },
    ],
    insight: "VBC succeeds when it stops being a side initiative and becomes the operating model.",
    faq: [
      {
        question: "Can you support both ACO REACH and commercial risk?",
        answer: "Yes. The platform is contract-agnostic across federal, commercial, and Medicaid arrangements.",
      },
      {
        question: "Do you provide care management?",
        answer: "We enable, measure, and optimize care management - we do not replace it.",
      },
    ],
    highlights: ["Risk readiness", "VBC playbooks", "Performance management"],
  },
  {
    slug: "population-health",
    icon: HeartPulse,
    title: "Population Health Intelligence",
    intro: "Stratify, target, and act on the populations driving cost and quality.",
    challenge: "Population data exists but rarely informs operational decisions at the front line.",
    approach: ["Cohort intelligence", "Care gap activation", "Outcome tracking"],
    integration: "Claims, EHR, SDOH, and quality data unified into actionable cohorts.",
    metrics: [
      { value: "-22%", label: "Avoidable utilization" },
      { value: "+31%", label: "Care gap closure" },
      { value: "4.7x", label: "ROI on programs" },
    ],
    insight: "Population health is operational. Insight without execution doesn't change outcomes.",
    faq: [
      {
        question: "Do you build registries?",
        answer: "Yes - and we connect them into the operating workflow.",
      },
      {
        question: "How is data refreshed?",
        answer: "Daily for operational signals, with full reconciliation monthly.",
      },
    ],
    highlights: ["Cohort analytics", "Care gaps", "Outcomes tracking"],
  },
  {
    slug: "contracting-analytics",
    icon: FileBarChart,
    title: "Payment & Contracting Analytics",
    intro: "Model, negotiate, and monitor every payer agreement with confidence.",
    challenge: "Payer agreements are negotiated annually but managed continuously - and the data rarely keeps up.",
    approach: ["Term modeling", "Variance & yield tracking", "Negotiation intelligence"],
    integration: "Contract terms, claims, denials, and remittance unified at the line-item level.",
    metrics: [
      { value: "+6.2%", label: "Negotiated rate uplift" },
      { value: "-37%", label: "Underpayment leakage" },
      { value: "100%", label: "Contract visibility" },
    ],
    insight: "You can't negotiate what you can't measure.",
    faq: [
      {
        question: "Do you support hospital and physician contracts?",
        answer: "Both - across institutional and professional structures.",
      },
      {
        question: "Can you load custom fee schedules?",
        answer: "Yes. Any payer, any term type.",
      },
    ],
    highlights: ["Term modeling", "Variance tracking", "Negotiation intelligence"],
  },
  {
    slug: "operational-integration",
    icon: Workflow,
    title: "Enterprise Operational Integration",
    intro: "Connect operations, finance, and clinical execution into one operating model.",
    challenge: "Service lines, finance, and operations work in parallel rather than as one enterprise.",
    approach: ["Service line economics", "Throughput design", "Resource optimization"],
    integration: "Operational, financial, and clinical data are aligned at the unit, service, and site level.",
    metrics: [
      { value: "+14%", label: "Throughput" },
      { value: "-9%", label: "Cost per case" },
      { value: "+22%", label: "Capacity utilization" },
    ],
    insight: "Systemness is not a slogan - it is an operating discipline.",
    faq: [
      {
        question: "Do you replace operational leadership?",
        answer: "No, we equip and accelerate it.",
      },
      {
        question: "How do you measure success?",
        answer: "Through agreed enterprise KPIs measured before, during, and after engagement.",
      },
    ],
    highlights: ["Service line economics", "Throughput", "Resource optimization"],
  },
  {
    slug: "clinical-financial",
    icon: Layers,
    title: "Clinical + Financial Alignment",
    intro: "Bring clinicians and finance into a shared, defensible decision framework.",
    challenge: "Clinical and financial leaders too often work from incompatible data and incentives.",
    approach: ["Unified KPI architecture", "Cost-of-care intelligence", "Quality economics"],
    integration: "Clinical activity, cost accounting, and contract performance unified into one defensible view.",
    metrics: [
      { value: "100%", label: "Shared KPI alignment" },
      { value: "+11%", label: "Quality-adjusted margin" },
      { value: "-19%", label: "Variation in care" },
    ],
    insight: "When clinicians and finance share the same data, the conversation changes.",
    faq: [
      {
        question: "Do you require new cost accounting?",
        answer: "We integrate with existing systems and accelerate, not replace, them.",
      },
      {
        question: "Is this physician-facing?",
        answer: "Yes - with workflows tuned to clinical leadership cadence.",
      },
    ],
    highlights: ["Unified KPIs", "Cost-of-care", "Quality economics"],
  },
  {
    slug: "system-performance",
    icon: Activity,
    title: "Healthcare System Performance",
    intro: "Board-ready visibility across every dimension of system performance.",
    challenge: "Boards and executive teams need a single, defensible view of how the enterprise is performing - and where it's heading.",
    approach: ["Executive scorecards", "Benchmark intelligence", "Strategic forecasting"],
    integration: "Every domain - financial, operational, clinical, contractual - rolled into one executive operating view.",
    metrics: [
      { value: "1", label: "Source of truth" },
      { value: "24/7", label: "Executive visibility" },
      { value: "100%", label: "Board confidence" },
    ],
    insight: "When the executive team shares one truth, the enterprise moves faster.",
    faq: [
      {
        question: "Do you provide custom dashboards?",
        answer: "Yes - designed with your CEO and CFO.",
      },
      {
        question: "How often is data refreshed?",
        answer: "Operational data daily, financial monthly with mid-month signals.",
      },
    ],
    highlights: ["Executive scorecards", "Benchmarking", "Strategic forecasts"],
  },
  {
    slug: "predictive",
    icon: Brain,
    title: "Predictive Intelligence",
    intro: "Anticipate volatility in revenue, cost, and quality before it materializes.",
    challenge: "Most health systems react to volatility - predictive intelligence makes anticipation operational.",
    approach: ["Forecasting models", "Scenario engines", "Real-time risk signals"],
    integration: "Historical, operational, and external data combined into forward-looking models maintained by OATHSPAN.",
    metrics: [
      { value: "92%", label: "Forecast accuracy" },
      { value: "-15%", label: "Variance to plan" },
      { value: "<48h", label: "Risk signal latency" },
    ],
    insight: "The future is forecastable - when intelligence is institutional.",
    faq: [
      {
        question: "Is AI involved?",
        answer: "Yes - supervised, governed, and explainable.",
      },
      {
        question: "Do you guarantee accuracy?",
        answer: "We benchmark and improve every model continuously against actuals.",
      },
    ],
    highlights: ["Forecasting", "Scenario modeling", "Risk signals"],
  },
];

export const solutionLookup = Object.fromEntries(solutions.map((solution) => [solution.slug, solution])) as Record<
  string,
  SolutionMock
>;