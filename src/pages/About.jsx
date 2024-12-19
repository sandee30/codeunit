import React from 'react'
import Navbar from '../components/Navbar'
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {

  useGSAP(()=> {
    gsap.from('.about-lft', {
      y: '100',
      duration: '1.02',
      opacity: 0
    })

    gsap.from('.pic', {
      opacity: 0,
      scale: 0.6,
      duration: 1.1,
    })

    gsap.from('.btn', {
      opacity: 0,
      y: "100",
      duration: 1.2,
    })


   
 
  })

  return (
    <>
    
  
  <div className='about px-12'>
  <Navbar />

    <div className="info flex gap-40">

    <div className="about-lft w-1/2 flex flex-col items-center justify-center">
    <div className="intro w-full h-[280px] border border-2-white shadow-xl rounded-xl mt-8 p-12 text-center">
      <h1 className='text-6xl font-medium mb-5'>Hi, I'm Sandeep Pandey</h1>
      <h3 className='text-xl'>a passionate Graphic Designer and a Web Developer</h3>
      <h5 className='text-xl'>blending design with code to create sleek, responsive websites.</h5>
    </div>
    <div className="skillset w-full border border-2-white rounded-xl mt-6 mx-auto">
      <h1 className='text-3xl  font-medium text-center mt-2'>Skills:</h1>
      <ul className='skillbtn-grp flex items-center justify-center flex-wrap gap-4 m-4'>
        <li className='skillbtn border border-1-white w-[150px] rounded-lg flex items-center justify-center p-2 text-lg'>Graphics</li>
        <li className='skillbtn border border-1-white w-[150px] rounded-lg flex items-center justify-center p-2 text-lg'>UI/UX</li>
        <li className='skillbtn border border-1-white w-[150px] rounded-lg flex items-center justify-center p-2 text-lg'>Javascript</li>
        <li className='skillbtn border border-1-white w-[150px] rounded-lg flex items-center justify-center p-2 text-lg'>React</li>
        <li className='skillbtn border border-1-white w-[150px] rounded-lg flex items-center justify-center p-2 text-lg'>Typescript</li>

      </ul>
    </div>

    <div className="intro connect text-4xl flex items-center justify-center gap-6 mt-6">
    <a href="https://www.facebook.com/profile.php?id=61552173424422&mibextid=JRoKGi" target='blank'><FaFacebook style={{
            fontSize: '36px',
      cursor: 'pointer'
    }}/>
    </a>

    <a href="https://www.instagram.com/sndp.pandey.30?igsh=bHk4OHZxNXp6b3Jv" target='blank'>
    <RiInstagramFill  style={{
      fontSize: '40px',
      cursor: 'pointer'
    }} />
    </a>



   <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sandeep.of.30@gmail.com" target='blank'>
    <RiMailFill style={{
      fontSize: '40px',
      cursor: 'pointer'
    }} />
    </a>

    </div>
    <p className='text-[gray] flex items-center gap-2 text-md justify-center mt-4'><FaRegCopyright /> 2024 Sandeep Pandey. All rights reserved.</p>



    </div>

    <div className="about-right">
      <div className='pic w-[460px] h-[460px] rounded-full overflow-hidden object-cover mt-3'>
        <img src="./public/me.jpg" alt="" />
       
      </div>
      <div className='btn text-center border border-white text-xl font-light py-2 mx-auto mt-6 w-[120px] rounded-xl'>Resume</div>

    </div>

    </div>



  </div>




    </>
  )
}

export default About