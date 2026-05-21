import Hero from "../component/sections/Hero";
import StatsBar from "../component/sections/StatsBar";
import About from "../component/sections/About";
import Services from "../component/sections/Services";
import Projects from "../component/sections/Projects";
import Certifications from "../component/sections/Certifications";
import Collaborators from "../component/sections/Collaborators";
import FAQ from "../component/sections/FAQ";
import Contact from "../component/sections/Contact";

/**
 * Home page — assembles all portfolio sections in order.
 * Sections are kept in individual files under src/component/sections/.
 */
export default function Home({ darkMode }) {
  return (
    <main>
      <Hero darkMode={darkMode} />
      <StatsBar darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Certifications darkMode={darkMode} />
      <Collaborators darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </main>
  );
}
