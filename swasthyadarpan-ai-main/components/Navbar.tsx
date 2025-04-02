import React from 'react'

function Navbar() {
  return (
    <nav className="overflow-hidden w-full flex justify-between items-center p-6 shadow-md">
       <h1 className="text-2xl font-bold text-black">Med<span className="text-blue-500">Kit</span></h1>
        <div className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-black">Features</a>
            <a href="#" className="text-gray-700 hover:text-black">Forum</a>
            <a href="#" className="text-gray-700 hover:text-black">More</a>
        </div>
    
        <div className="border relative">
            <div  id='loginbtnbox'  className='h-full w-14 absolute bg-blue-600 left-1/2 -translate-x-1/2'>

            </div>
            <button className="border w-24 py-2 pl-3   rounded-lg text-left">Login</button>
            <button className="bg-blue-500 text-white w-28 py-2 pr-3 rounded-lg text-right ">Sign Up</button>
        </div>        
      
      
      </nav>

  )
}

export default Navbar