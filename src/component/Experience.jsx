import React from 'react'
import { useInView } from "react-intersection-observer";



export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });
   const cardsData = [
  {
    img: "/NupatLogo.png" ,
    description:"Blockchain Developer Intern",
  },
  {
    img: "/ChakraLogo.png",
    description: "Community Moderator",
  },
  
]
  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col justify-center bg-[#0b031a] px-6 relative text-white  transition-all duration-1000 ease-out [background-image:linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),radial-gradient(circle_at_center,#3b0066,#0a0010)] [background-size:40px_40px,40px_40px,100%_100%] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center ">
        <div className="w-[600px] h-[600px] bg-purple-600/40 blur-[200px] rounded-full"></div>
      </div>

      <h1 className="text-3xl px-5 text-purple-200 font-semibold mb-12 relative z-10">Work Experience</h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 relative px-5 z-10 w-full max-w-5xl">
       {cardsData.map((card, i) => (
    <div
      key={i}
      style={{ transitionDelay: `${i * 150}ms` }}
      className={`bg-gradient-to-br from-[#1c0f2e] to-[#24103d] rounded-2xl shadow-lg p-6 transform transition-all duration-1000 ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      }`}
    >
      
      <div className='flex items-center justify-center h-30 '>
        <img
          src={card.img}
          alt={card.description}
          className=" h-20 object-contain rounded-full "
        />
      </div>

      
      <div>
        <p className="text-purple-200 text-2xl text-center font-semibold px-3">{card.description}</p>
        
      </div>
    </div>
  ))}
</div>
 </section>
  );
}


 

 