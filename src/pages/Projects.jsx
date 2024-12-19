import React from 'react';
import Navbar from '../components/Navbar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {

  useGSAP(() => {
    gsap.from('.headimg', {
      opacity: 0,
      duration: 2

    });


    gsap.from('.headimg h1', {
      opacity: 0,
      duration: "1.8",
      delay: "0.08"

    });

    gsap.from('.scrolltxt2', {
      x: '500',
      opacity: 0,



      scrollTrigger: {
        trigger: ".scrolltxt2",
        start: "top 90%",

        scrub: 2,
      }
    })


    gsap.to('.work', {
      opacity: 1,
      duration: 2,
      delay: 2
    })




    gsap.from('.wallpaper h1', {
      x: "-800",
      opacity: 0,
      duration: 4,
      scrollTrigger: {
        trigger: ".wallpaper h1",
        start: "top 55%",
        end: "top 50%",
        scrub: 2
      }
    })

    //card animations (design)


    gsap.from('.card', {
      duration: 1.2,
      scale: 0.6,
      // ease: "power1.inOut",
      opacity: 0.7,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".packet2",
        start: "top 98%",
        end: "top 55%",

        scrub: 2
      }

    })

    gsap.from('.box', {

      autoAlpha: 0,
      duration: 1,
      y: 90,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".box",
        // markers:true,
        start: "top 80%",
        end: "top 25%",
        scrub: 2

      }


    })


    
    gsap.from('.smallcard1', {

      autoAlpha: 0,
      duration: 1,
      y: 80,
      scale: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".smallcard1",
        // markers:true,
        start: "top 70%",
        end: "top 0%",
        scrub: 2

      }


    })

        
    gsap.from('.smallcard2', {

      autoAlpha: 0,
      duration: 1,
      y: 70,
      scale: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".smallcard2",
        // markers:true,
        start: "top 75%",
        end: "top 0%",
        scrub: 2

      }


    })

    
    gsap.from('.imgs1', {

      autoAlpha: 0,
      duration: 1,
      y: 90,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".imgs1",
        // markers:true,
        start: "top 80%",
        end: "top 25%",
        scrub: 2

      }


    })

    gsap.from('.imgs2', {

      autoAlpha: 0,
      duration: 1,
      y: 90,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".imgs2",
        // markers:true,
        start: "top 80%",
        end: "top 25%",
        scrub: 2

      }


    })

    gsap.to('.scrolltxt3', {
      duration: 1,
      x: 100,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scrolltxt3",
        // markers:true,
        start: "top 55%",
        end: "top 50%",
        scrub: 2

      }


    })





  });

  return (
    <div className='flex flex-col projectbg h-full w-full'>

      <div>
        <Navbar />

        <div className="work headimg w-[1420px] h-[300px] mx-auto rounded-xl overflow-hidden">
          <h1 className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-semibold'>
            Work Showcase
          </h1>
          <img src=" rounded-xl overflow-hidden object-cover/projectbg.jpeg" alt="" />
        </div>





      </div>

      <div className="secondpart text-9xl w-full h-screen">


        {/* scroll animation */}

        <h2 className='text-center font-semibold scrolltxt2 whitespace-nowrap'>Beyond Basics.</h2>

    <div className="wallpaper2 h-screen my-2">


    <div className="showwork h-[1200px] flex flex-wrap gap-10 justify-center items-center py-4 my-0">
      <div className="imgs1 W-[500px] h-[500px] aspect-square rounded-xl overflow-hidden object-cover">
        <img src="/advertise.jpg" alt="" />
      </div>
      <div className="imgs1 W-[500px] h-[500px] aspect-square rounded-xl overflow-hidden object-cover">
        <img src="/burger.png" alt="" />
      </div>
      <div className="imgs2 W-[500px] h-[500px] aspect-square rounded-xl overflow-hidden object-cover">
        <img src="/graphicsCoursepost.png" alt="" />
      </div>
      <div className="imgs2 W-[500px] h-[500px] aspect-square rounded-xl overflow-hidden object-cover">
        <img src="/flyer02_butwal.jpg" alt="" />
      </div>
    </div>

    <h1 className='scrolltxt3 font-semibold flex gap-10'>
      Ideas in Action 
      <div className='w-[120px] h-[120px] rounded-full bg-white overflow-hidden'>
        <video src="/video.mp4" autoPlay loop muted></video>
      </div>
    </h1>



    <div className="wallpaper4small hidden">

<div className="smallcard1 rounded-xl overflow-hidden object-cover">
  <img className='w-[90vw] mx-auto my-4' src="/burger.png" alt="" />
</div>
<div className="smallcard1 rounded-xl overflow-hidden object-cover">
  <img className='w-[90vw] mx-auto my-4' src="/advertise.jpg" alt="" />
</div>
<div className="smallcard2 rounded-xl overflow-hidden object-cover">
  <img className='w-[90vw] mx-auto my-4' src="/graphicsCoursepost.png" alt="" />
</div>
<div className="smallcard2 rounded-xl overflow-hidden object-cover">
  <img className='w-[90vw] mx-auto my-4' src="/flyer02_butwal.jpg" alt="" />
</div>

</div>
    </div>


        {/* for small devices  */}
       

      </div>


      
     

<div className="boxContainer h-screen mt-[800px]">
  
<div className="bigbox py-14  h-[740px] mb-2 flex flex-wrap gap-8 items-center justify-center">
        <div className="box px-6 py-7 w-[300px] h-[280px] border border-white rounded-3xl shadow-lg shadow-sky-300">
          <h1 className='text-9xl mb-4 text-center font-bold text-white'>20+</h1>
          <p className='text-xl text-white text-center text-wrap'>brand designs and event posters.</p>
        </div>
        <div className="box px-6 py-7 w-[300px] h-[280px] border border-white rounded-3xl shadow-lg shadow-sky-300">
          <h1 className='text-9xl mb-2 text-center font-bold text-white'>6</h1>
          <p className='text-xl text-white text-center text-wrap'>brand logo designs including social media pages.</p>
        </div>
        <div className="box px-6 py-7 w-[300px] h-[280px] border border-white rounded-3xl shadow-lg shadow-sky-300">
          <h1 className='text-9xl mb-4 text-center font-bold text-white'>5+</h1>
          <p className='text-xl text-white text-center text-wrap'>live websites on which I have worked as a frontend dev.</p>
        </div>
        <div className='note border-white w-[880px] text-xl text-center px-14 mx-auto py-[18px]'>I've worked on many projects, but I am not indexing them here because they are not public or I don't have the permission to share them.</div>


      </div>
</div>









    </div>
    
  );

};

export default Projects;
