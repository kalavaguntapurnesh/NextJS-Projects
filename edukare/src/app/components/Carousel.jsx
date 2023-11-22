import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="text-black">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <h1 className=" md:text-4xl text-4xl pt-4 text-main font-bold text-center">
            Our Services
          </h1>
          <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
      </div>

      <div className="w-full h-auto mt-auto">
        <div className="md:flex md:w-full">
          <div className="md:w-1/2 w-full">
          <Image src="/5995729.jpg"  alt="img name"
           width={3000} height={2000} className="mt-2 rounded-2xl md:w-2/3 md:ml-24 w-full" />
          </div>

          <div className="md:flex md:flex-col md:w-1/2 flex justify-center
           items-center flex-col">
            <h1 className="md:text-4xl text-4xl md:ml-5 font-semibold
            md:mr-5 md:mb-5 md:mt-16 
             text-main">
              Under, right, sector!
            </h1>
            <p className="md:ml-5 md:mt-2 text-lg
             text-gray-600 mt-6">
              Maybe not too simple, but one that offers enough<br></br>
              formatting choices and a convenient method to<br></br>
              upload images. Our editor supports these features<br></br>
              and more, making it effortless to publish your<br></br>
              content wherever you are.
            </p>
            <div className="pt-4">
              <button
                type="button"
                className="bg-red-500 mt-2 px-8 py-2.5 text-center 
        rounded-[4px] text-white hover:transition hover:duration-150 hover:ease-in-out">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex md:w-full mt-6 ">
          <div className="md:w-1/2 pt-20 md:pl-20 
          w-full flex flex-col justify-center items-center">
            <h1 className="md:text-4xl text-4xl font-semibold
            md:ml-8 mt-4 text-main ">Affordable content</h1>
            <p className="text-lg text-center md:ml-8 mt-4 md:text-gray-600  text-gray-600 ">
              Whenever you release new features, let your changelog<br></br>
               subscribers know about them (but dont do it  Fridays,<br></br> 
                please). Bring your  update straight to their email<br></br>
               and use straightforward language, images, and<br></br>
               emoticons to get them excited.
              
            </p>
            <div className="pt-4">
              <button
                type="button"
                className="bg-red-500 mt-2 px-8 py-2.5 text-center 
        rounded-[4px] text-white hover:transition hover:duration-150 hover:ease-in-out">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex flex-col md:w-1/2 ">
          <Image src="/5340737.jpg"  alt="img name"
           width={3000} height={2000} className="mt-2 rounded-2xl md:w-2/3 md:ml-24 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
