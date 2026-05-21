import { STATS } from "../../data/index";

export default function StatsBar({ darkMode }) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 border-y ${
        darkMode ? "border-purple-900/40 bg-[#05050a]" : "border-purple-100 bg-white"
      }`}
    >
      {STATS.map((stat, index) => (
        <div
          key={index}
          className={`px-5 sm:px-8 py-7 sm:py-10 border-t-[3px] border-t-purple-600 transition-colors duration-200 ${
            darkMode ? "hover:bg-[#0a0a14]" : "hover:bg-purple-50/50"
          } ${
            // Right border: always on col 0 (mobile 2-col), and cols 0-2 on desktop
            index % 2 === 0
              ? darkMode ? "border-r border-purple-900/40" : "border-r border-purple-100"
              : index < STATS.length - 1
              ? `md:${darkMode ? "border-r border-purple-900/40" : "border-r border-purple-100"}`
              : ""
          } ${
            // Bottom border on first row of mobile 2-col layout
            index < 2
              ? darkMode ? "border-b border-purple-900/40 md:border-b-0" : "border-b border-purple-100 md:border-b-0"
              : ""
          }`}
        >
          <div
            className={`text-3xl sm:text-4xl md:text-5xl font-black leading-none mb-1 sm:mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {stat.num}
          </div>
          <div className={`text-[10px] sm:text-xs uppercase tracking-widest ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}