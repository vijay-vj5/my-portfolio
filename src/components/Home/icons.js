import React from 'react'
import {FaGithubSquare, 
        FaLinkedin,
        FaEnvelopeSquare,
        FaPhoneSquareAlt } from "react-icons/fa";

const Icons = () => {

    const github = () => {
       window.open('https://github.com/vijay-vj5','_blank');
       console.log("Great Shot!");
      }
      const linkedin = () => {
        window.open(' https://www.linkedin.com/in/vijay-rm-2bb141241/','_blank');
        console.log("Great Shotttt!");
       }
       const mail = () => {
        // window.open('https://github.com/vijay-vj5','_blank');
        // window.location.href = mailto;
        window.open('mailto:vijay.rm861@gmail.com','_blank')
        console.log("Great Shot!");
       }
       const mobile = () => {
        window.open('tel:+918019760762','_blank');
        console.log("Great Shot!");
       }
  return (
    <div>
    <div className='flex justify-center space-x-4 p-2 cursor-pointer'>
    <FaGithubSquare className='h-10 w-10' onClick={github} />
    <FaLinkedin className='h-10 w-10' onClick={linkedin }/>
    <FaEnvelopeSquare className='h-10 w-10' onClick={mail}/>
    <div onClick={mobile}>
        <FaPhoneSquareAlt className='h-10 w-10' />
    </div>
   
    </div>
    </div>
  )
}

// https://www.linkedin.com/in/vijay-rm-2bb141241/
export default Icons
