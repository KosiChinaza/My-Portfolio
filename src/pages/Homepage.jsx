import React from 'react'
import Navbar from '../component/Reuseable/Navbar'
import Hero from '../component/Hero'
import Footer from '../component/Reuseable/Footer'

 function Homepage() {
  return (
    <div className='relative w-screen min-h-screen overflow-hidden'>
        <video className='absolute top-0 left-0 h-full w-full object-cover -z-10' autoPlay loop muted playsInline>
            <source src= "/BackgroundVideo.mp4" alt="video/mp4"/>
        </video>
      <div className='mx-2 md:mx-0'>
        <Navbar/>
        <Hero/>
        <Footer/>
      </div>
    </div>
  )
}
export default Homepage