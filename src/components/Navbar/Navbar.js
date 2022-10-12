import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
    <div>
        {/* <div className='mt-6 sm:px-14 px-10 py-7 bg-lime-300 rounded-md shadow-lg'> */}
          {/* <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"> */}
    {/* <div className="container flex flex-wrap justify-between items-center mx-auto"> */}
    
    {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default"> */}
   
      <ul className="flex flex-col justify-end pb-4 md:flex-row md:space-x-8 md:mt-5 md:text-md md:font-medium rounded-md shadow-lg">
        <li>
          <a href="#" className="">
            <Link to='/'>Home
            </Link>
           </a>
        </li>
        <li>
          <a href="#" className="">
          <Link to='/about'>About
            </Link></a>
        </li>
        <li>
          <a href="#" className="">
          <Link to='/skills'>Skills
            </Link>
            </a>
        </li>
        <li>
          <a href="#" className="">
          <Link to='/projects'>Projects
            </Link></a>
        </li>
        <li>
          <a href="#" className="" >
          <Link to='/contacts'>Contact
            </Link></a>
        </li>
      </ul>
  
  {/* </div> */}
{/* </nav> */}
{/* </div> */}
           
    </div>
  )
}

export default Navbar



{/* <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a> */}

{/* <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a> */}