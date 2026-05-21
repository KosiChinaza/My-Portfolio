import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import FadeInSection from "../Reuseable/FadeInSection";
import { PROJECTS } from "../../data/index";

const NETWORK_STYLES = {
  Ethereum: { hex: "#60a5fa" },
  Hedera:   { hex: "#a855f7" },
};

// ─── Shared browser chrome bar 
function BrowserBar({ url, darkMode }) {
  return (
    <div className={`px-3 py-2 flex items-center gap-1.5 border-b flex-shrink-0 ${
      darkMode ? "border-purple-900/40 bg-[#0a0a15]" : "border-purple-100 bg-white"
    }`}>
      <span className="w-2 h-2 rounded-full bg-red-500/80 flex-shrink-0" />
      <span className="w-2 h-2 rounded-full bg-yellow-500/80 flex-shrink-0" />
      <span className="w-2 h-2 rounded-full bg-green-500/80 flex-shrink-0" />
      <span className={`ml-1 flex-1 text-[10px] sm:text-xs px-2 py-0.5 rounded-sm truncate min-w-0 ${
        darkMode ? "bg-black/40 text-gray-500" : "bg-gray-100 text-gray-400"
      }`}>{url}</span>
    </div>
  );
}

// ─── Mobile action buttons (always visible below preview) 
function MobileButtons({ primary, secondary, darkMode }) {
  return (
    <div className={`flex gap-2 p-2.5 border-t sm:hidden ${
      darkMode ? "border-purple-900/40 bg-[#07070f]" : "border-purple-100 bg-gray-50"
    }`}>
      <a href={primary.href} target="_blank" rel="noopener noreferrer"
        className="flex-1 py-2 bg-purple-600 text-white text-[10px] font-bold tracking-wider uppercase text-center">
        {primary.label}
      </a>
      <a href={secondary.href} target="_blank" rel="noopener noreferrer"
        className={`flex-1 py-2 border text-[10px] font-bold tracking-wider uppercase text-center ${
          darkMode ? "border-purple-700 text-purple-400" : "border-purple-200 text-purple-600"
        }`}>
        {secondary.label}
      </a>
    </div>
  );
}

// ─── Desktop hover overlay 
function HoverOverlay({ hovered, primary, secondary, darkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.22 }}
      className="hidden sm:flex absolute inset-0 items-center justify-center gap-3 bg-black/55 backdrop-blur-[2px] flex-wrap px-4"
      style={{ pointerEvents: hovered ? "auto" : "none" }}
    >
      <a href={primary.href} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-white hover:bg-gray-100 text-black text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
        </svg>
        {primary.label}
      </a>
      <a href={secondary.href} target="_blank" rel="noopener noreferrer"
        className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 border text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 ${
          darkMode ? "border-white/40 text-white hover:bg-white/10" : "border-gray-500 text-gray-900 hover:bg-gray-200"
        }`}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
        </svg>
        {secondary.label}
      </a>
    </motion.div>
  );
}

// ─── Contract screenshot preview 
function ContractPreview({ project, darkMode }) {
  const [hovered, setHovered] = useState(false);
  const net = NETWORK_STYLES[project.explorerNetwork] ?? NETWORK_STYLES.Ethereum;
  return (
    <div className={`border overflow-hidden rounded-sm transition-all duration-300 ${
      darkMode ? "border-purple-900/40 hover:border-purple-600/60" : "border-purple-100 hover:border-purple-300"
    }`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <BrowserBar url={project.explorerUrl} darkMode={darkMode} />
      <div className="relative aspect-video overflow-hidden">
        <img src={project.screenshotUrl} alt={`${project.title} explorer`} className="w-full h-full object-cover object-top" />
        <HoverOverlay hovered={hovered} primary={{ href: project.explorerUrl, label: "VIEW EXPLORER" }} secondary={{ href: project.githubUrl, label: "SOURCE CODE" }} darkMode={darkMode} />
        <div className="absolute top-8 right-2 text-white text-[9px] px-1.5 py-0.5 tracking-widest uppercase font-bold" style={{ background: net.hex }}>DEPLOYED</div>
      </div>
      <MobileButtons primary={{ href: project.explorerUrl, label: "Explorer" }} secondary={{ href: project.githubUrl, label: "Source Code" }} darkMode={darkMode} />
    </div>
  );
}

// ─── Web screenshot/iframe preview 
function WebPreview({ project, darkMode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={`border overflow-hidden rounded-sm transition-all duration-300 ${
      darkMode ? "border-purple-900/40 hover:border-purple-600/60" : "border-purple-100 hover:border-purple-300"
    }`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <BrowserBar url={project.liveUrl} darkMode={darkMode} />
      <div className="relative aspect-video overflow-hidden">
        {project.screenshotUrl ? (
          <img src={project.screenshotUrl} alt={`${project.title} preview`} className="w-full h-full object-cover object-top" />
        ) : (
          <iframe src={project.liveUrl} title={`${project.title} preview`}
            style={{ width: "166.67%", height: "166.67%", transform: "scale(0.6)", transformOrigin: "top left", border: "none", pointerEvents: "none" }}
            loading="lazy" sandbox="allow-scripts allow-same-origin" />
        )}
        <HoverOverlay hovered={hovered} primary={{ href: project.liveUrl, label: "LIVE PREVIEW" }} secondary={{ href: project.githubUrl, label: "SOURCE CODE" }} darkMode={darkMode} />
        <div className="absolute top-8 right-2 bg-purple-600 text-white text-[9px] px-1.5 py-0.5 tracking-widest uppercase font-bold">LIVE</div>
      </div>
      <MobileButtons primary={{ href: project.liveUrl, label: "Live Preview" }} secondary={{ href: project.githubUrl, label: "GitHub" }} darkMode={darkMode} />
    </div>
  );
}

// ─── Single project card 
function ProjectCard({ project, index, darkMode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isEven = index % 2 === 0;
  const isContract = project.type === "contract";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`border-b py-10 sm:py-12 md:py-16 ${darkMode ? "border-purple-900/30" : "border-purple-100"}`}
    >
      {/*
        Mobile: always stack text then preview.
        Desktop (md+): alternate left/right using flex-row-reverse for odd items
      */}
      <div className={`flex flex-col gap-8 md:gap-12 ${
        !isEven ? "md:flex-row-reverse" : "md:flex-row"
      } md:items-center`}>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none mb-3 ${darkMode ? "text-purple-950" : "text-purple-50"}`}
            style={{ fontFamily: "'Syne', sans-serif", WebkitTextStroke: darkMode ? "1px rgba(139,92,246,0.15)" : "1px rgba(139,92,246,0.12)" }}>
            {project.num}
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
            {project.tags.map((tag, i) => (
              <span key={i} className={`text-xs uppercase tracking-wider ${darkMode ? "text-gray-500" : "text-gray-400"} ${i > 0 ? "before:content-['|'] before:mr-3 before:opacity-40" : ""}`}>{tag}</span>
            ))}
          </div>

          <h3 className={`text-2xl sm:text-3xl font-black leading-tight mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "'Syne', sans-serif" }}>{project.title}</h3>

          <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{project.desc}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.pills.map((pill, i) => (
              <span key={i} className={`px-2.5 py-1 text-xs border ${
                darkMode ? "border-purple-900/50 text-purple-300 bg-purple-950/30" : "border-purple-100 text-purple-700 bg-purple-50"
              }`}>{pill}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {isContract ? (
              <>
                <a href={project.explorerUrl} target="_blank" rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5">
                  ↗ View on Explorer
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className={`px-4 sm:px-5 py-2.5 text-xs font-semibold tracking-widest uppercase border transition-all duration-200 hover:-translate-y-0.5 ${
                    darkMode ? "border-purple-900/50 text-gray-300 hover:border-purple-600" : "border-purple-100 text-gray-600 hover:border-purple-300"
                  }`}>
                  ⌥ Source Code
                </a>
              </>
            ) : (
              <>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5">
                  ↗ Live Preview
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className={`px-4 sm:px-5 py-2.5 text-xs font-semibold tracking-widest uppercase border transition-all duration-200 hover:-translate-y-0.5 ${
                    darkMode ? "border-purple-900/50 text-gray-300 hover:border-purple-600" : "border-purple-100 text-gray-600 hover:border-purple-300"
                  }`}>
                  ⌥ GitHub
                </a>
              </>
            )}
          </div>
        </div>

        {/* Preview — full width on mobile, half on desktop */}
        <div className="w-full md:flex-1 md:min-w-0">
          {isContract
            ? <ContractPreview project={project} darkMode={darkMode} />
            : <WebPreview project={project} darkMode={darkMode} />
          }
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section
export default function Projects({ darkMode }) {
  return (
    <section id="projects" className={`py-16 sm:py-20 md:py-28 ${darkMode ? "bg-black" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="flex justify-between items-end mb-10 sm:mb-14 flex-wrap gap-4">
            <div>
              <div className={`text-xs uppercase tracking-widest mb-3 ${darkMode ? "text-purple-500" : "text-purple-600"}`}>— My Work</div>
              <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                style={{ fontFamily: "'Syne', sans-serif" }}>
                FEATURED <span className="bg-purple-700 text-purple-200 px-2">PROJECTS</span>
              </h2>
            </div>
            <button className={`text-xs px-4 py-2.5 border tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 ${
              darkMode ? "border-purple-800 text-purple-400 hover:border-purple-500" : "border-purple-200 text-purple-600 hover:border-purple-400"
            }`}>View All →</button>
          </div>
        </FadeInSection>

        <div className={`border-t ${darkMode ? "border-purple-900/40" : "border-purple-100"}`}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}