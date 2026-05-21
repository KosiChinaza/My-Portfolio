import { NAV_LINKS } from "../../data/index";

/**
 * Site footer — fully mobile responsive.
 * Stacks vertically on mobile, row layout on md+.
 */
export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-purple-800 py-8 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-black text-white text-xl text-center md:text-left"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          KOSY.
        </button>

        {/* Nav links — wraps on mobile */}
        <div className="flex flex-wrap gap-x-5 gap-y-3 justify-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-purple-200/70 hover:text-white text-xs uppercase tracking-wider transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-purple-300/50 text-xs text-center md:text-right">
          © {new Date().getFullYear()} Kosisochukwu Ugwu.
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}