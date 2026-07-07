// ============================================================
// Single source of truth for all site content (from CV, 2026)
// ============================================================

import utradeThumb from "../assets/img/UTrade_thumbnail.png";
import ticketThumb from "../assets/img/TicketTradingimg.png";
import neuralThumb from "../assets/img/NeuralComplete.png";
import ticTacToeThumb from "../assets/img/electictactoeimg.jpg";

import securityPaper from "../assets/pdf/Web_Application_Security_Paper.pdf";
import urvPoster from "../assets/pdf/URV_poster.pdf";
import ticketDocs from "../assets/pdf/CS320_429__Team_M_-_Project_Documentation.pdf";

export const identity = {
  name: "Himnish Chhabra",
  roles: ["AI/ML Engineer", "Full-Stack Developer", "Researcher"],
  education: "BS CS + Math, UMass Amherst '26 → MS CS, UIUC",
  email: "himnishchhabra@gmail.com",
  github: "https://github.com/himccoder",
  linkedin: "https://www.linkedin.com/in/himnish-chhabra-3534a22b3/",
};

// Achievement ticker — replaces the old Awards section
export const marquee = [
  "UMass Chancellor's Award",
  "Dean's List × 7 Semesters",
  "Best Hardware Hack — HackUMass XI",
  "UW Digital Health Challenge Winner",
  "NASEC Presenter — Dean Nominated",
  "Published — IEEE Pipeline",
  "National-Level Tennis Player",
  "Dean's Advisory Committee",
];

export const profile = {
  bio: [
    "I build systems where machine learning meets the real world — from privacy-preserving multi-agent AI and GPU operating systems to carbon-aware infrastructure and quant pipelines.",
    "Currently finishing a CS + Math double major at UMass Amherst, headed to UIUC for my MS in Computer Science this fall. Off the keyboard, I compete at the national level in tennis — same instinct either way: read the play, strike fast.",
  ],
  stats: [
    { value: "3.7", label: "GPA · UMass Amherst" },
    { value: "5", label: "Research Labs" },
    { value: "1", label: "Publication · IEEE Pipeline" },
    { value: "2", label: "Hackathon / Challenge Wins" },
  ],
};

// tags: RESEARCH | INDUSTRY | TEACHING
export const experience = [
  {
    role: "Research Assistant",
    org: "NLP Lab · UMass Amherst",
    dates: "Jun 2026 — Present",
    tag: "RESEARCH",
    summary:
      "Research on LLMs and Transformers with Prof. Katrin Erk — details forthcoming.",
  },
  {
    role: "Research Assistant",
    org: "Computational Design Lab (PROPEL) · UMass Amherst",
    dates: "Jan 2026 — Present",
    tag: "RESEARCH",
    summary:
      "Neural reparameterization for structural topology optimization: 12-condition ablation across MLP, Fourier MLP, SIREN, and U-Net CNN parameterizations with PyTorch + FEM solvers.",
  },
  {
    role: "Quant Research & AI Engineering Intern",
    org: "Crypt0nest",
    dates: "Jan 2026 — May 2026",
    tag: "INDUSTRY",
    summary:
      "Engineered a fail-fast Bronze→Silver crypto data pipeline (0.5% loss gate), lookahead-free RSI/EMA/Bollinger features, and a modular Python backtesting engine scoring ML models on Sharpe and max drawdown.",
  },
  {
    role: "Research Assistant",
    org: "Laboratory for Advanced System Software (LASS)",
    dates: "Dec 2025 — Jan 2026",
    tag: "RESEARCH",
    summary:
      "Technical analysis of LithOS — a GPU operating system for efficient ML workloads: fine-grained scheduling, kernel atomization, software-level resource control.",
  },
  {
    role: "Software Engineering Intern",
    org: "Altheros Capital",
    dates: "Sep 2025 — Dec 2025",
    tag: "INDUSTRY",
    summary:
      "Raised Cara.ai recommendation CTR 15% via Bayesian A/B analytics on 500+ users; built secure telehealth video with Twilio, FastAPI, PostgreSQL, and AWS.",
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "CICS · UMass Amherst",
    dates: "Sep 2025 — May 2026",
    tag: "TEACHING",
    summary:
      "Computer Networks & Security — weekly support sessions for 150+ students; building network simulations for secure-protocol intuition.",
  },
  {
    role: "Research Replication Study",
    org: "UMass Cybersecurity Institute · Crypto Lab",
    dates: "Sep 2025 — Dec 2025",
    tag: "RESEARCH",
    summary:
      "Replicated the Scale-and-Perturb (SAP) encryption scheme, measuring effects on encrypted ML robustness. Dean-nominated to present at the 14th Naval Academy Science & Engineering Conference.",
  },
  {
    role: "Publication — Web App Security Framework",
    org: "Society of North American Scholars (SNAS)",
    dates: "Oct 2025",
    tag: "RESEARCH",
    summary:
      "Hybrid static/dynamic/bi-LSTM vulnerability detection framework — F1 0.85, beating existing tools by 10–25%. In publication pipeline with IEEE.",
    link: { href: securityPaper, label: "Read the paper" },
  },
  {
    role: "Research Assistant",
    org: "Resource Bounded Reasoning Lab · UMass Amherst",
    dates: "May 2025 — Aug 2025",
    tag: "RESEARCH",
    summary:
      "Privacy-preserving multi-agent AI: built an MCP Blackboard Server for auditable inter-agent communication and a Redis pipeline tracing 1,000+ events across 20+ agents; 2× testing throughput.",
  },
  {
    role: "Undergraduate Research Volunteer",
    org: "GreenBalance · UMass Amherst",
    dates: "Jun 2025 — Aug 2025",
    tag: "RESEARCH",
    summary:
      "Carbon-aware load balancing with HAProxy Dataplane + WattTime APIs — cut simulated CO₂ emissions up to 42%.",
    link: { href: urvPoster, label: "View poster" },
  },
  {
    role: "Software Development Intern",
    org: "sOliver Group · Delhi, India",
    dates: "Jun 2024 — Aug 2024",
    tag: "INDUSTRY",
    summary:
      "Real-time supply chain monitoring over $380M sourcing volume — containerized Node.js microservices (Docker, Kubernetes) processing 10,000+ daily transactions; cut airfreight costs 12%.",
  },
];

export const projects = [
  {
    title: "UTrade",
    description:
      "Real-time campus marketplace for UMass — Stripe Connect escrow with 6-digit PIN release, BullMQ expiry jobs, Socket.IO live updates. Deployed on Vercel + Railway.",
    stack: ["React", "Socket.IO", "MongoDB", "Redis", "Stripe"],
    img: utradeThumb,
    live: "https://u-trade-beige.vercel.app/",
    badge: null,
  },
  {
    title: "BrainBoost",
    description:
      "Cognitive training platform with 4 clinically-grounded brain games and print-ready neurologist reports. Won the UW Tech Exploration Lab Digital Health Challenge.",
    stack: ["React", "Supabase", "PostgreSQL", "Gemini API"],
    img: null, // TODO: add screenshot
    badge: "CHALLENGE WINNER",
  },
  {
    title: "RoomMatchr",
    description:
      "Secure roommate matching for UMass students — ML compatibility scoring, E2E-encrypted chat, 200+ concurrent users on Spring Boot + MySQL.",
    stack: ["React", "Spring Boot", "MySQL", "OAuth"],
    img: null, // TODO: add screenshot
    badge: null,
  },
  {
    title: "Ticket Trading App",
    description:
      "Led a team of 6 building a real-time bidding platform for university event tickets — stock-market mechanics with live price updates and order matching.",
    stack: ["Node.js", "React", "MongoDB", "Socket.IO"],
    img: ticketThumb,
    repo: "https://github.com/marco-dm1/CS320-Team-M",
    deliverable: ticketDocs,
    badge: null,
  },
  {
    title: "Neural Complete",
    description:
      "Character-level RNN built from scratch in PyTorch — custom recurrent cells, backprop, and training loops for next-character prediction.",
    stack: ["Python", "PyTorch", "NumPy"],
    img: neuralThumb,
    repo: "https://github.com/himccoder/Neural-Complete",
    badge: null,
  },
  {
    title: "Elec-TIC-TAC-TOE",
    description:
      "Physical Tic-Tac-Toe with custom circuitry, LEDs, buzzers, and an Arduino game engine. Best Hardware Hack at HackUMass XI.",
    stack: ["Arduino", "C++"],
    img: ticTacToeThumb,
    repo: "https://github.com/himccoder/elec-TIC-TAC-TOE",
    badge: "BEST HARDWARE HACK",
  },
];

export const skills = {
  domains: [
    {
      title: "AI / ML & Research",
      blurb: "Training, evaluating, and attacking models — in the lab and in production.",
      items: ["PyTorch", "scikit-learn", "Pandas / NumPy", "LLMs & Transformers", "MCP", "OpenAI / DeepSeek APIs"],
    },
    {
      title: "Full-Stack",
      blurb: "Shipping real products with modern frameworks end to end.",
      items: ["React", "TypeScript", "Node / Express", "FastAPI", "Spring Boot", "Tailwind CSS"],
    },
    {
      title: "Systems & Cloud",
      blurb: "Containers, orchestration, and infrastructure that scales.",
      items: ["Docker", "Kubernetes", "AWS", "Redis", "HAProxy", "CI/CD"],
    },
    {
      title: "Data",
      blurb: "Relational, document, and realtime stores — picked per problem.",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
    },
  ],
  languages: ["Python", "Java", "JavaScript / TypeScript", "C"],
};

export const navLinks = [
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
