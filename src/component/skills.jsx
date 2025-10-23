import React from 'react'
import {useInView} from 'react-intersection-observer'
import skills from '../data/skill.json'


 function Skills() {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div
    ref={ref}
     className={`text-purple-200 md:py-5 w-90 md:w-full md:max-w-5xl rounded-lg shadow-lg transform transition-all duration-1000 ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
     }`}>
     <p className='text-3xl text-purple-200 font-semibold mb-12 relative z-10'>Skills</p>

     <div className='space-y-6'>
      {skills.map((skills, index) =>(
        <div key={index}>
          <div className='flex justify-between mb-1'>
            <span className='text-lg font-semibold'>{skills.name}</span>
            <span className='text-purple-100 font-semibold'>{skills.level}%</span>
          </div>

          <div className='w-full bg-gray-700 h-3 rounded-full overflow-hidden'>
            <div className='h-3 bg-gradient-to-r from-gray-700 to-purple-500 to-purple-400 transition-all duration-700 ease-in-out'
            style={{ width: inView ? `${skills.level}%` : "0%"}}>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
}
export default Skills
