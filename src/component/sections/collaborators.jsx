import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FadeInSection from "../Reuseable/FadeInSection";
import { COLLABORATORS } from "../../data/index";

export default function Collaborators({ darkMode }) {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: { repeat: Infinity, repeatType: "reverse", duration: 28, ease: "linear" },
      },
    });
  };

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{
        background: darkMode
          ? "radial-gradient(ellipse at 50% 100%, rgba(88,28,220,0.15) 0%, transparent 60%), #000"
          : "radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 60%), #f9fafb",
      }}
      aria-label="Trusted by Early Collaborators"
    >
      <FadeInSection>
        <h2
          className={`text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-10 sm:mb-16 px-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          TRUSTED BY EARLY{" "}
          <span className="bg-purple-700 text-purple-200 px-2">COLLABORATORS</span>
        </h2>
      </FadeInSection>

      <div className="relative">
        <motion.div
          className="flex gap-4 sm:gap-5 items-stretch pl-4 sm:pl-0"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => startAnimation()}
          onTouchStart={() => controls.stop()}
          onTouchEnd={() => startAnimation()}
          style={{ width: "max-content" }}
        >
          {[...COLLABORATORS, ...COLLABORATORS].map((person, index) => (
            <article
              key={index}
              className={`flex-shrink-0 w-64 sm:w-72 border p-5 sm:p-6 transition-all duration-300 ${
                darkMode
                  ? "bg-[#07070f] border-purple-900/40 hover:border-purple-600/60"
                  : "bg-white border-purple-100 hover:border-purple-300"
              }`}
            >
              <div className={`text-2xl sm:text-3xl font-black mb-3 sm:mb-4 ${darkMode ? "text-purple-700" : "text-purple-300"}`} style={{ fontFamily: "'Syne', sans-serif" }}>"</div>
              <p className={`text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{person.comment}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-purple-900/60 border border-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-purple-300">{person.initials}</span>
                </div>
                <div>
                  <div className={`text-sm font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{person.name}</div>
                  <div className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{person.role}</div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Fade edges, narrower on mobile */}
        <div className={`absolute inset-y-0 left-0 w-8 sm:w-24 pointer-events-none ${darkMode ? "bg-gradient-to-r from-black to-transparent" : "bg-gradient-to-r from-gray-50 to-transparent"}`} />
        <div className={`absolute inset-y-0 right-0 w-8 sm:w-24 pointer-events-none ${darkMode ? "bg-gradient-to-l from-black to-transparent" : "bg-gradient-to-l from-gray-50 to-transparent"}`} />
      </div>
    </section>
  );
}