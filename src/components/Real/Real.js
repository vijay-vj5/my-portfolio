import React from 'react'
import './Real.css'
import Reel from './Reel'

const Real = () => {
  return (
    <div>
         
          <div className='mt-6 sm:px-14 px-10 py-7 '>
      <div className=' p-3 gap-10 gap-y-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg  drop-shadow-2xl  '>
      <div className='text-center p-5 text-3xl font-bold'>Projects</div>
     <div className='m-5 flex justify-center flex-wrap'>
        
      <div className='grid md:grid-cols-3 space-x-10 space-x-reverse gap-5 p-3 px-0  '>
      {Reel.map((article, index) => (
       <div  key={index} className=" hel bg-[#37fc1d] w-64 h-64 items-center  flex flex-col rounded-lg relative hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl" >
            <img className="h-48 w-full object-cover object-center rounded-2xl"
                    src={article.thumbnail}
                    alt="blog"
                    onClick={article.url}
                  />
               <h3 className=" p-2 title-font text-lg font-medium text-gary-900 m-2">
                  {article.title}
               </h3>
             
            </div>
           ))}
      </div>
      </div>
      </div>
      </div>

{/* <div className='mt-6 sm:px-14 px-10 py-7 bg-lime-300 rounded-md shadow-lg'>
    <div className='flex justify-around p-3 gap-10 gap-y-10 bg-[rgba(245,241,236,255)] rounded-lg '>
    <div className='grid md:grid-cols-3 space-x-10 space-x-reverse gap-5 p-3 px-0  '>
      {Reel.map((article, index) => (
       <div  key={index} className=" hel bg-[#37fc1d] w-64 h-64 items-center  flex flex-col rounded-lg relative hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl" >
            <img className="h-48 w-full object-cover object-center rounded-2xl"
                    src={article.thumbnail}
                    alt="blog"
                  />
               <h3 className=" p-2 title-font text-lg font-medium text-gary-900 m-2">
                  {article.title}
               </h3>
             
            </div>
           ))}
      </div>  
    </div>
    </div> */}

    </div>
  )
}

export default Real