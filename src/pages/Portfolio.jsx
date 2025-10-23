import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Navbar from '../component/Reuseable/Navbar'
import StarDivider from '../component/Reuseable/StarDivider'




export default function Portfolio() {
  const location = useLocation();

  useEffect(() =>{
    if (location.hash){
      const id = location.hash.replace("#", "");
      const section =document.getElementById(id);
      if (section) {
        setTimeout(() =>{
          section.scrollIntoView({ behavior: "smooth"});
        }, 100);
      }
    }
  }, [location]);
  return (
   <div className='scroll-smooth bg-black'>
    <div className='max-w-6xl mx-auto'>
      <Navbar/>
     <section id="About" className='scroll-mt-20'><About/></section>
      <StarDivider/>
     <section id="Projects" className='scroll-mt-20'><Projects/></section>
       <StarDivider/>
     <section id="Contact" className='scroll-mt-20'><Contact/></section>
    </div>
  </div>
  )
}
