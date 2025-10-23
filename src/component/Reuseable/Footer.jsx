import React from 'react'
import {FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaTelegram} from 'react-icons/fa';

 function Footer() {
  return (
    <footer className='text-purple-200 md:mx-15 py-6 md:px-10 bg-black'>
      <div className=''>
        <div className='flex justify-center  md:justify-start'>
            <p>Connect with me</p>
        </div>
        <div className='md:flex  justify-between py-4'>
          <div className=' flex justify-center md:justify-start space-x-6 text-3xl'>
            <a href='https://github.com/KosiChinaza'
            target='_blank'
            rel='noopener noreferrer'
            className=''>
                <FaGithub/>
            </a>

            <a href='https://www.linkedin.com/in/kosisochukwu-ugwu-4b2503275'
            target='_blank'
            rel='noopener noreferrer'
            className=''>
                <FaLinkedin/>
            </a>

            <a href='https://x.com/kosiee2'
            target='_blank'
            rel='noopener noreferrer'
            className=''>
                <FaTwitter/>
            </a>

            <a href='https://discord.com/users/1256981739130060841'
            target='_blank'
            rel='noopener noreferrer'
            className=''>
                <FaDiscord/>
            </a>

            <a href='https://t.me/DefiGirl_Siso'
            target='_blank'
            rel='noopener noreferrer'
            className=''>
                <FaTelegram/>
            </a>
          </div>
          <div className="hidden md:block text-base mt-4 flex justify-end">
            < p>
                 &copy; {new Date().getFullYear()} UGWU KOSISOCHUKWU. ALL RIGHTS RESERVED.
              </p>
          </div>

          <div className='md:hidden text-sm md:text-base md:mt-0 mt-4 flex justify-center md:justify-end'>
            <p>&copy; {new Date().getFullYear()} Ugwu Kosisochukwu. All Right Reserved.  </p>
          </div>
      </div>
      </div>
    </footer>
  )
}
export default Footer

//Ugwu Kosisochukwu. All Right Reserved.