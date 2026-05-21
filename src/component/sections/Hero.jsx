import { motion } from "framer-motion";
import { useTypewriter } from "../../hooks/useTypewriter";

const TYPED_WORDS = ["Build It.", "Code It.", "Ship It.", "Deploy It."];

export default function Hero({ darkMode }) {
  const typed = useTypewriter(TYPED_WORDS);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-20 ${
        darkMode ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: darkMode
            ? "linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)"
            : "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute top-1/3 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full pointer-events-none opacity-40 md:opacity-70"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-16 md:py-20">
        {/* Mobile: stack, Desktop: side by side */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Left: headline + CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {/* Role badge */}
            <div className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs tracking-widest uppercase mb-6 max-w-full ${
              darkMode
                ? "border-purple-800/50 text-purple-400 bg-purple-950/30"
                : "border-purple-200 text-purple-600 bg-purple-50"
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
              <span className="truncate">Web3 &amp; Frontend Developer</span>
            </div>

            {/* Headline — carefully sized so it never overflows */}
            <h1
              className={`text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-5 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              You Imagine It,
              <br />
              I{" "}
              <span className="text-purple-500 break-words">
                {typed}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            {/* Subtext */}
            <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}>
              Hi, I'm{" "}
              <span className="text-purple-400 font-semibold">Kosisochukwu Ugwu,</span>{" "}
              I build scalable web applications, smart contracts, DApps &amp; futuristic web experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-5 sm:px-7 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5"
              >
                View My Work →
              </button>
              <a
                href="/KosyCV.pdf"
                download
                className={`px-5 sm:px-7 py-3 border text-sm font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                  darkMode
                    ? "border-purple-800 text-purple-400 hover:border-purple-500 hover:bg-purple-950/40"
                    : "border-purple-200 text-purple-600 hover:border-purple-400"
                }`}
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* ── Right: stat cards — hidden on small mobile, visible from sm ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full grid grid-cols-2 gap-2 sm:gap-3"
          >
            {/* Tall orbit card */}
            <div className={`row-span-2 border flex flex-col justify-between p-4 sm:p-6 relative overflow-hidden min-h-[160px] sm:min-h-[200px] ${
              darkMode ? "border-purple-900/40 bg-[#080810]" : "border-purple-100 bg-white"
            }`}>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32">
                  <div className="absolute inset-0 rounded-full border border-dashed border-purple-700/30 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-4 rounded-full border border-dashed border-purple-600/20 animate-[spin_14s_linear_infinite_reverse]" />
                  <div className="absolute inset-0 flex items-center justify-center px-2">
                    <span className={`text-[8px] sm:text-[10px] text-center font-bold tracking-widest leading-tight ${
                      darkMode ? "text-purple-400" : "text-purple-600"
                    }`}>
                      SOFTWARE<br/>DEVELOPMENT
                    </span>
                  </div>
                </div>
              </div>
              <div />
              <div>
                <div className={`text-3xl sm:text-4xl md:text-5xl font-black leading-none mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}
                  style={{ fontFamily: "'Syne', sans-serif" }}>1+</div>
                <div className={`text-[10px] sm:text-xs uppercase tracking-widest ${darkMode ? "text-gray-500" : "text-gray-400"}`}>Year Building</div>
              </div>
            </div>

            {/* Smart Contracts */}
            <div className={`border p-3 sm:p-5 flex flex-col justify-between relative overflow-hidden ${
              darkMode ? "border-purple-900/40 bg-[#080810]" : "border-purple-100 bg-white"
            }`}>
              <span className="text-lg sm:text-2xl opacity-20 absolute top-2 right-2 sm:top-4 sm:right-4">⛓</span>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-black leading-none mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}
                style={{ fontFamily: "'Syne', sans-serif" }}>3+</div>
              <div className={`text-[10px] sm:text-xs uppercase tracking-widest ${darkMode ? "text-gray-500" : "text-gray-400"}`}>Smart Contracts</div>
            </div>

            {/* Projects */}
            <div className={`border p-3 sm:p-5 flex flex-col justify-between relative overflow-hidden ${
              darkMode ? "border-purple-900/40 bg-[#080810]" : "border-purple-100 bg-white"
            }`}>
              <span className="text-lg sm:text-2xl opacity-20 absolute top-2 right-2 sm:top-4 sm:right-4">🌐</span>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-black leading-none mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}
                style={{ fontFamily: "'Syne', sans-serif" }}>7+</div>
              <div className={`text-[10px] sm:text-xs uppercase tracking-widest ${darkMode ? "text-gray-500" : "text-gray-400"}`}>Projects Shipped</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className={`text-xs tracking-widest uppercase ${darkMode ? "text-gray-600" : "text-gray-400"}`}>Scroll</span>
        <div className={`w-px h-10 ${darkMode ? "bg-gradient-to-b from-purple-500 to-transparent" : "bg-gradient-to-b from-purple-400 to-transparent"}`} />
      </motion.div>
    </section>
  );
}