import { useState } from "react";
import FadeInSection from "../Reuseable/FadeInSection";
import { SOCIALS } from "../../data/index";

export default function Contact({ darkMode }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    // Replace with EmailJS or Formspree call
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className={`py-16 sm:py-20 md:py-28 ${darkMode ? "bg-black" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stack on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-start">

          {/* ── Left: brand + email + socials  */}
          <FadeInSection>
            <div className={`text-xs uppercase tracking-widest mb-3 sm:mb-4 ${darkMode ? "text-purple-500" : "text-purple-600"}`}>— Get In Touch</div>

            {/* Ghost brand — scales down nicely on mobile */}
            <div
              className="text-6xl sm:text-8xl md:text-9xl font-black leading-none tracking-tight mb-6 sm:mb-8 select-none"
              style={{ fontFamily: "'Syne', sans-serif", WebkitTextStroke: darkMode ? "1px rgba(139,92,246,0.25)" : "1px rgba(109,40,217,0.2)", color: "transparent" }}
            >
              KOSY
            </div>

            <a
              href="mailto:ugwukosisochukwu135@gmail.com"
              className={`block text-sm sm:text-lg font-semibold mb-4 sm:mb-6 pb-4 sm:pb-6 border-b transition-colors break-all sm:break-normal ${
                darkMode ? "text-purple-400 border-purple-900/40 hover:text-purple-300" : "text-purple-600 border-purple-100 hover:text-purple-700"
              }`}
            >
              ugwukosisochukwu135@gmail.com
            </a>

            <p className={`text-sm mb-6 sm:mb-8 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>Thank you — I hope to hear from you soon!</p>

            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.title}
                  className={`w-10 sm:w-11 h-10 sm:h-11 border flex items-center justify-center text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${
                    darkMode
                      ? "border-purple-900/50 text-gray-400 hover:border-purple-600 hover:text-purple-400"
                      : "border-purple-100 text-gray-500 hover:border-purple-400 hover:text-purple-600"
                  }`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </FadeInSection>

          {/* ── Right: */}
          <FadeInSection delay={0.15}>
            <div className={`p-5 sm:p-8 border ${darkMode ? "border-purple-900/40 bg-[#07070f]" : "border-purple-100 bg-white"}`}>
              <h3 className={`text-lg sm:text-xl font-black mb-5 sm:mb-6 ${darkMode ? "text-white" : "text-gray-900"}`} style={{ fontFamily: "'Syne', sans-serif" }}>
                Contact Me
              </h3>

              {sent && (
                <div className="mb-4 px-4 py-3 bg-purple-600/20 border border-purple-600 text-purple-400 text-sm">
                  Message sent! I'll get back to you soon.
                </div>
              )}

              <div className="flex flex-col gap-3 sm:gap-4">
                <input
                  type="text" placeholder="Your Name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm border outline-none transition-colors duration-200 focus:border-purple-600 ${
                    darkMode ? "bg-[#0a0a18] border-purple-900/40 text-white placeholder-gray-600" : "bg-gray-50 border-purple-100 text-gray-900 placeholder-gray-400"
                  }`}
                />
                <input
                  type="email" placeholder="Your Email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm border outline-none transition-colors duration-200 focus:border-purple-600 ${
                    darkMode ? "bg-[#0a0a18] border-purple-900/40 text-white placeholder-gray-600" : "bg-gray-50 border-purple-100 text-gray-900 placeholder-gray-400"
                  }`}
                />
                <textarea
                  placeholder="Your Message" rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm border outline-none resize-none transition-colors duration-200 focus:border-purple-600 ${
                    darkMode ? "bg-[#0a0a18] border-purple-900/40 text-white placeholder-gray-600" : "bg-gray-50 border-purple-100 text-gray-900 placeholder-gray-400"
                  }`}
                />
                <button
                  onClick={handleSubmit}
                  className="w-full py-3.5 sm:py-4 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5"
                >
                  Send Message →
                </button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}