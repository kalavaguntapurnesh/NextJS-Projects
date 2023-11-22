import React from "react";
import Image from "next/image";
import { SiJirasoftware } from "react-icons/si";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="text-black  mt-20">
      <div className="mt-10 ">
        <h1
          className="md:text-6xl text-4xl font-extrabold  text-main  md:ml-40 md:mr-40 text-center
         "
        >
          Create an SEO work<br></br> that manages itself.
        </h1>
      </div>

      <div className="mt-6 md:block hidden mb-4">
        <p className="md:text-lg text-lg md:ml-40 md:mr-40 text-center text-gray-700">
          Automatically write, publish and rank blog posts on an auto-build SEO
          work, that <br></br>
          bring traffic to your website and grow your online presence.
        </p>
      </div>

      <div className="mt-4 md:hidden">
        <p className="text-lg text-center">
          Automatically write, publish and rank blog posts on an auto-build SEO
          blog, that
          bring traffic to your website and grow your online presence.
        </p>
      </div>

      <div className="mt-6  flex justify-center items-center">
        <button
          type="button"
          className="bg-red-500 mt-2 px-8 py-2.5 text-center
        rounded-[4px] text-white hover:transition hover:duration-150 hover:ease-in-out"
        >
          Get Started &#8594;
        </button>
      </div>

      <div className="mt-10">
        <div className=" flex md:flex-row flex-col justify-evenly">
        <div className="md:flex md:flex-row md:justify-evenly flex flex-row justify-evenly mb-6">
        <SiJirasoftware className = "w-[40px] h-[40px] text-main" />
        <p className=" ml-4 pt-2 text-main">Software Quality Assurance</p>
        </div>
        <div className="md:flex md:flex-row md:justify-evenly flex flex-row justify-evenly mb-6">
        <SiHomeassistantcommunitystore className = "w-[40px] h-[40px] text-main" />
        <p className=" ml-4 pt-2 text-main">Highly Reliable Software</p>
        </div>

        <div className="md:flex md:flex-row md:justify-evenly flex flex-row justify-evenly mb-6">
        <GrTechnology className = "w-[40px] h-[40px] text-main" />
        <p className=" ml-4 pt-2 text-main">Better Automation Volume</p>
        </div>
    
        
        </div>
      </div>
    </div>
    /*  <div className="md:flex md:flex-row flex flex-col h-auto">
      <div className="md:w-1/2 md:pt-28 ">
        
        <h1 className="md:text-5xl md:font-bold md:pl-40 md:leading-16 md:pb-6 md:w-full
        
         text-main md:block hidden">
          Best & Affordable<br></br>Learning Courses
        </h1>
        
        <p className="md:text-lg pl-40 font-semibold md:block hidden pb-6 text-gray-500">
          Buy the best and affordable e-learning courses. We<br></br> are offering 
          the industry ready training at all-time<br></br> better and best prices.
        </p>

        <div className=" pl-40 pb-6">
          <button
            type="button"
            className="bg-red-500 mt-2 px-8 py-2.5 text-center md:block hidden
        rounded-[4px] text-white hover:transition hover:duration-150 hover:ease-in-out"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="md:w-1/2 mt-10">
      <Image src="/4905784.jpg"  alt="img name" width={3000} height={2000} />
      </div>

      

        <div className="md:hidden">
          <h1 className="text-4xl text-center text-main font-bold">Interactive & Affordable Courses</h1>
        </div>

        <div className=" pl-40 pb-6 mt-4">
          <button
            type="button"
            className="bg-red-500 mt-2 px-8 py-2.5 text-center md:hidden block
        rounded-[4px] text-white hover:transition hover:duration-150 hover:ease-in-out"
          >
            Get Started
          </button>
        </div>

    </div>*/
  );
};

export default Hero;
