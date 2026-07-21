// ============================================================
// Single source of truth for all site content (from CV/Resume, 2026)
// ============================================================

import portrait from "../assets/img/portrait.jpg";

import uiucLogo from "../assets/img/logos/uiuc.png";
import umassLogo from "../assets/img/logos/University_of_Massachusetts_Amherst_seal.png";
import pythonLogo from "../assets/img/logos/python.png";
import javaLogo from "../assets/img/logos/java.svg";
import jsLogo from "../assets/img/logos/js.png";
import cLogo from "../assets/img/logos/c.png";

import utradeThumb from "../assets/img/UTrade_thumbnail.png";
import ticketThumb from "../assets/img/TicketTradingimg.png";
import neuralThumb from "../assets/img/NeuralComplete.png";
import ticTacToeThumb from "../assets/img/electictactoeimg.jpg";

import securityPaper from "../assets/pdf/Web_Application_Security_Paper.pdf";
import urvPoster from "../assets/pdf/URV_poster.pdf";
import ticketDocs from "../assets/pdf/CS320_429__Team_M_-_Project_Documentation.pdf";

export const identity = {
  name: "Himnish Chhabra",
  email: "himnishchhabra@gmail.com",
  github: "https://github.com/himccoder",
  linkedin: "https://www.linkedin.com/in/himnish-chhabra-3534a22b3/",
  portrait,
};

// Education — shown as clean logo lockups near the hero
export const education = [
  {
    school: "University of Illinois Urbana-Champaign",
    short: "UIUC · Siebel School",
    degree: "MS, Computer Science",
    dates: "2026 — 2027",
    logo: uiucLogo,
  },
  {
    school: "University of Massachusetts Amherst",
    short: "UMass Amherst",
    degree: "BS, Computer Science + Mathematics",
    dates: "2022 — 2026",
    logo: umassLogo,
    award: "Chancellor's Award — highest merit scholarship",
  },
];

// Language logos for the Skills section
export const languageLogos = [
  { name: "Python", logo: pythonLogo },
  { name: "Java", logo: javaLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "C", logo: cLogo },
];

export const about = {
  bio: [
    "I'm a computer scientist graduated with a CS + Math double major from UMass Amherst and heading to UIUC's Siebel School for my MS in Computer Science.",
    "My work sits in the domains of AI, systems, security and quant — across six research labs and several engineering internships I've built privacy-preserving multi-agent AI, studied GPU operating systems, shipped carbon-aware infrastructure, and engineered quantitative data pipelines.",
  ],
};

// ── PRIORITY 1 ── Work / industry experience
export const work = [
  {
    role: "Quantitative Research & AI Engineering Intern",
    org: "Crypt0nest",
    dates: "2026",
    summary:
      "Built a fail-fast crypto data pipeline and a Python backtesting engine scoring ML models on Sharpe ratio and drawdown.",
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "CICS · UMass Amherst",
    dates: "2025 — 2026",
    summary:
      "Ran weekly help sessions for 150+ students in Computer Networks & Security and built network simulations for secure protocols.",
  },
  {
    role: "Software Engineering Intern",
    org: "Altheros Capital",
    dates: "2025",
    summary:
      "Raised Cara.ai recommendation CTR 15% with Bayesian A/B analytics, and shipped secure telehealth video on FastAPI + AWS.",
  },
  {
    role: "Software Development Intern",
    org: "Resource Bounded Reasoning Lab · UMass Amherst",
    dates: "2025",
    summary:
      "Built an MCP Blackboard Server tracing malicious agent communication in multi-agent AI — secure logging and a Redis pipeline monitoring 1,000+ events across 20+ agents.",
  },
];

// ── PRIORITY 2 ── Research experience & publications
export const research = [
  {
    role: "Research Assistant",
    lab: "NLP Lab · UMass Amherst",
    advisor: "Prof. Katrin Erk",
    dates: "2026 — Present",
    summary: "LLMs and Transformers — model behavior and representation.",
  },
  {
    role: "Research Assistant",
    lab: "Computational Design Lab · UMass Amherst",
    advisor: "Prof. Saketh Sridhara",
    dates: "2026 — Present",
    summary:
      "Neural reparameterization for topology optimization — a 12-condition ablation in PyTorch + FEM isolating the architectural prior as a key driver of compliance reduction.",
  },
  {
    role: "Research Assistant",
    lab: "Advanced System Software Lab (LASS)",
    advisor: "Prof. Nikko Bovornkeeratiroj",
    dates: "2025 — 2026",
    summary:
      "Analyzed LithOS, a GPU operating system for efficient ML workloads — scheduling, kernel atomization, and software-level resource control.",
  },
  {
    role: "Research Replication Study",
    lab: "Cybersecurity Institute · Crypto Lab",
    advisor: "Prof. Adam O'Neill",
    dates: "2025",
    summary:
      "Replicated the Scale-and-Perturb encryption scheme on encrypted-ML robustness. Dean-nominated to present at NASEC.",
    badge: "Dean-nominated",
  },
  {
    role: "Undergraduate Research Volunteer",
    lab: "GreenBalance · UMass Amherst",
    advisor: "Mentor: Thanathorn Sukprasert",
    dates: "2025",
    summary:
      "Carbon-aware load balancing with HAProxy + WattTime — cut simulated data-center CO₂ up to 42%.",
    link: { href: urvPoster, label: "View poster" },
  },
  {
    role: "Publication — Web App Security Verification",
    lab: "Society of North American Scholars",
    advisor: "Sole author",
    dates: "2025",
    summary:
      "Hybrid static/dynamic + bi-LSTM web-vulnerability detection — F1 0.85, beating existing tools 10–25%. In the IEEE pipeline.",
    badge: "IEEE pipeline",
    link: { href: securityPaper, label: "Read the paper" },
  },
];

// ── PRIORITY 3 ── Projects
export const projects = [
  {
    title: "UTrade",
    description:
      "Real-time campus marketplace with Stripe Connect escrow, PIN release, and live Socket.IO updates.",
    stack: ["React", "Socket.IO", "MongoDB", "Stripe"],
    img: utradeThumb,
    live: "https://u-trade-beige.vercel.app/",
    badge: null,
  },
  {
    title: "BrainBoost",
    description:
      "Cognitive-training platform with clinically-grounded brain games and neurologist-ready reports.",
    stack: ["React", "Supabase", "PostgreSQL", "Gemini API"],
    img: null,
    live: "https://brain-boost-eta.vercel.app/",
    badge: "Challenge Winner",
  },
  {
    title: "RoomMatchr",
    description:
      "Roommate matching for UMass students with ML compatibility scoring and encrypted real-time chat.",
    stack: ["React", "Spring Boot", "MySQL", "OAuth"],
    img: null,
    badge: null,
  },
  {
    title: "Ticket Trading App",
    description:
      "Real-time bidding platform for university event tickets — live pricing and order matching.",
    stack: ["Node.js", "React", "MongoDB", "Socket.IO"],
    img: ticketThumb,
    repo: "https://github.com/marco-dm1/CS320-Team-M",
    deliverable: ticketDocs,
    badge: null,
  },
  {
    title: "Neural Complete",
    description:
      "Character-level RNN built from scratch in PyTorch — custom cells, backprop, and training loops.",
    stack: ["Python", "PyTorch", "NumPy"],
    img: neuralThumb,
    repo: "https://github.com/himccoder/Neural-Complete",
    badge: null,
  },
  {
    title: "Elec-TIC-TAC-TOE",
    description:
      "Physical Tic-Tac-Toe with custom circuitry and an Arduino game engine. Best Hardware Hack, HackUMass XI.",
    stack: ["Arduino", "C++"],
    img: ticTacToeThumb,
    repo: "https://github.com/himccoder/elec-TIC-TAC-TOE",
    badge: "Best Hardware Hack",
  },
];

// ── PRIORITY 4 ── Leadership & extracurriculars
export const extracurriculars = [
  {
    title: "Founder & President",
    org: "UMass Competitive Programming Club",
    dates: "2024 — 2026",
    icon: "trophy",
    note: "Founded and led the club — practices, contests and a growing problem-solving community.",
  },
  {
    title: "Dean's Advisory Committee",
    org: "CICS Startup Initiatives",
    dates: "2025 — 2026",
    icon: "users",
    note: "Advised college leadership on student-facing and startup initiatives.",
  },
  {
    title: "CICS Mentor",
    org: "UMass Amherst",
    dates: "2025 — 2026",
    icon: "compass",
    note: "Mentored freshmen and sophomores through the CS program.",
  },
  {
    title: "Tennis",
    org: "National-level player",
    dates: "Ongoing",
    icon: "tennis",
    note: "Competing in national-level tournaments alongside engineering.",
  },
];

export const skills = {
  domains: [
    {
      title: "AI / ML & Research",
      icon: "spark",
      items: ["PyTorch", "scikit-learn", "Pandas / NumPy", "LLMs & Transformers", "MCP", "OpenAI / DeepSeek APIs"],
    },
    {
      title: "Web Dev",
      icon: "code",
      items: ["React", "TypeScript", "Node / Express", "FastAPI", "Spring Boot", "Tailwind CSS"],
    },
    {
      title: "Systems & Cloud",
      icon: "server",
      items: ["Docker", "Kubernetes", "AWS", "Redis", "HAProxy", "CI/CD"],
    },
    {
      title: "Data",
      icon: "database",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
    },
  ],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
];
