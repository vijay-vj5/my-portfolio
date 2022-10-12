import React from 'react'
import {FaGithubSquare, 
        FaLinkedin,
        FaEnvelopeSquare,
        FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
         
    <div className='mt-6  sm:px-14 px-10 py-7'>
    <div className=' p-3 gap-10 gap-y-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg '>
    <div className='text-center p-5 text-3xl font-bold'>Contact Me</div>
    <div className='text-center p-5 text-2xl font-bold'>
        <p>If you have any questions Reach me on </p>
    </div>
    <div className='flex justify-center space-x-8 p-5'>
    <FaGithubSquare className='h-10 w-10'/>
    <FaLinkedin className='h-10 w-10'/>
    <FaEnvelopeSquare className='h-10 w-10'/>
    <FaPhoneSquareAlt className='h-10 w-10'/>

    </div>
    <div className='text-center p-5 text-xl font-bold'>
        <p>+91 8019760762</p>
        <p>vijay.rm861@gmail.com</p>
       
        <button className="mt-5 bg-amber-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Button Button Button
</button>
    </div> 
    <div>
      </div>
    </div> 
    </div>
   
    </div>
  )
}

export default Contact