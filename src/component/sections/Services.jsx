import FadeInSection from "../Reuseable/FadeInSection";
import { SERVICES } from "../../data/index";

export default function Services({ darkMode }) {
  return (
    <section
      id="services"
      className={`py-16 sm:py-20 md:py-28 ${darkMode ? "bg-[#03030a]" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className={`text-xs uppercase tracking-widest mb-3 sm:mb-4 ${darkMode ? "text-purple-500" : "text-purple-600"}`}>
            — What I Do
          </div>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight mb-10 sm:mb-16 ${darkMode ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            SERVICES I{" "}
            <span className="bg-purple-700 text-purple-200 px-2">OFFER</span>
          </h2>
        </FadeInSection>

        {/* 1 col mobile → 2 col tablet → 4 col desktop */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border ${
          darkMode ? "border-purple-900/40" : "border-purple-100"
        }`}>
          {SERVICES.map((service, index) => (
            <FadeInSection key={index} delay={index * 0.08}>
              <div
                className={`group p-7 sm:p-8 lg:p-10 border-t-[3px] border-t-transparent hover:border-t-purple-600 transition-all duration-300 h-full ${
                  darkMode ? "bg-[#07070f] hover:bg-[#0a0a18]" : "bg-white hover:bg-purple-50/30"
                } ${
                  // Right border on desktop (not last), bottom border on mobile/tablet (not last)
                  index < SERVICES.length - 1
                    ? darkMode
                      ? "border-b border-purple-900/40 sm:border-b-0 lg:border-r lg:border-purple-900/40 sm:border-r sm:border-purple-900/40"
                      : "border-b border-purple-100 sm:border-b-0 lg:border-r lg:border-purple-100 sm:border-r sm:border-purple-100"
                    : ""
                }`}
              >
                <div className={`text-2xl sm:text-3xl mb-5 sm:mb-6 transition-all duration-300 group-hover:text-purple-400 ${darkMode ? "text-purple-600" : "text-purple-500"}`}>
                  {service.icon}
                </div>
                <h3
                  className={`font-bold text-base sm:text-lg mb-3 sm:mb-4 leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                  {service.desc}
                </p>
                <div className={`mt-6 sm:mt-8 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 ${darkMode ? "text-purple-400" : "text-purple-600"}`}>
                  Learn more ↗
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}