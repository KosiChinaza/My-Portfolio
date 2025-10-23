import React from 'react'

 function StarDivider() {
  return (
    <div className='flex justify-center my-25'>
        <svg
        xmlns="http://www.w3.org/200/svg"
        viewBox='0 0 100 100'
        className='w-10 h-10 fill-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse'>
            <path d="M50 0 C45 25 25 45 0 50 C25 55 45 75 50 100 C55 75 75 55 100 50 C75 45 55 25 50 0 Z"/>
        </svg>
    </div>
  )
}
export default StarDivider;