import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


function Navbar() {
   const navigate = useNavigate();
   const [menuOpen, setMenuOpen] = useState(false);

   const goToSection = (sectionId) =>{
      navigate(`/Portfolio#${sectionId}`);
      setMenuOpen(false);
   };
  
  return (
   <nav className='bg-black text-purple-300 mt-10 py-6 px-10  mx-0 md:mx-15 rounded-t-2xl '>
     <div  className='flex justify-between max-w-6xl mx-auto' >

      <button
          onClick={() => navigate("/")}
          className="md:hidden text-xl font-semibold hover:text-purple-200 transition-all duration-300"
        >
          My Portfolio
        </button>

        <ul className='hidden md:flex flex-1 justify-between items-center'>
          <li>
              <button 
               onClick={() => navigate("/")} className='hover:shadow-[0_0_20px_#a855f7] hover:font-bold hover:px-8 hover:py-2 hover:rounded-xl hover:text-purple-200'>
              Home</button>
           </li>
           <li>
              <button 
              onClick={() => goToSection("About")}className='hover:shadow-[0_0_20px_#a855f7] hover:font-bold hover:px-8 hover:py-2 hover:rounded-xl hover:text-purple-200'>
              About</button>
           </li>
           <li>
              <button 
              onClick={() => goToSection("Projects")} className='hover:shadow-[0_0_20px_#a855f7] hover:font-bold hover:px-8 hover:py-2 hover:rounded-xl hover:text-purple-200'>
              Projects</button>
           </li>
           <li>
             <button 
              onClick={() => goToSection("Contact")} className='hover:shadow-[0_0_20px_#a855f7] hover:font-bold hover:px-8 hover:py-2 hover:rounded-xl hover:text-purple-200'>
               Contact</button>
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
            onClick={() => navigate("/")}
            className="hover:text-purple-200 transition-all"
          >
            Home
          </button>
          <button
            onClick={() => goToSection("About")}
            className="hover:text-purple-200 transition-all"
          >
            About
          </button>
          <button
            onClick={() => goToSection("Projects")}
            className="hover:text-purple-200 transition-all"
          >
            Projects
          </button>
          <button
            onClick={() => goToSection("Contact")}
            className="hover:text-purple-200 transition-all"
          >
            Contact
          </button>
         </div>
      )}
   </nav>
  )
   
}
export default Navbar


