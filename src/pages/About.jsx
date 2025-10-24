import React from 'react'
import Skills from '../component/skills'
import Certification from '../component/certification'
import Experience from '../component/Experience'
import StarDivider from '../component/Reuseable/StarDivider'

 function About() {
  return (
    <div className='overflow-hidden'>
        <div>
           <div className='md:mt-15 mt-5 md:ml-10 px-4 md:px-0 text-white text-center md:text-left'>
               <h2 className='text-purple-100'>Hello! I am   <span className='text-purple-700 text-2xl md:text-3xl sm:text-2xl'>Kosisochukwu Ugwu</span></h2>
           </div>
           <div className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-10 md:gap-20 mt-10 md:mt-15'>
                <div className='flex items-center justify-center shadow-[0_0_30px_#a855f7]  w-80 h-100 md:w-100 rounded-md md:ml-7' >
                    <img src="/personal3.jpg" className='h-85 w-65 rounded-md' alt="kosy's picture" />
                </div>
                <div className='text-purple-100'>
                       <h4 className='md:text-xl text-extralight mb:1 md:mb-5 text-center md-text-start'>A relentless builder</h4>
                       <h3 className='md:mb-5 md:tracking-widest'>With a passion for creating<br/> <span className='block md:mt-2'>and a drive that
                       <span className='relative inline-block align-middle'> 
                        <span className='relative z-10 text-purple-300 md:text-purple-700 px-2 py-2 font-semibold whitespace-nowrap'>never quits</span>
                        <svg className='hidden sm:block absolute inset-0 w-full h-full' viewBox='0 0 218 58' preserveAspectRatio='xMidYMid meet'>
                            <ellipse cx="110" cy="30" rx="140" ry="28" fill="none" stroke="#a855f7" strokeWidth="4" strokeDasharray="700" strokeDashoffset="700">
                                <animate attributeName='stroke-dashoffset' from="700" to="0" dur="1s" fill="freeze"/>
                            </ellipse>
                        </svg> 
                        </span>
                         </span></h3>
                       <h4 className='md:mb-5 text-thin text-xs text-center md-text-star'>hardworking and cool</h4>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center md:mt-25 mt-10 text-purple-100 text-center md:px-40'>
            <p className=' md:w-full'>
                 I’m a passionate Blockchain Developer focused on building secure, efficient, and user-friendly decentralized solutions.
                 I specialize in smart contracts, Web3 integrations, and DeFi applications, with a strong interest in how blockchain can power 
                 the next generation of digital ownership and trust. My work blends clean code, innovation, 
                 and real-world impact, turning complex ideas into seamless decentralized experiences. I am eager to learn and grow and always
                  make positive impact and contribution in any environment I find myself.
            </p>
        </div>
        
        <StarDivider/>
       <div>
            <Skills/>
        </div>
        
          <StarDivider/>

        <div>
            <Experience/>
        </div>

        <StarDivider/>

        <div>
            <Certification/>
        </div>
    </div>

    
  )
}
export default About

//border-4 border-purple-500 rounded-full px-4 py-1 inline-block