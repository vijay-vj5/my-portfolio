import React from 'react';
import { FcGraduationCap } from "react-icons/fc";
import { FcDownRight } from "react-icons/fc";
import { FaHandPointRight } from "react-icons/fa";
import { ImForward } from "react-icons/im";

const About = () => {
  return (
    <div>
        <div className='mt-6 sm:px-14  rounded-md shadow-xlg h-fit'>
        <div className='p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg  drop-shadow-2xl  '>
     
       <div className='text-center p-5 text-3xl font-bold'>About Me</div>
        <div className='text-center'>
        <p> Adaptable, hard working and highly motivated aspiring full stack developer with a significant amount of coding experience.</p>
        <p></p>
        </div>
        <div className='text-center p-5 text-3xl font-bold'>Education<FcGraduationCap/></div>
        <div className='text-center'>
        <p> Certificated Full-Stack Developer by AlmaBetter.</p>
        <p>(MERN Stack)</p>
        <p></p>
        </div>
        <div className='text-center p-5 text-3xl font-bold'>Things I Can Do</div>
        <div className='text-center'>
        <p> <FcDownRight/>⚡ Building resposive website front end using React-Redux.</p>
        <p> <FaHandPointRight/>⚡Creating applications in backend using Node and Express </p>
        <p><ImForward/>⚡ Building end-to-end applications using MERN Stack.</p>
        <p></p>
        </div>
         </div>
          </div>
        
    </div>
  
  )
}

export default About