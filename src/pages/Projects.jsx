import React from 'react'
import {useInView} from 'react-intersection-observer'

 function Projects() {
    const {ref, inView} = useInView({
      triggerOnce: true,
      threshold: 0.2,
    }); 

  return (
        <section
      ref={ref}
      className={`min-h-screen flex flex-col mt-30 py-6 bg-[#0b031a] px-6 relative text-purple-100  transition-all duration-1000 ease-out [background-image:linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),radial-gradient(circle_at_center,#3b0066,#0a0010)] [background-size:40px_40px,40px_40px,100%_100%] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
     
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[400px] bg-purple-600/40 blur-[200px] rounded-full"></div>
      </div>
      <div className='flex justify-between'>
          <h1 className="text-3xl text-purple-300 font-semibold mb-12 relative z-10">Projects</h1>
      </div>
      <div className={`bg-gradient-to-br from-[#1c0f2e] to-[#24103d] mt-5 h-full md:w-130 rounded-2xl shadow-lg p-6 transform transition-all duration-1000 ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
       }`}>
        <div className='flex gap-2  justify-center text-purple-200 text-center items-center'>
            <img src="/project1.png" className='h-40 md:w-80 w-55' alt="Blockchain Project" />
            <h3>Time-Locked Inheritance Project</h3>
        </div>
      </div>

      <div className={`bg-gradient-to-br from-[#1c0f2e] to-[#24103d] flex ml-auto mt-5 h-full md:w-130 rounded-2xl shadow-lg p-6 transform transition-all duration-1000 ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
       }`}>
        <div className='flex gap-2 justify-center text-purple-200 text-center items-center'>
            <img src="/project2.png" className='h-40 md:w-90 w-55' alt="Blockchain Project" />
            <h3>Hedera African Hackathon Project</h3>
        </div>
      </div>

      <div className={`bg-gradient-to-br from-[#1c0f2e] to-[#24103d] mt-5 h-full md:w-130 rounded-2xl shadow-lg p-6 transform transition-all duration-1000 ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
       }`}>
        <div className='flex gap-2 justify-center text-center  text-purple-200 items-center'>
            <img src="/project3.png" className='h-40 md:w-100 w-55' alt="React Project" />
            <h3>React Project</h3>
        </div>
      </div>
      
     
      </section>
  )
}
export default Projects




