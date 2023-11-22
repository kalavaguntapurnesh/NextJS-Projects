import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=' bg-footer text-main'>
     
     <div className="md:w-full md:flex md:flex-wrap
     md:justify-evenly md:mt-10 md:pb-10 md:pt-12 h-[160px]
     ">
        <div>
          <h1 className='md:font-bold font-semibold text-center pt-4 pb-2'>© edukare</h1>
        </div>

        <div className='md:flex md:flex-row md:gap-8 flex flex-row justify-evenly pt-2 pb-2'>
        <h1 className='font-bold cursor-pointer'>About</h1>
        <h1 className='font-bold cursor-pointer'>Contact</h1>
        <h1 className='font-bold cursor-pointer'>Terms</h1>
        <h1 className='font-bold cursor-pointer'>Privacy</h1>
        </div>

        <div className='md:flex md:flex-row md:gap-8 flex flex-row justify-evenly pt-2 pb-2'>
        <FaTwitter className='cursor-pointer' />
        <FaFacebook className='cursor-pointer' />
        <FaInstagram className='cursor-pointer' />
        <FaLinkedin  className='cursor-pointer' />
        </div>

      </div>
    </div>
  )
}

export default Footer