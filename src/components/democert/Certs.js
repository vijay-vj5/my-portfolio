import React from 'react'
import Conts from './Conts'

const Certs = () => {
  return (
    <div className="container ">
        <div className='mt-6 sm:px-14 px-10 py-7 bg-lime-300 rounded-md shadow-lg'>
      <div className='flex justify-center flex-wrap p-3 gap-10 gap-y-10 bg-[rgba(245,241,236,255)] rounded-lg  drop-shadow-2xl  '>
     
      <div className='grid md:grid-cols-3 gap-5 p-5 space-x-4 justify-center  '>
      {Conts.map((article, index) => (
       <div  key={index}  className="bg-[#37fc1d] w-80 h-64  items-center p-3 flex flex-col rounded-lg relative hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl" >
       <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={article.thumbnail}
                    alt="blog"
                  />
               <h3 className="title-font text-lg font-medium text-gary-900 m-2">
                  {article.title}
               </h3>
            </div>
            // {/* <div  className=" bg-[#37fc1d] w-80 h-64  items-center p-3 flex flex-col rounded-lg relative hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl" >Projects
            // </div>
            // <div  className="bg-[#2ef827] w-80 h-64 items-center p-3 flex flex-col rounded-lg relative hover:scale-110 hover:transition-all transition-shadow drop-shadow-2xl" >Projects
            // </div> */}
           
            
            ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Certs