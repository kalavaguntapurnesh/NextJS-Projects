import React from 'react'
import Dash from './Dash'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='container pt-40 border-2 border-green-500 '>
     <h2 className='text-6xl font-bold'>Our</h2>
     <h2 className='text-6xl font-bold pt-2'>Featured
      <span className='text-accent'> Food</span></h2>

      <p className='max-w-[550px] pt-10 text-gray-700'>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Suscipit ipsam possimus, 
        delectus provident exercitationem
         placeat inventore quaerat voluptas
          itaque earum sed ducimus adipisci, debitis 
        perspiciatis. Doloremque necessitatibus 
        in cumque consequatur.</p>

        <Dash/>

    <div className='grid md:grid-cols-[1fr, 37%,1fr] gap-16 mt-10'>

        <div className='w-fit mx-auto self-end'>
                <Image className = "w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                src="/grid__1.png" width={300} height={600} alt='grid image' />
        </div>

    </div>

    </div>
  )
}

export default Features
