import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../Reuseable/FadeInSection";
import { FAQS } from "../../data/index";

export default function FAQ({ darkMode }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className={`py-16 sm:py-20 md:py-28 ${darkMode ? "bg-[#03030a]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="text-center mb-10 sm:mb-16">
            <div className={`text-xs uppercase tracking-widest mb-3 sm:mb-4 ${darkMode ? "text-purple-500" : "text-purple-600"}`}>— FAQs</div>
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight mb-3 sm:mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              FREQUENTLY{" "}
              <span className="bg-purple-700 text-purple-200 px-2">ASKED</span>
            </h2>
            <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>Quick answers to common questions.</p>
          </div>
        </FadeInSection>

        {/* Single column on mobile, 2 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {FAQS.map((faq, index) => (
            <FadeInSection key={index} delay={index * 0.07}>
              <div
                className={`border transition-all duration-200 cursor-pointer overflow-hidden ${
                  openIndex === index
                    ? darkMode ? "border-purple-600 bg-[#0a0a1a]" : "border-purple-400 bg-purple-50"
                    : darkMode ? "border-purple-900/40 bg-[#07070f] hover:border-purple-800" : "border-purple-100 bg-white hover:border-purple-200"
                }`}
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6">
                  <span className="text-lg sm:text-xl flex-shrink-0">{faq.icon}</span>
                  <span className={`flex-1 text-sm font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-lg flex-shrink-0 ${darkMode ? "text-purple-500" : "text-purple-600"}`}
                  >›</motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}>
                      <div className={`px-4 sm:px-6 pb-4 sm:pb-6 pt-0 text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}