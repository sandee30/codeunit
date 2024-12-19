import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";





const Navbar = () => {

  useGSAP(()=> {
    gsap.from('.navbar',{
      y:'-18',
      opacity:0,
      duration: '1.4'
    })

  })

  return (
    <>

    <nav className='navbar sticky left-1/2 -translate-x-1/2 z-10 top-6 rounded-3xl flex justify-center items-center w-[400px] py-6 text-2xl shadow-2xl'>
    <ul className='flex justify-center items-center gap-10 '>
       <Link to="/"> <li className='hover:cursor-pointer'> Home</li> </Link>
       <Link to="/projects" > <li className='hover:cursor-pointer'>Projects</li> </Link>
       <Link to="/about" > <li className='hover:cursor-pointer'>About</li> </Link>
    </ul>
    </nav>

    
        
    </>
  )
}

export default Navbar