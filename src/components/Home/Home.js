import React from 'react'
import Icons from './icons'


const Home = () => {
  return (
    <div>
      
        <div className='mt-6 sm:px-14  rounded-md shadow-xlg'>
        <div className='p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg  drop-shadow-2xl  '>
            {/* <div className='justify-center'>
   <h1 className='text-3xl font-bold px-4 mb-6'>Hi, I'm </h1>
   <div className='text-3xl font-bold px-4 mb-6'> Vijay R M</div>
            </div> */}
           
              <div className='relative w-fit mt-10 mx-auto bg-lime-300 overflow-hidden rounded-full'>
             
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjU7hHRYYTgEpnNIODZMVEDqwa_0NYBaLV4w&usqp=CAU' alt='sssss' 
           layout="fill" object-to-fit="cover"/>

              </div>
              <div className='text-center p-7'>
                <h2 className='text-5xl font-bold py-2'>Vijay R M</h2>
                <h3 className='text-2xl py-2'>Full Stack Web Developer</h3>
                <p className='text-md text-gray-800'>Based in India.</p>
                <Icons/>
              </div>
            </div>
            
            </div>
           
    </div>
  )
}

export default Home