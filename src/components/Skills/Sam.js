import React from 'react';
import { FaCss3Alt, 
    FaHtml5,
    FaBootstrap,
    FaGithub,
    FaGitAlt,
    FaJsSquare,
    FaNode,
    FaReact,
   } from "react-icons/fa";
   import "./sum.css";

const Sam = () => {
  return (
    <div>
        {/* <div className='text-center p-5 text-3xl font-bold'>Skills</div> */}
    <div className='mt-6 sm:px-14 px-10 py-7'>
    <div className=' p-3 gap-10 gap-y-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg '>
      
    <div className='text-center p-5 text-3xl font-bold'>Skills</div>
    <div className="section main">
        
        <div className="techsection">
          <div>
            <FaCss3Alt />
            <h5>css</h5>
            </div>
            <div>
            <FaHtml5 />
            <h3 >css</h3>
            </div>
            <div>
            <FaBootstrap />
            <h5>css</h5>
            </div>
            <div>
            <FaGithub />
            <h5>css</h5>
            </div>
            <div>
            <FaGitAlt />
            <h5>css</h5>
            </div>
            <div>
            <FaReact />
            <h5>css</h5>
            </div>
            <div>
            < FaJsSquare />
            <h5>css</h5>
            </div>
            <div>
            <FaNode />
            <h5>css</h5>
            </div>

            </div>
            </div>
    </div> 
    </div>
   
    </div>
  )
}

export default Sam