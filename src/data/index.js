// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const NAV_LINKS = ["About", "Services", "Projects", "Certifications", "Contact"];

// ─── SERVICES ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    icon: "</>",
    title: "Smart Contract Development",
    desc: "Secure, optimized, and scalable smart contracts for blockchain applications using Solidity and Hedera.",
  },
  {
    icon: "⬡",
    title: "DApp Development",
    desc: "Decentralized applications with seamless Web3 integrations, wallet connectivity, and responsive UI.",
  },
  {
    icon: "◻",
    title: "Portfolio Websites",
    desc: "Personalized, elegant, and responsive portfolio sites that highlight your brand and story.",
  },
  {
    icon: "⊕",
    title: "Web Applications",
    desc: "High-performing, user-friendly web apps built with modern frameworks and clean UI/UX.",
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
//
// type: "web"      → renders a live scaled iframe with hover overlay
// type: "contract" → renders a blockchain explorer card (no iframe needed)
//                    set explorerUrl, explorerLabel, explorerNetwork
//
export const PROJECTS = [
  {
    num: "01",
    type: "web",
    tags: ["React", "TypeScript", "Tailwind"],
    title: "SnappynyCX-AI-Estimator",
    desc: "AI-powered outsourcing savings estimator built for SnappyCX to visualize cost efficiency and ROI.",
    pills: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://snappny-cx-ai-estimator.vercel.app/",
    githubUrl: "https://github.com/KosiChinaza/SnappnyCX-AI-Estimator",
  },
  {
    num: "02",
    type: "web",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    title: "LexcorePro-App",
    desc: "A tool created to make work seamless and automated for legal practitioners, featuring document management, case tracking, and client communication.",
    pills: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    liveUrl: "https://lexcore-pro-app.vercel.app/",
    githubUrl: "https://github.com/KosiChinaza/LexcorePro-App",
  },
  {
    num: "03",
    type: "web",
    tags: ["React", "TypeScript", "Tailwind"],
    title: "Performance-Messaging-Simulator",
    desc: "A predictive modeling tool for WhatsApp and conversational messaging campaigns. Simulates campaign performance based on historical data and industry benchmarks, helping marketers optimize their messaging strategies.",
    pills: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://performance-messaging-simulator.vercel.app/",
    githubUrl: "https://github.com/KosiChinaza/Performance-Messaging-Simulator",
  },
  {
    num: "04",
    type: "contract",
    tags: ["Solidity", "Ethereum", "Testnet"],
    title: "Time-Locked Inheritance",
    desc: "A blockchain-based inheritance protocol that locks ETH and releases it to a beneficiary after a set time period. Written in Solidity and deployed on the Ethereum Sepolia testnet, all logic lives on-chain with zero intermediaries.",
    pills: ["Smart Contract", "Solidity", "Sepolia Testnet"],
    explorerUrl: "https://sepolia.etherscan.io/address/0x45aB8C94eF682600729B7b475251d3f6EE02396F",
    explorerLabel: "Ethereum Sepolia · Etherscan",
    explorerNetwork: "Ethereum",
    screenshotUrl: "/EtherscanPreview.png", // 
    githubUrl: "https://github.com/kosichinaza/time-locked-inheritance",
  },
  {
    num: "05",
    type: "contract",
    tags: ["Hedera", "Hashgraph", "HBAR"],
    title: "Hedera African Hackathon",
    desc: "A smart contract deployed on the Hedera network as part of the African Hashgraph Hackathon. Leverages Hedera's fast, low-fee consensus, transaction proof is verifiable on Hashscan.",
    pills: ["Hedera", "Hackathon", "HTS"],
    explorerUrl: "https://hashscan.io/testnet/contract/0.0.6913748",
    explorerLabel: "Hedera Testnet · Hashscan",
    explorerNetwork: "Hedera",
    screenshotUrl: "/HashscanPreview.png", 
    githubUrl: "https://github.com/kosichinaza/hedera-hackathon",
  },
];

// ─── COLLABORATORS ────────────────────────────────────────────────────────────
export const COLLABORATORS = [
  {
    initials: "PU",
    name: "Patric U.",
    role: "CEO — NUPAT Technology",
    comment: "A very smart and hardworking developer, eager to learn and always ready to work.",
  },
  {
    initials: "OA",
    name: "Ox Ahmed.",
    role: "Team Lead, HashFi Group",
    comment: "I highly recommend her if you want to work with someone with an innovative mindset and have great result.",
  },
  {
    initials: "CD",
    name: "Cheta David",
    role: "Blockchain Developer — Web3",
    comment: "Kosi got the potential from day one. Fast learner, easy going, clean build — always active.",
  },
  {
    initials: "CD",
    name: "Chimezie D.",
    role: "Auto Dealership",
    comment: "She is one of my best staff, with her I always know I am getting the best result.",
  },
  {
    initials: "SO",
    name: "Stephanie O.",
    role: "UI/UX — Web3",
    comment: "Clean code, good communication, team spirited. Will always love to work with her.",
  },
  {
    initials: "EG",
    name: "Emeka Genye",
    role: "Backend Developer — Nupat Technology",
    comment: "As a colleague I will say Kosi is a good team player, very creative, efficient, fast and very realiable, I always look forward to working with her on projects.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    icon: "✦",
    q: "What do you build?",
    a: "I build smart contracts, DApps, portfolio websites, and full-stack web applications using modern frameworks and blockchain technologies.",
  },
  {
    icon: "🔧",
    q: "What tools do you use?",
    a: "React, JavaScript, Next.js, TypeScript, Tailwind CSS, Solidity, Hedera SDK, Node.js, and various Web3 tools including ethers.js and wagmi.",
  },
  {
    icon: "⏱",
    q: "How long does a typical project take?",
    a: "It depends on scope, a portfolio site takes 1–2 weeks, while a full DApp or smart contract system can take 3–6 weeks.",
  },
  {
    icon: "🤝",
    q: "Can you work with a team?",
    a: "Absolutely. I thrive in collaborative environments and have experience working in agile teams across multiple hackathons and client projects.",
  },
];

// ─── TECH STACK ───────────────────────────────────────────────────────────────
export const TECH_STACK = [
  "React JS", "Solidity", "TypeScript",
  "Tailwind CSS", "Hedera", "Web3.js",
  "JavaScript", "HTML5", "CSS3",
];

// ─── STATS ────────────────────────────────────────────────────────────────────
export const STATS = [
  { num: "1+", label: "Year Experience" },
  { num: "7+", label: "Projects Completed" },
  { num: "5+", label: "Happy Collaborators" },
  { num: "1", label: "Hackathon" },
];

// ─── SOCIALS ──────────────────────────────────────────────────────────────────
export const SOCIALS = [
  { label: "GH", href: "https://github.com/kosichinaza", title: "GitHub" },
  { label: "in", href: "https://linkedin.com/in/kosisochukwu-ugwu", title: "LinkedIn" },
  { label: "𝕏", href: "https://x.com/kosichinaza", title: "Twitter / X" },
  { label: "W", href: "https://wa.me/+2348108186562", title: "WhatsApp" },
];