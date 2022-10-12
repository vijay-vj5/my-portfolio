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
 import { SiTailwindcss, SiExpress } from "react-icons/si";



const Skills = () => {
  return (
    <div>
        <div className='text-center p-5 text-3xl font-bold'>Skills & Certifications</div>
        <div className='mt-6 sm:px-14 px-10 py-7 bg-lime-300 rounded-md shadow-lg'>
        <div className='text-center p-5 text-3xl font-bold'>Skills</div>
        <div>
        {/* <div className="main flex justify-start flex-wrap p-3 gap-20 gap-y-10 bg-[rgba(245,241,236,255)] pt-10 relative w-5/5 pl-0 md:justify-center">
        <div className="bg-[#fff] w-56 h-62  items-start p-3 flex flex-col rounded-lg relative hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl">
        <div className='h-20 w-20'>
        <FaCss3Alt/>
        </div>

        </div>
      
        
        </div> */}
        <div className='flex justify-start flex-wrap p-3 gap-10 gap-y-10 bg-[rgba(245,241,236,255)] rounded-lg hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl  '>
          
        <FaCss3Alt className='h-24 w-24'/>
        <FaHtml5 className='h-24 w-24'/>
        <FaBootstrap className='h-24 w-24'/> 
        <FaGithub className='h-24 w-24'/>
        <FaGitAlt className='h-24 w-24'/>
        <FaJsSquare className='h-24 w-24'/> 
        <FaNode className='h-24 w-24'/>
        <FaReact className='h-24 w-24'/>
        <SiTailwindcss className='h-24 w-24'/> 
        <SiExpress className='h-24 w-24'/>
       
        
        </div>
        

        </div>
       
        </div>
        <div className='flex justify-start flex-wrap p-3 gap-10 gap-y-10 bg-[#ffb050] hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl '>
          
        <FaCss3Alt className='h-24 w-24'/>
        <FaHtml5 className='h-24 w-24'/>
        <FaBootstrap className='h-24 w-24'/> 
        <FaGithub className='h-24 w-24'/>
        <FaGitAlt className='h-24 w-24'/>
        <FaJsSquare className='h-24 w-24'/> 
        <FaNode className='h-24 w-24'/>
        <FaReact className='h-24 w-24'/>
        <SiTailwindcss className='h-24 w-24'/> 
        <SiExpress className='h-24 w-24'/>
        
        </div>
        <div className=''>
        <FaCss3Alt className='h-24 w-24'/>
        </div>
    </div>
  )
}

export default Skills


//  <div className="grid md:grid-cols-3 gap-5 justify-center">
//                 {state.map((ele, index) => {
//                     return ( 
//                         index < cardHandle?
//                     <div key={index} className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
//                         <div className="">
//                             <div className="">
//                                 <div className='grid md:grid-cols-12 font-medium'>
//                                     <div className="col-span-3"><div className='cardImg mr-4'></div></div>
//                                     <div className="col-span-9"><div className=''>
//                                         <h3 className='text-black font-bold'>{ele.group.groupName}</h3>
//                                         <small>Card {ele.state.length}</small>
//                                     </div></div>
//                                 </div>
//                                 <p className='md:col-span-12 text-sm text-gray-500'>
//                                     {ele.group.description}
//                                 </p> 


// {/* <div className="bg-[rgba(245,241,236,255)] h-screen">
//       <MyFlashcardHeader />

//       <div className="w-full bg-[rgba(245,241,236,255)] flex justify-center">
//         <div className="main flex justify-start flex-wrap p-3 gap-20 gap-y-10 bg-[rgba(245,241,236,255)] pt-10 relative w-4/5 pl-0 md:justify-center">
//           {flashData !== null ? (
//             flashData.map((card, i) => (
//               <div
//                 key={i}
//                 className="bg-[#fff] w-56 h-62  items-center p-3 flex flex-col rounded-lg relative hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl"
//               >
//                 {image ? (
//                   <div className="w-14 h-14  rounded-full absolute -top-6"></div> */}