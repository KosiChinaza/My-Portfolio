import React from 'react'

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center items-center justify-between bg-gradient-to-t from-black via-purple-500 to-black px-6 md:px-10 py-10 max-w-6xl mx-auto">
      {/* Image Section */}
      <img
        src="/PersonalPic.jpg"
        alt="kosy"
        className="w-2/3 sm:w-1/2 md:w-1/3 pt-5 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
      />
      
      {/* Text Section */}
      <div className="flex flex-col w-full md:w-1/2 justify-center text-purple-200 text-center  mt-6 ">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-3xl mb-3 font-sans">
          Hi! I am Kosy
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
          A fun loving and hardworking developer, dive right in to know me more.
        </p>
      </div>
     
    </div>
  )
}

