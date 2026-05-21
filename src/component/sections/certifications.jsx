import { useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "../Reuseable/FadeInSection";

// Certificate data 
const CERTS = [
  {
    issuerIcon: "⬡",
    issuerName: "Hedera",
    issuerSub: "The Hashgraph Association",
    title: "Hashgraph Developer Course",
    org: "The Hashgraph Association × Hedera",
    date: "23 September 2025",
    desc: "Certified in Hashgraph Developer fundamentals, covering Hedera's consensus mechanisms, smart contract deployment, token services, and DApp development on the Hedera network.",
    pdfFile: "/HederaCertificate.pdf",
    previewImg: "/HederaCertPreview.png",
    previewAlt: "Hedera Hashgraph Developer Certificate",
    browserLabel: "HederaCertificate.pdf",
  },
  {
    issuerIcon: "N",
    issuerName: "NUPAT",
    issuerSub: "NUPAT Technologies Limited",
    title: "Blockchain Development",
    org: "NUPAT Technologies (Nupat Code Camp)",
    date: "December 2025",
    desc: "Completed intensive Blockchain Development training at NUPAT Code Camp, covering smart contract fundamentals, decentralized application architecture, and blockchain ecosystem tools.",
    pdfFile: "/NupatCertificate.png",
    previewImg: "/NupatCertPreview.png",
    previewAlt: "NUPAT Blockchain Development Certificate",
    browserLabel: "NupatCertificate.png",
  },
];

//  Single certificate card 
function CertCard({ cert, darkMode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`flex flex-col md:grid md:grid-cols-2 border border-l-[3px] border-l-purple-600 ${
      darkMode ? "border-purple-900/40" : "border-purple-100"
    }`}>

      {/*  Left: info panel  */}
      <div className={`flex flex-col justify-center p-6 sm:p-8 md:p-10 md:border-r ${
        darkMode ? "border-purple-900/40 bg-[#07070f]" : "border-purple-100 bg-gray-50"
      }`}>
        {/* Issuer row */}
        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-purple-900/60 border-2 border-purple-600 flex items-center justify-center text-lg sm:text-2xl font-black flex-shrink-0"
            style={{ color: "#a78bfa" }}>
            {cert.issuerIcon}
          </div>
          <div>
            <div className={`text-sm font-bold tracking-widest uppercase ${darkMode ? "text-purple-400" : "text-purple-600"}`}>{cert.issuerName}</div>
            <div className={`text-xs ${darkMode ? "text-gray-600" : "text-gray-400"}`}>{cert.issuerSub}</div>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl sm:text-2xl md:text-3xl font-black mb-2 leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}
          style={{ fontFamily: "'Syne', sans-serif" }}>
          {cert.title}
        </h3>

        {/* Org */}
        <div className={`text-sm font-semibold mb-1 ${darkMode ? "text-purple-400" : "text-purple-600"}`}>{cert.org}</div>

        {/* Date */}
        <div className={`text-xs mb-4 sm:mb-5 flex items-center gap-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block flex-shrink-0" />
          Certificate of Completion · {cert.date}
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-5 sm:mb-6 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{cert.desc}</p>

        {/* CTA */}
        <a href={cert.pdfFile} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 w-fit">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          View Certificate
        </a>
      </div>

      {/*  Right: screenshot frame  */}
      <div className={`border-t md:border-t-0 flex flex-col ${
        darkMode ? "border-purple-900/40 bg-[#0a0a18]" : "border-purple-100 bg-white"
      }`}>
        {/* Browser bar */}
        <div className={`px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b flex-shrink-0 ${
          darkMode ? "border-purple-900/40 bg-[#07070f]" : "border-purple-100 bg-gray-50"
        }`}>
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500/80 flex-shrink-0" />
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-500/80 flex-shrink-0" />
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500/80 flex-shrink-0" />
          <span className={`ml-2 flex-1 text-xs px-2 sm:px-3 py-1 rounded-sm truncate ${
            darkMode ? "bg-black/40 text-gray-500" : "bg-gray-100 text-gray-400"
          }`}>{cert.browserLabel}</span>
        </div>

        {/* Image + hover overlay */}
        <div className="relative overflow-hidden cursor-pointer flex-1" style={{ minHeight: "200px" }}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <img src={cert.previewImg} alt={cert.previewAlt}
            className="w-full h-full object-cover object-top" style={{ minHeight: "200px" }} />

          {/* Desktop hover overlay */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.22 }}
            className="hidden sm:flex absolute inset-0 items-center justify-center bg-black/55 backdrop-blur-[2px]"
            style={{ pointerEvents: hovered ? "auto" : "none" }}>
            <a href={cert.pdfFile} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white hover:bg-gray-100 text-black text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
              VIEW CERTIFICATE
            </a>
          </motion.div>

          {/* Mobile tap button */}
          <div className="sm:hidden absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
            <a href={cert.pdfFile} target="_blank" rel="noopener noreferrer"
              className="block w-full py-2.5 bg-purple-600 text-white text-xs font-bold tracking-widest uppercase text-center">
              VIEW CERTIFICATE
            </a>
          </div>

          {/* Verified badge */}
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex items-center gap-1.5 bg-green-600 text-white text-[9px] px-2 py-0.5 tracking-widest uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            VERIFIED
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section 
export default function Certifications({ darkMode }) {
  return (
    <section id="certifications" className={`py-16 sm:py-20 md:py-28 ${darkMode ? "bg-[#03030a]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <FadeInSection>
          <div className={`text-xs uppercase tracking-widest mb-3 sm:mb-4 ${darkMode ? "text-purple-500" : "text-purple-600"}`}>
            — Credentials
          </div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight mb-10 sm:mb-16 ${darkMode ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "'Syne', sans-serif" }}>
            CERTIFICATIONS
          </h2>
        </FadeInSection>

        {/* Certificate cards — stacked with divider gap */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {CERTS.map((cert, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <CertCard cert={cert} darkMode={darkMode} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}