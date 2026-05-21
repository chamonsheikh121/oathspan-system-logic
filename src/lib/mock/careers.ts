export type CareerPosition = {
  slug: string;
  title: string;
  location: string;
  department: string;
  type: string;
  summary: string;
  mission: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  salary: string;
};

export const positions: CareerPosition[] = [
  {
    slug: "senior-healthcare-strategy-director",
    title: "Senior Healthcare Strategy Director",
    location: "Remote · US",
    department: "Strategy & Advisory",
    type: "Full-time",
    summary: "Lead enterprise transformation programs for health systems navigating growth, margin, and operating model change.",
    mission: "Shape the strategic direction of client engagements and turn complex healthcare economics into clear executive decisions.",
    responsibilities: [
      "Own executive client relationships and strategic workstreams",
      "Translate market, operational, and financial signals into recommendations",
      "Guide cross-functional teams through delivery milestones",
      "Develop thought leadership and client-ready materials",
    ],
    requirements: [
      "10+ years in healthcare strategy, consulting, or system transformation",
      "Strong executive presence and board-level communication skills",
      "Ability to synthesize financial and operational data",
      "Experience leading complex, multi-stakeholder initiatives",
    ],
    benefits: ["Competitive compensation", "Flexible remote work", "Senior leadership access", "High-impact mission work"],
    salary: "$180k - $230k",
  },
  {
    slug: "principal-data-engineer",
    title: "Principal Data Engineer",
    location: "Boston, MA",
    department: "Platform",
    type: "Full-time",
    summary: "Build the data foundation that powers analytics, forecasting, and executive intelligence across the OATHSPAN platform.",
    mission: "Create trustworthy, scalable data systems that turn fragmented healthcare data into reliable decision support.",
    responsibilities: [
      "Architect and maintain ingestion, transformation, and serving layers",
      "Optimize data quality, observability, and lineage",
      "Partner with product and analytics teams on platform needs",
      "Improve performance and governance across core pipelines",
    ],
    requirements: [
      "8+ years of data engineering experience",
      "Deep experience with modern warehouses and orchestration",
      "Strong SQL, Python, and distributed systems skills",
      "Healthcare data experience is preferred",
    ],
    benefits: ["Equity potential", "Flexible hybrid schedule", "Modern stack", "Build from first principles"],
    salary: "$170k - $220k",
  },
  {
    slug: "value-based-care-lead",
    title: "Value-Based Care Lead",
    location: "Remote · US",
    department: "Solutions",
    type: "Full-time",
    summary: "Drive VBC strategy, operating models, and performance programs for health system and payer clients.",
    mission: "Help clients design durable value-based care programs that improve economics and quality together.",
    responsibilities: [
      "Lead VBC assessments and strategic roadmaps",
      "Support contract, quality, and care model alignment",
      "Facilitate workshops with clinical and executive leaders",
      "Track performance and adapt strategy over time",
    ],
    requirements: [
      "7+ years in value-based care or population health",
      "Experience with ACOs, risk, or managed care models",
      "Comfort operating at the intersection of strategy and execution",
      "Excellent facilitation and client communication skills",
    ],
    benefits: ["Mission-driven work", "Remote-first culture", "Cross-functional exposure", "Fast-moving team"],
    salary: "$160k - $205k",
  },
  {
    slug: "healthcare-economist",
    title: "Healthcare Economist",
    location: "Chicago, IL",
    department: "Intelligence",
    type: "Full-time",
    summary: "Develop economic models and executive insights that explain margin, variation, and performance across the enterprise.",
    mission: "Turn healthcare economics into practical guidance that executives can use immediately.",
    responsibilities: [
      "Build economic models and scenario analyses",
      "Translate operational data into executive insights",
      "Support payer, margin, and utilization analysis",
      "Collaborate on content and thought leadership",
    ],
    requirements: [
      "Advanced degree in economics, public policy, or related field",
      "Experience in healthcare economics or analytics",
      "Strong quantitative and storytelling ability",
      "Comfort working with ambiguous, high-stakes problems",
    ],
    benefits: ["Strong analyst culture", "Competitive pay", "Influence on product direction", "Executive visibility"],
    salary: "$150k - $190k",
  },
  {
    slug: "director-client-transformation",
    title: "Director, Client Transformation",
    location: "Remote · US",
    department: "Delivery",
    type: "Full-time",
    summary: "Lead delivery programs that move clients from diagnosis to measurable operating change.",
    mission: "Ensure every engagement produces practical, durable change for the client organization.",
    responsibilities: [
      "Own transformation plans and delivery governance",
      "Coordinate stakeholders across clinical, finance, and operations",
      "Manage risk, scope, and milestone delivery",
      "Measure outcomes and capture lessons learned",
    ],
    requirements: [
      "Experience in healthcare consulting or transformation",
      "Strong project and stakeholder management skills",
      "Comfort operating in complex, matrixed environments",
      "Ability to keep teams aligned around measurable outcomes",
    ],
    benefits: ["High autonomy", "Visible impact", "Collaborative culture", "Flexible schedule"],
    salary: "$165k - $210k",
  },
  {
    slug: "senior-product-designer",
    title: "Senior Product Designer",
    location: "Remote · US",
    department: "Platform",
    type: "Full-time",
    summary: "Design elegant, decision-focused experiences for executives, operators, and clinicians.",
    mission: "Make complex healthcare intelligence clear, beautiful, and actionable.",
    responsibilities: [
      "Design dashboards, workflows, and product surfaces",
      "Collaborate with engineering and product on IA and interaction design",
      "Prototype and test concepts with users",
      "Raise the quality bar across the brand and product experience",
    ],
    requirements: [
      "6+ years of product design experience",
      "Strong portfolio demonstrating systems thinking",
      "Ability to design for data-rich products",
      "Proficiency in Figma and modern design workflows",
    ],
    benefits: ["Creative ownership", "Remote flexibility", "Impactful product scope", "Strong design culture"],
    salary: "$145k - $190k",
  },
];

export const positionLookup = Object.fromEntries(positions.map((position) => [position.slug, position])) as Record<
  string,
  CareerPosition
>;