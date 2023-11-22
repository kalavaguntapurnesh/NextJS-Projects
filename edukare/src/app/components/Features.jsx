import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div>
     <div className="w-full h-auto flex flex-wrap flex-col items-center mt-8">
          <h1 className=" md:text-4xl text-4xl pt-4 text-main font-bold text-center">
            Our Features
          </h1>
          <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
          <p className=' text-lg text-center ml-20 mr-20 mt-8 text-gray-900'>Our features include various present or to be included inside an app in order to make the interaction and user experience better. This process is very thoughtful and helps keeping up the validation of new features for a web page. At the same time, it also determines the most successful variation of features. For keeping up with upcoming changes in this competitive tech industry, organization keeps adding new features to improve functionality and their product in order to increase the demand.</p>
      </div>

<div className="w-full flex flex-wrap justify-evenly mt-2 pb-10 pt-10 md:pl-28 md:pr-28 ">

<div className="relative flex flex-col text-gray-700 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-96 rounded-xl bg-clip-border mt-8">
    <div className="relative h-56 overflow-hidden text-white md:ml-4 md:mr-4 md:mt-4
    shadow-xl rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
       <Image src="/8058227.jpg"  alt="img name"
           width={5118} height={3405}  />
    </div>
    <div className="p-6">
      <h5 className="block mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-main">
        Test Management & Planning
      </h5>
      <p className="block text-base antialiased font-medium leading-relaxed text-inherit">
      A good test management and planning solution will have a track development system and test and quality readiness tracker.
      </p>
      
    </div>
    <div className="p-6 pt-0">
      <button
        className="select-none rounded-lg bg-main py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        
      >
        Read More
      </button>
    </div>
  </div>

  <div className="relative flex flex-col text-gray-700 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-96 rounded-xl bg-clip-border mt-8">
    <div className="relative h-56 overflow-hidden text-white md:ml-4 md:mr-4 md:mt-4
    shadow-xl rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
     <Image src="/3937434.jpg"  alt="img name"
           width={5118} height={3405}  />
      
    </div>
    <div className="p-6">
      <h5 className="block mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-main">
        Automation Testing
      </h5>
      <p className="block text-base antialiased font-medium leading-relaxed text-inherit">
      Part of an automation testing tools list should include integration tests, smoke tests for build stability checking, API tests.
      </p>
      
    </div>
    <div className="p-6 pt-0">
      <button
        className="select-none rounded-lg bg-main py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        
      >
        Read More
      </button>
    </div>
  </div>
  <div className="relative flex flex-col text-gray-700 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-96 rounded-xl bg-clip-border mt-8">
    <div className="relative h-56 overflow-hidden text-white md:ml-4 md:mr-4 md:mt-4
    shadow-xl rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
       <Image src="/4905827.jpg"  alt="img name"
           width={5118} height={3405}  />
      
    </div>
    <div className="p-6">
      <h5 className="block mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-main">
        Quality Assurance
      </h5>
      <p className="block text-base antialiased font-medium leading-relaxed text-inherit">
      Quality Assurance helps provide diagnoses on complex errors, giving high-accuracy insights into errors that might arise during testing.
      </p>
      
    </div>
    <div className="p-6 pt-0">
      <button
        className="select-none rounded-lg bg-main py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        
      >
        Read More
      </button>
    </div>
  </div>

  
</div>
      
    </div>
  )
}

export default Features
