import React, { useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from '../component/Reuseable/Navbar';
import StarDivider from '../component/Reuseable/StarDivider';
import Services from '../component/Services';
import Certification from '../component/certification';
import WhatsAppButton from "../component/Reuseable/whatsappbutton";
import Collaborators from "../component/collaborators"
import FAQ from '../component/FAQ';


export default function Portfolio() {
  const location = useLocation();

  useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    const section = document.getElementById(id);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });

       
        const newUrl = window.location.pathname + window.location.search;
        window.history.replaceState(null, '', newUrl);
      }, 100);
    }
  } else {
    const aboutSection = document.getElementById('About');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}, [location]);

  return (
    <div className="scroll-smooth bg-black">
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <section id="About"><About /></section>
        <StarDivider />
        <section id="Services"><Services /></section>
        <StarDivider />
        <section id="Projects" className="scroll-mt-20"><Projects /></section>
        <StarDivider />
        <section id="Certification" className="scroll-mt-20"><Certification /></section>
        <StarDivider />
        <Collaborators/>
        <StarDivider />
        <FAQ/>
        <section id="Contact" className="scroll-mt-20"><Contact /></section>
        <WhatsAppButton />
      </div>
    </div>
  );
}
