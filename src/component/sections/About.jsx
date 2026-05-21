import FadeInSection from "../Reuseable/FadeInSection";
import { TECH_STACK } from "../../data/index";

export default function About({ darkMode }) {
  const infoRows = [
    ["Full Name", "Kosisochukwu Ugwu"],
    ["Location", "Lagos, Nigeria"],
    ["Alias", "Kosy / Kosi"],
    ["Email", "ugwukosisochukwu135@gmail.com"],
  ];

  return (
    <section
      id="about"
      className={`py-16 sm:py-20 md:py-28 ${darkMode ? "bg-black" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* ── Left: Photo ── */}
          <FadeInSection>
            {/* On mobile the badge clips outside so we add padding-bottom */}
            <div className="relative pb-8 md:pb-0">
              <div
                className={`aspect-[4/5] border flex flex-col items-center justify-center gap-4 relative overflow-hidden ${
                  darkMode ? "border-purple-900/40 bg-[#08080f]" : "border-purple-100 bg-white"
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800" />
                <img
                  src="/PersonalPic.jpeg"
                  alt="Kosisochukwu Ugwu"
                  className="w-full h-full object-cover object-top pt-1"
                />
                <div
                  className="absolute bottom-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-purple-600/10"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                />
              </div>

              {/* Floating badge — shifted less on mobile to stay visible */}
              <div
                className={`absolute -bottom-2 left-2 sm:-bottom-4 sm:-left-4 border px-4 sm:px-5 py-2 sm:py-3 ${
                  darkMode ? "bg-purple-950 border-purple-700" : "bg-purple-50 border-purple-200"
                }`}
              >
                <div className={`text-base sm:text-xl font-black ${darkMode ? "text-white" : "text-gray-900"}`} style={{ fontFamily: "'Syne', sans-serif" }}>
                  Open to Work
                </div>
                <div className={`text-xs uppercase tracking-widest mt-0.5 ${darkMode ? "text-purple-400" : "text-purple-600"}`}>
                  Hybrid / Remote
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* ── Right: Bio ── */}
          <FadeInSection delay={0.15}>
            <div className={`text-xs uppercase tracking-widest mb-3 sm:mb-4 ${darkMode ? "text-purple-500" : "text-purple-600"}`}>
              — About Me
            </div>

            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight mb-6 sm:mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              ABOUT <span className="bg-purple-700 text-purple-200 px-2">ME</span>
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              I'm a Software Developer with strong focus on Frontend &amp; Blockchain development, passionate about
              creating digital solutions that make a meaningful impact. I build secure, scalable, and user-friendly
              web and decentralized applications.
            </p>

            <p className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              I specialize in frontend development, smart contract development, DApp integration, and
              building clean, modern interfaces — bridging the gap between blockchain and beautiful UX.
            </p>

            {/* Info grid — single column on very small screens */}
            <div className={`grid grid-cols-1 xs:grid-cols-2 gap-3 mb-6 sm:mb-8 p-4 sm:p-5 border ${
              darkMode ? "border-purple-900/40 bg-[#08080f]" : "border-purple-100 bg-white"
            }`}>
              {infoRows.map(([key, value]) => (
                <div key={key} className="flex flex-col gap-0.5">
                  <span className={`text-xs uppercase tracking-wider ${darkMode ? "text-gray-600" : "text-gray-400"}`}>{key}</span>
                  <span className={`text-xs sm:text-sm font-medium break-all sm:truncate ${darkMode ? "text-gray-200" : "text-gray-700"}`}>{value}</span>
                </div>
              ))}
            </div>

            {/* Tech chips */}
            <div>
              <div className={`text-xs uppercase tracking-widest mb-3 ${darkMode ? "text-purple-500" : "text-purple-600"}`}>Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs border tracking-wide transition-all duration-200 hover:-translate-y-0.5 cursor-default ${
                      darkMode
                        ? "border-purple-900/50 text-purple-300 bg-purple-950/30 hover:border-purple-600"
                        : "border-purple-100 text-purple-700 bg-purple-50 hover:border-purple-300"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}