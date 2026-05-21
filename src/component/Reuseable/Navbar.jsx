import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../data/index";

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? darkMode ? "bg-black/90 border-b border-purple-900/40 backdrop-blur-xl" : "bg-white/90 border-b border-purple-200/60 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-black text-lg sm:text-xl tracking-tight flex-shrink-0" style={{ fontFamily: "'Syne', sans-serif" }}>
          <span className={darkMode ? "text-white" : "text-gray-900"}>KOSY</span><span className="text-purple-500">.</span>
        </button>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className={`text-xs uppercase tracking-widest transition-colors duration-200 ${darkMode ? "text-gray-400 hover:text-purple-400" : "text-gray-500 hover:text-purple-600"}`}>{link}</button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
            <span className={`text-xs tracking-wider ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Available</span>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme" className={`w-9 h-5 rounded-full border relative transition-colors duration-300 flex-shrink-0 ${darkMode ? "bg-purple-900/60 border-purple-700" : "bg-purple-100 border-purple-300"}`}>
            <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-purple-500 transition-all duration-300 ${darkMode ? "right-0.5" : "left-0.5"}`} />
          </button>
          <button onClick={() => scrollTo("Contact")} className="hidden lg:block text-xs px-4 py-2 border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-200 tracking-wider uppercase whitespace-nowrap">Get In Touch</button>
          <button className="lg:hidden flex flex-col justify-center gap-1.5 p-1.5 -mr-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-5 h-0.5 transition-all duration-300 ${darkMode ? "bg-white" : "bg-gray-900"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${darkMode ? "bg-white" : "bg-gray-900"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${darkMode ? "bg-white" : "bg-gray-900"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className={`lg:hidden border-t ${darkMode ? "bg-black/98 border-purple-900/40" : "bg-white/98 border-purple-100"}`}>
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button key={link} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link)}
                  className={`text-left text-sm uppercase tracking-widest py-3.5 border-b w-full transition-colors duration-200 ${darkMode ? "text-gray-200 border-purple-900/30 hover:text-purple-400" : "text-gray-700 border-gray-100 hover:text-purple-600"}`}>
                  {link}
                </motion.button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button onClick={() => scrollTo("Contact")} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold tracking-widest uppercase transition-colors duration-200">Get In Touch</button>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Available for work · Hybrid / Remote</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}