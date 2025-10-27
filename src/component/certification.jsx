import React from 'react'
import { useInView } from 'react-intersection-observer'

 export default function Certification() {
   const { ref, inView } = useInView({
     triggerOnce: true, 
     threshold: 0.2, 
   });

   return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col py-6 bg-[#0b031a] px-6 relative text-purple-100  transition-all duration-1000 ease-out [background-image:linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),radial-gradient(circle_at_center,#3b0066,#0a0010)] [background-size:40px_40px,40px_40px,100%_100%] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
     
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[400px] bg-purple-600/40 blur-[200px] rounded-full"></div>
      </div>

      <h1 className="text-3xl text-purple-300 font-semibold px-5 mb-12 relative z-10">Certification</h1>

      <div className={`bg-gradient-to-br from-[#1c0f2e] to-[#24103d] h-full rounded-2xl shadow-lg p-6 transform transition-all duration-1000 ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
       }`}>
        <div className='flex flex-col items-center gap-20 text-3xl font-bold text-purple-200 items-center '>
           <h2>Hedera Certificate</h2>
           <img src="/certificate.png" className="h-70 pb-6" alt="Certificate Photograph" />
           <a href='/HederaCertificate.pdf' target='blank' rel='noopener noreferrer' className='flex h-10 w-full justify-center rounded-md text-2xl font-semibold text-purple-100 hover:px-2 hover:py-2 hover:rounded-xl hover:shadow-[0_0_20px_#a855f7] hover:text-purple-200 hover:bg-black'>View Full Certificate</a>
        </div>
        
      </div>
      </section>
   );
  }