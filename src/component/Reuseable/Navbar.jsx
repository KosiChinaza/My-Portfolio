import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (sectionId) => {
    navigate(`#${sectionId}`);
    setMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-black text-purple-300 pt-10 py-6 px-10 rounded-t-2xl">
      <div className="flex justify-between max-w-6xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="md:hidden text-xl font-semibold hover:text-purple-200 transition-all duration-300"
        >
          My Portfolio
        </button>

        <ul className="hidden md:flex flex-1 justify-between items-center">
          <li>
            <button
              onClick={() => goToSection('Services')}
              className="hover:shadow-[0_0_20px_#a855f7] hover:font-bold px-8 py-2 hover:rounded-xl hover:text-purple-200"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => goToSection('Projects')}
              className="hover:shadow-[0_0_20px_#a855f7] hover:font-bold px-8 py-2 hover:rounded-xl hover:text-purple-200"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => goToSection('Certification')}
              className="hover:shadow-[0_0_20px_#a855f7] hover:font-bold px-8 py-2 hover:rounded-xl hover:text-purple-200"
            >
              Certification
            </button>
          </li>
          <li>
            <button
              onClick={() => goToSection('Contact')}
              className="hover:shadow-[0_0_20px_#a855f7] hover:font-bold px-8 py-2 hover:rounded-xl hover:text-purple-200"
            >
              Contact
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-purple-300 hover:text-purple-200 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 bg-[#111] p-4 rounded-xl text-center">
          <button
            onClick={() => goToSection('Services')}
            className="hover:text-purple-200 transition-all hover:shadow-[0_0_20px_#a855f7] hover:rounded-xl hover:text-purple-200 hover:mx-10"
          >
            Services
          </button>
          <button
            onClick={() => goToSection('Projects')}
            className="hover:text-purple-200 transition-all hover:shadow-[0_0_20px_#a855f7] hover:rounded-xl hover:text-purple-200 hover:mx-10"
          >
            Projects
          </button>
          <button
            onClick={() => goToSection('Certification')}
            className="hover:text-purple-200 transition-all hover:shadow-[0_0_20px_#a855f7] hover:rounded-xl hover:text-purple-200 hover:mx-10"
          >
            Certification
          </button>
          <button
            onClick={() => goToSection('Contact')}
            className="hover:text-purple-200 transition-all hover:shadow-[0_0_20px_#a855f7] hover:rounded-xl hover:text-purple-200 hover:mx-10"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
