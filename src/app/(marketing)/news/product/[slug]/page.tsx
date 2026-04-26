"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Calendar, ArrowLeft, ArrowUpRight } from "lucide-react";

/* Map badge label → chip color class */
function badgeChip(badge: string) {
  const b = badge.toLowerCase();
  if (b.includes("flagship"))       return "chip chip-purple";
  if (b.includes("launch"))         return "chip chip-green";
  if (b.includes("feature"))        return "chip chip-blue";
  if (b.includes("security"))       return "chip chip-red";
  if (b.includes("infrastructure")) return "chip chip-teal";
  if (b.includes("coming"))         return "chip chip-amber";
  return "chip";
}

/* ── Product article data ── */
const productArticles: Record<string, {
  title: string; badge: string; date: string; image: string;
  hero: string; tryLink?: string; tryLabel?: string;
  noBanner?: boolean;
  sections: { heading: string; body: string; bullets?: string[]; }[];
  metrics?: { label: string; value: string }[];
  callout?: { label: string; text: string };
  achievements?: { title: string; desc: string; tag: string; tagColor: string }[];
  benchmarkTable?: { headers: string[]; rows: { model: string; scores: number[]; highlight?: boolean }[]; };
  benchmarks?: { title: string; columns: { heading: string; items: string[] }[] };
  benchmarkCallout?: { label: string; text: string };
  enterprise?: { intro: string; columns: { heading: string; items: string[] }[] };
  codeExample?: { intro: string; code: string };
  migration?: { intro: string; steps: string[] };
  author: string; readTime: string; tags: string[];
  related?: { slug: string; title: string; badge: string; desc: string }[];
}> = {
  "osmium": {
    title: "Osmium AI: Learning That Feels Personal",
    badge: "Flagship Launch", date: "Jan 15, 2025",
    image: "/assets/osmium-mockup.png",
    hero: "Osmium AI is built to make learning feel clear, focused, and personal. It combines AI-guided courses, smart test analysis, and adaptive learning into one seamless experience — so students spend less time figuring out what to do next and more time actually improving.",
    tryLink: "https://www.osmium.co.in/", tryLabel: "Try Osmium AI",
    callout: { label: "Historic Achievement", text: "Outperformed leading global LLMs in benchmarked educational content generation (August 15, 2025). Deployed with 276 students at Rai University, Ahmedabad." },
    sections: [
      { heading: "Structured Personal Learning", body: "Each course is designed to feel approachable and progressive — structured clarity, not complexity.", bullets: ["Clear breakdown of lessons and duration", "Gentle introduction to set context", "Smart states to track your progress", "Progressive difficulty that adapts to your pace"] },
      { heading: "Designed for Focus, Not Distraction", body: "Every lesson blends formats seamlessly into one flow. It feels less like consuming content, more like moving forward.", bullets: ["Video for understanding", "Clean reading for depth", "Interactive formats: podcast, question bank, quizzes, and flashcards", "Distraction-free reading environment"] },
      { heading: "Smart AI Mock Tests for Exam Preparation", body: "Practice is where Osmium AI becomes truly adaptive. Tests aren't static — they're generated based on patterns, previous performance, and learning behavior.", bullets: ["AI-generated exams aligned with real exam patterns", "Clean, distraction-free attempt interface", "Smart navigation across subjects and questions", "Section-wise insights and accuracy tracking", "Deep question-level analysis with explanations"] },
      { heading: "AI Mentoring & Personalization", body: "Everything in Osmium AI quietly learns from you. From courses to tests to suggestions — the system adapts in the background.", bullets: ["Personalized recommendations based on weak areas", "Context-aware suggestions for improvement", "AI mentor that guides, not interrupts", "Career guidance based on your strengths", "Mental wellness monitoring to keep burnout in check"] },
    ],
    achievements: [
      { title: "Global LLM Benchmark Victory", desc: "Outperformed leading global LLMs in benchmarked educational content generation", tag: "August 15, 2025", tagColor: "text-purple-600" },
      { title: "Real-World Deployment", desc: "Deployed with 276 students at Rai University, Ahmedabad", tag: "Proven Results", tagColor: "text-green-600" },
      { title: "Predictive Accuracy", desc: "Up to 50% predictive accuracy in generating mock exams", tag: "JEE, NEET, GATE", tagColor: "text-blue-600" },
      { title: "Mental Health Integration", desc: "Proactive mental health support against exam anxiety", tag: "Wellness First", tagColor: "text-pink-600" },
    ],
    benchmarks: {
      title: "Educational Performance Results",
      columns: [
        { heading: "Content & Accuracy", items: ["Content Quality: +17% vs GPT-4 and Claude 3", "Mock Exam Accuracy: Up to 50% overlap with real questions", "Learning Retention: 1.8x higher vs traditional classrooms"] },
        { heading: "Student Engagement & Wellness", items: ["Student Engagement: +42% vs top EdTech tools", "Reported Stress Levels: Down by 35%", "Pilot Success: 276 students at Rai University"] },
      ],
    },
    benchmarkCallout: { label: "Full Benchmark Documentation", text: "Complete methodology, evaluation criteria, and detailed results available in our comprehensive benchmark documentation." },
    enterprise: {
      intro: "Osmium 2.0 is built for educational institutions with robust security, scalability, and compliance features:",
      columns: [
        { heading: "Security & Compliance", items: ["End-to-end encryption with zero trust protocols", "GDPR + NEP compliant", "Rock-solid academic integrity by design"] },
        { heading: "Scalability", items: ["Multi-institution deployments, fail-safe load balancing", "AWS infrastructure (S3, CloudFront, Cognito, Bedrock)", "99.99% uptime SLA guaranteed"] },
      ],
    },
    codeExample: {
      intro: "Osmium 2.0 provides comprehensive APIs for educational platform integration:",
      code: `// Predictive Exam Generation Example
const osmium = new OsmiumClient({
  apiKey: 'your-api-key',
  version: '2.0'
});

const result = await osmium.examGenerator({
  subject: "Physics",
  examType: "JEE",
  difficulty: "moderate",
  count: 10
});

console.log(result.questions);`,
    },
    migration: {
      intro: "Upgrading to Osmium 2.0 is seamless with our zero-downtime migration process:",
      steps: ["Update to SDK 2.0", "Run compatibility checker", "Update API endpoints (with auto-redirects)", "Sandbox test > production deploy", "Zero downtime upgrade path"],
    },
    quote: "Learning should feel calm, guided, and deeply personal — not cluttered or mechanical.",
    author: "Varun Yadav, Co-Founder & Director", readTime: "12 min read",
    tags: ["AI", "EdTech", "Education"],
    related: [{ slug: "osmiumllm", title: "OsmiumLLM Benchmark", badge: "Flagship", desc: "World's smartest educational LLM" }, { slug: "natraj", title: "Natraj AR Platform", badge: "Feature Update", desc: "AR + AI-powered anatomy learning platform" }],
  },
  "osmiumllm": {
    title: "OsmiumLLM: A Global Benchmark in Education-Focused AI",
    badge: "Flagship Launch", date: "Aug 15, 2025",
    image: "/assets/osmium-mockup.png",
    noBanner: true,
    hero: "Osmium has emerged as the world's smartest educational LLM, surpassing even the newly released GPT-5. With a massive 96B parameters trained exclusively for education, it sets a new global benchmark in the domain, redefining the future of AI-powered learning.",
    tryLink: "https://www.osmium.co.in/", tryLabel: "Try OsmiumLLM",
    callout: { label: "Global #1 in Education AI", text: "OsmiumLLM scored 98 in High School Academics and 97 in Reasoning — outperforming GPT-5, Claude 4 (Opus), Gemini 2.5 Pro, DeepSeek R1, and Llama 4 across all five educational benchmarks." },
    benchmarkTable: {
      headers: ["Model", "High School Academics", "Higher Academics", "Mental Health", "General Knowledge", "Reasoning"],
      rows: [
        { model: "OsmiumLLM", scores: [98, 96, 82, 92, 97], highlight: true },
        { model: "GPT-5", scores: [97, 95, 85, 97, 95] },
        { model: "Claude 4 (Opus)", scores: [93, 93, 87, 94, 93] },
        { model: "Gemini 2.5 Pro", scores: [94, 93, 86, 96, 94] },
        { model: "DeepSeek R1", scores: [91, 92, 80, 90, 92] },
        { model: "GPT-4.5/o3", scores: [92, 91, 81, 83, 90] },
        { model: "Grok 3", scores: [91, 90, 79, 91, 93] },
        { model: "Llama 4", scores: [89, 88, 78, 89, 88] },
      ],
    },
    sections: [
      { heading: "Why OsmiumLLM Leads", body: "Unlike general-purpose LLMs that treat education as a secondary capability, OsmiumLLM was architectured from the ground up for learning. Its 96 billion parameters are trained on curated educational corpora spanning NCERT, JEE, NEET, GATE, university-level curricula, and competitive exam datasets — making it the most domain-specialized model in production today.", bullets: ["96B parameters trained exclusively on educational datasets", "Purpose-built architecture for pedagogy, not generic chat", "Covers school to postgraduate — NCERT, JEE, NEET, GATE, and beyond", "Outperforms GPT-5, Claude 4, and Gemini 2.5 Pro in head-to-head benchmarks"] },
      { heading: "Personalized Learning at Scale", body: "OsmiumLLM doesn't just answer questions — it understands how each student learns. It adapts content difficulty, pacing, and format in real time based on individual performance patterns, weak areas, and cognitive load.", bullets: ["Adaptive difficulty that responds to student performance in real time", "Personalized study plans based on weak-area analysis", "Context-aware explanations that match the student's level", "Multi-format output: video recommendations, flashcards, and detailed solutions"] },
      { heading: "AI Mentorship & Mental Wellness", body: "Education isn't just about grades. OsmiumLLM integrates proactive mentorship and mental health monitoring to ensure students stay motivated, focused, and balanced through exam preparation.", bullets: ["AI mentor that identifies burnout signals early", "Exam anxiety detection and coping strategy suggestions", "Career guidance based on academic strengths and interests", "Motivational nudges timed to individual study patterns"] },
      { heading: "Predictive Test Generation", body: "OsmiumLLM's most powerful capability — generating mock exams that predict real questions. By analyzing years of question patterns across JEE, NEET, and GATE, it produces practice papers with up to 50% overlap with actual exam content.", bullets: ["Pattern analysis across 10+ years of competitive exam papers", "Up to 50% predictive accuracy with real exam questions", "Difficulty-calibrated tests that mirror actual exam structure", "Instant detailed analysis with performance insights after every attempt"] },
    ],
    achievements: [
      { title: "#1 in High School Academics", desc: "Scored 98 — the highest of any LLM including GPT-5 (97) and Gemini 2.5 Pro (94)", tag: "Global Leader", tagColor: "text-purple-600" },
      { title: "#1 in Reasoning", desc: "Scored 97 in logical reasoning — ahead of GPT-5 (95) and Claude 4 (93)", tag: "Reasoning", tagColor: "text-blue-600" },
      { title: "96B Parameters", desc: "Purpose-built architecture trained exclusively for education", tag: "Education-First", tagColor: "text-green-600" },
      { title: "50% Exam Prediction", desc: "Up to 50% overlap between AI-generated and real exam questions", tag: "Proven Accuracy", tagColor: "text-pink-600" },
    ],
    quote: "We didn't build another chatbot. We built the world's most intelligent education engine.",
    author: "Varun Yadav, Co-Founder & Director", readTime: "10 min read",
    tags: ["LLM", "AI", "Education", "Benchmark"],
    related: [{ slug: "osmium", title: "Osmium AI 2.0 Platform", badge: "Flagship Launch", desc: "The platform powered by OsmiumLLM" }],
  },
  "natraj": {
    title: "Natraj: AR + AI Anatomy Learning Platform",
    badge: "Feature Update", date: "Jan 10, 2025",
    image: "/assets/nataraj_mockup.png",
    hero: "Revolutionizing anatomy education with real-time AR body scans, interactive 3D models, and an AI tutor that transforms traditional medical learning into an engaging, accessible, and clinically accurate experience.",
    tryLink: "https://natraj.navchetna.tech", tryLabel: "Try Now",
    callout: { label: "Key Innovation", text: "Immersive AR overlays and AI-driven tutoring that provide interactive, clinically accurate insights tailored to students' needs." },
    sections: [
      { heading: "Skeletal System (Phase 1)", body: "AR Body Scan and 3D Bone Visualization — explore the human skeleton like never before.", bullets: ["AR Body Scan: Overlay skeletal structures in real time", "3D Bone Visualization: Accurate anatomical proportions", "Interactive Labels: Tap to reveal names, functions, and clinical notes", "AI Q&A: Instant answers on anatomy and pathology"] },
      { heading: "Fracture & Pathology Simulation (Phase 2)", body: "Realistic clinical simulations that deepen understanding of injury, disease, and healing.", bullets: ["Realistic fracture demonstrations with visual overlays", "Animated healing stage progressions", "Pediatric vs. adult anatomy comparisons"] },
      { heading: "Advanced Learning Capabilities (Phase 5)", body: "AI Tutor, VR Mode, and Surgical Training — the full spectrum of immersive medical education.", bullets: ["AI Tutor: Guided lessons, quizzes, and instant explanations", "Virtual Reality Mode: Full-body immersive simulations", "Surgical Training: Safe practice modules for professionals"] },
    ],
    achievements: [
      { title: "Knowledge Retention", desc: "+40% improvement in anatomy knowledge retention vs traditional methods", tag: "Validated", tagColor: "text-green-600" },
      { title: "Practical Understanding", desc: "+55% increase in practical understanding through AR visualization", tag: "AR-Powered", tagColor: "text-blue-600" },
      { title: "Engagement Increase", desc: "+60% student engagement compared to textbook-based learning", tag: "Interactive", tagColor: "text-purple-600" },
      { title: "Mobile-First Design", desc: "Built for accessibility — works on any modern smartphone camera", tag: "Universal Access", tagColor: "text-pink-600" },
    ],
    author: "Navchetna EdTech Team", readTime: "10 min read",
    tags: ["AR", "AI", "EdTech"],
    related: [{ slug: "osmium", title: "Osmium AI 2.0 Platform", badge: "Flagship Launch", desc: "Revolutionary AI platform for personalized learning" }],
  },
  "aegis": {
    title: "Aegis Auth v3.0: The New Standard for Digital Identity",
    badge: "Security", date: "Jan 15, 2026",
    image: "/assets/aegis1.png",
    hero: "In an era of fragmented user bases and escalating security threats, Aegis Auth v3.0 emerges as the definitive solution for enterprise identity. Built on a memory-safe Rust architecture and engineered for FIPS 140-2 compliance.",
    callout: { label: "Benchmark Breakthrough", text: "<5ms Token Validation Latency in production — a new global standard for high-velocity authentication." },
    sections: [
      { heading: "Unified Identity Management", body: "Consolidation of disparate identity providers into a single canonical source.", bullets: ["Memory-safe Rust-based authentication core", "Sub-millisecond token validation", "FIPS 140-2 compliance out of the box", "Zero-trust architecture by default"] },
      { heading: "Enterprise Integration", body: "Aegis Auth seamlessly integrates with existing enterprise infrastructure.", bullets: ["OAuth 2.0, SAML 2.0, and OpenID Connect support", "LDAP and Active Directory federation", "Multi-tenant isolation with shared infrastructure", "Automated certificate rotation and key management"] },
    ],
    achievements: [
      { title: "Token Validation", desc: "<5ms token validation latency in production environments", tag: "Industry Leading", tagColor: "text-purple-600" },
      { title: "Rust Architecture", desc: "Memory-safe core built entirely in Rust for maximum reliability", tag: "Zero Vulnerabilities", tagColor: "text-green-600" },
      { title: "Uptime SLA", desc: "99.99% uptime guarantee with automated failover systems", tag: "Enterprise Grade", tagColor: "text-blue-600" },
      { title: "FIPS 140-2", desc: "Full compliance with federal security standards out of the box", tag: "Certified", tagColor: "text-pink-600" },
    ],
    author: "Varun Yadav, Co-Founder & Director", readTime: "12 min read",
    tags: ["Security", "Auth", "Rust"],
    related: [{ slug: "vajra", title: "Vajra GPU Cloud", badge: "Infrastructure", desc: "Sovereign serverless GPU cloud infrastructure" }],
  },
  "nsl": {
    title: "NSL: The Silent Engine of Financial Truth",
    badge: "Product Launch", date: "Jan 20, 2025",
    image: "/assets/nsl.png",
    hero: "Smart Billing, Automated Invoicing, Zero Manual Effort. NSL is an intelligent billing and ledger management system that tracks usage and billing data silently throughout the month — acting as a centralized brain for all user transactions.",
    sections: [
      { heading: "Automated Billing Lifecycle", body: "NSL manages the entire billing lifecycle from metering to invoicing.", bullets: ["Real-time usage metering and tracking", "Automated invoice generation and delivery", "Subscription management with flexible billing cycles", "Multi-currency and multi-region support"] },
      { heading: "Financial Intelligence", body: "Beyond billing, NSL provides actionable financial insights.", bullets: ["Revenue analytics and forecasting", "Anomaly detection in billing patterns", "Automated reconciliation and audit trails", "Integration with major accounting platforms"] },
    ],
    achievements: [
      { title: "Fully Automated", desc: "End-to-end billing lifecycle without manual intervention", tag: "Zero Touch", tagColor: "text-green-600" },
      { title: "Guaranteed Accuracy", desc: "Immutable ledger with automated reconciliation and audit trails", tag: "Financial Grade", tagColor: "text-blue-600" },
      { title: "Infinite Scale", desc: "From 10 to 10,000 users — seamless horizontal scaling", tag: "10 → 10,000", tagColor: "text-purple-600" },
      { title: "Real-Time Intelligence", desc: "Revenue analytics, anomaly detection, and forecasting built-in", tag: "Smart Billing", tagColor: "text-pink-600" },
    ],
    author: "Ayushmaan Soni, Founder & CEO", readTime: "8 min read",
    tags: ["Billing", "Finance", "ERP"],
    related: [{ slug: "kriya", title: "Kriya AI Builder", badge: "Coming Soon", desc: "Build anything from plain English descriptions" }],
  },
  "lmlens": {
    title: "LM Lens: Transforming Chaos into Clean Data",
    badge: "Product Launch", date: "Jan 15, 2025",
    image: "/assets/lmlens.png",
    hero: "Stop typing data manually. LM Lens automatically converts unstructured documents into clean, actionable data using advanced OCR, Computer Vision, and LLM intelligence — unlike traditional OCR tools, it adapts dynamically to any document format without requiring rigid templates.",
    sections: [
      { heading: "Intelligent Extraction Engine", body: "LM Lens goes beyond traditional OCR with AI-powered understanding.", bullets: ["Dynamic template-free document parsing", "Multi-format support: PDFs, images, handwritten notes", "Context-aware field extraction and validation", "Batch processing with parallel execution"] },
      { heading: "Integration & Deployment", body: "Deploy LM Lens anywhere with flexible integration options.", bullets: ["REST API with webhook notifications", "On-premise and cloud deployment options", "Real-time streaming extraction for high-volume pipelines", "Custom model fine-tuning for specialized domains"] },
    ],
    achievements: [
      { title: "90% Less Manual Work", desc: "Eliminates manual data entry with AI-powered extraction", tag: "Automation", tagColor: "text-green-600" },
      { title: "10x Faster Processing", desc: "Parallel batch processing with real-time streaming", tag: "Performance", tagColor: "text-blue-600" },
      { title: "99% Accuracy", desc: "Context-aware field validation with LLM intelligence", tag: "Precision", tagColor: "text-purple-600" },
      { title: "Universal Format", desc: "PDFs, images, handwritten notes — no rigid templates needed", tag: "Any Document", tagColor: "text-pink-600" },
    ],
    author: "Navchetna LM Lens Team", readTime: "10 min read",
    tags: ["OCR", "AI", "Data"],
    related: [{ slug: "aegis", title: "Aegis Auth v3.0", badge: "Security", desc: "Memory-safe authentication system" }],
  },
  "vajra": {
    title: "Vajra: The AWS Lambda for AI",
    badge: "Infrastructure", date: "Mar 1, 2025",
    image: "/assets/osmium (1).png",
    hero: "Vajra is a sovereign serverless GPU cloud designed to solve the industry's utilization crisis. By employing a novel 'Frozen Core + Hot Adapter' architecture, we achieve sub-500ms cold starts for 70B+ LLMs and enable pay-per-gradient fine-tuning.",
    callout: { label: "Cost Revolution", text: "Supports 50-100 concurrent tenants on a single A100 GPU, delivering enterprise-grade infrastructure at 1/100th the cost of traditional cloud providers." },
    sections: [
      { heading: "Frozen Core + Hot Adapter Architecture", body: "A novel approach to GPU utilization that eliminates cold start penalties.", bullets: ["Sub-500ms cold starts for 70B+ parameter LLMs", "Pay-per-gradient fine-tuning — no idle GPU costs", "Multi-tenant isolation on shared GPU hardware", "Automatic model sharding and load balancing"] },
      { heading: "Sovereign Cloud Infrastructure", body: "Built for organizations that need data sovereignty without compromising performance.", bullets: ["On-premise and hybrid deployment options", "Data residency guarantees with regional isolation", "FIPS-compliant encryption at rest and in transit", "Zero-knowledge inference for sensitive workloads"] },
    ],
    achievements: [
      { title: "Sub-500ms Cold Starts", desc: "Near-instant inference for 70B+ parameter LLMs", tag: "Breakthrough", tagColor: "text-purple-600" },
      { title: "100x Cost Reduction", desc: "Enterprise-grade GPU at 1/100th the cost of traditional cloud", tag: "Economics", tagColor: "text-green-600" },
      { title: "50-100 Concurrent Tenants", desc: "Multi-tenant isolation on a single A100 GPU", tag: "Efficiency", tagColor: "text-blue-600" },
      { title: "Data Sovereignty", desc: "On-premise and hybrid deployment with regional isolation", tag: "Sovereign", tagColor: "text-pink-600" },
    ],
    author: "Navchetna Infrastructure Team", readTime: "12 min read",
    tags: ["GPU", "Cloud", "Infrastructure"],
    related: [{ slug: "aegis", title: "Aegis Auth v3.0", badge: "Security", desc: "Memory-safe Rust-based authentication" }],
  },
  "kriya": {
    title: "Kriya: The Future of AI-Integrated ERP & Project Management",
    badge: "Coming Soon", date: "Q3 2025",
    image: "/assets/kriya1.png",
    hero: "Kriya isn't just another ERP or project management tool — it's an evolution. Where traditional platforms stop at automation, Kriya goes further: it predicts workflow bottlenecks, optimizes team performance, and integrates AI-driven insights across your entire organization.",
    callout: { label: "Executive Summary", text: "Built with next-gen intelligence, real-time analytics, and productivity-focused automation. This is not management as usual — it's management elevated." },
    sections: [
      { heading: "Adaptive Workflow AI", body: "Kriya doesn't just track projects — it predicts, guides, and optimizes your entire workflow in real time.", bullets: ["Real-time adaptation to team performance and resource availability", "Automated task prioritization based on deadlines, dependencies, and capacity", "Personalized AI recommendations for managers and team members", "Predictive delay detection before conflicts occur"] },
      { heading: "Predictive Project Intelligence", body: "Our advanced AI engine reshapes how projects are planned and executed from day one.", bullets: ["Generates actionable insights to boost efficiency and reduce costs", "Structured step-by-step roadmap for project milestones", "Resource conflict resolution before they escalate", "Historical pattern analysis for better future estimates"] },
      { heading: "Team Wellness & Productivity Insights", body: "Efficiency is worthless if your team burns out. Kriya is the first platform to fuse performance metrics with employee well-being.", bullets: ["Early detection of burnout or workload stress signals", "AI-driven suggestions for balanced task allocation", "Team motivation nudges and productivity prompts", "Manager dashboards for holistic oversight of performance and wellness"] },
      { heading: "Enterprise Security & Scale", body: "Built for organizations that demand the highest standards of security, compliance, and reliability.", bullets: ["End-to-end encryption with zero trust protocols", "GDPR, ISO 27001, and SOC 2 compliant", "Automated audit trails for complete accountability", "AWS infrastructure with 99.99% uptime SLA"] },
    ],
    achievements: [
      { title: "+40% Workflow Efficiency", desc: "AI-driven task prioritization and resource optimization", tag: "Proven", tagColor: "text-green-600" },
      { title: "Predictive Delay Detection", desc: "Identifies bottlenecks before they impact timelines", tag: "Proactive", tagColor: "text-blue-600" },
      { title: "99.99% Uptime SLA", desc: "AWS-backed infrastructure with automated failover", tag: "Enterprise", tagColor: "text-purple-600" },
      { title: "SOC 2 Compliant", desc: "GDPR, ISO 27001, and SOC 2 certified from day one", tag: "Certified", tagColor: "text-pink-600" },
    ],
    quote: "Kriya isn't just software. It's a mentor, a strategist, and a guardian of your projects.",
    author: "Varun Yadav, Co-Founder & Director", readTime: "12 min read",
    tags: ["AI", "ERP", "Management"],
    related: [{ slug: "osmium", title: "Osmium AI", badge: "Flagship", desc: "AI-powered personal learning platform" }],
  },
  "crm": {
    title: "Vyom: Intelligent Customer Relationship Management",
    badge: "Coming Soon", date: "Q4 2025",
    image: "/assets/Frame 110.png",
    hero: "Advanced Customer Relationship Management tailored for seamless interactions and data-driven insights. Our CRM combines AI-powered analytics with intuitive workflows to transform how businesses manage customer relationships.",
    sections: [
      { heading: "AI-Powered Insights", body: "Move beyond traditional CRM with intelligent automation.", bullets: ["Predictive lead scoring and conversion forecasting", "Automated customer segmentation and targeting", "Sentiment analysis across all communication channels", "Smart task prioritization based on deal potential"] },
      { heading: "Unified Communication Hub", body: "All customer touchpoints in one place.", bullets: ["Email, chat, and call integration", "Automated follow-up scheduling", "Template management with personalization", "Cross-team collaboration on deals"] },
    ],
    author: "Navchetna Product Team", readTime: "8 min read",
    tags: ["CRM", "Enterprise", "AI"],
    related: [{ slug: "nsl", title: "NSL Smart Ledger", badge: "Product Launch", desc: "Intelligent billing and ledger management" }],
  },
  "agentic-sde": {
    title: "Vega: Autonomous Software Engineering",
    badge: "Coming Soon", date: "Q4 2025",
    image: "/assets/Frame 112.png",
    hero: "Next-generation software engineering platform driven by agentic AI capabilities. Agentic SDE collaborates with development teams to write, review, test, and deploy code autonomously while maintaining human oversight.",
    sections: [
      { heading: "Autonomous Development", body: "An AI agent that understands codebases and ships features.", bullets: ["Context-aware code generation across entire repositories", "Automated pull request creation with documentation", "Intelligent bug detection and fix suggestions", "End-to-end feature implementation from ticket to deployment"] },
      { heading: "Team Collaboration", body: "Works alongside your team, not as a replacement.", bullets: ["Code review with detailed explanations", "Architecture suggestions based on best practices", "Automated test generation and maintenance", "Knowledge base building from codebase history"] },
    ],
    author: "Navchetna Engineering Team", readTime: "10 min read",
    tags: ["AI", "SDE", "Engineering"],
    related: [{ slug: "kriya", title: "Kriya", badge: "Coming Soon", desc: "Build anything from plain English" }],
  },
  "unified-storage": {
    title: "Yugm: Unified Synced Storage with Version Control",
    badge: "Coming Soon", date: "2026",
    image: "/assets/Frame 113.png",
    hero: "A unified synced storage platform with inbuilt version control for seamless asset management across teams, projects, and infrastructure. Built for organizations that need reliable, versioned, and synchronized file management.",
    sections: [
      { heading: "Version Control Built-In", body: "Every file, every change, fully tracked.", bullets: ["Git-like versioning for all file types", "Branching and merging for collaborative workflows", "Conflict resolution with visual diff tools", "Complete audit trail and rollback capabilities"] },
      { heading: "Seamless Synchronization", body: "Real-time sync across all devices and teams.", bullets: ["Cross-platform desktop and mobile clients", "Selective sync for bandwidth optimization", "Offline-first architecture with smart conflict resolution", "End-to-end encryption for data in transit and at rest"] },
    ],
    author: "Navchetna Infrastructure Team", readTime: "8 min read",
    tags: ["Storage", "Infrastructure", "DevOps"],
    related: [{ slug: "vajra", title: "Vajra GPU Cloud", badge: "Infrastructure", desc: "Sovereign serverless GPU cloud" }],
  },
};

export default function ProductArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = productArticles[slug] as typeof productArticles[string] & { quote?: string };
  if (!article) notFound();

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-[48rem] mx-auto px-6 sm:px-10 pb-28">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[12px] text-black/35 pt-8 pb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Link href="/news" className="hover:text-black transition-colors">News</Link>
          <span className="text-black/20">/</span>
          <Link href="/news/product" className="hover:text-black transition-colors">Product Launches</Link>
          <span className="text-black/20">/</span>
          <span className="text-black/50">{article.title.split(":")[0]}</span>
        </nav>

        {/* Hero */}
        <ScrollReveal>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-7">
              <span className={badgeChip(article.badge)}>{article.badge}</span>
              <span className="text-[12px] text-black/35 flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                <Calendar className="size-3" />
                {article.date}
              </span>
            </div>
            <h1
              className="text-black mb-16"
              style={{ fontFamily: "var(--font-waldenburg)", fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
            >
              {article.title}
            </h1>
            <p className="text-[0.925rem] text-black/70 leading-[1.75] max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              {article.hero}
            </p>
            {article.tryLink && (
              <Link href={article.tryLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-9 bg-black text-white text-[13px] font-semibold px-6 py-3 rounded-full hover:bg-black/80 transition-colors">
                {article.tryLabel || "Try Now"} <ArrowUpRight className="size-3.5" />
              </Link>
            )}
          </div>
        </ScrollReveal>

        <div className="border-t border-black/[0.07] mb-14" />

        {/* Banner Image — conditional */}
        {!article.noBanner && (
          <ScrollReveal>
            <div className="relative w-full aspect-[16/9] mb-16 overflow-hidden rounded-xl border border-black/[0.07] bg-black/[0.02]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                quality={75}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        )}

        {/* Callout — accent left border */}
        {article.callout && (
          <ScrollReveal>
            <div className="mb-16 rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.055) 0%, rgba(139,92,246,0.015) 100%)", border: "1px solid rgba(139,92,246,0.12)" }}>
              <div className="flex">
                <div className="w-[3px] shrink-0 rounded-l-xl" style={{ background: "rgb(139,92,246)" }} />
                <div className="px-7 py-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3.5" style={{ color: "rgb(139,92,246)" }}>{article.callout.label}</p>
                  <p className="text-[0.9rem] text-black/80 leading-[1.75]" style={{ fontFamily: "'Inter', sans-serif" }}>{article.callout.text}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Benchmark Comparison Table */}
        {article.benchmarkTable && (
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-black mb-14" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "1.35rem", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                Education-Focused LLM Benchmark
              </h2>
              <div className="rounded-xl border border-black/[0.08] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <thead>
                      <tr style={{ background: "rgba(0,0,0,0.03)" }}>
                        {article.benchmarkTable.headers.map((h, i) => (
                          <th key={i} className="px-5 py-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 whitespace-nowrap border-b border-black/[0.06]">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {article.benchmarkTable.rows.map((row) => (
                        <tr key={row.model} className="border-b border-black/[0.05] last:border-0" style={row.highlight ? { background: "linear-gradient(90deg, rgba(139,92,246,0.06) 0%, rgba(139,92,246,0.02) 100%)" } : {}}>
                          <td className={`px-5 py-3.5 text-[0.82rem] whitespace-nowrap ${row.highlight ? "font-bold text-black" : "font-medium text-black/75"}`}>
                            {row.model}
                          </td>
                          {row.scores.map((score, i) => {
                            const isTopInCol = article.benchmarkTable!.rows.every(r => score >= r.scores[i]);
                            return (
                              <td key={i} className={`px-5 py-3.5 text-[0.82rem] tabular-nums ${row.highlight ? "font-bold text-black" : isTopInCol ? "font-semibold text-black/85" : "text-black/60"}`}>
                                {score}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-[0.78rem] text-black/40 mt-4 leading-[1.65]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Benchmark scores based on standardized educational content evaluation across five domains. Higher is better.
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Key Achievements — 2×2 card grid */}
        {article.achievements && (
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-black mb-14" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "1.35rem", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {article.achievements.map((a) => (
                  <div key={a.title} className="border border-black/[0.08] rounded-xl p-6 hover:border-black/[0.14] transition-colors" style={{ background: "linear-gradient(145deg, #ffffff 0%, rgba(0,0,0,0.008) 100%)" }}>
                    <h3 className="text-[0.95rem] text-black font-semibold mb-3" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.01em" }}>{a.title}</h3>
                    <p className="text-[0.82rem] text-black/58 leading-[1.7] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{a.desc}</p>
                    <span className={`inline-block text-[0.72rem] font-semibold px-2.5 py-1 rounded-full ${a.tagColor}`} style={{ fontFamily: "'Inter', sans-serif", background: "rgba(0,0,0,0.035)" }}>{a.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Sections — pill-card layout instead of plain dots */}
        <div className="space-y-16">
          {article.sections.map((s, i) => (
            <ScrollReveal key={i}>
              <div>
                <h2 className="text-black mb-14" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "1.2rem", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                  {s.heading}
                </h2>
                <p className="text-[0.9rem] text-black/72 leading-[1.75] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {s.body}
                </p>
                {s.bullets && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.bullets.map((b, j) => (
                      <div key={j} className="flex items-start gap-3 px-4 py-3.5 rounded-lg border border-black/[0.06]" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.018) 0%, rgba(0,0,0,0.005) 100%)" }}>
                        <span className="mt-[0.35rem] size-1.5 rounded-full bg-black/25 shrink-0" />
                        <span className="text-[0.82rem] text-black/70 leading-[1.65]" style={{ fontFamily: "'Inter', sans-serif" }}>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Performance Benchmarks */}
        {article.benchmarks && (
          <ScrollReveal>
            <div className="mt-18">
              <h2 className="text-black mb-14" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "1.35rem", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                Performance Benchmarks
              </h2>
              <div className="rounded-xl p-7 sm:p-9 mb-6" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.045) 0%, rgba(59,130,246,0.01) 100%)", border: "1px solid rgba(59,130,246,0.12)" }}>
                <h3 className="text-[0.95rem] text-black font-semibold mb-8" style={{ fontFamily: "var(--font-waldenburg)" }}>{article.benchmarks.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {article.benchmarks.columns.map((col) => (
                    <div key={col.heading}>
                      <h4 className="text-[0.8rem] font-bold text-black/80 mb-4 uppercase tracking-[0.08em]" style={{ fontFamily: "'Inter', sans-serif" }}>{col.heading}</h4>
                      <ul className="space-y-3">
                        {col.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-[0.82rem] text-black/65 leading-[1.65]" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <span className="mt-[0.45rem] size-1 rounded-full bg-blue-400/60 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Benchmark Callout */}
        {article.benchmarkCallout && (
          <ScrollReveal>
            <div className="mb-16 rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.055) 0%, rgba(59,130,246,0.015) 100%)", border: "1px solid rgba(59,130,246,0.14)" }}>
              <div className="flex">
                <div className="w-[3px] shrink-0 rounded-l-xl" style={{ background: "rgb(59,130,246)" }} />
                <div className="px-7 py-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2.5" style={{ color: "rgb(37,99,235)" }}>{article.benchmarkCallout.label}</p>
                  <p className="text-[0.87rem] text-black/72 leading-[1.75]" style={{ fontFamily: "'Inter', sans-serif" }}>{article.benchmarkCallout.text}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Enterprise Features */}
        {article.enterprise && (
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-black mb-14" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "1.35rem", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                Enterprise Features
              </h2>
              <p className="text-[0.9rem] text-black/68 leading-[1.75] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>{article.enterprise.intro}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {article.enterprise.columns.map((col) => (
                  <div key={col.heading} className="rounded-xl p-6" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.04) 0%, rgba(59,130,246,0.01) 100%)", border: "1px solid rgba(59,130,246,0.1)" }}>
                    <h3 className="text-[0.9rem] font-semibold text-black mb-5" style={{ fontFamily: "var(--font-waldenburg)" }}>{col.heading}</h3>
                    <ul className="space-y-3">
                      {col.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[0.82rem] text-black/65 leading-[1.65]" style={{ fontFamily: "'Inter', sans-serif" }}>
                          <span className="mt-[0.45rem] size-1 rounded-full bg-blue-400/60 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Integration APIs — Code Example */}
        {article.codeExample && (
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-black mb-14" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "1.35rem", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                Integration APIs
              </h2>
              <p className="text-[0.9rem] text-black/68 leading-[1.75] mb-7" style={{ fontFamily: "'Inter', sans-serif" }}>{article.codeExample.intro}</p>
              <div className="rounded-xl overflow-hidden" style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="px-5 py-3 border-b border-white/[0.06] flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-red-400/60" />
                  <span className="size-2.5 rounded-full bg-yellow-400/60" />
                  <span className="size-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-3 text-[11px] text-white/25" style={{ fontFamily: "'Inter', sans-serif" }}>osmium-client.js</span>
                </div>
                <pre className="p-6 sm:p-8 overflow-x-auto">
                  <code className="text-[0.8rem] leading-[1.85] block whitespace-pre" style={{ fontFamily: "'Fira Code', 'JetBrains Mono', 'Courier New', monospace", color: "rgba(134,239,172,0.88)" }}>
                    {article.codeExample.code}
                  </code>
                </pre>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Migration Guide */}
        {article.migration && (
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-black mb-14" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "1.35rem", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                Migration Guide
              </h2>
              <p className="text-[0.9rem] text-black/68 leading-[1.75] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>{article.migration.intro}</p>
              <div className="space-y-3">
                {article.migration.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 px-5 py-4 rounded-lg border border-black/[0.06]" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.018) 0%, rgba(0,0,0,0.005) 100%)" }}>
                    <span className="shrink-0 size-6 flex items-center justify-center rounded-full bg-black/[0.06] text-[0.72rem] font-bold text-black/50 mt-[1px]" style={{ fontFamily: "'Inter', sans-serif" }}>{i + 1}</span>
                    <span className="text-[0.875rem] text-black/72 leading-[1.7] pt-[2px]" style={{ fontFamily: "'Inter', sans-serif" }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Pull Quote */}
        {(article as { quote?: string }).quote && (
          <ScrollReveal>
            <blockquote className="my-18 pl-7 border-l-[3px] border-black/15">
              <p className="text-[1.05rem] text-black/45 leading-[1.8] italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
                &ldquo;{(article as { quote?: string }).quote}&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>
        )}

        {/* Footer meta */}
        <div className="border-t border-black/[0.07] mt-18 pt-8 flex flex-wrap items-center gap-3">
          <span className="text-[12.5px] text-black/35 flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>
            {article.author} · {article.readTime}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span key={tag} className="border border-black/[0.07] px-2.5 py-1 rounded-md text-[11px] font-medium text-black/40" style={{ fontFamily: "'Inter', sans-serif" }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {article.related && article.related.length > 0 && (
          <ScrollReveal>
            <div className="mt-16 pt-10 border-t border-black/[0.07]">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30 mb-7">Related Articles</p>
              <div className="flex flex-col gap-3">
                {article.related.map((r) => (
                  <Link key={r.slug} href={`/news/product/${r.slug}`}
                    className="group flex items-center justify-between p-5 rounded-xl border border-black/[0.07] hover:border-black/[0.14] hover:bg-black/[0.015] transition-all">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-black/30 mb-2 block">{r.badge}</span>
                      <p className="text-[1rem] text-black" style={{ fontFamily: "var(--font-waldenburg)" }}>{r.title}</p>
                      <p className="text-[13px] text-black/45 mt-1.5 leading-relaxed">{r.desc}</p>
                    </div>
                    <ArrowUpRight className="size-4 text-black/25 group-hover:text-black transition-colors shrink-0 ml-6" />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Back link */}
        <div className="mt-14">
          <Link href="/news/product" className="inline-flex items-center gap-2 text-[13px] font-medium text-black/40 hover:text-black transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
            <ArrowLeft className="size-3.5" /> Back to Product Launches
          </Link>
        </div>

      </div>
    </div>
  );
}
