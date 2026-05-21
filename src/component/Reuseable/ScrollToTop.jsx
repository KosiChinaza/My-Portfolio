import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Floating scroll-to-top button.
 * Positioned above mobile browser chrome (bottom-20 on mobile, bottom-8 on desktop).
 */
export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 w-10 h-10 sm:w-11 sm:h-11 bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center text-base sm:text-lg transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-purple-900/40"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}