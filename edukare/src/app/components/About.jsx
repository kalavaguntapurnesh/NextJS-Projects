import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div>
      <div className="w-full h-auto flex flex-wrap flex-col items-center mt-8">
        <h1 className=" md:text-4xl text-4xl pt-4 text-main font-bold text-center">
          Our Mission
        </h1>
        <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
        <p className="md:text-lg md:text-center md:ml-40 md:mr-40 mt-8  text-center text-gray-700
        font-semibold ml-10 mr-10">
          Our goal is to make education and experiential skills affordable and
          accessible to everyone regardless of their disparate economic and
          educational backgrounds. We empower students to make demands unlike
          any other platform or institute because curiosity cannot be contained.
          Learning cannot be boxed in a book. So let’s step ahead and ‘build
          together’.
        </p>
      </div>
      <div className="mt-8 flex justify-center items-center ">
       {/*  <img src={mission} className="md:w-1/4 h-[360px]" alt="" />  */}
        <Image src="/mission.jpg" alt="Picture of the author"
        width="200"
        height="200" className='md:w-1/4 w-full h-[360px]' />
        
      </div>

      <div className="w-full h-auto flex flex-wrap flex-col items-center mt-8">
        <h1 className=" md:text-4xl text-4xl pt-4 text-main font-bold text-center">
          Our Vision
        </h1>
        <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
      </div>

      <div>
        <div className="md:flex md:flex-row md:pt-10">
          <div className="flex flex-row md:w-1/2 md:pl-20">
            <div>
              {/* <img src={serviceOne} alt="" /> */}
              <Image src="/service-1.png"  alt="img name" width={128} height={129} />

            </div>
            <div className="pt-8">
              <p className="font-bold text-lg md:text-xl text-main">
                Affordable online courses
              </p>
              <p className="font-semibold text-gray-600 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>

          <div className="flex flex-row md:w-1/2 md:pl-10">
            <div>
              {/*<img src={serviceTwo} alt="" />*/}
              <Image src="/service-2.png"  alt="img name" width={128} height={129} />
            </div>
            <div className=" pt-8">
              <p className="font-bold text-lg md:text-xl text-main">
              Best in Class/Industry Mentors
              </p>
              <p className="font-semibold text-gray-600 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row">
          <div className="flex flex-row md:w-1/2 md:pl-20">
            <div>
              {/*<img src={serviceThree} alt="" />*/}
              <Image src="/service-4.png"  alt="img name" width={128} height={129} />
            </div>
            <div className=" pt-8">
              <p className="font-bold text-lg md:text-xl text-main">
              Job Guarantee Programs
              </p>
              <p className="font-semibold text-gray-600 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>
          <div className="flex flex-row md:w-1/2 md:pl-10">
            <div>
              {/*<img src={serviceFour} alt="" />*/}
              <Image src="/service-6.png"  alt="img name" width={128} height={129} />
            </div>
            <div className=" pt-8">
              <p className="font-bold text-lg md:text-xl text-main">
                Internship Portal
              </p>
              <p className="font-semibold text-gray-600 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row ">
          <div className="flex flex-row md:w-1/2 md:pl-20">
            <div>
              {/*<img src={serviceFive} alt="" />*/}
              <Image src="/service-7.png"  alt="img name" width={128} height={129} />
            </div>
            <div className=" pt-8">
              <p className="font-bold text-lg md:text-xl text-main">
              On-Demand Courses
              </p>
              <p className="font-semibold text-gray-600 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>
          <div className="flex flex-row md:w-1/2 md:pl-10 mb-10">
            <div>
              {/*<img src={serviceSix} alt="" />*/}
              <Image src="/service-8.png"  alt="img name" width={128} height={129} />
            </div>
            <div className=" pt-8">
              <p className="font-bold text-lg md:text-xl text-main">
              Innovation for Tech products
              </p>
              <p className="font-semibold text-gray-600 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
